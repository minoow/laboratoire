"use strict";
(self["webpackChunkls"] = self["webpackChunkls"] || []).push([[57],{

/***/ 655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createCache)
});

;// CONCATENATED MODULE: ./node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment = false;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here


  return undefined;
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;

      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();



;// CONCATENATED MODULE: ./node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var Utility_assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return Utility_charat(value, 0) ^ 45 ? (((((((length << 2) ^ Utility_charat(value, 0)) << 2) ^ Utility_charat(value, 1)) << 2) ^ Utility_charat(value, 2)) << 2) ^ Utility_charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function Utility_match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function Utility_replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function Utility_charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function Utility_substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function Utility_strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function Utility_sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function Utility_combine (array, callback) {
	return array.map(callback).join('')
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Tokenizer.js


var line = 1
var column = 1
var Tokenizer_length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function Tokenizer_copy (root, props) {
	return Utility_assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function Tokenizer_char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? Utility_charat(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < Tokenizer_length ? Utility_charat(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return Utility_charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return Utility_substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, Tokenizer_length = Utility_strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function Tokenizer_tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + Utility_from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Enum.js
var Enum_MS = '-ms-'
var Enum_MOZ = '-moz-'
var Enum_WEBKIT = '-webkit-'

var COMMENT = 'comm'
var Enum_RULESET = 'rule'
var Enum_DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var Enum_KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'

;// CONCATENATED MODULE: ./node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function Serializer_serialize (children, callback) {
	var output = ''
	var length = Utility_sizeof(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case Enum_DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case Enum_KEYFRAMES: return element.return = element.value + '{' + Serializer_serialize(element.children, callback) + '}'
		case Enum_RULESET: element.value = element.props.join(',')
	}

	return Utility_strlen(children = Serializer_serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Middleware.js






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = Utility_sizeof(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children)
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(element.props, function (value) {
							switch (match(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return serialize([copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return serialize([
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}),
										copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && Utility_charat(characters, length - 1) == 58) {
					if (indexof(characters += Utility_replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous)
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7)
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						Utility_append(comment(commenter(next(), caret()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = Utility_strlen(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = Utility_replace(characters, /\f/g, '')
						if (property > 0 && (Utility_strlen(characters) - length))
							Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(Utility_replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && Utility_charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + Utility_strlen(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += Utility_from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = (Utility_strlen(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next())

						atrule = peek(), offset = length = Utility_strlen(type = characters += identifier(caret())), character++
						break
					// -
					case 45:
						if (previous === 45 && Utility_strlen(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = Utility_sizeof(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = Utility_substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : Utility_replace(y, /&\f/g, rule[x])))
				props[k++] = z

	return node(value, root, parent, offset === 0 ? Enum_RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), Utility_substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, Enum_DECLARATION, Utility_substr(value, 0, length), Utility_substr(value, length + 1, -1), length)
}

;// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js





var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Utility_from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function emotion_cache_browser_esm_prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return Enum_WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Enum_WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Enum_WEBKIT + value + Enum_MOZ + value + Enum_MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return Enum_WEBKIT + value + Enum_MS + value + value;
    // order

    case 6165:
      return Enum_WEBKIT + value + Enum_MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return Enum_WEBKIT + value + Utility_replace(value, /(\w+).+(:[^]+)/, Enum_WEBKIT + 'box-$1$2' + Enum_MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return Enum_WEBKIT + value + Enum_MS + 'flex-item-' + Utility_replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return Enum_WEBKIT + value + Enum_MS + 'flex-line-pack' + Utility_replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return Enum_WEBKIT + 'box-' + Utility_replace(value, '-grow', '') + Enum_WEBKIT + value + Enum_MS + Utility_replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return Enum_WEBKIT + Utility_replace(value, /([^-])(transform)/g, '$1' + Enum_WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return Utility_replace(Utility_replace(Utility_replace(value, /(zoom-|grab)/, Enum_WEBKIT + '$1'), /(image-set)/, Enum_WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return Utility_replace(value, /(image-set\([^]*)/, Enum_WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return Utility_replace(Utility_replace(value, /(.+:)(flex-)?(.*)/, Enum_WEBKIT + 'box-pack:$3' + Enum_MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + Enum_WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Utility_replace(value, /(.+)-inline(.+)/, Enum_WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (Utility_strlen(value) - 1 - length > 6) switch (Utility_charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (Utility_charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return Utility_replace(value, /(.+:)(.+)-([^]+)/, '$1' + Enum_WEBKIT + '$2-$3' + '$1' + Enum_MOZ + (Utility_charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? emotion_cache_browser_esm_prefix(Utility_replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (Utility_charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (Utility_charat(value, Utility_strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return Utility_replace(value, ':', ':' + Enum_WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return Utility_replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + Enum_WEBKIT + (Utility_charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + Enum_WEBKIT + '$2$3' + '$1' + Enum_MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (Utility_charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return Enum_WEBKIT + value + Enum_MS + Utility_replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return Enum_WEBKIT + value + Enum_MS + value + value;
  }

  return value;
}

var emotion_cache_browser_esm_prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case Enum_DECLARATION:
      element["return"] = emotion_cache_browser_esm_prefix(element.value, element.length);
      break;

    case Enum_KEYFRAMES:
      return Serializer_serialize([Tokenizer_copy(element, {
        value: Utility_replace(element.value, '@', '@' + Enum_WEBKIT)
      })], callback);

    case Enum_RULESET:
      if (element.length) return Utility_combine(element.props, function (value) {
        switch (Utility_match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return Serializer_serialize([Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(read-\w+)/, ':' + Enum_MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return Serializer_serialize([Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, ':' + Enum_WEBKIT + 'input-$1')]
            }), Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, ':' + Enum_MOZ + '$1')]
            }), Tokenizer_copy(element, {
              props: [Utility_replace(value, /:(plac\w+)/, Enum_MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [emotion_cache_browser_esm_prefixer];

var createCache = function
  /*: EmotionCache */
createCache(options
/*: Options */
) {
  var key = options.key;

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node
    /*: HTMLStyleElement */
    ) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  /* : Node */

  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node
    /*: HTMLStyleElement */
    ) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;
  /*: (
  selector: string,
  serialized: SerializedStyles,
  sheet: StyleSheet,
  shouldCache: boolean
  ) => string | void */


  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return Serializer_serialize(compile(styles), serializer);
    };

    _insert = function
      /*: void */
    insert(selector
    /*: string */
    , serialized
    /*: SerializedStyles */
    , sheet
    /*: StyleSheet */
    , shouldCache
    /*: boolean */
    ) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache
  /*: EmotionCache */
  = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};




/***/ }),

/***/ 512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ CacheProvider),
  E: () => (/* binding */ Emotion$1),
  T: () => (/* binding */ ThemeContext),
  _: () => (/* binding */ __unsafe_useEmotionCache),
  a: () => (/* binding */ ThemeProvider),
  b: () => (/* binding */ withTheme),
  c: () => (/* binding */ createEmotionProps),
  h: () => (/* binding */ hasOwn),
  i: () => (/* binding */ isDevelopment),
  u: () => (/* binding */ useTheme),
  w: () => (/* binding */ withEmotionCache)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 7 modules
var emotion_cache_browser_esm = __webpack_require__(655);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

;// CONCATENATED MODULE: ./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // Use non-null assertion because we just checked that the cache `has` it
      // This allows us to remove `undefined` from the return value
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};



// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(146);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
;// CONCATENATED MODULE: ./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics_cjs_default()(targetComponent, sourceComponent);
});



// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var emotion_utils_browser_esm = __webpack_require__(41);
// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js + 3 modules
var emotion_serialize_esm = __webpack_require__(448);
// EXTERNAL MODULE: ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(668);
;// CONCATENATED MODULE: ./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js










var isDevelopment = false;

/* import { type EmotionCache } from '@emotion/utils' */
var EmotionCacheContext
/*: React.Context<EmotionCache | null> */
= /* #__PURE__ */react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,emotion_cache_browser_esm/* default */.A)({
  key: 'css'
}) : null);

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache()
/*: EmotionCache | null*/
{
  return (0,react.useContext)(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache
/* <Props, Ref: React.Ref<*>> */
(func
/*: (props: Props, cache: EmotionCache, ref: Ref) => React.Node */
)
/*: React.AbstractComponent<Props> */
{
  return /*#__PURE__*/(0,react.forwardRef)(function (props
  /*: Props */
  , ref
  /*: Ref */
  ) {
    // the cache will never be null in the browser
    var cache = (0,react.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */react.createContext({});

var useTheme = function useTheme() {
  return react.useContext(ThemeContext);
};

var getTheme = function getTheme(outerTheme
/*: Object */
, theme
/*: Object | (Object => Object) */
) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    return mergedTheme;
  }

  return _extends({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */weakMemoize(function (outerTheme) {
  return weakMemoize(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
/*
type ThemeProviderProps = {
  theme: Object | (Object => Object),
  children: React.Node
}
*/

var ThemeProvider = function ThemeProvider(props
/*: ThemeProviderProps */
) {
  var theme = react.useContext(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/react.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme
/* <Config: {}> */
(Component
/*: React.AbstractComponent<Config> */
)
/*: React.AbstractComponent<$Diff<Config, { theme: Object }>> */
{
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = react.useContext(ThemeContext);
    return /*#__PURE__*/react.createElement(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  };

  var WithTheme = /*#__PURE__*/react.forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics(WithTheme, Component);
}

var hasOwn = {}.hasOwnProperty;

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type
/*: React.ElementType */
, props
/*: Object */
) {

  var newProps
  /*: any */
  = {};

  for (var key in props) {
    if (hasOwn.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  (0,emotion_utils_browser_esm/* registerStyles */.SF)(cache, serialized, isStringTag);
  (0,emotion_use_insertion_effect_with_fallbacks_browser_esm/* useInsertionEffectAlwaysWithSyncFallback */.s)(function () {
    return (0,emotion_utils_browser_esm/* insertStyles */.sk)(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(
/* <any, any> */
function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,emotion_utils_browser_esm/* getRegisteredStyles */.Rk)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,emotion_serialize_esm/* serializeStyles */.J)(registeredStyles, undefined, react.useContext(ThemeContext));

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwn.call(props, key) && key !== 'css' && key !== typePropName && (!isDevelopment )) {
      newProps[key] = props[key];
    }
  }

  newProps.className = className;

  if (ref) {
    newProps.ref = ref;
  }

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/react.createElement(WrappedComponent, newProps));
});

var Emotion$1 = Emotion;




/***/ }),

/***/ 437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheProvider: () => (/* reexport safe */ _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   ClassNames: () => (/* binding */ ClassNames),
/* harmony export */   Global: () => (/* binding */ Global),
/* harmony export */   ThemeContext: () => (/* reexport safe */ _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   __unsafe_useEmotionCache: () => (/* reexport safe */ _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   createElement: () => (/* binding */ jsx),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   jsx: () => (/* binding */ jsx),
/* harmony export */   keyframes: () => (/* binding */ keyframes),
/* harmony export */   useTheme: () => (/* reexport safe */ _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   withEmotionCache: () => (/* reexport safe */ _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   withTheme: () => (/* reexport safe */ _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(512);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(540);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(668);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(448);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(655);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(146);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);












var jsx
/*: typeof React.createElement */
= function jsx
/*: typeof React.createElement */
(type
/*: React.ElementType */
, props
/*: Object */
) {
  var args = arguments;

  if (props == null || !_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.h.call(props, 'css')) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.E;
  createElementArgArray[1] = (0,_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(null, createElementArgArray);
};

// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global
/*: React.AbstractComponent<
GlobalProps
> */
= /* #__PURE__ */(0,_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(function (props
/*: GlobalProps */
, cache) {

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__/* .serializeStyles */ .J)([styles], undefined, react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.T));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_2__/* .useInsertionEffectWithLayoutFallback */ .i)(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node
    /*: HTMLStyleElement | null*/
    = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_2__/* .useInsertionEffectWithLayoutFallback */ .i)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__/* .insertStyles */ .sk)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

/* import type { Interpolation, SerializedStyles } from '@emotion/utils' */

function css()
/*: SerializedStyles */
{
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__/* .serializeStyles */ .J)(args);
}

/*
type Keyframes = {|
  name: string,
  styles: string,
  anim: 1,
  toString: () => string
|} & string
*/

var keyframes = function
  /*: Keyframes */
keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

/*
type ClassNameArg =
  | string
  | boolean
  | { [key: string]: boolean }
  | Array<ClassNameArg>
  | null
  | void
*/

var classnames = function
  /*: string */
classnames(args
/*: Array<ClassNameArg> */
) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered
/*: Object */
, css
/*: (...args: Array<any>) => string */
, className
/*: string */
) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__/* .getRegisteredStyles */ .Rk)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_2__/* .useInsertionEffectAlwaysWithSyncFallback */ .s)(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__/* .insertStyles */ .sk)(cache, serializedArr[i], false);
    }
  });

  return null;
};
/*
type Props = {
  children: ({
    css: (...args: any) => string,
    cx: (...args: Array<ClassNameArg>) => string,
    theme: Object
  }) => React.Node
} */


var ClassNames
/*: React.AbstractComponent<Props>*/
= /* #__PURE__ */(0,_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.i) {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__/* .serializeStyles */ .J)(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__/* .registerStyles */ .SF)(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && _emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.i) {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_element_5486c51c_browser_esm_js__WEBPACK_IMPORTED_MODULE_0__.T)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});




/***/ }),

/***/ 448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ serializeStyles)
});

;// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}



;// CONCATENATED MODULE: ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};



;// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}



;// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js




var isDevelopment = false;

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  var componentSelector = interpolation;

  if (componentSelector.__emotion_styles !== undefined) {

    return componentSelector;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        var keyframes = interpolation;

        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }

        var serializedStyles = interpolation;

        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = serializedStyles.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  var asString = interpolation;

  if (registered == null) {
    return asString;
  }

  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];

      if (typeof value !== 'object') {
        var asString = value;

        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;

    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      var templateStringsArr = strings;

      styles += templateStringsArr[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
}




/***/ }),

/***/ 668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ useInsertionEffectWithLayoutFallback),
/* harmony export */   s: () => (/* binding */ useInsertionEffectAlwaysWithSyncFallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(540);


var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))['useInsertion' + 'Effect'] ? /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;




/***/ }),

/***/ 41:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rk: () => (/* binding */ getRegisteredStyles),
/* harmony export */   SF: () => (/* binding */ registerStyles),
/* harmony export */   sk: () => (/* binding */ insertStyles)
/* harmony export */ });
var isBrowser = true;

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(848);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-5486c51c.browser.esm.js + 3 modules
var emotion_element_5486c51c_browser_esm = __webpack_require__(512);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js + 7 modules
var emotion_cache_browser_esm = __webpack_require__(655);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(146);
// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js + 3 modules
var emotion_serialize_esm = __webpack_require__(448);
// EXTERNAL MODULE: ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var emotion_use_insertion_effect_with_fallbacks_browser_esm = __webpack_require__(668);
;// CONCATENATED MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js












var Fragment = jsx_runtime.Fragment;
function jsx(type, props, key) {
  if (!emotion_element_5486c51c_browser_esm.h.call(props, 'css')) {
    return jsx_runtime.jsx(type, props, key);
  }

  return jsx_runtime.jsx(emotion_element_5486c51c_browser_esm.E, (0,emotion_element_5486c51c_browser_esm.c)(type, props), key);
}
function jsxs(type, props, key) {
  if (!emotion_element_5486c51c_browser_esm.h.call(props, 'css')) {
    return jsx_runtime.jsxs(type, props, key);
  }

  return jsx_runtime.jsxs(emotion_element_5486c51c_browser_esm.E, (0,emotion_element_5486c51c_browser_esm.c)(type, props), key);
}



// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(437);
// EXTERNAL MODULE: ./node_modules/emotion-normalize/dist/index.js
var dist = __webpack_require__(349);
;// CONCATENATED MODULE: ./src/pages/HomePage.tsx
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};


var HomePage = function HomePage() {
  return jsx("div", {
    css: /*#__PURE__*/(0,emotion_react_browser_esm.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding: 80px 120px;\n      @media screen and (max-width: 720px) {\n      padding: 24px 40px;\n      " + ( true ? "" : 0) + ( true ? "" : 0)], ["\n      padding: 80px 120px;\n      @media screen and (max-width: 720px) {\n      padding: 24px 40px;\n      " + ( true ? "" : 0) + ( true ? "" : 0)])))
  });
};
/* harmony default export */ const pages_HomePage = (HomePage);
var templateObject_1;
;// CONCATENATED MODULE: ./src/App.tsx
var App_makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
};




var App = function App() {
  return jsxs(Fragment, {
    children: [jsx(emotion_react_browser_esm.Global, {
      styles: /*#__PURE__*/(0,emotion_react_browser_esm.css)(App_templateObject_1 || (App_templateObject_1 = App_makeTemplateObject(["\n          ", "\n        " + ( true ? "" : 0) + ( true ? "" : 0)], ["\n          ", "\n        " + ( true ? "" : 0) + ( true ? "" : 0)])), dist/* default */.A)
    }), jsx(pages_HomePage, {})]
  });
};
/* harmony default export */ const src_App = (App);
var App_templateObject_1;
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
;// CONCATENATED MODULE: ./src/index.tsx





var container = document.getElementById("root");
var root = (0,client/* createRoot */.H)(container);
root.render(jsx(react.StrictMode, {
  children: jsx(src_App, {})
}));

/***/ }),

/***/ 349:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;

var _react = __webpack_require__(437);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nhtml {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\nbody {\n  margin: 0;\n}\nmain {\n  display: block;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nhr {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\npre {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\na {\n  background-color: transparent;\n}\nabbr[title] {\n  border-bottom: none; \n  text-decoration: underline; \n  text-decoration: underline dotted; \n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\nimg {\n  border-style: none;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\nbutton,\ninput { \n  overflow: visible;\n}\nbutton,\nselect { \n  text-transform: none;\n}\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\nlegend {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\nprogress {\n  vertical-align: baseline;\n}\ntextarea {\n  overflow: auto;\n}\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; \n  padding: 0; \n}\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\ndetails {\n  display: block;\n}\nsummary {\n  display: list-item;\n}\ntemplate {\n  display: none;\n}\n[hidden] {\n  display: none;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var normalize = (0, _react.css)(_templateObject());
var _default = normalize;
exports.A = _default;

/***/ }),

/***/ 146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var reactIs = __webpack_require__(363);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(540),ca=__webpack_require__(982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(961);
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(551);
} else {}


/***/ }),

/***/ 799:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(799);
} else {}


/***/ }),

/***/ 20:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(540),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 287:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(287);
} else {}


/***/ }),

/***/ 848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(20);
} else {}


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(463);
} else {}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(764));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sY0FBYyxNQUFNLEdBQUcsNkVBQTZFLHlIQUF5SDtBQUMzZCw0QkFBNEIsR0FBRyw2QkFBNkIsYUFBYSxRQUFRLGtCQUFrQixRQUFRLElBQUksSUFBSSwrQkFBK0IsUUFBUTs7Ozs7Ozs7QUNsQjdJOztBQUViLElBQUksSUFBcUM7QUFDekMsRUFBRSx5Q0FBNkQ7QUFDL0QsRUFBRSxLQUFLLEVBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zaGVldC9kaXN0L2Vtb3Rpb24tc2hlZXQuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1Rva2VuaXplci5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL0VudW0uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9TZXJpYWxpemVyLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvTWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1BhcnNlci5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9jYWNoZS9kaXN0L2Vtb3Rpb24tY2FjaGUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi93ZWFrLW1lbW9pemUvZGlzdC9lbW90aW9uLXdlYWstbWVtb2l6ZS5lc20uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vcmVhY3QvX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L2Rpc3QvZW1vdGlvbi1lbGVtZW50LTU0ODZjNTFjLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9oYXNoL2Rpc3QvZW1vdGlvbi1oYXNoLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L2Vtb3Rpb24tdW5pdGxlc3MuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NlcmlhbGl6ZS9kaXN0L2Vtb3Rpb24tc2VyaWFsaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcy9kaXN0L2Vtb3Rpb24tdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC9lbW90aW9uLXV0aWxzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L2pzeC1ydW50aW1lL2Rpc3QvZW1vdGlvbi1yZWFjdC1qc3gtcnVudGltZS5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL3NyYy9wYWdlcy9Ib21lUGFnZS50c3giLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvQXBwLnRzeCIsIndlYnBhY2s6Ly9scy8uL3NyYy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvZW1vdGlvbi1ub3JtYWxpemUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2xpZW50LmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzRGV2ZWxvcG1lbnQgPSBmYWxzZTtcblxuLypcblxuQmFzZWQgb2ZmIGdsYW1vcidzIFN0eWxlU2hlZXQsIHRoYW5rcyBTdW5pbCDinaTvuI9cblxuaGlnaCBwZXJmb3JtYW5jZSBTdHlsZVNoZWV0IGZvciBjc3MtaW4tanMgc3lzdGVtc1xuXG4tIHVzZXMgbXVsdGlwbGUgc3R5bGUgdGFncyBiZWhpbmQgdGhlIHNjZW5lcyBmb3IgbWlsbGlvbnMgb2YgcnVsZXNcbi0gdXNlcyBgaW5zZXJ0UnVsZWAgZm9yIGFwcGVuZGluZyBpbiBwcm9kdWN0aW9uIGZvciAqbXVjaCogZmFzdGVyIHBlcmZvcm1hbmNlXG5cbi8vIHVzYWdlXG5cbmltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdAZW1vdGlvbi9zaGVldCdcblxubGV0IHN0eWxlU2hlZXQgPSBuZXcgU3R5bGVTaGVldCh7IGtleTogJycsIGNvbnRhaW5lcjogZG9jdW1lbnQuaGVhZCB9KVxuXG5zdHlsZVNoZWV0Lmluc2VydCgnI2JveCB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgfScpXG4tIGFwcGVuZHMgYSBjc3MgcnVsZSBpbnRvIHRoZSBzdHlsZXNoZWV0XG5cbnN0eWxlU2hlZXQuZmx1c2goKVxuLSBlbXB0aWVzIHRoZSBzdHlsZXNoZWV0IG9mIGFsbCBpdHMgY29udGVudHNcblxuKi9cblxuZnVuY3Rpb24gc2hlZXRGb3JUYWcodGFnKSB7XG4gIGlmICh0YWcuc2hlZXQpIHtcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfSAvLyB0aGlzIGZ1bmN0aW9uIHNob3VsZCBhbHdheXMgcmV0dXJuIHdpdGggYSB2YWx1ZVxuICAvLyBUUyBjYW4ndCB1bmRlcnN0YW5kIGl0IHRob3VnaCBzbyB3ZSBtYWtlIGl0IHN0b3AgY29tcGxhaW5pbmcgaGVyZVxuXG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1vdGlvbicsIG9wdGlvbnMua2V5KTtcblxuICBpZiAob3B0aW9ucy5ub25jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBvcHRpb25zLm5vbmNlKTtcbiAgfVxuXG4gIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gIHJldHVybiB0YWc7XG59XG5cbnZhciBTdHlsZVNoZWV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gVXNpbmcgTm9kZSBpbnN0ZWFkIG9mIEhUTUxFbGVtZW50IHNpbmNlIGNvbnRhaW5lciBtYXkgYmUgYSBTaGFkb3dSb290XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLl9pbnNlcnRUYWcgPSBmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgYmVmb3JlO1xuXG4gICAgICBpZiAoX3RoaXMudGFncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKF90aGlzLmluc2VydGlvblBvaW50KSB7XG4gICAgICAgICAgYmVmb3JlID0gX3RoaXMuaW5zZXJ0aW9uUG9pbnQubmV4dFNpYmxpbmc7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucHJlcGVuZCkge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmJlZm9yZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmVmb3JlID0gX3RoaXMudGFnc1tfdGhpcy50YWdzLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhZywgYmVmb3JlKTtcblxuICAgICAgX3RoaXMudGFncy5wdXNoKHRhZyk7XG4gICAgfTtcblxuICAgIHRoaXMuaXNTcGVlZHkgPSBvcHRpb25zLnNwZWVkeSA9PT0gdW5kZWZpbmVkID8gIWlzRGV2ZWxvcG1lbnQgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5wcmVwZW5kID0gb3B0aW9ucy5wcmVwZW5kO1xuICAgIHRoaXMuaW5zZXJ0aW9uUG9pbnQgPSBvcHRpb25zLmluc2VydGlvblBvaW50O1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaHlkcmF0ZSA9IGZ1bmN0aW9uIGh5ZHJhdGUobm9kZXMpIHtcbiAgICBub2Rlcy5mb3JFYWNoKHRoaXMuX2luc2VydFRhZyk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdGhpcy5faW5zZXJ0VGFnKGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHIrKztcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICB2YXIgX3RhZyRwYXJlbnROb2RlO1xuXG4gICAgICByZXR1cm4gKF90YWckcGFyZW50Tm9kZSA9IHRhZy5wYXJlbnROb2RlKSA9PSBudWxsID8gdm9pZCAwIDogX3RhZyRwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRhZyk7XG4gICAgfSk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnQgeyBTdHlsZVNoZWV0IH07XG4iLCIvKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgdmFyIGFicyA9IE1hdGguYWJzXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCB2YXIgZnJvbSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IHZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNoICh2YWx1ZSwgbGVuZ3RoKSB7XG5cdHJldHVybiBjaGFyYXQodmFsdWUsIDApIF4gNDUgPyAoKCgoKCgobGVuZ3RoIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAwKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDEpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMikpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAzKSA6IDBcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyaW0gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS50cmltKClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7UmVnRXhwfSBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtzdHJpbmc/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2ggKHZhbHVlLCBwYXR0ZXJuKSB7XG5cdHJldHVybiAodmFsdWUgPSBwYXR0ZXJuLmV4ZWModmFsdWUpKSA/IHZhbHVlWzBdIDogdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2UgKHZhbHVlLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkge1xuXHRyZXR1cm4gdmFsdWUucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGV4b2YgKHZhbHVlLCBzZWFyY2gpIHtcblx0cmV0dXJuIHZhbHVlLmluZGV4T2Yoc2VhcmNoKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyYXQgKHZhbHVlLCBpbmRleCkge1xuXHRyZXR1cm4gdmFsdWUuY2hhckNvZGVBdChpbmRleCkgfCAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYmVnaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YnN0ciAodmFsdWUsIGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHZhbHVlLnNsaWNlKGJlZ2luLCBlbmQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJsZW4gKHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueVtdfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2l6ZW9mICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2FueVtdfSBhcnJheVxuICogQHJldHVybiB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kICh2YWx1ZSwgYXJyYXkpIHtcblx0cmV0dXJuIGFycmF5LnB1c2godmFsdWUpLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFycmF5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSAoYXJyYXksIGNhbGxiYWNrKSB7XG5cdHJldHVybiBhcnJheS5tYXAoY2FsbGJhY2spLmpvaW4oJycpXG59XG4iLCJpbXBvcnQge2Zyb20sIHRyaW0sIGNoYXJhdCwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgYXNzaWdufSBmcm9tICcuL1V0aWxpdHkuanMnXG5cbmV4cG9ydCB2YXIgbGluZSA9IDFcbmV4cG9ydCB2YXIgY29sdW1uID0gMVxuZXhwb3J0IHZhciBsZW5ndGggPSAwXG5leHBvcnQgdmFyIHBvc2l0aW9uID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXIgPSAwXG5leHBvcnQgdmFyIGNoYXJhY3RlcnMgPSAnJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSByb290XG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGx9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW10gfCBzdHJpbmd9IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdFtdIHwgc3RyaW5nfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9kZSAodmFsdWUsIHJvb3QsIHBhcmVudCwgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0cmV0dXJuIHt2YWx1ZTogdmFsdWUsIHJvb3Q6IHJvb3QsIHBhcmVudDogcGFyZW50LCB0eXBlOiB0eXBlLCBwcm9wczogcHJvcHMsIGNoaWxkcmVuOiBjaGlsZHJlbiwgbGluZTogbGluZSwgY29sdW1uOiBjb2x1bW4sIGxlbmd0aDogbGVuZ3RoLCByZXR1cm46ICcnfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKHJvb3QsIHByb3BzKSB7XG5cdHJldHVybiBhc3NpZ24obm9kZSgnJywgbnVsbCwgbnVsbCwgJycsIG51bGwsIG51bGwsIDApLCByb290LCB7bGVuZ3RoOiAtcm9vdC5sZW5ndGh9LCBwcm9wcylcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyICgpIHtcblx0cmV0dXJuIGNoYXJhY3RlclxufVxuXG4vKipcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByZXYgKCkge1xuXHRjaGFyYWN0ZXIgPSBwb3NpdGlvbiA+IDAgPyBjaGFyYXQoY2hhcmFjdGVycywgLS1wb3NpdGlvbikgOiAwXG5cblx0aWYgKGNvbHVtbi0tLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUtLVxuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPCBsZW5ndGggPyBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24rKykgOiAwXG5cblx0aWYgKGNvbHVtbisrLCBjaGFyYWN0ZXIgPT09IDEwKVxuXHRcdGNvbHVtbiA9IDEsIGxpbmUrK1xuXG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZWVrICgpIHtcblx0cmV0dXJuIGNoYXJhdChjaGFyYWN0ZXJzLCBwb3NpdGlvbilcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYXJldCAoKSB7XG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBiZWdpblxuICogQHBhcmFtIHtudW1iZXJ9IGVuZFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIHN1YnN0cihjaGFyYWN0ZXJzLCBiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbiAodHlwZSkge1xuXHRzd2l0Y2ggKHR5cGUpIHtcblx0XHQvLyBcXDAgXFx0IFxcbiBcXHIgXFxzIHdoaXRlc3BhY2UgdG9rZW5cblx0XHRjYXNlIDA6IGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdHJldHVybiA1XG5cdFx0Ly8gISArICwgLyA+IEAgfiBpc29sYXRlIHRva2VuXG5cdFx0Y2FzZSAzMzogY2FzZSA0MzogY2FzZSA0NDogY2FzZSA0NzogY2FzZSA2MjogY2FzZSA2NDogY2FzZSAxMjY6XG5cdFx0Ly8gOyB7IH0gYnJlYWtwb2ludCB0b2tlblxuXHRcdGNhc2UgNTk6IGNhc2UgMTIzOiBjYXNlIDEyNTpcblx0XHRcdHJldHVybiA0XG5cdFx0Ly8gOiBhY2NvbXBhbmllZCB0b2tlblxuXHRcdGNhc2UgNTg6XG5cdFx0XHRyZXR1cm4gM1xuXHRcdC8vIFwiICcgKCBbIG9wZW5pbmcgZGVsaW1pdCB0b2tlblxuXHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgNDA6IGNhc2UgOTE6XG5cdFx0XHRyZXR1cm4gMlxuXHRcdC8vICkgXSBjbG9zaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDQxOiBjYXNlIDkzOlxuXHRcdFx0cmV0dXJuIDFcblx0fVxuXG5cdHJldHVybiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnlbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gbGluZSA9IGNvbHVtbiA9IDEsIGxlbmd0aCA9IHN0cmxlbihjaGFyYWN0ZXJzID0gdmFsdWUpLCBwb3NpdGlvbiA9IDAsIFtdXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJuIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFsbG9jICh2YWx1ZSkge1xuXHRyZXR1cm4gY2hhcmFjdGVycyA9ICcnLCB2YWx1ZVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxpbWl0ICh0eXBlKSB7XG5cdHJldHVybiB0cmltKHNsaWNlKHBvc2l0aW9uIC0gMSwgZGVsaW1pdGVyKHR5cGUgPT09IDkxID8gdHlwZSArIDIgOiB0eXBlID09PSA0MCA/IHR5cGUgKyAxIDogdHlwZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZSAodmFsdWUpIHtcblx0cmV0dXJuIGRlYWxsb2ModG9rZW5pemVyKGFsbG9jKHZhbHVlKSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdoaXRlc3BhY2UgKHR5cGUpIHtcblx0d2hpbGUgKGNoYXJhY3RlciA9IHBlZWsoKSlcblx0XHRpZiAoY2hhcmFjdGVyIDwgMzMpXG5cdFx0XHRuZXh0KClcblx0XHRlbHNlXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiB0b2tlbih0eXBlKSA+IDIgfHwgdG9rZW4oY2hhcmFjdGVyKSA+IDMgPyAnJyA6ICcgJ1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplciAoY2hpbGRyZW4pIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHRzd2l0Y2ggKHRva2VuKGNoYXJhY3RlcikpIHtcblx0XHRcdGNhc2UgMDogYXBwZW5kKGlkZW50aWZpZXIocG9zaXRpb24gLSAxKSwgY2hpbGRyZW4pXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6IGFwcGVuZChkZWxpbWl0KGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0ZGVmYXVsdDogYXBwZW5kKGZyb20oY2hhcmFjdGVyKSwgY2hpbGRyZW4pXG5cdFx0fVxuXG5cdHJldHVybiBjaGlsZHJlblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGluZyAoaW5kZXgsIGNvdW50KSB7XG5cdHdoaWxlICgtLWNvdW50ICYmIG5leHQoKSlcblx0XHQvLyBub3QgMC05IEEtRiBhLWZcblx0XHRpZiAoY2hhcmFjdGVyIDwgNDggfHwgY2hhcmFjdGVyID4gMTAyIHx8IChjaGFyYWN0ZXIgPiA1NyAmJiBjaGFyYWN0ZXIgPCA2NSkgfHwgKGNoYXJhY3RlciA+IDcwICYmIGNoYXJhY3RlciA8IDk3KSlcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuIHNsaWNlKGluZGV4LCBjYXJldCgpICsgKGNvdW50IDwgNiAmJiBwZWVrKCkgPT0gMzIgJiYgbmV4dCgpID09IDMyKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdGVyICh0eXBlKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoIChjaGFyYWN0ZXIpIHtcblx0XHRcdC8vIF0gKSBcIiAnXG5cdFx0XHRjYXNlIHR5cGU6XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvblxuXHRcdFx0Ly8gXCIgJ1xuXHRcdFx0Y2FzZSAzNDogY2FzZSAzOTpcblx0XHRcdFx0aWYgKHR5cGUgIT09IDM0ICYmIHR5cGUgIT09IDM5KVxuXHRcdFx0XHRcdGRlbGltaXRlcihjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAodHlwZSA9PT0gNDEpXG5cdFx0XHRcdFx0ZGVsaW1pdGVyKHR5cGUpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXFxuXHRcdFx0Y2FzZSA5Mjpcblx0XHRcdFx0bmV4dCgpXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdHJldHVybiBwb3NpdGlvblxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnRlciAodHlwZSwgaW5kZXgpIHtcblx0d2hpbGUgKG5leHQoKSlcblx0XHQvLyAvL1xuXHRcdGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0NyArIDEwKVxuXHRcdFx0YnJlYWtcblx0XHQvLyAvKlxuXHRcdGVsc2UgaWYgKHR5cGUgKyBjaGFyYWN0ZXIgPT09IDQyICsgNDIgJiYgcGVlaygpID09PSA0Nylcblx0XHRcdGJyZWFrXG5cblx0cmV0dXJuICcvKicgKyBzbGljZShpbmRleCwgcG9zaXRpb24gLSAxKSArICcqJyArIGZyb20odHlwZSA9PT0gNDcgPyB0eXBlIDogbmV4dCgpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllciAoaW5kZXgpIHtcblx0d2hpbGUgKCF0b2tlbihwZWVrKCkpKVxuXHRcdG5leHQoKVxuXG5cdHJldHVybiBzbGljZShpbmRleCwgcG9zaXRpb24pXG59XG4iLCJleHBvcnQgdmFyIE1TID0gJy1tcy0nXG5leHBvcnQgdmFyIE1PWiA9ICctbW96LSdcbmV4cG9ydCB2YXIgV0VCS0lUID0gJy13ZWJraXQtJ1xuXG5leHBvcnQgdmFyIENPTU1FTlQgPSAnY29tbSdcbmV4cG9ydCB2YXIgUlVMRVNFVCA9ICdydWxlJ1xuZXhwb3J0IHZhciBERUNMQVJBVElPTiA9ICdkZWNsJ1xuXG5leHBvcnQgdmFyIFBBR0UgPSAnQHBhZ2UnXG5leHBvcnQgdmFyIE1FRElBID0gJ0BtZWRpYSdcbmV4cG9ydCB2YXIgSU1QT1JUID0gJ0BpbXBvcnQnXG5leHBvcnQgdmFyIENIQVJTRVQgPSAnQGNoYXJzZXQnXG5leHBvcnQgdmFyIFZJRVdQT1JUID0gJ0B2aWV3cG9ydCdcbmV4cG9ydCB2YXIgU1VQUE9SVFMgPSAnQHN1cHBvcnRzJ1xuZXhwb3J0IHZhciBET0NVTUVOVCA9ICdAZG9jdW1lbnQnXG5leHBvcnQgdmFyIE5BTUVTUEFDRSA9ICdAbmFtZXNwYWNlJ1xuZXhwb3J0IHZhciBLRVlGUkFNRVMgPSAnQGtleWZyYW1lcydcbmV4cG9ydCB2YXIgRk9OVF9GQUNFID0gJ0Bmb250LWZhY2UnXG5leHBvcnQgdmFyIENPVU5URVJfU1RZTEUgPSAnQGNvdW50ZXItc3R5bGUnXG5leHBvcnQgdmFyIEZPTlRfRkVBVFVSRV9WQUxVRVMgPSAnQGZvbnQtZmVhdHVyZS12YWx1ZXMnXG5leHBvcnQgdmFyIExBWUVSID0gJ0BsYXllcidcbiIsImltcG9ydCB7SU1QT1JULCBMQVlFUiwgQ09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT04sIEtFWUZSQU1FU30gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHtzdHJsZW4sIHNpemVvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplIChjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0dmFyIG91dHB1dCA9ICcnXG5cdHZhciBsZW5ndGggPSBzaXplb2YoY2hpbGRyZW4pXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRvdXRwdXQgKz0gY2FsbGJhY2soY2hpbGRyZW5baV0sIGksIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRyZXR1cm4gb3V0cHV0XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRjYXNlIExBWUVSOiBpZiAoZWxlbWVudC5jaGlsZHJlbi5sZW5ndGgpIGJyZWFrXG5cdFx0Y2FzZSBJTVBPUlQ6IGNhc2UgREVDTEFSQVRJT046IHJldHVybiBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQucmV0dXJuIHx8IGVsZW1lbnQudmFsdWVcblx0XHRjYXNlIENPTU1FTlQ6IHJldHVybiAnJ1xuXHRcdGNhc2UgS0VZRlJBTUVTOiByZXR1cm4gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnZhbHVlICsgJ3snICsgc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSArICd9J1xuXHRcdGNhc2UgUlVMRVNFVDogZWxlbWVudC52YWx1ZSA9IGVsZW1lbnQucHJvcHMuam9pbignLCcpXG5cdH1cblxuXHRyZXR1cm4gc3RybGVuKGNoaWxkcmVuID0gc2VyaWFsaXplKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxiYWNrKSkgPyBlbGVtZW50LnJldHVybiA9IGVsZW1lbnQudmFsdWUgKyAneycgKyBjaGlsZHJlbiArICd9JyA6ICcnXG59XG4iLCJpbXBvcnQge01TLCBNT1osIFdFQktJVCwgUlVMRVNFVCwgS0VZRlJBTUVTLCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHttYXRjaCwgY2hhcmF0LCBzdWJzdHIsIHN0cmxlbiwgc2l6ZW9mLCByZXBsYWNlLCBjb21iaW5lfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge2NvcHksIHRva2VuaXplfSBmcm9tICcuL1Rva2VuaXplci5qcydcbmltcG9ydCB7c2VyaWFsaXplfSBmcm9tICcuL1NlcmlhbGl6ZXIuanMnXG5pbXBvcnQge3ByZWZpeH0gZnJvbSAnLi9QcmVmaXhlci5qcydcblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uW119IGNvbGxlY3Rpb25cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZSAoY29sbGVjdGlvbikge1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNvbGxlY3Rpb24pXG5cblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdFx0dmFyIG91dHB1dCA9ICcnXG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuXHRcdFx0b3V0cHV0ICs9IGNvbGxlY3Rpb25baV0oZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykgfHwgJydcblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bGVzaGVldCAoY2FsbGJhY2spIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0aWYgKCFlbGVtZW50LnJvb3QpXG5cdFx0XHRpZiAoZWxlbWVudCA9IGVsZW1lbnQucmV0dXJuKVxuXHRcdFx0XHRjYWxsYmFjayhlbGVtZW50KVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlciAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRpZiAoZWxlbWVudC5sZW5ndGggPiAtMSlcblx0XHRpZiAoIWVsZW1lbnQucmV0dXJuKVxuXHRcdFx0c3dpdGNoIChlbGVtZW50LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBERUNMQVJBVElPTjogZWxlbWVudC5yZXR1cm4gPSBwcmVmaXgoZWxlbWVudC52YWx1ZSwgZWxlbWVudC5sZW5ndGgsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRjYXNlIEtFWUZSQU1FUzpcblx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHt2YWx1ZTogcmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVCl9KV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRjYXNlIFJVTEVTRVQ6XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQubGVuZ3RoKVxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbWJpbmUoZWxlbWVudC5wcm9wcywgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAobWF0Y2godmFsdWUsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnJlYWQtKG9ubHl8d3JpdGUpXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOnJlYWQtb25seSc6IGNhc2UgJzpyZWFkLXdyaXRlJzpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocmVhZC1cXHcrKS8sICc6JyArIE1PWiArICckMScpXX0pXSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdFx0Ly8gOnBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnOjpwbGFjZWhvbGRlcic6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBXRUJLSVQgKyAnaW5wdXQtJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV19KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29weShlbGVtZW50LCB7cHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCBNUyArICdpbnB1dC0kMScpXX0pXG5cdFx0XHRcdFx0XHRcdFx0XHRdLCBjYWxsYmFjaylcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICovXG5leHBvcnQgZnVuY3Rpb24gbmFtZXNwYWNlIChlbGVtZW50KSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0ZWxlbWVudC5wcm9wcyA9IGVsZW1lbnQucHJvcHMubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gY29tYmluZSh0b2tlbml6ZSh2YWx1ZSksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjaGFyYXQodmFsdWUsIDApKSB7XG5cdFx0XHRcdFx0XHQvLyBcXGZcblx0XHRcdFx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdWJzdHIodmFsdWUsIDEsIHN0cmxlbih2YWx1ZSkpXG5cdFx0XHRcdFx0XHQvLyBcXDAgKCArID4gflxuXHRcdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDQwOiBjYXNlIDQzOiBjYXNlIDYyOiBjYXNlIDEyNjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlXG5cdFx0XHRcdFx0XHQvLyA6XG5cdFx0XHRcdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRcdFx0XHRpZiAoY2hpbGRyZW5bKytpbmRleF0gPT09ICdnbG9iYWwnKVxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuW2luZGV4XSA9ICcnLCBjaGlsZHJlblsrK2luZGV4XSA9ICdcXGYnICsgc3Vic3RyKGNoaWxkcmVuW2luZGV4XSwgaW5kZXggPSAxLCAtMSlcblx0XHRcdFx0XHRcdC8vIFxcc1xuXHRcdFx0XHRcdFx0Y2FzZSAzMjpcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChpbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMDogZWxlbWVudCA9IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2l6ZW9mKGNoaWxkcmVuKSA+IDEgPyAnJyA6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSBpbmRleCA9IHNpemVvZihjaGlsZHJlbikgLSAxOiBjYXNlIDI6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gaW5kZXggPT09IDIgPyB2YWx1ZSArIGVsZW1lbnQgKyBlbGVtZW50IDogdmFsdWUgKyBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0fVxufVxuIiwiaW1wb3J0IHtDT01NRU5ULCBSVUxFU0VULCBERUNMQVJBVElPTn0gZnJvbSAnLi9FbnVtLmpzJ1xuaW1wb3J0IHthYnMsIGNoYXJhdCwgdHJpbSwgZnJvbSwgc2l6ZW9mLCBzdHJsZW4sIHN1YnN0ciwgYXBwZW5kLCByZXBsYWNlLCBpbmRleG9mfSBmcm9tICcuL1V0aWxpdHkuanMnXG5pbXBvcnQge25vZGUsIGNoYXIsIHByZXYsIG5leHQsIHBlZWssIGNhcmV0LCBhbGxvYywgZGVhbGxvYywgZGVsaW1pdCwgd2hpdGVzcGFjZSwgZXNjYXBpbmcsIGlkZW50aWZpZXIsIGNvbW1lbnRlcn0gZnJvbSAnLi9Ub2tlbml6ZXIuanMnXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtvYmplY3RbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUgKHZhbHVlKSB7XG5cdHJldHVybiBkZWFsbG9jKHBhcnNlKCcnLCBudWxsLCBudWxsLCBudWxsLCBbJyddLCB2YWx1ZSA9IGFsbG9jKHZhbHVlKSwgMCwgWzBdLCB2YWx1ZSkpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHJ1bGVzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc2V0c1xuICogQHBhcmFtIHtudW1iZXJbXX0gcHNldWRvXG4gKiBAcGFyYW0ge251bWJlcltdfSBwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGRlY2xhcmF0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UgKHZhbHVlLCByb290LCBwYXJlbnQsIHJ1bGUsIHJ1bGVzLCBydWxlc2V0cywgcHNldWRvLCBwb2ludHMsIGRlY2xhcmF0aW9ucykge1xuXHR2YXIgaW5kZXggPSAwXG5cdHZhciBvZmZzZXQgPSAwXG5cdHZhciBsZW5ndGggPSBwc2V1ZG9cblx0dmFyIGF0cnVsZSA9IDBcblx0dmFyIHByb3BlcnR5ID0gMFxuXHR2YXIgcHJldmlvdXMgPSAwXG5cdHZhciB2YXJpYWJsZSA9IDFcblx0dmFyIHNjYW5uaW5nID0gMVxuXHR2YXIgYW1wZXJzYW5kID0gMVxuXHR2YXIgY2hhcmFjdGVyID0gMFxuXHR2YXIgdHlwZSA9ICcnXG5cdHZhciBwcm9wcyA9IHJ1bGVzXG5cdHZhciBjaGlsZHJlbiA9IHJ1bGVzZXRzXG5cdHZhciByZWZlcmVuY2UgPSBydWxlXG5cdHZhciBjaGFyYWN0ZXJzID0gdHlwZVxuXG5cdHdoaWxlIChzY2FubmluZylcblx0XHRzd2l0Y2ggKHByZXZpb3VzID0gY2hhcmFjdGVyLCBjaGFyYWN0ZXIgPSBuZXh0KCkpIHtcblx0XHRcdC8vIChcblx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdGlmIChwcmV2aW91cyAhPSAxMDggJiYgY2hhcmF0KGNoYXJhY3RlcnMsIGxlbmd0aCAtIDEpID09IDU4KSB7XG5cdFx0XHRcdFx0aWYgKGluZGV4b2YoY2hhcmFjdGVycyArPSByZXBsYWNlKGRlbGltaXQoY2hhcmFjdGVyKSwgJyYnLCAnJlxcZicpLCAnJlxcZicpICE9IC0xKVxuXHRcdFx0XHRcdFx0YW1wZXJzYW5kID0gLTFcblx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHR9XG5cdFx0XHQvLyBcIiAnIFtcblx0XHRcdGNhc2UgMzQ6IGNhc2UgMzk6IGNhc2UgOTE6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZGVsaW1pdChjaGFyYWN0ZXIpXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyBcXHQgXFxuIFxcciBcXHNcblx0XHRcdGNhc2UgOTogY2FzZSAxMDogY2FzZSAxMzogY2FzZSAzMjpcblx0XHRcdFx0Y2hhcmFjdGVycyArPSB3aGl0ZXNwYWNlKHByZXZpb3VzKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFxcblx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gZXNjYXBpbmcoY2FyZXQoKSAtIDEsIDcpXG5cdFx0XHRcdGNvbnRpbnVlXG5cdFx0XHQvLyAvXG5cdFx0XHRjYXNlIDQ3OlxuXHRcdFx0XHRzd2l0Y2ggKHBlZWsoKSkge1xuXHRcdFx0XHRcdGNhc2UgNDI6IGNhc2UgNDc6XG5cdFx0XHRcdFx0XHRhcHBlbmQoY29tbWVudChjb21tZW50ZXIobmV4dCgpLCBjYXJldCgpKSwgcm9vdCwgcGFyZW50KSwgZGVjbGFyYXRpb25zKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y2hhcmFjdGVycyArPSAnLydcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8ge1xuXHRcdFx0Y2FzZSAxMjMgKiB2YXJpYWJsZTpcblx0XHRcdFx0cG9pbnRzW2luZGV4KytdID0gc3RybGVuKGNoYXJhY3RlcnMpICogYW1wZXJzYW5kXG5cdFx0XHQvLyB9IDsgXFwwXG5cdFx0XHRjYXNlIDEyNSAqIHZhcmlhYmxlOiBjYXNlIDU5OiBjYXNlIDA6XG5cdFx0XHRcdHN3aXRjaCAoY2hhcmFjdGVyKSB7XG5cdFx0XHRcdFx0Ly8gXFwwIH1cblx0XHRcdFx0XHRjYXNlIDA6IGNhc2UgMTI1OiBzY2FubmluZyA9IDBcblx0XHRcdFx0XHQvLyA7XG5cdFx0XHRcdFx0Y2FzZSA1OSArIG9mZnNldDogaWYgKGFtcGVyc2FuZCA9PSAtMSkgY2hhcmFjdGVycyA9IHJlcGxhY2UoY2hhcmFjdGVycywgL1xcZi9nLCAnJylcblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eSA+IDAgJiYgKHN0cmxlbihjaGFyYWN0ZXJzKSAtIGxlbmd0aCkpXG5cdFx0XHRcdFx0XHRcdGFwcGVuZChwcm9wZXJ0eSA+IDMyID8gZGVjbGFyYXRpb24oY2hhcmFjdGVycyArICc7JywgcnVsZSwgcGFyZW50LCBsZW5ndGggLSAxKSA6IGRlY2xhcmF0aW9uKHJlcGxhY2UoY2hhcmFjdGVycywgJyAnLCAnJykgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMiksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gQCA7XG5cdFx0XHRcdFx0Y2FzZSA1OTogY2hhcmFjdGVycyArPSAnOydcblx0XHRcdFx0XHQvLyB7IHJ1bGUvYXQtcnVsZVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRhcHBlbmQocmVmZXJlbmNlID0gcnVsZXNldChjaGFyYWN0ZXJzLCByb290LCBwYXJlbnQsIGluZGV4LCBvZmZzZXQsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHByb3BzID0gW10sIGNoaWxkcmVuID0gW10sIGxlbmd0aCksIHJ1bGVzZXRzKVxuXG5cdFx0XHRcdFx0XHRpZiAoY2hhcmFjdGVyID09PSAxMjMpXG5cdFx0XHRcdFx0XHRcdGlmIChvZmZzZXQgPT09IDApXG5cdFx0XHRcdFx0XHRcdFx0cGFyc2UoY2hhcmFjdGVycywgcm9vdCwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHByb3BzLCBydWxlc2V0cywgbGVuZ3RoLCBwb2ludHMsIGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChhdHJ1bGUgPT09IDk5ICYmIGNoYXJhdChjaGFyYWN0ZXJzLCAzKSA9PT0gMTEwID8gMTAwIDogYXRydWxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBkIGwgbSBzXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDEwMDogY2FzZSAxMDg6IGNhc2UgMTA5OiBjYXNlIDExNTpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyc2UodmFsdWUsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBydWxlICYmIGFwcGVuZChydWxlc2V0KHZhbHVlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgMCwgMCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcnVsZXMsIHByb3BzID0gW10sIGxlbmd0aCksIGNoaWxkcmVuKSwgcnVsZXMsIGNoaWxkcmVuLCBsZW5ndGgsIHBvaW50cywgcnVsZSA/IHByb3BzIDogY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJzZShjaGFyYWN0ZXJzLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBbJyddLCBjaGlsZHJlbiwgMCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbmRleCA9IG9mZnNldCA9IHByb3BlcnR5ID0gMCwgdmFyaWFibGUgPSBhbXBlcnNhbmQgPSAxLCB0eXBlID0gY2hhcmFjdGVycyA9ICcnLCBsZW5ndGggPSBwc2V1ZG9cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIDpcblx0XHRcdGNhc2UgNTg6XG5cdFx0XHRcdGxlbmd0aCA9IDEgKyBzdHJsZW4oY2hhcmFjdGVycyksIHByb3BlcnR5ID0gcHJldmlvdXNcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmICh2YXJpYWJsZSA8IDEpXG5cdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PSAxMjMpXG5cdFx0XHRcdFx0XHQtLXZhcmlhYmxlXG5cdFx0XHRcdFx0ZWxzZSBpZiAoY2hhcmFjdGVyID09IDEyNSAmJiB2YXJpYWJsZSsrID09IDAgJiYgcHJldigpID09IDEyNSlcblx0XHRcdFx0XHRcdGNvbnRpbnVlXG5cblx0XHRcdFx0c3dpdGNoIChjaGFyYWN0ZXJzICs9IGZyb20oY2hhcmFjdGVyKSwgY2hhcmFjdGVyICogdmFyaWFibGUpIHtcblx0XHRcdFx0XHQvLyAmXG5cdFx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHRcdGFtcGVyc2FuZCA9IG9mZnNldCA+IDAgPyAxIDogKGNoYXJhY3RlcnMgKz0gJ1xcZicsIC0xKVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyAsXG5cdFx0XHRcdFx0Y2FzZSA0NDpcblx0XHRcdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IChzdHJsZW4oY2hhcmFjdGVycykgLSAxKSAqIGFtcGVyc2FuZCwgYW1wZXJzYW5kID0gMVxuXHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHQvLyBAXG5cdFx0XHRcdFx0Y2FzZSA2NDpcblx0XHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRcdGlmIChwZWVrKCkgPT09IDQ1KVxuXHRcdFx0XHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQobmV4dCgpKVxuXG5cdFx0XHRcdFx0XHRhdHJ1bGUgPSBwZWVrKCksIG9mZnNldCA9IGxlbmd0aCA9IHN0cmxlbih0eXBlID0gY2hhcmFjdGVycyArPSBpZGVudGlmaWVyKGNhcmV0KCkpKSwgY2hhcmFjdGVyKytcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gLVxuXHRcdFx0XHRcdGNhc2UgNDU6XG5cdFx0XHRcdFx0XHRpZiAocHJldmlvdXMgPT09IDQ1ICYmIHN0cmxlbihjaGFyYWN0ZXJzKSA9PSAyKVxuXHRcdFx0XHRcdFx0XHR2YXJpYWJsZSA9IDBcblx0XHRcdFx0fVxuXHRcdH1cblxuXHRyZXR1cm4gcnVsZXNldHNcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc1xuICogQHBhcmFtIHtudW1iZXJbXX0gcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydWxlc2V0ICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aCkge1xuXHR2YXIgcG9zdCA9IG9mZnNldCAtIDFcblx0dmFyIHJ1bGUgPSBvZmZzZXQgPT09IDAgPyBydWxlcyA6IFsnJ11cblx0dmFyIHNpemUgPSBzaXplb2YocnVsZSlcblxuXHRmb3IgKHZhciBpID0gMCwgaiA9IDAsIGsgPSAwOyBpIDwgaW5kZXg7ICsraSlcblx0XHRmb3IgKHZhciB4ID0gMCwgeSA9IHN1YnN0cih2YWx1ZSwgcG9zdCArIDEsIHBvc3QgPSBhYnMoaiA9IHBvaW50c1tpXSkpLCB6ID0gdmFsdWU7IHggPCBzaXplOyArK3gpXG5cdFx0XHRpZiAoeiA9IHRyaW0oaiA+IDAgPyBydWxlW3hdICsgJyAnICsgeSA6IHJlcGxhY2UoeSwgLyZcXGYvZywgcnVsZVt4XSkpKVxuXHRcdFx0XHRwcm9wc1trKytdID0gelxuXG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIG9mZnNldCA9PT0gMCA/IFJVTEVTRVQgOiB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGxlbmd0aClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWVudCAodmFsdWUsIHJvb3QsIHBhcmVudCkge1xuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBDT01NRU5ULCBmcm9tKGNoYXIoKSksIHN1YnN0cih2YWx1ZSwgMiwgLTIpLCAwKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNsYXJhdGlvbiAodmFsdWUsIHJvb3QsIHBhcmVudCwgbGVuZ3RoKSB7XG5cdHJldHVybiBub2RlKHZhbHVlLCByb290LCBwYXJlbnQsIERFQ0xBUkFUSU9OLCBzdWJzdHIodmFsdWUsIDAsIGxlbmd0aCksIHN1YnN0cih2YWx1ZSwgbGVuZ3RoICsgMSwgLTEpLCBsZW5ndGgpXG59XG4iLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnO1xuaW1wb3J0IHsgZGVhbGxvYywgYWxsb2MsIG5leHQsIHRva2VuLCBmcm9tLCBwZWVrLCBkZWxpbWl0LCBzbGljZSwgcG9zaXRpb24sIFJVTEVTRVQsIGNvbWJpbmUsIG1hdGNoLCBzZXJpYWxpemUsIGNvcHksIHJlcGxhY2UsIFdFQktJVCwgTU9aLCBNUywgS0VZRlJBTUVTLCBERUNMQVJBVElPTiwgaGFzaCwgY2hhcmF0LCBzdHJsZW4sIGluZGV4b2YsIHN0cmluZ2lmeSwgcnVsZXNoZWV0LCBtaWRkbGV3YXJlLCBjb21waWxlIH0gZnJvbSAnc3R5bGlzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciBpZGVudGlmaWVyV2l0aFBvaW50VHJhY2tpbmcgPSBmdW5jdGlvbiBpZGVudGlmaWVyV2l0aFBvaW50VHJhY2tpbmcoYmVnaW4sIHBvaW50cywgaW5kZXgpIHtcbiAgdmFyIHByZXZpb3VzID0gMDtcbiAgdmFyIGNoYXJhY3RlciA9IDA7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBwcmV2aW91cyA9IGNoYXJhY3RlcjtcbiAgICBjaGFyYWN0ZXIgPSBwZWVrKCk7IC8vICZcXGZcblxuICAgIGlmIChwcmV2aW91cyA9PT0gMzggJiYgY2hhcmFjdGVyID09PSAxMikge1xuICAgICAgcG9pbnRzW2luZGV4XSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKHRva2VuKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIG5leHQoKTtcbiAgfVxuXG4gIHJldHVybiBzbGljZShiZWdpbiwgcG9zaXRpb24pO1xufTtcblxudmFyIHRvUnVsZXMgPSBmdW5jdGlvbiB0b1J1bGVzKHBhcnNlZCwgcG9pbnRzKSB7XG4gIC8vIHByZXRlbmQgd2UndmUgc3RhcnRlZCB3aXRoIGEgY29tbWFcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjaGFyYWN0ZXIgPSA0NDtcblxuICBkbyB7XG4gICAgc3dpdGNoICh0b2tlbihjaGFyYWN0ZXIpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIC8vICZcXGZcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gMzggJiYgcGVlaygpID09PSAxMikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgbm90IDEwMCUgY29ycmVjdCwgd2UgZG9uJ3QgYWNjb3VudCBmb3IgbGl0ZXJhbCBzZXF1ZW5jZXMgaGVyZSAtIGxpa2UgZm9yIGV4YW1wbGUgcXVvdGVkIHN0cmluZ3NcbiAgICAgICAgICAvLyBzdHlsaXMgaW5zZXJ0cyBcXGYgYWZ0ZXIgJiB0byBrbm93IHdoZW4gJiB3aGVyZSBpdCBzaG91bGQgcmVwbGFjZSB0aGlzIHNlcXVlbmNlIHdpdGggdGhlIGNvbnRleHQgc2VsZWN0b3JcbiAgICAgICAgICAvLyBhbmQgd2hlbiBpdCBzaG91bGQganVzdCBjb25jYXRlbmF0ZSB0aGUgb3V0ZXIgYW5kIGlubmVyIHNlbGVjdG9yc1xuICAgICAgICAgIC8vIGl0J3MgdmVyeSB1bmxpa2VseSBmb3IgdGhpcyBzZXF1ZW5jZSB0byBhY3R1YWxseSBhcHBlYXIgaW4gYSBkaWZmZXJlbnQgY29udGV4dCwgc28gd2UganVzdCBsZXZlcmFnZSB0aGlzIGZhY3QgaGVyZVxuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBpZGVudGlmaWVyV2l0aFBvaW50VHJhY2tpbmcocG9zaXRpb24gLSAxLCBwb2ludHMsIGluZGV4KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBkZWxpbWl0KGNoYXJhY3Rlcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIC8vIGNvbW1hXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IDQ0KSB7XG4gICAgICAgICAgLy8gY29sb25cbiAgICAgICAgICBwYXJzZWRbKytpbmRleF0gPSBwZWVrKCkgPT09IDU4ID8gJyZcXGYnIDogJyc7XG4gICAgICAgICAgcG9pbnRzW2luZGV4XSA9IHBhcnNlZFtpbmRleF0ubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIC8vIGZhbGx0aHJvdWdoXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gZnJvbShjaGFyYWN0ZXIpO1xuICAgIH1cbiAgfSB3aGlsZSAoY2hhcmFjdGVyID0gbmV4dCgpKTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxudmFyIGdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXModmFsdWUsIHBvaW50cykge1xuICByZXR1cm4gZGVhbGxvYyh0b1J1bGVzKGFsbG9jKHZhbHVlKSwgcG9pbnRzKSk7XG59OyAvLyBXZWFrU2V0IHdvdWxkIGJlIG1vcmUgYXBwcm9wcmlhdGUsIGJ1dCBvbmx5IFdlYWtNYXAgaXMgc3VwcG9ydGVkIGluIElFMTFcblxuXG52YXIgZml4ZWRFbGVtZW50cyA9IC8qICNfX1BVUkVfXyAqL25ldyBXZWFrTWFwKCk7XG52YXIgY29tcGF0ID0gZnVuY3Rpb24gY29tcGF0KGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQudHlwZSAhPT0gJ3J1bGUnIHx8ICFlbGVtZW50LnBhcmVudCB8fCAvLyBwb3NpdGl2ZSAubGVuZ3RoIGluZGljYXRlcyB0aGF0IHRoaXMgcnVsZSBjb250YWlucyBwc2V1ZG9cbiAgLy8gbmVnYXRpdmUgLmxlbmd0aCBpbmRpY2F0ZXMgdGhhdCB0aGlzIHJ1bGUgaGFzIGJlZW4gYWxyZWFkeSBwcmVmaXhlZFxuICBlbGVtZW50Lmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlLFxuICAgICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnQ7XG4gIHZhciBpc0ltcGxpY2l0UnVsZSA9IGVsZW1lbnQuY29sdW1uID09PSBwYXJlbnQuY29sdW1uICYmIGVsZW1lbnQubGluZSA9PT0gcGFyZW50LmxpbmU7XG5cbiAgd2hpbGUgKHBhcmVudC50eXBlICE9PSAncnVsZScpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgIGlmICghcGFyZW50KSByZXR1cm47XG4gIH0gLy8gc2hvcnQtY2lyY3VpdCBmb3IgdGhlIHNpbXBsZXN0IGNhc2VcblxuXG4gIGlmIChlbGVtZW50LnByb3BzLmxlbmd0aCA9PT0gMSAmJiB2YWx1ZS5jaGFyQ29kZUF0KDApICE9PSA1OFxuICAvKiBjb2xvbiAqL1xuICAmJiAhZml4ZWRFbGVtZW50cy5nZXQocGFyZW50KSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiB0aGlzIGlzIGFuIGltcGxpY2l0bHkgaW5zZXJ0ZWQgcnVsZSAodGhlIG9uZSBlYWdlcmx5IGluc2VydGVkIGF0IHRoZSBlYWNoIG5ldyBuZXN0ZWQgbGV2ZWwpXG4gIC8vIHRoZW4gdGhlIHByb3BzIGhhcyBhbHJlYWR5IGJlZW4gbWFuaXB1bGF0ZWQgYmVmb3JlaGFuZCBhcyB0aGV5IHRoYXQgYXJyYXkgaXMgc2hhcmVkIGJldHdlZW4gaXQgYW5kIGl0cyBcInJ1bGUgcGFyZW50XCJcblxuXG4gIGlmIChpc0ltcGxpY2l0UnVsZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZpeGVkRWxlbWVudHMuc2V0KGVsZW1lbnQsIHRydWUpO1xuICB2YXIgcG9pbnRzID0gW107XG4gIHZhciBydWxlcyA9IGdldFJ1bGVzKHZhbHVlLCBwb2ludHMpO1xuICB2YXIgcGFyZW50UnVsZXMgPSBwYXJlbnQucHJvcHM7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGsgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhcmVudFJ1bGVzLmxlbmd0aDsgaisrLCBrKyspIHtcbiAgICAgIGVsZW1lbnQucHJvcHNba10gPSBwb2ludHNbaV0gPyBydWxlc1tpXS5yZXBsYWNlKC8mXFxmL2csIHBhcmVudFJ1bGVzW2pdKSA6IHBhcmVudFJ1bGVzW2pdICsgXCIgXCIgKyBydWxlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgcmVtb3ZlTGFiZWwgPSBmdW5jdGlvbiByZW1vdmVMYWJlbChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnR5cGUgPT09ICdkZWNsJykge1xuICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG5cbiAgICBpZiAoIC8vIGNoYXJjb2RlIGZvciBsXG4gICAgdmFsdWUuY2hhckNvZGVBdCgwKSA9PT0gMTA4ICYmIC8vIGNoYXJjb2RlIGZvciBiXG4gICAgdmFsdWUuY2hhckNvZGVBdCgyKSA9PT0gOTgpIHtcbiAgICAgIC8vIHRoaXMgaWdub3JlcyBsYWJlbFxuICAgICAgZWxlbWVudFtcInJldHVyblwiXSA9ICcnO1xuICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tZmFsbHRocm91Z2ggKi9cblxuZnVuY3Rpb24gcHJlZml4KHZhbHVlLCBsZW5ndGgpIHtcbiAgc3dpdGNoIChoYXNoKHZhbHVlLCBsZW5ndGgpKSB7XG4gICAgLy8gY29sb3ItYWRqdXN0XG4gICAgY2FzZSA1MTAzOlxuICAgICAgcmV0dXJuIFdFQktJVCArICdwcmludC0nICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyBhbmltYXRpb24sIGFuaW1hdGlvbi0oZGVsYXl8ZGlyZWN0aW9ufGR1cmF0aW9ufGZpbGwtbW9kZXxpdGVyYXRpb24tY291bnR8bmFtZXxwbGF5LXN0YXRlfHRpbWluZy1mdW5jdGlvbilcblxuICAgIGNhc2UgNTczNzpcbiAgICBjYXNlIDQyMDE6XG4gICAgY2FzZSAzMTc3OlxuICAgIGNhc2UgMzQzMzpcbiAgICBjYXNlIDE2NDE6XG4gICAgY2FzZSA0NDU3OlxuICAgIGNhc2UgMjkyMTogLy8gdGV4dC1kZWNvcmF0aW9uLCBmaWx0ZXIsIGNsaXAtcGF0aCwgYmFja2ZhY2UtdmlzaWJpbGl0eSwgY29sdW1uLCBib3gtZGVjb3JhdGlvbi1icmVha1xuXG4gICAgY2FzZSA1NTcyOlxuICAgIGNhc2UgNjM1NjpcbiAgICBjYXNlIDU4NDQ6XG4gICAgY2FzZSAzMTkxOlxuICAgIGNhc2UgNjY0NTpcbiAgICBjYXNlIDMwMDU6IC8vIG1hc2ssIG1hc2staW1hZ2UsIG1hc2stKG1vZGV8Y2xpcHxzaXplKSwgbWFzay0ocmVwZWF0fG9yaWdpbiksIG1hc2stcG9zaXRpb24sIG1hc2stY29tcG9zaXRlLFxuXG4gICAgY2FzZSA2MzkxOlxuICAgIGNhc2UgNTg3OTpcbiAgICBjYXNlIDU2MjM6XG4gICAgY2FzZSA2MTM1OlxuICAgIGNhc2UgNDU5OTpcbiAgICBjYXNlIDQ4NTU6IC8vIGJhY2tncm91bmQtY2xpcCwgY29sdW1ucywgY29sdW1uLShjb3VudHxmaWxsfGdhcHxydWxlfHJ1bGUtY29sb3J8cnVsZS1zdHlsZXxydWxlLXdpZHRofHNwYW58d2lkdGgpXG5cbiAgICBjYXNlIDQyMTU6XG4gICAgY2FzZSA2Mzg5OlxuICAgIGNhc2UgNTEwOTpcbiAgICBjYXNlIDUzNjU6XG4gICAgY2FzZSA1NjIxOlxuICAgIGNhc2UgMzgyOTpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIGFwcGVhcmFuY2UsIHVzZXItc2VsZWN0LCB0cmFuc2Zvcm0sIGh5cGhlbnMsIHRleHQtc2l6ZS1hZGp1c3RcblxuICAgIGNhc2UgNTM0OTpcbiAgICBjYXNlIDQyNDY6XG4gICAgY2FzZSA0ODEwOlxuICAgIGNhc2UgNjk2ODpcbiAgICBjYXNlIDI3NTY6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNT1ogKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyBmbGV4LCBmbGV4LWRpcmVjdGlvblxuXG4gICAgY2FzZSA2ODI4OlxuICAgIGNhc2UgNDI2ODpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyBvcmRlclxuXG4gICAgY2FzZSA2MTY1OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC0nICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyBhbGlnbi1pdGVtc1xuXG4gICAgY2FzZSA1MTg3OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgcmVwbGFjZSh2YWx1ZSwgLyhcXHcrKS4rKDpbXl0rKS8sIFdFQktJVCArICdib3gtJDEkMicgKyBNUyArICdmbGV4LSQxJDInKSArIHZhbHVlO1xuICAgIC8vIGFsaWduLXNlbGZcblxuICAgIGNhc2UgNTQ0MzpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtaXRlbS0nICsgcmVwbGFjZSh2YWx1ZSwgL2ZsZXgtfC1zZWxmLywgJycpICsgdmFsdWU7XG4gICAgLy8gYWxpZ24tY29udGVudFxuXG4gICAgY2FzZSA0Njc1OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyAnZmxleC1saW5lLXBhY2snICsgcmVwbGFjZSh2YWx1ZSwgL2FsaWduLWNvbnRlbnR8ZmxleC18LXNlbGYvLCAnJykgKyB2YWx1ZTtcbiAgICAvLyBmbGV4LXNocmlua1xuXG4gICAgY2FzZSA1NTQ4OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyB2YWx1ZTtcbiAgICAvLyBmbGV4LWJhc2lzXG5cbiAgICBjYXNlIDUyOTI6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgdmFsdWU7XG4gICAgLy8gZmxleC1ncm93XG5cbiAgICBjYXNlIDYwNjA6XG4gICAgICByZXR1cm4gV0VCS0lUICsgJ2JveC0nICsgcmVwbGFjZSh2YWx1ZSwgJy1ncm93JywgJycpICsgV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsICdncm93JywgJ3Bvc2l0aXZlJykgKyB2YWx1ZTtcbiAgICAvLyB0cmFuc2l0aW9uXG5cbiAgICBjYXNlIDQ1NTQ6XG4gICAgICByZXR1cm4gV0VCS0lUICsgcmVwbGFjZSh2YWx1ZSwgLyhbXi1dKSh0cmFuc2Zvcm0pL2csICckMScgKyBXRUJLSVQgKyAnJDInKSArIHZhbHVlO1xuICAgIC8vIGN1cnNvclxuXG4gICAgY2FzZSA2MTg3OlxuICAgICAgcmV0dXJuIHJlcGxhY2UocmVwbGFjZShyZXBsYWNlKHZhbHVlLCAvKHpvb20tfGdyYWIpLywgV0VCS0lUICsgJyQxJyksIC8oaW1hZ2Utc2V0KS8sIFdFQktJVCArICckMScpLCB2YWx1ZSwgJycpICsgdmFsdWU7XG4gICAgLy8gYmFja2dyb3VuZCwgYmFja2dyb3VuZC1pbWFnZVxuXG4gICAgY2FzZSA1NDk1OlxuICAgIGNhc2UgMzk1OTpcbiAgICAgIHJldHVybiByZXBsYWNlKHZhbHVlLCAvKGltYWdlLXNldFxcKFteXSopLywgV0VCS0lUICsgJyQxJyArICckYCQxJyk7XG4gICAgLy8ganVzdGlmeS1jb250ZW50XG5cbiAgICBjYXNlIDQ5Njg6XG4gICAgICByZXR1cm4gcmVwbGFjZShyZXBsYWNlKHZhbHVlLCAvKC4rOikoZmxleC0pPyguKikvLCBXRUJLSVQgKyAnYm94LXBhY2s6JDMnICsgTVMgKyAnZmxleC1wYWNrOiQzJyksIC9zListYlteO10rLywgJ2p1c3RpZnknKSArIFdFQktJVCArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gKG1hcmdpbnxwYWRkaW5nKS1pbmxpbmUtKHN0YXJ0fGVuZClcblxuICAgIGNhc2UgNDA5NTpcbiAgICBjYXNlIDM1ODM6XG4gICAgY2FzZSA0MDY4OlxuICAgIGNhc2UgMjUzMjpcbiAgICAgIHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rKS1pbmxpbmUoLispLywgV0VCS0lUICsgJyQxJDInKSArIHZhbHVlO1xuICAgIC8vIChtaW58bWF4KT8od2lkdGh8aGVpZ2h0fGlubGluZS1zaXplfGJsb2NrLXNpemUpXG5cbiAgICBjYXNlIDgxMTY6XG4gICAgY2FzZSA3MDU5OlxuICAgIGNhc2UgNTc1MzpcbiAgICBjYXNlIDU1MzU6XG4gICAgY2FzZSA1NDQ1OlxuICAgIGNhc2UgNTcwMTpcbiAgICBjYXNlIDQ5MzM6XG4gICAgY2FzZSA0Njc3OlxuICAgIGNhc2UgNTUzMzpcbiAgICBjYXNlIDU3ODk6XG4gICAgY2FzZSA1MDIxOlxuICAgIGNhc2UgNDc2NTpcbiAgICAgIC8vIHN0cmV0Y2gsIG1heC1jb250ZW50LCBtaW4tY29udGVudCwgZmlsbC1hdmFpbGFibGVcbiAgICAgIGlmIChzdHJsZW4odmFsdWUpIC0gMSAtIGxlbmd0aCA+IDYpIHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxKSkge1xuICAgICAgICAvLyAobSlheC1jb250ZW50LCAobSlpbi1jb250ZW50XG4gICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgIC8vIC1cbiAgICAgICAgICBpZiAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyA0KSAhPT0gNDUpIGJyZWFrO1xuICAgICAgICAvLyAoZilpbGwtYXZhaWxhYmxlLCAoZilpdC1jb250ZW50XG5cbiAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLis6KSguKyktKFteXSspLywgJyQxJyArIFdFQktJVCArICckMi0kMycgKyAnJDEnICsgTU9aICsgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMykgPT0gMTA4ID8gJyQzJyA6ICckMi0kMycpKSArIHZhbHVlO1xuICAgICAgICAvLyAocyl0cmV0Y2hcblxuICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICByZXR1cm4gfmluZGV4b2YodmFsdWUsICdzdHJldGNoJykgPyBwcmVmaXgocmVwbGFjZSh2YWx1ZSwgJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgbGVuZ3RoKSArIHZhbHVlIDogdmFsdWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICAvLyBwb3NpdGlvbjogc3RpY2t5XG5cbiAgICBjYXNlIDQ5NDk6XG4gICAgICAvLyAocyl0aWNreT9cbiAgICAgIGlmIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDEpICE9PSAxMTUpIGJyZWFrO1xuICAgIC8vIGRpc3BsYXk6IChmbGV4fGlubGluZS1mbGV4KVxuXG4gICAgY2FzZSA2NDQ0OlxuICAgICAgc3dpdGNoIChjaGFyYXQodmFsdWUsIHN0cmxlbih2YWx1ZSkgLSAzIC0gKH5pbmRleG9mKHZhbHVlLCAnIWltcG9ydGFudCcpICYmIDEwKSkpIHtcbiAgICAgICAgLy8gc3RpYyhrKXlcbiAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsICc6JywgJzonICsgV0VCS0lUKSArIHZhbHVlO1xuICAgICAgICAvLyAoaW5saW5lLSk/ZmwoZSl4XG5cbiAgICAgICAgY2FzZSAxMDE6XG4gICAgICAgICAgcmV0dXJuIHJlcGxhY2UodmFsdWUsIC8oLis6KShbXjshXSspKDt8IS4rKT8vLCAnJDEnICsgV0VCS0lUICsgKGNoYXJhdCh2YWx1ZSwgMTQpID09PSA0NSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gkMycgKyAnJDEnICsgV0VCS0lUICsgJyQyJDMnICsgJyQxJyArIE1TICsgJyQyYm94JDMnKSArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICAvLyB3cml0aW5nLW1vZGVcblxuICAgIGNhc2UgNTkzNjpcbiAgICAgIHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxMSkpIHtcbiAgICAgICAgLy8gdmVydGljYWwtbChyKVxuICAgICAgICBjYXNlIDExNDpcbiAgICAgICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ3RiJykgKyB2YWx1ZTtcbiAgICAgICAgLy8gdmVydGljYWwtcihsKVxuXG4gICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAndGItcmwnKSArIHZhbHVlO1xuICAgICAgICAvLyBob3Jpem9udGFsKC0pdGJcblxuICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgL1tzdmhdXFx3Ky1bdGJscl17Mn0vLCAnbHInKSArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBwcmVmaXhlciA9IGZ1bmN0aW9uIHByZWZpeGVyKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcbiAgaWYgKGVsZW1lbnQubGVuZ3RoID4gLTEpIGlmICghZWxlbWVudFtcInJldHVyblwiXSkgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcbiAgICBjYXNlIERFQ0xBUkFUSU9OOlxuICAgICAgZWxlbWVudFtcInJldHVyblwiXSA9IHByZWZpeChlbGVtZW50LnZhbHVlLCBlbGVtZW50Lmxlbmd0aCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgS0VZRlJBTUVTOlxuICAgICAgcmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7XG4gICAgICAgIHZhbHVlOiByZXBsYWNlKGVsZW1lbnQudmFsdWUsICdAJywgJ0AnICsgV0VCS0lUKVxuICAgICAgfSldLCBjYWxsYmFjayk7XG5cbiAgICBjYXNlIFJVTEVTRVQ6XG4gICAgICBpZiAoZWxlbWVudC5sZW5ndGgpIHJldHVybiBjb21iaW5lKGVsZW1lbnQucHJvcHMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKG1hdGNoKHZhbHVlLCAvKDo6cGxhY1xcdyt8OnJlYWQtXFx3KykvKSkge1xuICAgICAgICAgIC8vIDpyZWFkLShvbmx5fHdyaXRlKVxuICAgICAgICAgIGNhc2UgJzpyZWFkLW9ubHknOlxuICAgICAgICAgIGNhc2UgJzpyZWFkLXdyaXRlJzpcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge1xuICAgICAgICAgICAgICBwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHJlYWQtXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV1cbiAgICAgICAgICAgIH0pXSwgY2FsbGJhY2spO1xuICAgICAgICAgIC8vIDpwbGFjZWhvbGRlclxuXG4gICAgICAgICAgY2FzZSAnOjpwbGFjZWhvbGRlcic6XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgcHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBXRUJLSVQgKyAnaW5wdXQtJDEnKV1cbiAgICAgICAgICAgIH0pLCBjb3B5KGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgcHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV1cbiAgICAgICAgICAgIH0pLCBjb3B5KGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgcHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihwbGFjXFx3KykvLCBNUyArICdpbnB1dC0kMScpXVxuICAgICAgICAgICAgfSldLCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRlZmF1bHRTdHlsaXNQbHVnaW5zID0gW3ByZWZpeGVyXTtcblxudmFyIGNyZWF0ZUNhY2hlID0gZnVuY3Rpb25cbiAgLyo6IEVtb3Rpb25DYWNoZSAqL1xuY3JlYXRlQ2FjaGUob3B0aW9uc1xuLyo6IE9wdGlvbnMgKi9cbikge1xuICB2YXIga2V5ID0gb3B0aW9ucy5rZXk7XG5cbiAgaWYgKGtleSA9PT0gJ2NzcycpIHtcbiAgICB2YXIgc3NyU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbl06bm90KFtkYXRhLXNdKVwiKTsgLy8gZ2V0IFNTUmVkIHN0eWxlcyBvdXQgb2YgdGhlIHdheSBvZiBSZWFjdCdzIGh5ZHJhdGlvblxuICAgIC8vIGRvY3VtZW50LmhlYWQgaXMgYSBzYWZlIHBsYWNlIHRvIG1vdmUgdGhlbSB0byh0aG91Z2ggbm90ZSBkb2N1bWVudC5oZWFkIGlzIG5vdCBuZWNlc3NhcmlseSB0aGUgbGFzdCBwbGFjZSB0aGV5IHdpbGwgYmUpXG4gICAgLy8gbm90ZSB0aGlzIHZlcnkgdmVyeSBpbnRlbnRpb25hbGx5IHRhcmdldHMgYWxsIHN0eWxlIGVsZW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdGhlIGtleSB0byBlbnN1cmVcbiAgICAvLyB0aGF0IGNyZWF0aW5nIGEgY2FjaGUgd29ya3MgaW5zaWRlIG9mIHJlbmRlciBvZiBhIFJlYWN0IGNvbXBvbmVudFxuXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzc3JTdHlsZXMsIGZ1bmN0aW9uIChub2RlXG4gICAgLyo6IEhUTUxTdHlsZUVsZW1lbnQgKi9cbiAgICApIHtcbiAgICAgIC8vIHdlIHdhbnQgdG8gb25seSBtb3ZlIGVsZW1lbnRzIHdoaWNoIGhhdmUgYSBzcGFjZSBpbiB0aGUgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgLy8gYmVjYXVzZSB0aGF0IGluZGljYXRlcyB0aGF0IGl0IGlzIGFuIEVtb3Rpb24gMTEgc2VydmVyLXNpZGUgcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICAgIC8vIHdoaWxlIHdlIHdpbGwgYWxyZWFkeSBpZ25vcmUgRW1vdGlvbiAxMSBjbGllbnQtc2lkZSBpbnNlcnRlZCBzdHlsZXMgYmVjYXVzZSBvZiB0aGUgOm5vdChbZGF0YS1zXSkgcGFydCBpbiB0aGUgc2VsZWN0b3JcbiAgICAgIC8vIEVtb3Rpb24gMTAgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGRpZCBub3QgaGF2ZSBkYXRhLXMgKGJ1dCBpbXBvcnRhbnRseSBkaWQgbm90IGhhdmUgYSBzcGFjZSBpbiB0aGVpciBkYXRhLWVtb3Rpb24gYXR0cmlidXRlcylcbiAgICAgIC8vIHNvIGNoZWNraW5nIGZvciB0aGUgc3BhY2UgZW5zdXJlcyB0aGF0IGxvYWRpbmcgRW1vdGlvbiAxMSBhZnRlciBFbW90aW9uIDEwIGhhcyBpbnNlcnRlZCBzb21lIHN0eWxlc1xuICAgICAgLy8gd2lsbCBub3QgcmVzdWx0IGluIHRoZSBFbW90aW9uIDEwIHN0eWxlcyBiZWluZyBkZXN0cm95ZWRcbiAgICAgIHZhciBkYXRhRW1vdGlvbkF0dHJpYnV0ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nKTtcblxuICAgICAgaWYgKGRhdGFFbW90aW9uQXR0cmlidXRlLmluZGV4T2YoJyAnKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBzdHlsaXNQbHVnaW5zID0gb3B0aW9ucy5zdHlsaXNQbHVnaW5zIHx8IGRlZmF1bHRTdHlsaXNQbHVnaW5zO1xuXG4gIHZhciBpbnNlcnRlZCA9IHt9O1xuICB2YXIgY29udGFpbmVyO1xuICAvKiA6IE5vZGUgKi9cblxuICB2YXIgbm9kZXNUb0h5ZHJhdGUgPSBbXTtcblxuICB7XG4gICAgY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgfHwgZG9jdW1lbnQuaGVhZDtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCAvLyB0aGlzIG1lYW5zIHdlIHdpbGwgaWdub3JlIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYSBzcGFjZSBpbiB0aGVtIHdoaWNoXG4gICAgLy8gbWVhbnMgdGhhdCB0aGUgc3R5bGUgZWxlbWVudHMgd2UncmUgbG9va2luZyBhdCBhcmUgb25seSBFbW90aW9uIDExIHNlcnZlci1yZW5kZXJlZCBzdHlsZSBlbGVtZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25ePVxcXCJcIiArIGtleSArIFwiIFxcXCJdXCIpLCBmdW5jdGlvbiAobm9kZVxuICAgIC8qOiBIVE1MU3R5bGVFbGVtZW50ICovXG4gICAgKSB7XG4gICAgICB2YXIgYXR0cmliID0gbm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWVtb3Rpb25cIikuc3BsaXQoJyAnKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhdHRyaWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW5zZXJ0ZWRbYXR0cmliW2ldXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVzVG9IeWRyYXRlLnB1c2gobm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgX2luc2VydDtcbiAgLyo6IChcbiAgc2VsZWN0b3I6IHN0cmluZyxcbiAgc2VyaWFsaXplZDogU2VyaWFsaXplZFN0eWxlcyxcbiAgc2hlZXQ6IFN0eWxlU2hlZXQsXG4gIHNob3VsZENhY2hlOiBib29sZWFuXG4gICkgPT4gc3RyaW5nIHwgdm9pZCAqL1xuXG5cbiAgdmFyIG9tbmlwcmVzZW50UGx1Z2lucyA9IFtjb21wYXQsIHJlbW92ZUxhYmVsXTtcblxuICB7XG4gICAgdmFyIGN1cnJlbnRTaGVldDtcbiAgICB2YXIgZmluYWxpemluZ1BsdWdpbnMgPSBbc3RyaW5naWZ5LCBydWxlc2hlZXQoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQocnVsZSk7XG4gICAgfSldO1xuICAgIHZhciBzZXJpYWxpemVyID0gbWlkZGxld2FyZShvbW5pcHJlc2VudFBsdWdpbnMuY29uY2F0KHN0eWxpc1BsdWdpbnMsIGZpbmFsaXppbmdQbHVnaW5zKSk7XG5cbiAgICB2YXIgc3R5bGlzID0gZnVuY3Rpb24gc3R5bGlzKHN0eWxlcykge1xuICAgICAgcmV0dXJuIHNlcmlhbGl6ZShjb21waWxlKHN0eWxlcyksIHNlcmlhbGl6ZXIpO1xuICAgIH07XG5cbiAgICBfaW5zZXJ0ID0gZnVuY3Rpb25cbiAgICAgIC8qOiB2b2lkICovXG4gICAgaW5zZXJ0KHNlbGVjdG9yXG4gICAgLyo6IHN0cmluZyAqL1xuICAgICwgc2VyaWFsaXplZFxuICAgIC8qOiBTZXJpYWxpemVkU3R5bGVzICovXG4gICAgLCBzaGVldFxuICAgIC8qOiBTdHlsZVNoZWV0ICovXG4gICAgLCBzaG91bGRDYWNoZVxuICAgIC8qOiBib29sZWFuICovXG4gICAgKSB7XG4gICAgICBjdXJyZW50U2hlZXQgPSBzaGVldDtcblxuICAgICAgc3R5bGlzKHNlbGVjdG9yID8gc2VsZWN0b3IgKyBcIntcIiArIHNlcmlhbGl6ZWQuc3R5bGVzICsgXCJ9XCIgOiBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlXG4gIC8qOiBFbW90aW9uQ2FjaGUgKi9cbiAgPSB7XG4gICAga2V5OiBrZXksXG4gICAgc2hlZXQ6IG5ldyBTdHlsZVNoZWV0KHtcbiAgICAgIGtleToga2V5LFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICAgIHNwZWVkeTogb3B0aW9ucy5zcGVlZHksXG4gICAgICBwcmVwZW5kOiBvcHRpb25zLnByZXBlbmQsXG4gICAgICBpbnNlcnRpb25Qb2ludDogb3B0aW9ucy5pbnNlcnRpb25Qb2ludFxuICAgIH0pLFxuICAgIG5vbmNlOiBvcHRpb25zLm5vbmNlLFxuICAgIGluc2VydGVkOiBpbnNlcnRlZCxcbiAgICByZWdpc3RlcmVkOiB7fSxcbiAgICBpbnNlcnQ6IF9pbnNlcnRcbiAgfTtcbiAgY2FjaGUuc2hlZXQuaHlkcmF0ZShub2Rlc1RvSHlkcmF0ZSk7XG4gIHJldHVybiBjYWNoZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUNhY2hlIGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAobikge1xuICAgIGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7XG4gICAgICB2YXIgdCA9IGFyZ3VtZW50c1tlXTtcbiAgICAgIGZvciAodmFyIHIgaW4gdCkgKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHIpICYmIChuW3JdID0gdFtyXSk7XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9LCBfZXh0ZW5kcy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuZXhwb3J0IHsgX2V4dGVuZHMgYXMgZGVmYXVsdCB9OyIsInZhciB3ZWFrTWVtb2l6ZSA9IGZ1bmN0aW9uIHdlYWtNZW1vaXplKGZ1bmMpIHtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGUuaGFzKGFyZykpIHtcbiAgICAgIC8vIFVzZSBub24tbnVsbCBhc3NlcnRpb24gYmVjYXVzZSB3ZSBqdXN0IGNoZWNrZWQgdGhhdCB0aGUgY2FjaGUgYGhhc2AgaXRcbiAgICAgIC8vIFRoaXMgYWxsb3dzIHVzIHRvIHJlbW92ZSBgdW5kZWZpbmVkYCBmcm9tIHRoZSByZXR1cm4gdmFsdWVcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoYXJnKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gZnVuYyhhcmcpO1xuICAgIGNhY2hlLnNldChhcmcsIHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHdlYWtNZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyQxIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxuLy8gdGhpcyBmaWxlIGlzb2xhdGVzIHRoaXMgcGFja2FnZSB0aGF0IGlzIG5vdCB0cmVlLXNoYWtlYWJsZVxuLy8gYW5kIGlmIHRoaXMgbW9kdWxlIGRvZXNuJ3QgYWN0dWFsbHkgY29udGFpbiBhbnkgbG9naWMgb2YgaXRzIG93blxuLy8gdGhlbiBSb2xsdXAganVzdCB1c2UgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyBkaXJlY3RseSBpbiBvdGhlciBjaHVua3NcblxudmFyIGhvaXN0Tm9uUmVhY3RTdGF0aWNzID0gKGZ1bmN0aW9uICh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCkge1xuICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MkMSh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCk7XG59KTtcblxuZXhwb3J0IHsgaG9pc3ROb25SZWFjdFN0YXRpY3MgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVDYWNoZSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgd2Vha01lbW9pemUgZnJvbSAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICcuLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGluc2VydFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5pbXBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrIH0gZnJvbSAnQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MnO1xuXG52YXIgaXNEZXZlbG9wbWVudCA9IGZhbHNlO1xuXG4vKiBpbXBvcnQgeyB0eXBlIEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJyAqL1xudmFyIEVtb3Rpb25DYWNoZUNvbnRleHRcbi8qOiBSZWFjdC5Db250ZXh0PEVtb3Rpb25DYWNoZSB8IG51bGw+ICovXG49IC8qICNfX1BVUkVfXyAqL1JlYWN0LmNyZWF0ZUNvbnRleHQoIC8vIHdlJ3JlIGRvaW5nIHRoaXMgdG8gYXZvaWQgcHJlY29uc3RydWN0J3MgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGluIHRoaXMgb25lIGNhc2Vcbi8vIGJlY2F1c2UgdGhpcyBtb2R1bGUgaXMgcHJpbWFyaWx5IGludGVuZGVkIGZvciB0aGUgYnJvd3NlciBhbmQgbm9kZVxuLy8gYnV0IGl0J3MgYWxzbyByZXF1aXJlZCBpbiByZWFjdCBuYXRpdmUgYW5kIHNpbWlsYXIgZW52aXJvbm1lbnRzIHNvbWV0aW1lc1xuLy8gYW5kIHdlIGNvdWxkIGhhdmUgYSBzcGVjaWFsIGJ1aWxkIGp1c3QgZm9yIHRoYXRcbi8vIGJ1dCB0aGlzIGlzIG11Y2ggZWFzaWVyIGFuZCB0aGUgbmF0aXZlIHBhY2thZ2VzXG4vLyBtaWdodCB1c2UgYSBkaWZmZXJlbnQgdGhlbWUgY29udGV4dCBpbiB0aGUgZnV0dXJlIGFueXdheVxudHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IC8qICNfX1BVUkVfXyAqL2NyZWF0ZUNhY2hlKHtcbiAga2V5OiAnY3NzJ1xufSkgOiBudWxsKTtcblxudmFyIENhY2hlUHJvdmlkZXIgPSBFbW90aW9uQ2FjaGVDb250ZXh0LlByb3ZpZGVyO1xudmFyIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSA9IGZ1bmN0aW9uIHVzZUVtb3Rpb25DYWNoZSgpXG4vKjogRW1vdGlvbkNhY2hlIHwgbnVsbCovXG57XG4gIHJldHVybiB1c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xufTtcblxudmFyIHdpdGhFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB3aXRoRW1vdGlvbkNhY2hlXG4vKiA8UHJvcHMsIFJlZjogUmVhY3QuUmVmPCo+PiAqL1xuKGZ1bmNcbi8qOiAocHJvcHM6IFByb3BzLCBjYWNoZTogRW1vdGlvbkNhY2hlLCByZWY6IFJlZikgPT4gUmVhY3QuTm9kZSAqL1xuKVxuLyo6IFJlYWN0LkFic3RyYWN0Q29tcG9uZW50PFByb3BzPiAqL1xue1xuICByZXR1cm4gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzXG4gIC8qOiBQcm9wcyAqL1xuICAsIHJlZlxuICAvKjogUmVmICovXG4gICkge1xuICAgIC8vIHRoZSBjYWNoZSB3aWxsIG5ldmVyIGJlIG51bGwgaW4gdGhlIGJyb3dzZXJcbiAgICB2YXIgY2FjaGUgPSB1c2VDb250ZXh0KEVtb3Rpb25DYWNoZUNvbnRleHQpO1xuICAgIHJldHVybiBmdW5jKHByb3BzLCBjYWNoZSwgcmVmKTtcbiAgfSk7XG59O1xuXG52YXIgVGhlbWVDb250ZXh0ID0gLyogI19fUFVSRV9fICovUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbnZhciB1c2VUaGVtZSA9IGZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xufTtcblxudmFyIGdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUob3V0ZXJUaGVtZVxuLyo6IE9iamVjdCAqL1xuLCB0aGVtZVxuLyo6IE9iamVjdCB8IChPYmplY3QgPT4gT2JqZWN0KSAqL1xuKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwgdGhlbWUpO1xufTtcblxudmFyIGNyZWF0ZUNhY2hlV2l0aFRoZW1lID0gLyogI19fUFVSRV9fICovd2Vha01lbW9pemUoZnVuY3Rpb24gKG91dGVyVGhlbWUpIHtcbiAgcmV0dXJuIHdlYWtNZW1vaXplKGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHJldHVybiBnZXRUaGVtZShvdXRlclRoZW1lLCB0aGVtZSk7XG4gIH0pO1xufSk7XG4vKlxudHlwZSBUaGVtZVByb3ZpZGVyUHJvcHMgPSB7XG4gIHRoZW1lOiBPYmplY3QgfCAoT2JqZWN0ID0+IE9iamVjdCksXG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlXG59XG4qL1xuXG52YXIgVGhlbWVQcm92aWRlciA9IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIocHJvcHNcbi8qOiBUaGVtZVByb3ZpZGVyUHJvcHMgKi9cbikge1xuICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgaWYgKHByb3BzLnRoZW1lICE9PSB0aGVtZSkge1xuICAgIHRoZW1lID0gY3JlYXRlQ2FjaGVXaXRoVGhlbWUodGhlbWUpKHByb3BzLnRoZW1lKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaGVtZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdGhlbWVcbiAgfSwgcHJvcHMuY2hpbGRyZW4pO1xufTtcbmZ1bmN0aW9uIHdpdGhUaGVtZVxuLyogPENvbmZpZzoge30+ICovXG4oQ29tcG9uZW50XG4vKjogUmVhY3QuQWJzdHJhY3RDb21wb25lbnQ8Q29uZmlnPiAqL1xuKVxuLyo6IFJlYWN0LkFic3RyYWN0Q29tcG9uZW50PCREaWZmPENvbmZpZywgeyB0aGVtZTogT2JqZWN0IH0+PiAqL1xue1xuICB2YXIgY29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCByZWYpIHtcbiAgICB2YXIgdGhlbWUgPSBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgdGhlbWU6IHRoZW1lLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcykpO1xuICB9O1xuXG4gIHZhciBXaXRoVGhlbWUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihyZW5kZXIpO1xuICBXaXRoVGhlbWUuZGlzcGxheU5hbWUgPSBcIldpdGhUaGVtZShcIiArIGNvbXBvbmVudE5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcbn1cblxudmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG52YXIgdHlwZVByb3BOYW1lID0gJ19fRU1PVElPTl9UWVBFX1BMRUFTRV9ET19OT1RfVVNFX18nO1xudmFyIGNyZWF0ZUVtb3Rpb25Qcm9wcyA9IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlXG4vKjogUmVhY3QuRWxlbWVudFR5cGUgKi9cbiwgcHJvcHNcbi8qOiBPYmplY3QgKi9cbikge1xuXG4gIHZhciBuZXdQcm9wc1xuICAvKjogYW55ICovXG4gID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wc1t0eXBlUHJvcE5hbWVdID0gdHlwZTsgLy8gUnVudGltZSBsYWJlbGluZyBpcyBhbiBvcHQtaW4gZmVhdHVyZSBiZWNhdXNlOlxuXG4gIHJldHVybiBuZXdQcm9wcztcbn07XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZCA9IF9yZWYuc2VyaWFsaXplZCxcbiAgICAgIGlzU3RyaW5nVGFnID0gX3JlZi5pc1N0cmluZ1RhZztcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpO1xuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBFbW90aW9uID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShcbi8qIDxhbnksIGFueT4gKi9cbmZ1bmN0aW9uIChwcm9wcywgY2FjaGUsIHJlZikge1xuICB2YXIgY3NzUHJvcCA9IHByb3BzLmNzczsgLy8gc28gdGhhdCB1c2luZyBgY3NzYCBmcm9tIGBlbW90aW9uYCBhbmQgcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBjc3MgcHJvcCB3b3Jrc1xuICAvLyBub3QgcGFzc2luZyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBzZXJpYWxpemVTdHlsZXMgYmVjYXVzZSBpdCB3b3VsZFxuICAvLyBtYWtlIGNlcnRhaW4gYmFiZWwgb3B0aW1pc2F0aW9ucyBub3QgcG9zc2libGVcblxuICBpZiAodHlwZW9mIGNzc1Byb3AgPT09ICdzdHJpbmcnICYmIGNhY2hlLnJlZ2lzdGVyZWRbY3NzUHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGNzc1Byb3AgPSBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdO1xuICB9XG5cbiAgdmFyIFdyYXBwZWRDb21wb25lbnQgPSBwcm9wc1t0eXBlUHJvcE5hbWVdO1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtjc3NQcm9wXTtcbiAgdmFyIGNsYXNzTmFtZSA9ICcnO1xuXG4gIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xuICAgIGNsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMoY2FjaGUucmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgcHJvcHMuY2xhc3NOYW1lKTtcbiAgfSBlbHNlIGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkge1xuICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSArIFwiIFwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMocmVnaXN0ZXJlZFN0eWxlcywgdW5kZWZpbmVkLCBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCkpO1xuXG4gIGNsYXNzTmFtZSArPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGhhc093bi5jYWxsKHByb3BzLCBrZXkpICYmIGtleSAhPT0gJ2NzcycgJiYga2V5ICE9PSB0eXBlUHJvcE5hbWUgJiYgKCFpc0RldmVsb3BtZW50ICkpIHtcbiAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIG5ld1Byb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblxuICBpZiAocmVmKSB7XG4gICAgbmV3UHJvcHMucmVmID0gcmVmO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnNlcnRpb24sIHtcbiAgICBjYWNoZTogY2FjaGUsXG4gICAgc2VyaWFsaXplZDogc2VyaWFsaXplZCxcbiAgICBpc1N0cmluZ1RhZzogdHlwZW9mIFdyYXBwZWRDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBuZXdQcm9wcykpO1xufSk7XG5cbnZhciBFbW90aW9uJDEgPSBFbW90aW9uO1xuXG5leHBvcnQgeyBDYWNoZVByb3ZpZGVyIGFzIEMsIEVtb3Rpb24kMSBhcyBFLCBUaGVtZUNvbnRleHQgYXMgVCwgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlIGFzIF8sIFRoZW1lUHJvdmlkZXIgYXMgYSwgd2l0aFRoZW1lIGFzIGIsIGNyZWF0ZUVtb3Rpb25Qcm9wcyBhcyBjLCBoYXNPd24gYXMgaCwgaXNEZXZlbG9wbWVudCBhcyBpLCB1c2VUaGVtZSBhcyB1LCB3aXRoRW1vdGlvbkNhY2hlIGFzIHcgfTtcbiIsImltcG9ydCB7IGggYXMgaGFzT3duLCBFIGFzIEVtb3Rpb24sIGMgYXMgY3JlYXRlRW1vdGlvblByb3BzLCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUsIFQgYXMgVGhlbWVDb250ZXh0LCBpIGFzIGlzRGV2ZWxvcG1lbnQgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC01NDg2YzUxYy5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCBhIGFzIFRoZW1lUHJvdmlkZXIsIF8gYXMgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlLCB1IGFzIHVzZVRoZW1lLCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUsIGIgYXMgd2l0aFRoZW1lIH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtNTQ4NmM1MWMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5zZXJ0U3R5bGVzLCByZWdpc3RlclN0eWxlcywgZ2V0UmVnaXN0ZXJlZFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCB7IHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjaywgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayB9IGZyb20gJ0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzJztcbmltcG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCAnLi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG52YXIganN4XG4vKjogdHlwZW9mIFJlYWN0LmNyZWF0ZUVsZW1lbnQgKi9cbj0gZnVuY3Rpb24ganN4XG4vKjogdHlwZW9mIFJlYWN0LmNyZWF0ZUVsZW1lbnQgKi9cbih0eXBlXG4vKjogUmVhY3QuRWxlbWVudFR5cGUgKi9cbiwgcHJvcHNcbi8qOiBPYmplY3QgKi9cbikge1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICBpZiAocHJvcHMgPT0gbnVsbCB8fCAhaGFzT3duLmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH1cblxuICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMF0gPSBFbW90aW9uO1xuICBjcmVhdGVFbGVtZW50QXJnQXJyYXlbMV0gPSBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJnc0xlbmd0aDsgaSsrKSB7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50LmFwcGx5KG51bGwsIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSk7XG59O1xuXG4vLyBpbml0aWFsIHJlbmRlciBmcm9tIGJyb3dzZXIsIGluc2VydEJlZm9yZSBjb250ZXh0LnNoZWV0LnRhZ3NbMF0gb3IgaWYgYSBzdHlsZSBoYXNuJ3QgYmVlbiBpbnNlcnRlZCB0aGVyZSB5ZXQsIGFwcGVuZENoaWxkXG4vLyBpbml0aWFsIGNsaWVudC1zaWRlIHJlbmRlciBmcm9tIFNTUiwgdXNlIHBsYWNlIG9mIGh5ZHJhdGluZyB0YWdcblxudmFyIEdsb2JhbFxuLyo6IFJlYWN0LkFic3RyYWN0Q29tcG9uZW50PFxuR2xvYmFsUHJvcHNcbj4gKi9cbj0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHNcbi8qOiBHbG9iYWxQcm9wcyAqL1xuLCBjYWNoZSkge1xuXG4gIHZhciBzdHlsZXMgPSBwcm9wcy5zdHlsZXM7XG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKFtzdHlsZXNdLCB1bmRlZmluZWQsIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSk7XG4gIC8vIGJ1dCBpdCBpcyBiYXNlZCBvbiBhIGNvbnN0YW50IHRoYXQgd2lsbCBuZXZlciBjaGFuZ2UgYXQgcnVudGltZVxuICAvLyBpdCdzIGVmZmVjdGl2ZWx5IGxpa2UgaGF2aW5nIHR3byBpbXBsZW1lbnRhdGlvbnMgYW5kIHN3aXRjaGluZyB0aGVtIG91dFxuICAvLyBzbyBpdCdzIG5vdCBhY3R1YWxseSBicmVha2luZyBhbnl0aGluZ1xuXG5cbiAgdmFyIHNoZWV0UmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGtleSA9IGNhY2hlLmtleSArIFwiLWdsb2JhbFwiOyAvLyB1c2UgY2FzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL2lzc3Vlcy8yNjc1XG5cbiAgICB2YXIgc2hlZXQgPSBuZXcgY2FjaGUuc2hlZXQuY29uc3RydWN0b3Ioe1xuICAgICAga2V5OiBrZXksXG4gICAgICBub25jZTogY2FjaGUuc2hlZXQubm9uY2UsXG4gICAgICBjb250YWluZXI6IGNhY2hlLnNoZWV0LmNvbnRhaW5lcixcbiAgICAgIHNwZWVkeTogY2FjaGUuc2hlZXQuaXNTcGVlZHlcbiAgICB9KTtcbiAgICB2YXIgcmVoeWRyYXRpbmcgPSBmYWxzZTtcbiAgICB2YXIgbm9kZVxuICAgIC8qOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbCovXG4gICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbZGF0YS1lbW90aW9uPVxcXCJcIiArIGtleSArIFwiIFwiICsgc2VyaWFsaXplZC5uYW1lICsgXCJcXFwiXVwiKTtcblxuICAgIGlmIChjYWNoZS5zaGVldC50YWdzLmxlbmd0aCkge1xuICAgICAgc2hlZXQuYmVmb3JlID0gY2FjaGUuc2hlZXQudGFnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcmVoeWRyYXRpbmcgPSB0cnVlOyAvLyBjbGVhciB0aGUgaGFzaCBzbyB0aGlzIG5vZGUgd29uJ3QgYmUgcmVjb2duaXphYmxlIGFzIHJlaHlkcmF0YWJsZSBieSBvdGhlciA8R2xvYmFsLz5zXG5cbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBrZXkpO1xuICAgICAgc2hlZXQuaHlkcmF0ZShbbm9kZV0pO1xuICAgIH1cblxuICAgIHNoZWV0UmVmLmN1cnJlbnQgPSBbc2hlZXQsIHJlaHlkcmF0aW5nXTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9O1xuICB9LCBbY2FjaGVdKTtcbiAgdXNlSW5zZXJ0aW9uRWZmZWN0V2l0aExheW91dEZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hlZXRSZWZDdXJyZW50ID0gc2hlZXRSZWYuY3VycmVudDtcbiAgICB2YXIgc2hlZXQgPSBzaGVldFJlZkN1cnJlbnRbMF0sXG4gICAgICAgIHJlaHlkcmF0aW5nID0gc2hlZXRSZWZDdXJyZW50WzFdO1xuXG4gICAgaWYgKHJlaHlkcmF0aW5nKSB7XG4gICAgICBzaGVldFJlZkN1cnJlbnRbMV0gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VyaWFsaXplZC5uZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGluc2VydCBrZXlmcmFtZXNcbiAgICAgIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZC5uZXh0LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIC8vIGlmIHRoaXMgZG9lc24ndCBleGlzdCB0aGVuIGl0IHdpbGwgYmUgbnVsbCBzbyB0aGUgc3R5bGUgZWxlbWVudCB3aWxsIGJlIGFwcGVuZGVkXG4gICAgICB2YXIgZWxlbWVudCA9IHNoZWV0LnRhZ3Nbc2hlZXQudGFncy5sZW5ndGggLSAxXS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBzaGVldC5iZWZvcmUgPSBlbGVtZW50O1xuICAgICAgc2hlZXQuZmx1c2goKTtcbiAgICB9XG5cbiAgICBjYWNoZS5pbnNlcnQoXCJcIiwgc2VyaWFsaXplZCwgc2hlZXQsIGZhbHNlKTtcbiAgfSwgW2NhY2hlLCBzZXJpYWxpemVkLm5hbWVdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcblxuLyogaW1wb3J0IHR5cGUgeyBJbnRlcnBvbGF0aW9uLCBTZXJpYWxpemVkU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnICovXG5cbmZ1bmN0aW9uIGNzcygpXG4vKjogU2VyaWFsaXplZFN0eWxlcyAqL1xue1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZVN0eWxlcyhhcmdzKTtcbn1cblxuLypcbnR5cGUgS2V5ZnJhbWVzID0ge3xcbiAgbmFtZTogc3RyaW5nLFxuICBzdHlsZXM6IHN0cmluZyxcbiAgYW5pbTogMSxcbiAgdG9TdHJpbmc6ICgpID0+IHN0cmluZ1xufH0gJiBzdHJpbmdcbiovXG5cbnZhciBrZXlmcmFtZXMgPSBmdW5jdGlvblxuICAvKjogS2V5ZnJhbWVzICovXG5rZXlmcmFtZXMoKSB7XG4gIHZhciBpbnNlcnRhYmxlID0gY3NzLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgdmFyIG5hbWUgPSBcImFuaW1hdGlvbi1cIiArIGluc2VydGFibGUubmFtZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgbmFtZSArIFwie1wiICsgaW5zZXJ0YWJsZS5zdHlsZXMgKyBcIn1cIixcbiAgICBhbmltOiAxLFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIl9FTU9fXCIgKyB0aGlzLm5hbWUgKyBcIl9cIiArIHRoaXMuc3R5bGVzICsgXCJfRU1PX1wiO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qXG50eXBlIENsYXNzTmFtZUFyZyA9XG4gIHwgc3RyaW5nXG4gIHwgYm9vbGVhblxuICB8IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9XG4gIHwgQXJyYXk8Q2xhc3NOYW1lQXJnPlxuICB8IG51bGxcbiAgfCB2b2lkXG4qL1xuXG52YXIgY2xhc3NuYW1lcyA9IGZ1bmN0aW9uXG4gIC8qOiBzdHJpbmcgKi9cbmNsYXNzbmFtZXMoYXJnc1xuLyo6IEFycmF5PENsYXNzTmFtZUFyZz4gKi9cbikge1xuICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGNscyA9ICcnO1xuXG4gIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09IG51bGwpIGNvbnRpbnVlO1xuICAgIHZhciB0b0FkZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgICAgICAgdG9BZGQgPSBjbGFzc25hbWVzKGFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgdG9BZGQgPSAnJztcblxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ1trXSAmJiBrKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgKz0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICB0b0FkZCA9IGFyZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b0FkZCkge1xuICAgICAgY2xzICYmIChjbHMgKz0gJyAnKTtcbiAgICAgIGNscyArPSB0b0FkZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xzO1xufTtcblxuZnVuY3Rpb24gbWVyZ2UocmVnaXN0ZXJlZFxuLyo6IE9iamVjdCAqL1xuLCBjc3Ncbi8qOiAoLi4uYXJnczogQXJyYXk8YW55PikgPT4gc3RyaW5nICovXG4sIGNsYXNzTmFtZVxuLyo6IHN0cmluZyAqL1xuKSB7XG4gIHZhciByZWdpc3RlcmVkU3R5bGVzID0gW107XG4gIHZhciByYXdDbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZSk7XG5cbiAgaWYgKHJlZ2lzdGVyZWRTdHlsZXMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBjbGFzc05hbWU7XG4gIH1cblxuICByZXR1cm4gcmF3Q2xhc3NOYW1lICsgY3NzKHJlZ2lzdGVyZWRTdHlsZXMpO1xufVxuXG52YXIgSW5zZXJ0aW9uID0gZnVuY3Rpb24gSW5zZXJ0aW9uKF9yZWYpIHtcbiAgdmFyIGNhY2hlID0gX3JlZi5jYWNoZSxcbiAgICAgIHNlcmlhbGl6ZWRBcnIgPSBfcmVmLnNlcmlhbGl6ZWRBcnI7XG4gIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2soZnVuY3Rpb24gKCkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWRBcnJbaV0sIGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBudWxsO1xufTtcbi8qXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogKHtcbiAgICBjc3M6ICguLi5hcmdzOiBhbnkpID0+IHN0cmluZyxcbiAgICBjeDogKC4uLmFyZ3M6IEFycmF5PENsYXNzTmFtZUFyZz4pID0+IHN0cmluZyxcbiAgICB0aGVtZTogT2JqZWN0XG4gIH0pID0+IFJlYWN0Lk5vZGVcbn0gKi9cblxuXG52YXIgQ2xhc3NOYW1lc1xuLyo6IFJlYWN0LkFic3RyYWN0Q29tcG9uZW50PFByb3BzPiovXG49IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzLCBjYWNoZSkge1xuICB2YXIgaGFzUmVuZGVyZWQgPSBmYWxzZTtcbiAgdmFyIHNlcmlhbGl6ZWRBcnIgPSBbXTtcblxuICB2YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBpc0RldmVsb3BtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NzcyBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWQgPSBzZXJpYWxpemVTdHlsZXMoYXJncywgY2FjaGUucmVnaXN0ZXJlZCk7XG4gICAgc2VyaWFsaXplZEFyci5wdXNoKHNlcmlhbGl6ZWQpOyAvLyByZWdpc3RyYXRpb24gaGFzIHRvIGhhcHBlbiBoZXJlIGFzIHRoZSByZXN1bHQgb2YgdGhpcyBtaWdodCBnZXQgY29uc3VtZWQgYnkgYGN4YFxuXG4gICAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGZhbHNlKTtcbiAgICByZXR1cm4gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIH07XG5cbiAgdmFyIGN4ID0gZnVuY3Rpb24gY3goKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIGlzRGV2ZWxvcG1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3ggY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlKGNhY2hlLnJlZ2lzdGVyZWQsIGNzcywgY2xhc3NuYW1lcyhhcmdzKSk7XG4gIH07XG5cbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY3NzOiBjc3MsXG4gICAgY3g6IGN4LFxuICAgIHRoZW1lOiBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgfTtcbiAgdmFyIGVsZSA9IHByb3BzLmNoaWxkcmVuKGNvbnRlbnQpO1xuICBoYXNSZW5kZXJlZCA9IHRydWU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWRBcnI6IHNlcmlhbGl6ZWRBcnJcbiAgfSksIGVsZSk7XG59KTtcblxuZXhwb3J0IHsgQ2xhc3NOYW1lcywgR2xvYmFsLCBqc3ggYXMgY3JlYXRlRWxlbWVudCwgY3NzLCBqc3gsIGtleWZyYW1lcyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qc1xuLy8gUG9ydGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FhcHBsZWJ5L3NtaGFzaGVyL2Jsb2IvNjFhMDUzMGYyODI3N2YyZTg1MGJmYzM5NjAwY2U2MWQwMmI1MThkZS9zcmMvTXVybXVySGFzaDIuY3BwI0wzNy1MODZcbmZ1bmN0aW9uIG11cm11cjIoc3RyKSB7XG4gIC8vICdtJyBhbmQgJ3InIGFyZSBtaXhpbmcgY29uc3RhbnRzIGdlbmVyYXRlZCBvZmZsaW5lLlxuICAvLyBUaGV5J3JlIG5vdCByZWFsbHkgJ21hZ2ljJywgdGhleSBqdXN0IGhhcHBlbiB0byB3b3JrIHdlbGwuXG4gIC8vIGNvbnN0IG0gPSAweDViZDFlOTk1O1xuICAvLyBjb25zdCByID0gMjQ7XG4gIC8vIEluaXRpYWxpemUgdGhlIGhhc2hcbiAgdmFyIGggPSAwOyAvLyBNaXggNCBieXRlcyBhdCBhIHRpbWUgaW50byB0aGUgaGFzaFxuXG4gIHZhciBrLFxuICAgICAgaSA9IDAsXG4gICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuXG4gIGZvciAoOyBsZW4gPj0gNDsgKytpLCBsZW4gLT0gNCkge1xuICAgIGsgPSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDggfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNDtcbiAgICBrID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgICBrIF49XG4gICAgLyogayA+Pj4gcjogKi9cbiAgICBrID4+PiAyNDtcbiAgICBoID1cbiAgICAvKiBNYXRoLmltdWwoaywgbSk6ICovXG4gICAgKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoayA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KSBeXG4gICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gSGFuZGxlIHRoZSBsYXN0IGZldyBieXRlcyBvZiB0aGUgaW5wdXQgYXJyYXlcblxuXG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAzOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDIpICYgMHhmZikgPDwgMTY7XG5cbiAgICBjYXNlIDI6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xuXG4gICAgY2FzZSAxOlxuICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICBoID1cbiAgICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAgIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIH0gLy8gRG8gYSBmZXcgZmluYWwgbWl4ZXMgb2YgdGhlIGhhc2ggdG8gZW5zdXJlIHRoZSBsYXN0IGZld1xuICAvLyBieXRlcyBhcmUgd2VsbC1pbmNvcnBvcmF0ZWQuXG5cblxuICBoIF49IGggPj4+IDEzO1xuICBoID1cbiAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICByZXR1cm4gKChoIF4gaCA+Pj4gMTUpID4+PiAwKS50b1N0cmluZygzNik7XG59XG5cbmV4cG9ydCB7IG11cm11cjIgYXMgZGVmYXVsdCB9O1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGFzcGVjdFJhdGlvOiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgeyB1bml0bGVzc0tleXMgYXMgZGVmYXVsdCB9O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgeyBtZW1vaXplIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBoYXNoU3RyaW5nIGZyb20gJ0BlbW90aW9uL2hhc2gnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgaXNEZXZlbG9wbWVudCA9IGZhbHNlO1xuXG52YXIgaHlwaGVuYXRlUmVnZXggPSAvW0EtWl18Xm1zL2c7XG52YXIgYW5pbWF0aW9uUmVnZXggPSAvX0VNT18oW15fXSs/KV8oW15dKj8pX0VNT18vZztcblxudmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gIHJldHVybiBwcm9wZXJ0eS5jaGFyQ29kZUF0KDEpID09PSA0NTtcbn07XG5cbnZhciBpc1Byb2Nlc3NhYmxlVmFsdWUgPSBmdW5jdGlvbiBpc1Byb2Nlc3NhYmxlVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSAnYm9vbGVhbic7XG59O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IC8qICNfX1BVUkVfXyAqL21lbW9pemUoZnVuY3Rpb24gKHN0eWxlTmFtZSkge1xuICByZXR1cm4gaXNDdXN0b21Qcm9wZXJ0eShzdHlsZU5hbWUpID8gc3R5bGVOYW1lIDogc3R5bGVOYW1lLnJlcGxhY2UoaHlwaGVuYXRlUmVnZXgsICctJCYnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBwcm9jZXNzU3R5bGVWYWx1ZSA9IGZ1bmN0aW9uIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWUpIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhbmltYXRpb24nOlxuICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGFuaW1hdGlvblJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gsIHAxLCBwMikge1xuICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICBuYW1lOiBwMSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBwMixcbiAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICBpZiAodW5pdGxlc3Nba2V5XSAhPT0gMSAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdmFsdWUgKyAncHgnO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIG5vQ29tcG9uZW50U2VsZWN0b3JNZXNzYWdlID0gJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoICcgKyAnQGVtb3Rpb24vYmFiZWwtcGx1Z2luLCB0aGUgc3djIEVtb3Rpb24gcGx1Z2luLCBvciBhbm90aGVyIEVtb3Rpb24tYXdhcmUgJyArICdjb21waWxlciB0cmFuc2Zvcm0uJztcblxuZnVuY3Rpb24gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbikge1xuICBpZiAoaW50ZXJwb2xhdGlvbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGNvbXBvbmVudFNlbGVjdG9yID0gaW50ZXJwb2xhdGlvbjtcblxuICBpZiAoY29tcG9uZW50U2VsZWN0b3IuX19lbW90aW9uX3N0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICByZXR1cm4gY29tcG9uZW50U2VsZWN0b3I7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGVvZiBpbnRlcnBvbGF0aW9uKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB7XG4gICAgICAgIHZhciBrZXlmcmFtZXMgPSBpbnRlcnBvbGF0aW9uO1xuXG4gICAgICAgIGlmIChrZXlmcmFtZXMuYW5pbSA9PT0gMSkge1xuICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgIG5hbWU6IGtleWZyYW1lcy5uYW1lLFxuICAgICAgICAgICAgc3R5bGVzOiBrZXlmcmFtZXMuc3R5bGVzLFxuICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4ga2V5ZnJhbWVzLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VyaWFsaXplZFN0eWxlcyA9IGludGVycG9sYXRpb247XG5cbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdHlsZXMuc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IHNlcmlhbGl6ZWRTdHlsZXMubmV4dDtcblxuICAgICAgICAgIGlmIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgbW9zdCBlZmZpY2llbnQgdGhpbmcgZXZlciBidXQgdGhpcyBpcyBhIHByZXR0eSByYXJlIGNhc2VcbiAgICAgICAgICAgIC8vIGFuZCB0aGVyZSB3aWxsIGJlIHZlcnkgZmV3IGl0ZXJhdGlvbnMgb2YgdGhpcyBnZW5lcmFsbHlcbiAgICAgICAgICAgIHdoaWxlIChuZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY3Vyc29yID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5leHQubmFtZSxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IG5leHQuc3R5bGVzLFxuICAgICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBuZXh0ID0gbmV4dC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZXMgPSBzZXJpYWxpemVkU3R5bGVzLnN0eWxlcyArIFwiO1wiO1xuXG4gICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKG1lcmdlZFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xuICAgICAgICAgIGN1cnNvciA9IHByZXZpb3VzQ3Vyc29yO1xuICAgICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gIH0gLy8gZmluYWxpemUgc3RyaW5nIHZhbHVlcyAocmVndWxhciBzdHJpbmdzIGFuZCBmdW5jdGlvbnMgaW50ZXJwb2xhdGVkIGludG8gY3NzIGNhbGxzKVxuXG5cbiAgdmFyIGFzU3RyaW5nID0gaW50ZXJwb2xhdGlvbjtcblxuICBpZiAocmVnaXN0ZXJlZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGFzU3RyaW5nO1xuICB9XG5cbiAgdmFyIGNhY2hlZCA9IHJlZ2lzdGVyZWRbYXNTdHJpbmddO1xuICByZXR1cm4gY2FjaGVkICE9PSB1bmRlZmluZWQgPyBjYWNoZWQgOiBhc1N0cmluZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqKSB7XG4gIHZhciBzdHJpbmcgPSAnJztcblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0cmluZyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmpbaV0pICsgXCI7XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgYXNTdHJpbmcgPSB2YWx1ZTtcblxuICAgICAgICBpZiAocmVnaXN0ZXJlZCAhPSBudWxsICYmIHJlZ2lzdGVyZWRbYXNTdHJpbmddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdHJpbmcgKz0ga2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW2FzU3RyaW5nXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZShhc1N0cmluZykpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShrZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIGFzU3RyaW5nKSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBpc0RldmVsb3BtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5vQ29tcG9uZW50U2VsZWN0b3JNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWVbMF0gPT09ICdzdHJpbmcnICYmIChyZWdpc3RlcmVkID09IG51bGwgfHwgcmVnaXN0ZXJlZFt2YWx1ZVswXV0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdmFsdWUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlW19pXSkpIHtcbiAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCB2YWx1ZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbk5hbWUnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgaW50ZXJwb2xhdGVkICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGtleSArIFwie1wiICsgaW50ZXJwb2xhdGVkICsgXCJ9XCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG52YXIgbGFiZWxQYXR0ZXJuID0gL2xhYmVsOlxccyooW15cXHM7XFxue10rKVxccyooO3wkKS9nO1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xuZnVuY3Rpb24gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIHJlZ2lzdGVyZWQsIG1lcmdlZFByb3BzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJnc1swXSA9PT0gJ29iamVjdCcgJiYgYXJnc1swXSAhPT0gbnVsbCAmJiBhcmdzWzBdLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFyZ3NbMF07XG4gIH1cblxuICB2YXIgc3RyaW5nTW9kZSA9IHRydWU7XG4gIHZhciBzdHlsZXMgPSAnJztcbiAgY3Vyc29yID0gdW5kZWZpbmVkO1xuICB2YXIgc3RyaW5ncyA9IGFyZ3NbMF07XG5cbiAgaWYgKHN0cmluZ3MgPT0gbnVsbCB8fCBzdHJpbmdzLnJhdyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaW5nTW9kZSA9IGZhbHNlO1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBzdHJpbmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYXNUZW1wbGF0ZVN0cmluZ3NBcnIgPSBzdHJpbmdzO1xuXG4gICAgc3R5bGVzICs9IGFzVGVtcGxhdGVTdHJpbmdzQXJyWzBdO1xuICB9IC8vIHdlIHN0YXJ0IGF0IDEgc2luY2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBmaXJzdCBhcmdcblxuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgIHN0eWxlcyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBhcmdzW2ldKTtcblxuICAgIGlmIChzdHJpbmdNb2RlKSB7XG4gICAgICB2YXIgdGVtcGxhdGVTdHJpbmdzQXJyID0gc3RyaW5ncztcblxuICAgICAgc3R5bGVzICs9IHRlbXBsYXRlU3RyaW5nc0FycltpXTtcbiAgICB9XG4gIH1cblxuXG4gIGxhYmVsUGF0dGVybi5sYXN0SW5kZXggPSAwO1xuICB2YXIgaWRlbnRpZmllck5hbWUgPSAnJztcbiAgdmFyIG1hdGNoOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViODA5YzJjZjI5NDk4MDBhMGY2MWZiNVxuXG4gIHdoaWxlICgobWF0Y2ggPSBsYWJlbFBhdHRlcm4uZXhlYyhzdHlsZXMpKSAhPT0gbnVsbCkge1xuICAgIGlkZW50aWZpZXJOYW1lICs9ICctJyArIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbmV4dDogY3Vyc29yXG4gIH07XG59XG5cbmV4cG9ydCB7IHNlcmlhbGl6ZVN0eWxlcyB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgc3luY0ZhbGxiYWNrID0gZnVuY3Rpb24gc3luY0ZhbGxiYWNrKGNyZWF0ZSkge1xuICByZXR1cm4gY3JlYXRlKCk7XG59O1xuXG52YXIgdXNlSW5zZXJ0aW9uRWZmZWN0ID0gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gPyBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA6IGZhbHNlO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2sgPSB1c2VJbnNlcnRpb25FZmZlY3QgfHwgc3luY0ZhbGxiYWNrO1xudmFyIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayA9IHVzZUluc2VydGlvbkVmZmVjdCB8fCBSZWFjdC51c2VMYXlvdXRFZmZlY3Q7XG5cbmV4cG9ydCB7IHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2ssIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayB9O1xuIiwidmFyIGlzQnJvd3NlciA9IHRydWU7XG5cbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gKyBcIjtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIHJlZ2lzdGVyU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoIC8vIHdlIG9ubHkgbmVlZCB0byBhZGQgdGhlIHN0eWxlcyB0byB0aGUgcmVnaXN0ZXJlZCBjYWNoZSBpZiB0aGVcbiAgLy8gY2xhc3MgbmFtZSBjb3VsZCBiZSB1c2VkIGZ1cnRoZXIgZG93blxuICAvLyB0aGUgdHJlZSBidXQgaWYgaXQncyBhIHN0cmluZyB0YWcsIHdlIGtub3cgaXQgd29uJ3RcbiAgLy8gc28gd2UgZG9uJ3QgaGF2ZSB0byBhZGQgaXQgdG8gcmVnaXN0ZXJlZCBjYWNoZS5cbiAgLy8gdGhpcyBpbXByb3ZlcyBtZW1vcnkgdXNhZ2Ugc2luY2Ugd2UgY2FuIGF2b2lkIHN0b3JpbmcgdGhlIHdob2xlIHN0eWxlIHN0cmluZ1xuICAoaXNTdHJpbmdUYWcgPT09IGZhbHNlIHx8IC8vIHdlIG5lZWQgdG8gYWx3YXlzIHN0b3JlIGl0IGlmIHdlJ3JlIGluIGNvbXBhdCBtb2RlIGFuZFxuICAvLyBpbiBub2RlIHNpbmNlIGVtb3Rpb24tc2VydmVyIHJlbGllcyBvbiB3aGV0aGVyIGEgc3R5bGUgaXMgaW5cbiAgLy8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8ga25vdyB3aGV0aGVyIGEgc3R5bGUgaXMgZ2xvYmFsIG9yIG5vdFxuICAvLyBhbHNvLCBub3RlIHRoYXQgdGhpcyBjaGVjayB3aWxsIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkIGluIHRoZSBicm93c2VyXG4gIGlzQnJvd3NlciA9PT0gZmFsc2UgKSAmJiBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9IHNlcmlhbGl6ZWQuc3R5bGVzO1xuICB9XG59O1xudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgcmVnaXN0ZXJTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmIChjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3VycmVudCA9IHNlcmlhbGl6ZWQ7XG5cbiAgICBkbyB7XG4gICAgICBjYWNoZS5pbnNlcnQoc2VyaWFsaXplZCA9PT0gY3VycmVudCA/IFwiLlwiICsgY2xhc3NOYW1lIDogJycsIGN1cnJlbnQsIGNhY2hlLnNoZWV0LCB0cnVlKTtcblxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IHdoaWxlIChjdXJyZW50ICE9PSB1bmRlZmluZWQpO1xuICB9XG59O1xuXG5leHBvcnQgeyBnZXRSZWdpc3RlcmVkU3R5bGVzLCBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzIH07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdEpTWFJ1bnRpbWUgZnJvbSAncmVhY3QvanN4LXJ1bnRpbWUnO1xuaW1wb3J0IHsgaCBhcyBoYXNPd24sIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9kaXN0L2Vtb3Rpb24tZWxlbWVudC01NDg2YzUxYy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ3JlYWN0JztcbmltcG9ydCAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICcuLi8uLi9faXNvbGF0ZWQtaG5ycy9kaXN0L2Vtb3Rpb24tcmVhY3QtX2lzb2xhdGVkLWhucnMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3V0aWxzJztcbmltcG9ydCAnQGVtb3Rpb24vc2VyaWFsaXplJztcbmltcG9ydCAnQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MnO1xuXG52YXIgRnJhZ21lbnQgPSBSZWFjdEpTWFJ1bnRpbWUuRnJhZ21lbnQ7XG5mdW5jdGlvbiBqc3godHlwZSwgcHJvcHMsIGtleSkge1xuICBpZiAoIWhhc093bi5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICByZXR1cm4gUmVhY3RKU1hSdW50aW1lLmpzeCh0eXBlLCBwcm9wcywga2V5KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEpTWFJ1bnRpbWUuanN4KEVtb3Rpb24sIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyksIGtleSk7XG59XG5mdW5jdGlvbiBqc3hzKHR5cGUsIHByb3BzLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24uY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgcmV0dXJuIFJlYWN0SlNYUnVudGltZS5qc3hzKHR5cGUsIHByb3BzLCBrZXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0SlNYUnVudGltZS5qc3hzKEVtb3Rpb24sIGNyZWF0ZUVtb3Rpb25Qcm9wcyh0eXBlLCBwcm9wcyksIGtleSk7XG59XG5cbmV4cG9ydCB7IEZyYWdtZW50LCBqc3gsIGpzeHMgfTtcbiIsInZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG52YXIgSG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIHsgY3NzOiBjc3ModGVtcGxhdGVPYmplY3RfMSB8fCAodGVtcGxhdGVPYmplY3RfMSA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIHBhZGRpbmc6IDgwcHggMTIwcHg7XFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcXG4gICAgICBwYWRkaW5nOiAyNHB4IDQwcHg7XFxuICAgICAgXCJdLCBbXCJcXG4gICAgICBwYWRkaW5nOiA4MHB4IDEyMHB4O1xcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAgICAgcGFkZGluZzogMjRweCA0MHB4O1xcbiAgICAgIFwiXSkpKSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG52YXIgdGVtcGxhdGVPYmplY3RfMTtcbiIsInZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBHbG9iYWwsIGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IGVtb3Rpb25Ob3JtYWxpemUgZnJvbSBcImVtb3Rpb24tbm9ybWFsaXplXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vcGFnZXMvSG9tZVBhZ2VcIjtcbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChfanN4cyhfRnJhZ21lbnQsIHsgY2hpbGRyZW46IFtfanN4KEdsb2JhbCwgeyBzdHlsZXM6IGNzcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgICAgIFwiLCBcIlxcbiAgICAgICAgXCJdLCBbXCJcXG4gICAgICAgICAgXCIsIFwiXFxuICAgICAgICBcIl0pKSwgZW1vdGlvbk5vcm1hbGl6ZSkgfSksIF9qc3goSG9tZVBhZ2UsIHt9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcDtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xudmFyIHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcihfanN4KFJlYWN0LlN0cmljdE1vZGUsIHsgY2hpbGRyZW46IF9qc3goQXBwLCB7fSkgfSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTtcblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IFxcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgXFxuICBoZWlnaHQ6IDA7IFxcbiAgb3ZlcmZsb3c6IHZpc2libGU7IFxcbn1cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyBcXG4gIGZvbnQtc2l6ZTogMWVtOyBcXG59XFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IFxcbn1cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgXFxuICBmb250LXNpemU6IDFlbTsgXFxufVxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgXFxuICBmb250LXNpemU6IDEwMCU7IFxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IFxcbiAgbWFyZ2luOiAwOyBcXG59XFxuYnV0dG9uLFxcbmlucHV0IHsgXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuYnV0dG9uLFxcbnNlbGVjdCB7IFxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbiAgY29sb3I6IGluaGVyaXQ7IFxcbiAgZGlzcGxheTogdGFibGU7IFxcbiAgbWF4LXdpZHRoOiAxMDAlOyBcXG4gIHBhZGRpbmc6IDA7IFxcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgXFxufVxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxcbiAgcGFkZGluZzogMDsgXFxufVxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IFxcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IFxcbn1cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyBcXG4gIGZvbnQ6IGluaGVyaXQ7IFxcbn1cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IGlmICghcmF3KSB7IHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7IH0gcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTsgfVxuXG52YXIgbm9ybWFsaXplID0gKDAsIF9yZWFjdC5jc3MpKF90ZW1wbGF0ZU9iamVjdCgpKTtcbnZhciBfZGVmYXVsdCA9IG5vcm1hbGl6ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLypcbiBNb2Rlcm5penIgMy4wLjBwcmUgKEN1c3RvbSBCdWlsZCkgfCBNSVRcbiovXG4ndXNlIHN0cmljdCc7dmFyIGFhPXJlcXVpcmUoXCJyZWFjdFwiKSxjYT1yZXF1aXJlKFwic2NoZWR1bGVyXCIpO2Z1bmN0aW9uIHAoYSl7Zm9yKHZhciBiPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxjPTE7Yzxhcmd1bWVudHMubGVuZ3RoO2MrKyliKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tjXSk7cmV0dXJuXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgXCIrYitcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCJ9dmFyIGRhPW5ldyBTZXQsZWE9e307ZnVuY3Rpb24gZmEoYSxiKXtoYShhLGIpO2hhKGErXCJDYXB0dXJlXCIsYil9XG5mdW5jdGlvbiBoYShhLGIpe2VhW2FdPWI7Zm9yKGE9MDthPGIubGVuZ3RoO2ErKylkYS5hZGQoYlthXSl9XG52YXIgaWE9IShcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnR8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpLGphPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksa2E9L15bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFwtLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBdKiQvLGxhPVxue30sbWE9e307ZnVuY3Rpb24gb2EoYSl7aWYoamEuY2FsbChtYSxhKSlyZXR1cm4hMDtpZihqYS5jYWxsKGxhLGEpKXJldHVybiExO2lmKGthLnRlc3QoYSkpcmV0dXJuIG1hW2FdPSEwO2xhW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIHBhKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcWEoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8cGEoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiB2KGEsYixjLGQsZSxmLGcpe3RoaXMuYWNjZXB0c0Jvb2xlYW5zPTI9PT1ifHwzPT09Ynx8ND09PWI7dGhpcy5hdHRyaWJ1dGVOYW1lPWQ7dGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9ZTt0aGlzLm11c3RVc2VQcm9wZXJ0eT1jO3RoaXMucHJvcGVydHlOYW1lPWE7dGhpcy50eXBlPWI7dGhpcy5zYW5pdGl6ZVVSTD1mO3RoaXMucmVtb3ZlRW1wdHlTdHJpbmc9Z312YXIgej17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDAsITEsYSxudWxsLCExLCExKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTt6W2JdPW5ldyB2KGIsMSwhMSxhWzFdLG51bGwsITEsITEpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDIsITEsYSxudWxsLCExLCExKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIGRpc2FibGVSZW1vdGVQbGF5YmFjayBmb3JtTm9WYWxpZGF0ZSBoaWRkZW4gbG9vcCBub01vZHVsZSBub1ZhbGlkYXRlIG9wZW4gcGxheXNJbmxpbmUgcmVhZE9ubHkgcmVxdWlyZWQgcmV2ZXJzZWQgc2NvcGVkIHNlYW1sZXNzIGl0ZW1TY29wZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSwzLCExLGEudG9Mb3dlckNhc2UoKSxudWxsLCExLCExKX0pO1xuW1wiY2hlY2tlZFwiLFwibXVsdGlwbGVcIixcIm11dGVkXCIsXCJzZWxlY3RlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSwzLCEwLGEsbnVsbCwhMSwhMSl9KTtbXCJjYXB0dXJlXCIsXCJkb3dubG9hZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3pbYV09bmV3IHYoYSw0LCExLGEsbnVsbCwhMSwhMSl9KTtbXCJjb2xzXCIsXCJyb3dzXCIsXCJzaXplXCIsXCJzcGFuXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDYsITEsYSxudWxsLCExLCExKX0pO1tcInJvd1NwYW5cIixcInN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDUsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7dmFyIHJhPS9bXFwtOl0oW2Etel0pL2c7ZnVuY3Rpb24gc2EoYSl7cmV0dXJuIGFbMV0udG9VcHBlckNhc2UoKX1cblwiYWNjZW50LWhlaWdodCBhbGlnbm1lbnQtYmFzZWxpbmUgYXJhYmljLWZvcm0gYmFzZWxpbmUtc2hpZnQgY2FwLWhlaWdodCBjbGlwLXBhdGggY2xpcC1ydWxlIGNvbG9yLWludGVycG9sYXRpb24gY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIGNvbG9yLXByb2ZpbGUgY29sb3ItcmVuZGVyaW5nIGRvbWluYW50LWJhc2VsaW5lIGVuYWJsZS1iYWNrZ3JvdW5kIGZpbGwtb3BhY2l0eSBmaWxsLXJ1bGUgZmxvb2QtY29sb3IgZmxvb2Qtb3BhY2l0eSBmb250LWZhbWlseSBmb250LXNpemUgZm9udC1zaXplLWFkanVzdCBmb250LXN0cmV0Y2ggZm9udC1zdHlsZSBmb250LXZhcmlhbnQgZm9udC13ZWlnaHQgZ2x5cGgtbmFtZSBnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsIGdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsIGhvcml6LWFkdi14IGhvcml6LW9yaWdpbi14IGltYWdlLXJlbmRlcmluZyBsZXR0ZXItc3BhY2luZyBsaWdodGluZy1jb2xvciBtYXJrZXItZW5kIG1hcmtlci1taWQgbWFya2VyLXN0YXJ0IG92ZXJsaW5lLXBvc2l0aW9uIG92ZXJsaW5lLXRoaWNrbmVzcyBwYWludC1vcmRlciBwYW5vc2UtMSBwb2ludGVyLWV2ZW50cyByZW5kZXJpbmctaW50ZW50IHNoYXBlLXJlbmRlcmluZyBzdG9wLWNvbG9yIHN0b3Atb3BhY2l0eSBzdHJpa2V0aHJvdWdoLXBvc2l0aW9uIHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzIHN0cm9rZS1kYXNoYXJyYXkgc3Ryb2tlLWRhc2hvZmZzZXQgc3Ryb2tlLWxpbmVjYXAgc3Ryb2tlLWxpbmVqb2luIHN0cm9rZS1taXRlcmxpbWl0IHN0cm9rZS1vcGFjaXR5IHN0cm9rZS13aWR0aCB0ZXh0LWFuY2hvciB0ZXh0LWRlY29yYXRpb24gdGV4dC1yZW5kZXJpbmcgdW5kZXJsaW5lLXBvc2l0aW9uIHVuZGVybGluZS10aGlja25lc3MgdW5pY29kZS1iaWRpIHVuaWNvZGUtcmFuZ2UgdW5pdHMtcGVyLWVtIHYtYWxwaGFiZXRpYyB2LWhhbmdpbmcgdi1pZGVvZ3JhcGhpYyB2LW1hdGhlbWF0aWNhbCB2ZWN0b3ItZWZmZWN0IHZlcnQtYWR2LXkgdmVydC1vcmlnaW4teCB2ZXJ0LW9yaWdpbi15IHdvcmQtc3BhY2luZyB3cml0aW5nLW1vZGUgeG1sbnM6eGxpbmsgeC1oZWlnaHRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmEsXG5zYSk7eltiXT1uZXcgdihiLDEsITEsYSxudWxsLCExLCExKX0pO1wieGxpbms6YWN0dWF0ZSB4bGluazphcmNyb2xlIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJhLHNhKTt6W2JdPW5ldyB2KGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLCExLCExKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJhLHNhKTt6W2JdPW5ldyB2KGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIsITEsITEpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG56LnhsaW5rSHJlZj1uZXcgdihcInhsaW5rSHJlZlwiLDEsITEsXCJ4bGluazpocmVmXCIsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITAsITEpO1tcInNyY1wiLFwiaHJlZlwiLFwiYWN0aW9uXCIsXCJmb3JtQWN0aW9uXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITAsITApfSk7XG5mdW5jdGlvbiB0YShhLGIsYyxkKXt2YXIgZT16Lmhhc093blByb3BlcnR5KGIpP3pbYl06bnVsbDtpZihudWxsIT09ZT8wIT09ZS50eXBlOmR8fCEoMjxiLmxlbmd0aCl8fFwib1wiIT09YlswXSYmXCJPXCIhPT1iWzBdfHxcIm5cIiE9PWJbMV0mJlwiTlwiIT09YlsxXSlxYShiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/b2EoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpfVxudmFyIHVhPWFhLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELHZhPVN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpLHdhPVN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIikseWE9U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLHphPVN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxBYT1TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksQmE9U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpLENhPVN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpLERhPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxFYT1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIiksRmE9U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIiksR2E9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIiksSGE9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik7U3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpO1N5bWJvbC5mb3IoXCJyZWFjdC5kZWJ1Z190cmFjZV9tb2RlXCIpO1xudmFyIElhPVN5bWJvbC5mb3IoXCJyZWFjdC5vZmZzY3JlZW5cIik7U3ltYm9sLmZvcihcInJlYWN0LmxlZ2FjeV9oaWRkZW5cIik7U3ltYm9sLmZvcihcInJlYWN0LmNhY2hlXCIpO1N5bWJvbC5mb3IoXCJyZWFjdC50cmFjaW5nX21hcmtlclwiKTt2YXIgSmE9U3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIEthKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT1KYSYmYVtKYV18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH12YXIgQT1PYmplY3QuYXNzaWduLExhO2Z1bmN0aW9uIE1hKGEpe2lmKHZvaWQgMD09PUxhKXRyeXt0aHJvdyBFcnJvcigpO31jYXRjaChjKXt2YXIgYj1jLnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO0xhPWImJmJbMV18fFwiXCJ9cmV0dXJuXCJcXG5cIitMYSthfXZhciBOYT0hMTtcbmZ1bmN0aW9uIE9hKGEsYil7aWYoIWF8fE5hKXJldHVyblwiXCI7TmE9ITA7dmFyIGM9RXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7RXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9dm9pZCAwO3RyeXtpZihiKWlmKGI9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO30sT2JqZWN0LmRlZmluZVByb3BlcnR5KGIucHJvdG90eXBlLFwicHJvcHNcIix7c2V0OmZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoKTt9fSksXCJvYmplY3RcIj09PXR5cGVvZiBSZWZsZWN0JiZSZWZsZWN0LmNvbnN0cnVjdCl7dHJ5e1JlZmxlY3QuY29uc3RydWN0KGIsW10pfWNhdGNoKGwpe3ZhciBkPWx9UmVmbGVjdC5jb25zdHJ1Y3QoYSxbXSxiKX1lbHNle3RyeXtiLmNhbGwoKX1jYXRjaChsKXtkPWx9YS5jYWxsKGIucHJvdG90eXBlKX1lbHNle3RyeXt0aHJvdyBFcnJvcigpO31jYXRjaChsKXtkPWx9YSgpfX1jYXRjaChsKXtpZihsJiZkJiZcInN0cmluZ1wiPT09dHlwZW9mIGwuc3RhY2spe2Zvcih2YXIgZT1sLnN0YWNrLnNwbGl0KFwiXFxuXCIpLFxuZj1kLnN0YWNrLnNwbGl0KFwiXFxuXCIpLGc9ZS5sZW5ndGgtMSxoPWYubGVuZ3RoLTE7MTw9ZyYmMDw9aCYmZVtnXSE9PWZbaF07KWgtLTtmb3IoOzE8PWcmJjA8PWg7Zy0tLGgtLSlpZihlW2ddIT09ZltoXSl7aWYoMSE9PWd8fDEhPT1oKXtkbyBpZihnLS0saC0tLDA+aHx8ZVtnXSE9PWZbaF0pe3ZhciBrPVwiXFxuXCIrZVtnXS5yZXBsYWNlKFwiIGF0IG5ldyBcIixcIiBhdCBcIik7YS5kaXNwbGF5TmFtZSYmay5pbmNsdWRlcyhcIjxhbm9ueW1vdXM+XCIpJiYoaz1rLnJlcGxhY2UoXCI8YW5vbnltb3VzPlwiLGEuZGlzcGxheU5hbWUpKTtyZXR1cm4ga313aGlsZSgxPD1nJiYwPD1oKX1icmVha319fWZpbmFsbHl7TmE9ITEsRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U9Y31yZXR1cm4oYT1hP2EuZGlzcGxheU5hbWV8fGEubmFtZTpcIlwiKT9NYShhKTpcIlwifVxuZnVuY3Rpb24gUGEoYSl7c3dpdGNoKGEudGFnKXtjYXNlIDU6cmV0dXJuIE1hKGEudHlwZSk7Y2FzZSAxNjpyZXR1cm4gTWEoXCJMYXp5XCIpO2Nhc2UgMTM6cmV0dXJuIE1hKFwiU3VzcGVuc2VcIik7Y2FzZSAxOTpyZXR1cm4gTWEoXCJTdXNwZW5zZUxpc3RcIik7Y2FzZSAwOmNhc2UgMjpjYXNlIDE1OnJldHVybiBhPU9hKGEudHlwZSwhMSksYTtjYXNlIDExOnJldHVybiBhPU9hKGEudHlwZS5yZW5kZXIsITEpLGE7Y2FzZSAxOnJldHVybiBhPU9hKGEudHlwZSwhMCksYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gUWEoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSB5YTpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSB3YTpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgQWE6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2UgemE6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBFYTpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSBGYTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBDYTpyZXR1cm4oYS5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLkNvbnN1bWVyXCI7Y2FzZSBCYTpyZXR1cm4oYS5fY29udGV4dC5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLlByb3ZpZGVyXCI7Y2FzZSBEYTp2YXIgYj1hLnJlbmRlcjthPWEuZGlzcGxheU5hbWU7YXx8KGE9Yi5kaXNwbGF5TmFtZXx8XG5iLm5hbWV8fFwiXCIsYT1cIlwiIT09YT9cIkZvcndhcmRSZWYoXCIrYStcIilcIjpcIkZvcndhcmRSZWZcIik7cmV0dXJuIGE7Y2FzZSBHYTpyZXR1cm4gYj1hLmRpc3BsYXlOYW1lfHxudWxsLG51bGwhPT1iP2I6UWEoYS50eXBlKXx8XCJNZW1vXCI7Y2FzZSBIYTpiPWEuX3BheWxvYWQ7YT1hLl9pbml0O3RyeXtyZXR1cm4gUWEoYShiKSl9Y2F0Y2goYyl7fX1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIFJhKGEpe3ZhciBiPWEudHlwZTtzd2l0Y2goYS50YWcpe2Nhc2UgMjQ6cmV0dXJuXCJDYWNoZVwiO2Nhc2UgOTpyZXR1cm4oYi5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLkNvbnN1bWVyXCI7Y2FzZSAxMDpyZXR1cm4oYi5fY29udGV4dC5kaXNwbGF5TmFtZXx8XCJDb250ZXh0XCIpK1wiLlByb3ZpZGVyXCI7Y2FzZSAxODpyZXR1cm5cIkRlaHlkcmF0ZWRGcmFnbWVudFwiO2Nhc2UgMTE6cmV0dXJuIGE9Yi5yZW5kZXIsYT1hLmRpc3BsYXlOYW1lfHxhLm5hbWV8fFwiXCIsYi5kaXNwbGF5TmFtZXx8KFwiXCIhPT1hP1wiRm9yd2FyZFJlZihcIithK1wiKVwiOlwiRm9yd2FyZFJlZlwiKTtjYXNlIDc6cmV0dXJuXCJGcmFnbWVudFwiO2Nhc2UgNTpyZXR1cm4gYjtjYXNlIDQ6cmV0dXJuXCJQb3J0YWxcIjtjYXNlIDM6cmV0dXJuXCJSb290XCI7Y2FzZSA2OnJldHVyblwiVGV4dFwiO2Nhc2UgMTY6cmV0dXJuIFFhKGIpO2Nhc2UgODpyZXR1cm4gYj09PXphP1wiU3RyaWN0TW9kZVwiOlwiTW9kZVwiO2Nhc2UgMjI6cmV0dXJuXCJPZmZzY3JlZW5cIjtcbmNhc2UgMTI6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2UgMjE6cmV0dXJuXCJTY29wZVwiO2Nhc2UgMTM6cmV0dXJuXCJTdXNwZW5zZVwiO2Nhc2UgMTk6cmV0dXJuXCJTdXNwZW5zZUxpc3RcIjtjYXNlIDI1OnJldHVyblwiVHJhY2luZ01hcmtlclwiO2Nhc2UgMTpjYXNlIDA6Y2FzZSAxNzpjYXNlIDI6Y2FzZSAxNDpjYXNlIDE1OmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBiLmRpc3BsYXlOYW1lfHxiLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBiKXJldHVybiBifXJldHVybiBudWxsfWZ1bmN0aW9uIFNhKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJ1bmRlZmluZWRcIjpyZXR1cm4gYTtjYXNlIFwib2JqZWN0XCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1cbmZ1bmN0aW9uIFRhKGEpe3ZhciBiPWEudHlwZTtyZXR1cm4oYT1hLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09YS50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09Ynx8XCJyYWRpb1wiPT09Yil9XG5mdW5jdGlvbiBVYShhKXt2YXIgYj1UYShhKT9cImNoZWNrZWRcIjpcInZhbHVlXCIsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEuY29uc3RydWN0b3IucHJvdG90eXBlLGIpLGQ9XCJcIithW2JdO2lmKCFhLmhhc093blByb3BlcnR5KGIpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmdldCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuc2V0KXt2YXIgZT1jLmdldCxmPWMuc2V0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7ZD1cIlwiK2E7Zi5jYWxsKHRoaXMsYSl9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGV9KTtyZXR1cm57Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7ZD1cIlwiK2F9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpe2EuX3ZhbHVlVHJhY2tlcj1cbm51bGw7ZGVsZXRlIGFbYl19fX19ZnVuY3Rpb24gVmEoYSl7YS5fdmFsdWVUcmFja2VyfHwoYS5fdmFsdWVUcmFja2VyPVVhKGEpKX1mdW5jdGlvbiBXYShhKXtpZighYSlyZXR1cm4hMTt2YXIgYj1hLl92YWx1ZVRyYWNrZXI7aWYoIWIpcmV0dXJuITA7dmFyIGM9Yi5nZXRWYWx1ZSgpO3ZhciBkPVwiXCI7YSYmKGQ9VGEoYSk/YS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIjphLnZhbHVlKTthPWQ7cmV0dXJuIGEhPT1jPyhiLnNldFZhbHVlKGEpLCEwKTohMX1mdW5jdGlvbiBYYShhKXthPWF8fChcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50P2RvY3VtZW50OnZvaWQgMCk7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtyZXR1cm4gYS5hY3RpdmVFbGVtZW50fHxhLmJvZHl9Y2F0Y2goYil7cmV0dXJuIGEuYm9keX19XG5mdW5jdGlvbiBZYShhLGIpe3ZhciBjPWIuY2hlY2tlZDtyZXR1cm4gQSh7fSxiLHtkZWZhdWx0Q2hlY2tlZDp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCx2YWx1ZTp2b2lkIDAsY2hlY2tlZDpudWxsIT1jP2M6YS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkfSl9ZnVuY3Rpb24gWmEoYSxiKXt2YXIgYz1udWxsPT1iLmRlZmF1bHRWYWx1ZT9cIlwiOmIuZGVmYXVsdFZhbHVlLGQ9bnVsbCE9Yi5jaGVja2VkP2IuY2hlY2tlZDpiLmRlZmF1bHRDaGVja2VkO2M9U2EobnVsbCE9Yi52YWx1ZT9iLnZhbHVlOmMpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbENoZWNrZWQ6ZCxpbml0aWFsVmFsdWU6Yyxjb250cm9sbGVkOlwiY2hlY2tib3hcIj09PWIudHlwZXx8XCJyYWRpb1wiPT09Yi50eXBlP251bGwhPWIuY2hlY2tlZDpudWxsIT1iLnZhbHVlfX1mdW5jdGlvbiBhYihhLGIpe2I9Yi5jaGVja2VkO251bGwhPWImJnRhKGEsXCJjaGVja2VkXCIsYiwhMSl9XG5mdW5jdGlvbiBiYihhLGIpe2FiKGEsYik7dmFyIGM9U2EoYi52YWx1ZSksZD1iLnR5cGU7aWYobnVsbCE9YylpZihcIm51bWJlclwiPT09ZCl7aWYoMD09PWMmJlwiXCI9PT1hLnZhbHVlfHxhLnZhbHVlIT1jKWEudmFsdWU9XCJcIitjfWVsc2UgYS52YWx1ZSE9PVwiXCIrYyYmKGEudmFsdWU9XCJcIitjKTtlbHNlIGlmKFwic3VibWl0XCI9PT1kfHxcInJlc2V0XCI9PT1kKXthLnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpO3JldHVybn1iLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/Y2IoYSxiLnR5cGUsYyk6Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSYmY2IoYSxiLnR5cGUsU2EoYi5kZWZhdWx0VmFsdWUpKTtudWxsPT1iLmNoZWNrZWQmJm51bGwhPWIuZGVmYXVsdENoZWNrZWQmJihhLmRlZmF1bHRDaGVja2VkPSEhYi5kZWZhdWx0Q2hlY2tlZCl9XG5mdW5jdGlvbiBkYihhLGIsYyl7aWYoYi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHxiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpKXt2YXIgZD1iLnR5cGU7aWYoIShcInN1Ym1pdFwiIT09ZCYmXCJyZXNldFwiIT09ZHx8dm9pZCAwIT09Yi52YWx1ZSYmbnVsbCE9PWIudmFsdWUpKXJldHVybjtiPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTtjfHxiPT09YS52YWx1ZXx8KGEudmFsdWU9Yik7YS5kZWZhdWx0VmFsdWU9Yn1jPWEubmFtZTtcIlwiIT09YyYmKGEubmFtZT1cIlwiKTthLmRlZmF1bHRDaGVja2VkPSEhYS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkO1wiXCIhPT1jJiYoYS5uYW1lPWMpfVxuZnVuY3Rpb24gY2IoYSxiLGMpe2lmKFwibnVtYmVyXCIhPT1ifHxYYShhLm93bmVyRG9jdW1lbnQpIT09YSludWxsPT1jP2EuZGVmYXVsdFZhbHVlPVwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZTphLmRlZmF1bHRWYWx1ZSE9PVwiXCIrYyYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrYyl9dmFyIGViPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBmYihhLGIsYyxkKXthPWEub3B0aW9ucztpZihiKXtiPXt9O2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKWJbXCIkXCIrY1tlXV09ITA7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKyllPWIuaGFzT3duUHJvcGVydHkoXCIkXCIrYVtjXS52YWx1ZSksYVtjXS5zZWxlY3RlZCE9PWUmJihhW2NdLnNlbGVjdGVkPWUpLGUmJmQmJihhW2NdLmRlZmF1bHRTZWxlY3RlZD0hMCl9ZWxzZXtjPVwiXCIrU2EoYyk7Yj1udWxsO2ZvcihlPTA7ZTxhLmxlbmd0aDtlKyspe2lmKGFbZV0udmFsdWU9PT1jKXthW2VdLnNlbGVjdGVkPSEwO2QmJihhW2VdLmRlZmF1bHRTZWxlY3RlZD0hMCk7cmV0dXJufW51bGwhPT1ifHxhW2VdLmRpc2FibGVkfHwoYj1hW2VdKX1udWxsIT09YiYmKGIuc2VsZWN0ZWQ9ITApfX1cbmZ1bmN0aW9uIGdiKGEsYil7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl0aHJvdyBFcnJvcihwKDkxKSk7cmV0dXJuIEEoe30sYix7dmFsdWU6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsY2hpbGRyZW46XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlfSl9ZnVuY3Rpb24gaGIoYSxiKXt2YXIgYz1iLnZhbHVlO2lmKG51bGw9PWMpe2M9Yi5jaGlsZHJlbjtiPWIuZGVmYXVsdFZhbHVlO2lmKG51bGwhPWMpe2lmKG51bGwhPWIpdGhyb3cgRXJyb3IocCg5MikpO2lmKGViKGMpKXtpZigxPGMubGVuZ3RoKXRocm93IEVycm9yKHAoOTMpKTtjPWNbMF19Yj1jfW51bGw9PWImJihiPVwiXCIpO2M9Yn1hLl93cmFwcGVyU3RhdGU9e2luaXRpYWxWYWx1ZTpTYShjKX19XG5mdW5jdGlvbiBpYihhLGIpe3ZhciBjPVNhKGIudmFsdWUpLGQ9U2EoYi5kZWZhdWx0VmFsdWUpO251bGwhPWMmJihjPVwiXCIrYyxjIT09YS52YWx1ZSYmKGEudmFsdWU9YyksbnVsbD09Yi5kZWZhdWx0VmFsdWUmJmEuZGVmYXVsdFZhbHVlIT09YyYmKGEuZGVmYXVsdFZhbHVlPWMpKTtudWxsIT1kJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitkKX1mdW5jdGlvbiBqYihhKXt2YXIgYj1hLnRleHRDb250ZW50O2I9PT1hLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlJiZcIlwiIT09YiYmbnVsbCE9PWImJihhLnZhbHVlPWIpfWZ1bmN0aW9uIGtiKGEpe3N3aXRjaChhKXtjYXNlIFwic3ZnXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO2Nhc2UgXCJtYXRoXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7ZGVmYXVsdDpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIn19XG5mdW5jdGlvbiBsYihhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/a2IoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgbWIsbmI9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiE9PWEubmFtZXNwYWNlVVJJfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7bWI9bWJ8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bWIuaW5uZXJIVE1MPVwiPHN2Zz5cIitiLnZhbHVlT2YoKS50b1N0cmluZygpK1wiPC9zdmc+XCI7Zm9yKGI9bWIuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24gb2IoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciBwYj17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYXNwZWN0UmF0aW86ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLFxuem9vbTohMCxmaWxsT3BhY2l0eTohMCxmbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSxxYj1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMocGIpLmZvckVhY2goZnVuY3Rpb24oYSl7cWIuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTtwYltiXT1wYlthXX0pfSk7ZnVuY3Rpb24gcmIoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fHBiLmhhc093blByb3BlcnR5KGEpJiZwYlthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiBzYihhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT1yYihjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciB0Yj1BKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gdWIoYSxiKXtpZihiKXtpZih0YlthXSYmKG51bGwhPWIuY2hpbGRyZW58fG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHAoMTM3LGEpKTtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXtpZihudWxsIT1iLmNoaWxkcmVuKXRocm93IEVycm9yKHAoNjApKTtpZihcIm9iamVjdFwiIT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8fCEoXCJfX2h0bWxcImluIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpKXRocm93IEVycm9yKHAoNjEpKTt9aWYobnVsbCE9Yi5zdHlsZSYmXCJvYmplY3RcIiE9PXR5cGVvZiBiLnN0eWxlKXRocm93IEVycm9yKHAoNjIpKTt9fVxuZnVuY3Rpb24gdmIoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fXZhciB3Yj1udWxsO2Z1bmN0aW9uIHhiKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX12YXIgeWI9bnVsbCx6Yj1udWxsLEFiPW51bGw7XG5mdW5jdGlvbiBCYihhKXtpZihhPUNiKGEpKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgeWIpdGhyb3cgRXJyb3IocCgyODApKTt2YXIgYj1hLnN0YXRlTm9kZTtiJiYoYj1EYihiKSx5YihhLnN0YXRlTm9kZSxhLnR5cGUsYikpfX1mdW5jdGlvbiBFYihhKXt6Yj9BYj9BYi5wdXNoKGEpOkFiPVthXTp6Yj1hfWZ1bmN0aW9uIEZiKCl7aWYoemIpe3ZhciBhPXpiLGI9QWI7QWI9emI9bnVsbDtCYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspQmIoYlthXSl9fWZ1bmN0aW9uIEdiKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gSGIoKXt9dmFyIEliPSExO2Z1bmN0aW9uIEpiKGEsYixjKXtpZihJYilyZXR1cm4gYShiLGMpO0liPSEwO3RyeXtyZXR1cm4gR2IoYSxiLGMpfWZpbmFsbHl7aWYoSWI9ITEsbnVsbCE9PXpifHxudWxsIT09QWIpSGIoKSxGYigpfX1cbmZ1bmN0aW9uIEtiKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7dmFyIGQ9RGIoYyk7aWYobnVsbD09PWQpcmV0dXJuIG51bGw7Yz1kW2JdO2E6c3dpdGNoKGIpe2Nhc2UgXCJvbkNsaWNrXCI6Y2FzZSBcIm9uQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tcIjpjYXNlIFwib25Eb3VibGVDbGlja0NhcHR1cmVcIjpjYXNlIFwib25Nb3VzZURvd25cIjpjYXNlIFwib25Nb3VzZURvd25DYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlVXBcIjpjYXNlIFwib25Nb3VzZVVwQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRW50ZXJcIjooZD0hZC5kaXNhYmxlZCl8fChhPWEudHlwZSxkPSEoXCJidXR0b25cIj09PWF8fFwiaW5wdXRcIj09PWF8fFwic2VsZWN0XCI9PT1hfHxcInRleHRhcmVhXCI9PT1hKSk7YT0hZDticmVhayBhO2RlZmF1bHQ6YT0hMX1pZihhKXJldHVybiBudWxsO2lmKGMmJlwiZnVuY3Rpb25cIiE9PVxudHlwZW9mIGMpdGhyb3cgRXJyb3IocCgyMzEsYix0eXBlb2YgYykpO3JldHVybiBjfXZhciBMYj0hMTtpZihpYSl0cnl7dmFyIE1iPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShNYixcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7TGI9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsTWIsTWIpO3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFwiLE1iLE1iKX1jYXRjaChhKXtMYj0hMX1mdW5jdGlvbiBOYihhLGIsYyxkLGUsZixnLGgsayl7dmFyIGw9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDMpO3RyeXtiLmFwcGx5KGMsbCl9Y2F0Y2gobSl7dGhpcy5vbkVycm9yKG0pfX12YXIgT2I9ITEsUGI9bnVsbCxRYj0hMSxSYj1udWxsLFNiPXtvbkVycm9yOmZ1bmN0aW9uKGEpe09iPSEwO1BiPWF9fTtmdW5jdGlvbiBUYihhLGIsYyxkLGUsZixnLGgsayl7T2I9ITE7UGI9bnVsbDtOYi5hcHBseShTYixhcmd1bWVudHMpfVxuZnVuY3Rpb24gVWIoYSxiLGMsZCxlLGYsZyxoLGspe1RiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihPYil7aWYoT2Ipe3ZhciBsPVBiO09iPSExO1BiPW51bGx9ZWxzZSB0aHJvdyBFcnJvcihwKDE5OCkpO1FifHwoUWI9ITAsUmI9bCl9fWZ1bmN0aW9uIFZiKGEpe3ZhciBiPWEsYz1hO2lmKGEuYWx0ZXJuYXRlKWZvcig7Yi5yZXR1cm47KWI9Yi5yZXR1cm47ZWxzZXthPWI7ZG8gYj1hLDAhPT0oYi5mbGFncyY0MDk4KSYmKGM9Yi5yZXR1cm4pLGE9Yi5yZXR1cm47d2hpbGUoYSl9cmV0dXJuIDM9PT1iLnRhZz9jOm51bGx9ZnVuY3Rpb24gV2IoYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9YS5tZW1vaXplZFN0YXRlO251bGw9PT1iJiYoYT1hLmFsdGVybmF0ZSxudWxsIT09YSYmKGI9YS5tZW1vaXplZFN0YXRlKSk7aWYobnVsbCE9PWIpcmV0dXJuIGIuZGVoeWRyYXRlZH1yZXR1cm4gbnVsbH1mdW5jdGlvbiBYYihhKXtpZihWYihhKSE9PWEpdGhyb3cgRXJyb3IocCgxODgpKTt9XG5mdW5jdGlvbiBZYihhKXt2YXIgYj1hLmFsdGVybmF0ZTtpZighYil7Yj1WYihhKTtpZihudWxsPT09Yil0aHJvdyBFcnJvcihwKDE4OCkpO3JldHVybiBiIT09YT9udWxsOmF9Zm9yKHZhciBjPWEsZD1iOzspe3ZhciBlPWMucmV0dXJuO2lmKG51bGw9PT1lKWJyZWFrO3ZhciBmPWUuYWx0ZXJuYXRlO2lmKG51bGw9PT1mKXtkPWUucmV0dXJuO2lmKG51bGwhPT1kKXtjPWQ7Y29udGludWV9YnJlYWt9aWYoZS5jaGlsZD09PWYuY2hpbGQpe2ZvcihmPWUuY2hpbGQ7Zjspe2lmKGY9PT1jKXJldHVybiBYYihlKSxhO2lmKGY9PT1kKXJldHVybiBYYihlKSxiO2Y9Zi5zaWJsaW5nfXRocm93IEVycm9yKHAoMTg4KSk7fWlmKGMucmV0dXJuIT09ZC5yZXR1cm4pYz1lLGQ9ZjtlbHNle2Zvcih2YXIgZz0hMSxoPWUuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZTtkPWY7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1lO2M9ZjticmVha31oPWguc2libGluZ31pZighZyl7Zm9yKGg9Zi5jaGlsZDtoOyl7aWYoaD09PVxuYyl7Zz0hMDtjPWY7ZD1lO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZjtjPWU7YnJlYWt9aD1oLnNpYmxpbmd9aWYoIWcpdGhyb3cgRXJyb3IocCgxODkpKTt9fWlmKGMuYWx0ZXJuYXRlIT09ZCl0aHJvdyBFcnJvcihwKDE5MCkpO31pZigzIT09Yy50YWcpdGhyb3cgRXJyb3IocCgxODgpKTtyZXR1cm4gYy5zdGF0ZU5vZGUuY3VycmVudD09PWM/YTpifWZ1bmN0aW9uIFpiKGEpe2E9WWIoYSk7cmV0dXJuIG51bGwhPT1hPyRiKGEpOm51bGx9ZnVuY3Rpb24gJGIoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGE7Zm9yKGE9YS5jaGlsZDtudWxsIT09YTspe3ZhciBiPSRiKGEpO2lmKG51bGwhPT1iKXJldHVybiBiO2E9YS5zaWJsaW5nfXJldHVybiBudWxsfVxudmFyIGFjPWNhLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2ssYmM9Y2EudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2ssY2M9Y2EudW5zdGFibGVfc2hvdWxkWWllbGQsZGM9Y2EudW5zdGFibGVfcmVxdWVzdFBhaW50LEI9Y2EudW5zdGFibGVfbm93LGVjPWNhLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsLGZjPWNhLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LGdjPWNhLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGhjPWNhLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LGljPWNhLnVuc3RhYmxlX0xvd1ByaW9yaXR5LGpjPWNhLnVuc3RhYmxlX0lkbGVQcmlvcml0eSxrYz1udWxsLGxjPW51bGw7ZnVuY3Rpb24gbWMoYSl7aWYobGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBsYy5vbkNvbW1pdEZpYmVyUm9vdCl0cnl7bGMub25Db21taXRGaWJlclJvb3Qoa2MsYSx2b2lkIDAsMTI4PT09KGEuY3VycmVudC5mbGFncyYxMjgpKX1jYXRjaChiKXt9fVxudmFyIG9jPU1hdGguY2x6MzI/TWF0aC5jbHozMjpuYyxwYz1NYXRoLmxvZyxxYz1NYXRoLkxOMjtmdW5jdGlvbiBuYyhhKXthPj4+PTA7cmV0dXJuIDA9PT1hPzMyOjMxLShwYyhhKS9xY3wwKXwwfXZhciByYz02NCxzYz00MTk0MzA0O1xuZnVuY3Rpb24gdGMoYSl7c3dpdGNoKGEmLWEpe2Nhc2UgMTpyZXR1cm4gMTtjYXNlIDI6cmV0dXJuIDI7Y2FzZSA0OnJldHVybiA0O2Nhc2UgODpyZXR1cm4gODtjYXNlIDE2OnJldHVybiAxNjtjYXNlIDMyOnJldHVybiAzMjtjYXNlIDY0OmNhc2UgMTI4OmNhc2UgMjU2OmNhc2UgNTEyOmNhc2UgMTAyNDpjYXNlIDIwNDg6Y2FzZSA0MDk2OmNhc2UgODE5MjpjYXNlIDE2Mzg0OmNhc2UgMzI3Njg6Y2FzZSA2NTUzNjpjYXNlIDEzMTA3MjpjYXNlIDI2MjE0NDpjYXNlIDUyNDI4ODpjYXNlIDEwNDg1NzY6Y2FzZSAyMDk3MTUyOnJldHVybiBhJjQxOTQyNDA7Y2FzZSA0MTk0MzA0OmNhc2UgODM4ODYwODpjYXNlIDE2Nzc3MjE2OmNhc2UgMzM1NTQ0MzI6Y2FzZSA2NzEwODg2NDpyZXR1cm4gYSYxMzAwMjM0MjQ7Y2FzZSAxMzQyMTc3Mjg6cmV0dXJuIDEzNDIxNzcyODtjYXNlIDI2ODQzNTQ1NjpyZXR1cm4gMjY4NDM1NDU2O2Nhc2UgNTM2ODcwOTEyOnJldHVybiA1MzY4NzA5MTI7Y2FzZSAxMDczNzQxODI0OnJldHVybiAxMDczNzQxODI0O1xuZGVmYXVsdDpyZXR1cm4gYX19ZnVuY3Rpb24gdWMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcztpZigwPT09YylyZXR1cm4gMDt2YXIgZD0wLGU9YS5zdXNwZW5kZWRMYW5lcyxmPWEucGluZ2VkTGFuZXMsZz1jJjI2ODQzNTQ1NTtpZigwIT09Zyl7dmFyIGg9ZyZ+ZTswIT09aD9kPXRjKGgpOihmJj1nLDAhPT1mJiYoZD10YyhmKSkpfWVsc2UgZz1jJn5lLDAhPT1nP2Q9dGMoZyk6MCE9PWYmJihkPXRjKGYpKTtpZigwPT09ZClyZXR1cm4gMDtpZigwIT09YiYmYiE9PWQmJjA9PT0oYiZlKSYmKGU9ZCYtZCxmPWImLWIsZT49Znx8MTY9PT1lJiYwIT09KGYmNDE5NDI0MCkpKXJldHVybiBiOzAhPT0oZCY0KSYmKGR8PWMmMTYpO2I9YS5lbnRhbmdsZWRMYW5lcztpZigwIT09Yilmb3IoYT1hLmVudGFuZ2xlbWVudHMsYiY9ZDswPGI7KWM9MzEtb2MoYiksZT0xPDxjLGR8PWFbY10sYiY9fmU7cmV0dXJuIGR9XG5mdW5jdGlvbiB2YyhhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgNDpyZXR1cm4gYisyNTA7Y2FzZSA4OmNhc2UgMTY6Y2FzZSAzMjpjYXNlIDY0OmNhc2UgMTI4OmNhc2UgMjU2OmNhc2UgNTEyOmNhc2UgMTAyNDpjYXNlIDIwNDg6Y2FzZSA0MDk2OmNhc2UgODE5MjpjYXNlIDE2Mzg0OmNhc2UgMzI3Njg6Y2FzZSA2NTUzNjpjYXNlIDEzMTA3MjpjYXNlIDI2MjE0NDpjYXNlIDUyNDI4ODpjYXNlIDEwNDg1NzY6Y2FzZSAyMDk3MTUyOnJldHVybiBiKzVFMztjYXNlIDQxOTQzMDQ6Y2FzZSA4Mzg4NjA4OmNhc2UgMTY3NzcyMTY6Y2FzZSAzMzU1NDQzMjpjYXNlIDY3MTA4ODY0OnJldHVybi0xO2Nhc2UgMTM0MjE3NzI4OmNhc2UgMjY4NDM1NDU2OmNhc2UgNTM2ODcwOTEyOmNhc2UgMTA3Mzc0MTgyNDpyZXR1cm4tMTtkZWZhdWx0OnJldHVybi0xfX1cbmZ1bmN0aW9uIHdjKGEsYil7Zm9yKHZhciBjPWEuc3VzcGVuZGVkTGFuZXMsZD1hLnBpbmdlZExhbmVzLGU9YS5leHBpcmF0aW9uVGltZXMsZj1hLnBlbmRpbmdMYW5lczswPGY7KXt2YXIgZz0zMS1vYyhmKSxoPTE8PGcsaz1lW2ddO2lmKC0xPT09ayl7aWYoMD09PShoJmMpfHwwIT09KGgmZCkpZVtnXT12YyhoLGIpfWVsc2Ugazw9YiYmKGEuZXhwaXJlZExhbmVzfD1oKTtmJj1+aH19ZnVuY3Rpb24geGMoYSl7YT1hLnBlbmRpbmdMYW5lcyYtMTA3Mzc0MTgyNTtyZXR1cm4gMCE9PWE/YTphJjEwNzM3NDE4MjQ/MTA3Mzc0MTgyNDowfWZ1bmN0aW9uIHljKCl7dmFyIGE9cmM7cmM8PD0xOzA9PT0ocmMmNDE5NDI0MCkmJihyYz02NCk7cmV0dXJuIGF9ZnVuY3Rpb24gemMoYSl7Zm9yKHZhciBiPVtdLGM9MDszMT5jO2MrKyliLnB1c2goYSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBBYyhhLGIsYyl7YS5wZW5kaW5nTGFuZXN8PWI7NTM2ODcwOTEyIT09YiYmKGEuc3VzcGVuZGVkTGFuZXM9MCxhLnBpbmdlZExhbmVzPTApO2E9YS5ldmVudFRpbWVzO2I9MzEtb2MoYik7YVtiXT1jfWZ1bmN0aW9uIEJjKGEsYil7dmFyIGM9YS5wZW5kaW5nTGFuZXMmfmI7YS5wZW5kaW5nTGFuZXM9YjthLnN1c3BlbmRlZExhbmVzPTA7YS5waW5nZWRMYW5lcz0wO2EuZXhwaXJlZExhbmVzJj1iO2EubXV0YWJsZVJlYWRMYW5lcyY9YjthLmVudGFuZ2xlZExhbmVzJj1iO2I9YS5lbnRhbmdsZW1lbnRzO3ZhciBkPWEuZXZlbnRUaW1lcztmb3IoYT1hLmV4cGlyYXRpb25UaW1lczswPGM7KXt2YXIgZT0zMS1vYyhjKSxmPTE8PGU7YltlXT0wO2RbZV09LTE7YVtlXT0tMTtjJj1+Zn19XG5mdW5jdGlvbiBDYyhhLGIpe3ZhciBjPWEuZW50YW5nbGVkTGFuZXN8PWI7Zm9yKGE9YS5lbnRhbmdsZW1lbnRzO2M7KXt2YXIgZD0zMS1vYyhjKSxlPTE8PGQ7ZSZifGFbZF0mYiYmKGFbZF18PWIpO2MmPX5lfX12YXIgQz0wO2Z1bmN0aW9uIERjKGEpe2EmPS1hO3JldHVybiAxPGE/NDxhPzAhPT0oYSYyNjg0MzU0NTUpPzE2OjUzNjg3MDkxMjo0OjF9dmFyIEVjLEZjLEdjLEhjLEljLEpjPSExLEtjPVtdLExjPW51bGwsTWM9bnVsbCxOYz1udWxsLE9jPW5ldyBNYXAsUGM9bmV3IE1hcCxRYz1bXSxSYz1cIm1vdXNlZG93biBtb3VzZXVwIHRvdWNoY2FuY2VsIHRvdWNoZW5kIHRvdWNoc3RhcnQgYXV4Y2xpY2sgZGJsY2xpY2sgcG9pbnRlcmNhbmNlbCBwb2ludGVyZG93biBwb2ludGVydXAgZHJhZ2VuZCBkcmFnc3RhcnQgZHJvcCBjb21wb3NpdGlvbmVuZCBjb21wb3NpdGlvbnN0YXJ0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgaW5wdXQgdGV4dElucHV0IGNvcHkgY3V0IHBhc3RlIGNsaWNrIGNoYW5nZSBjb250ZXh0bWVudSByZXNldCBzdWJtaXRcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiBTYyhhLGIpe3N3aXRjaChhKXtjYXNlIFwiZm9jdXNpblwiOmNhc2UgXCJmb2N1c291dFwiOkxjPW51bGw7YnJlYWs7Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnbGVhdmVcIjpNYz1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwibW91c2VvdXRcIjpOYz1udWxsO2JyZWFrO2Nhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVyb3V0XCI6T2MuZGVsZXRlKGIucG9pbnRlcklkKTticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6UGMuZGVsZXRlKGIucG9pbnRlcklkKX19XG5mdW5jdGlvbiBUYyhhLGIsYyxkLGUsZil7aWYobnVsbD09PWF8fGEubmF0aXZlRXZlbnQhPT1mKXJldHVybiBhPXtibG9ja2VkT246Yixkb21FdmVudE5hbWU6YyxldmVudFN5c3RlbUZsYWdzOmQsbmF0aXZlRXZlbnQ6Zix0YXJnZXRDb250YWluZXJzOltlXX0sbnVsbCE9PWImJihiPUNiKGIpLG51bGwhPT1iJiZGYyhiKSksYTthLmV2ZW50U3lzdGVtRmxhZ3N8PWQ7Yj1hLnRhcmdldENvbnRhaW5lcnM7bnVsbCE9PWUmJi0xPT09Yi5pbmRleE9mKGUpJiZiLnB1c2goZSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBVYyhhLGIsYyxkLGUpe3N3aXRjaChiKXtjYXNlIFwiZm9jdXNpblwiOnJldHVybiBMYz1UYyhMYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJkcmFnZW50ZXJcIjpyZXR1cm4gTWM9VGMoTWMsYSxiLGMsZCxlKSwhMDtjYXNlIFwibW91c2VvdmVyXCI6cmV0dXJuIE5jPVRjKE5jLGEsYixjLGQsZSksITA7Y2FzZSBcInBvaW50ZXJvdmVyXCI6dmFyIGY9ZS5wb2ludGVySWQ7T2Muc2V0KGYsVGMoT2MuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpO3JldHVybiEwO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOnJldHVybiBmPWUucG9pbnRlcklkLFBjLnNldChmLFRjKFBjLmdldChmKXx8bnVsbCxhLGIsYyxkLGUpKSwhMH1yZXR1cm4hMX1cbmZ1bmN0aW9uIFZjKGEpe3ZhciBiPVdjKGEudGFyZ2V0KTtpZihudWxsIT09Yil7dmFyIGM9VmIoYik7aWYobnVsbCE9PWMpaWYoYj1jLnRhZywxMz09PWIpe2lmKGI9V2IoYyksbnVsbCE9PWIpe2EuYmxvY2tlZE9uPWI7SWMoYS5wcmlvcml0eSxmdW5jdGlvbigpe0djKGMpfSk7cmV0dXJufX1lbHNlIGlmKDM9PT1iJiZjLnN0YXRlTm9kZS5jdXJyZW50Lm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkKXthLmJsb2NrZWRPbj0zPT09Yy50YWc/Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzpudWxsO3JldHVybn19YS5ibG9ja2VkT249bnVsbH1cbmZ1bmN0aW9uIFhjKGEpe2lmKG51bGwhPT1hLmJsb2NrZWRPbilyZXR1cm4hMTtmb3IodmFyIGI9YS50YXJnZXRDb250YWluZXJzOzA8Yi5sZW5ndGg7KXt2YXIgYz1ZYyhhLmRvbUV2ZW50TmFtZSxhLmV2ZW50U3lzdGVtRmxhZ3MsYlswXSxhLm5hdGl2ZUV2ZW50KTtpZihudWxsPT09Yyl7Yz1hLm5hdGl2ZUV2ZW50O3ZhciBkPW5ldyBjLmNvbnN0cnVjdG9yKGMudHlwZSxjKTt3Yj1kO2MudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZCk7d2I9bnVsbH1lbHNlIHJldHVybiBiPUNiKGMpLG51bGwhPT1iJiZGYyhiKSxhLmJsb2NrZWRPbj1jLCExO2Iuc2hpZnQoKX1yZXR1cm4hMH1mdW5jdGlvbiBaYyhhLGIsYyl7WGMoYSkmJmMuZGVsZXRlKGIpfWZ1bmN0aW9uICRjKCl7SmM9ITE7bnVsbCE9PUxjJiZYYyhMYykmJihMYz1udWxsKTtudWxsIT09TWMmJlhjKE1jKSYmKE1jPW51bGwpO251bGwhPT1OYyYmWGMoTmMpJiYoTmM9bnVsbCk7T2MuZm9yRWFjaChaYyk7UGMuZm9yRWFjaChaYyl9XG5mdW5jdGlvbiBhZChhLGIpe2EuYmxvY2tlZE9uPT09YiYmKGEuYmxvY2tlZE9uPW51bGwsSmN8fChKYz0hMCxjYS51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKGNhLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5LCRjKSkpfVxuZnVuY3Rpb24gYmQoYSl7ZnVuY3Rpb24gYihiKXtyZXR1cm4gYWQoYixhKX1pZigwPEtjLmxlbmd0aCl7YWQoS2NbMF0sYSk7Zm9yKHZhciBjPTE7YzxLYy5sZW5ndGg7YysrKXt2YXIgZD1LY1tjXTtkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKX19bnVsbCE9PUxjJiZhZChMYyxhKTtudWxsIT09TWMmJmFkKE1jLGEpO251bGwhPT1OYyYmYWQoTmMsYSk7T2MuZm9yRWFjaChiKTtQYy5mb3JFYWNoKGIpO2ZvcihjPTA7YzxRYy5sZW5ndGg7YysrKWQ9UWNbY10sZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCk7Zm9yKDswPFFjLmxlbmd0aCYmKGM9UWNbMF0sbnVsbD09PWMuYmxvY2tlZE9uKTspVmMoYyksbnVsbD09PWMuYmxvY2tlZE9uJiZRYy5zaGlmdCgpfXZhciBjZD11YS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxkZD0hMDtcbmZ1bmN0aW9uIGVkKGEsYixjLGQpe3ZhciBlPUMsZj1jZC50cmFuc2l0aW9uO2NkLnRyYW5zaXRpb249bnVsbDt0cnl7Qz0xLGZkKGEsYixjLGQpfWZpbmFsbHl7Qz1lLGNkLnRyYW5zaXRpb249Zn19ZnVuY3Rpb24gZ2QoYSxiLGMsZCl7dmFyIGU9QyxmPWNkLnRyYW5zaXRpb247Y2QudHJhbnNpdGlvbj1udWxsO3RyeXtDPTQsZmQoYSxiLGMsZCl9ZmluYWxseXtDPWUsY2QudHJhbnNpdGlvbj1mfX1cbmZ1bmN0aW9uIGZkKGEsYixjLGQpe2lmKGRkKXt2YXIgZT1ZYyhhLGIsYyxkKTtpZihudWxsPT09ZSloZChhLGIsZCxpZCxjKSxTYyhhLGQpO2Vsc2UgaWYoVWMoZSxhLGIsYyxkKSlkLnN0b3BQcm9wYWdhdGlvbigpO2Vsc2UgaWYoU2MoYSxkKSxiJjQmJi0xPFJjLmluZGV4T2YoYSkpe2Zvcig7bnVsbCE9PWU7KXt2YXIgZj1DYihlKTtudWxsIT09ZiYmRWMoZik7Zj1ZYyhhLGIsYyxkKTtudWxsPT09ZiYmaGQoYSxiLGQsaWQsYyk7aWYoZj09PWUpYnJlYWs7ZT1mfW51bGwhPT1lJiZkLnN0b3BQcm9wYWdhdGlvbigpfWVsc2UgaGQoYSxiLGQsbnVsbCxjKX19dmFyIGlkPW51bGw7XG5mdW5jdGlvbiBZYyhhLGIsYyxkKXtpZD1udWxsO2E9eGIoZCk7YT1XYyhhKTtpZihudWxsIT09YSlpZihiPVZiKGEpLG51bGw9PT1iKWE9bnVsbDtlbHNlIGlmKGM9Yi50YWcsMTM9PT1jKXthPVdiKGIpO2lmKG51bGwhPT1hKXJldHVybiBhO2E9bnVsbH1lbHNlIGlmKDM9PT1jKXtpZihiLnN0YXRlTm9kZS5jdXJyZW50Lm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkKXJldHVybiAzPT09Yi50YWc/Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzpudWxsO2E9bnVsbH1lbHNlIGIhPT1hJiYoYT1udWxsKTtpZD1hO3JldHVybiBudWxsfVxuZnVuY3Rpb24gamQoYSl7c3dpdGNoKGEpe2Nhc2UgXCJjYW5jZWxcIjpjYXNlIFwiY2xpY2tcIjpjYXNlIFwiY2xvc2VcIjpjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOmNhc2UgXCJmb2N1c2luXCI6Y2FzZSBcImZvY3Vzb3V0XCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcImludmFsaWRcIjpjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJrZXl1cFwiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJwYXN0ZVwiOmNhc2UgXCJwYXVzZVwiOmNhc2UgXCJwbGF5XCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcnVwXCI6Y2FzZSBcInJhdGVjaGFuZ2VcIjpjYXNlIFwicmVzZXRcIjpjYXNlIFwicmVzaXplXCI6Y2FzZSBcInNlZWtlZFwiOmNhc2UgXCJzdWJtaXRcIjpjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2hzdGFydFwiOmNhc2UgXCJ2b2x1bWVjaGFuZ2VcIjpjYXNlIFwiY2hhbmdlXCI6Y2FzZSBcInNlbGVjdGlvbmNoYW5nZVwiOmNhc2UgXCJ0ZXh0SW5wdXRcIjpjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOmNhc2UgXCJjb21wb3NpdGlvbmVuZFwiOmNhc2UgXCJjb21wb3NpdGlvbnVwZGF0ZVwiOmNhc2UgXCJiZWZvcmVibHVyXCI6Y2FzZSBcImFmdGVyYmx1clwiOmNhc2UgXCJiZWZvcmVpbnB1dFwiOmNhc2UgXCJibHVyXCI6Y2FzZSBcImZ1bGxzY3JlZW5jaGFuZ2VcIjpjYXNlIFwiZm9jdXNcIjpjYXNlIFwiaGFzaGNoYW5nZVwiOmNhc2UgXCJwb3BzdGF0ZVwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwic2VsZWN0c3RhcnRcIjpyZXR1cm4gMTtjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJzY3JvbGxcIjpjYXNlIFwidG9nZ2xlXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ3aGVlbFwiOmNhc2UgXCJtb3VzZWVudGVyXCI6Y2FzZSBcIm1vdXNlbGVhdmVcIjpjYXNlIFwicG9pbnRlcmVudGVyXCI6Y2FzZSBcInBvaW50ZXJsZWF2ZVwiOnJldHVybiA0O1xuY2FzZSBcIm1lc3NhZ2VcIjpzd2l0Y2goZWMoKSl7Y2FzZSBmYzpyZXR1cm4gMTtjYXNlIGdjOnJldHVybiA0O2Nhc2UgaGM6Y2FzZSBpYzpyZXR1cm4gMTY7Y2FzZSBqYzpyZXR1cm4gNTM2ODcwOTEyO2RlZmF1bHQ6cmV0dXJuIDE2fWRlZmF1bHQ6cmV0dXJuIDE2fX12YXIga2Q9bnVsbCxsZD1udWxsLG1kPW51bGw7ZnVuY3Rpb24gbmQoKXtpZihtZClyZXR1cm4gbWQ7dmFyIGEsYj1sZCxjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBrZD9rZC52YWx1ZTprZC50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBtZD1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfVxuZnVuY3Rpb24gb2QoYSl7dmFyIGI9YS5rZXlDb2RlO1wiY2hhckNvZGVcImluIGE/KGE9YS5jaGFyQ29kZSwwPT09YSYmMTM9PT1iJiYoYT0xMykpOmE9YjsxMD09PWEmJihhPTEzKTtyZXR1cm4gMzI8PWF8fDEzPT09YT9hOjB9ZnVuY3Rpb24gcGQoKXtyZXR1cm4hMH1mdW5jdGlvbiBxZCgpe3JldHVybiExfVxuZnVuY3Rpb24gcmQoYSl7ZnVuY3Rpb24gYihiLGQsZSxmLGcpe3RoaXMuX3JlYWN0TmFtZT1iO3RoaXMuX3RhcmdldEluc3Q9ZTt0aGlzLnR5cGU9ZDt0aGlzLm5hdGl2ZUV2ZW50PWY7dGhpcy50YXJnZXQ9Zzt0aGlzLmN1cnJlbnRUYXJnZXQ9bnVsbDtmb3IodmFyIGMgaW4gYSlhLmhhc093blByb3BlcnR5KGMpJiYoYj1hW2NdLHRoaXNbY109Yj9iKGYpOmZbY10pO3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPShudWxsIT1mLmRlZmF1bHRQcmV2ZW50ZWQ/Zi5kZWZhdWx0UHJldmVudGVkOiExPT09Zi5yZXR1cm5WYWx1ZSk/cGQ6cWQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1xZDtyZXR1cm4gdGhpc31BKGIucHJvdG90eXBlLHtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMDt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTpcInVua25vd25cIiE9PXR5cGVvZiBhLnJldHVyblZhbHVlJiZcbihhLnJldHVyblZhbHVlPSExKSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1wZCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEuc3RvcFByb3BhZ2F0aW9uP2Euc3RvcFByb3BhZ2F0aW9uKCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5jYW5jZWxCdWJibGUmJihhLmNhbmNlbEJ1YmJsZT0hMCksdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1wZCl9LHBlcnNpc3Q6ZnVuY3Rpb24oKXt9LGlzUGVyc2lzdGVudDpwZH0pO3JldHVybiBifVxudmFyIHNkPXtldmVudFBoYXNlOjAsYnViYmxlczowLGNhbmNlbGFibGU6MCx0aW1lU3RhbXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltZVN0YW1wfHxEYXRlLm5vdygpfSxkZWZhdWx0UHJldmVudGVkOjAsaXNUcnVzdGVkOjB9LHRkPXJkKHNkKSx1ZD1BKHt9LHNkLHt2aWV3OjAsZGV0YWlsOjB9KSx2ZD1yZCh1ZCksd2QseGQseWQsQWQ9QSh7fSx1ZCx7c2NyZWVuWDowLHNjcmVlblk6MCxjbGllbnRYOjAsY2xpZW50WTowLHBhZ2VYOjAscGFnZVk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxhbHRLZXk6MCxtZXRhS2V5OjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZCxidXR0b246MCxidXR0b25zOjAscmVsYXRlZFRhcmdldDpmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YS5yZWxhdGVkVGFyZ2V0P2EuZnJvbUVsZW1lbnQ9PT1hLnNyY0VsZW1lbnQ/YS50b0VsZW1lbnQ6YS5mcm9tRWxlbWVudDphLnJlbGF0ZWRUYXJnZXR9LG1vdmVtZW50WDpmdW5jdGlvbihhKXtpZihcIm1vdmVtZW50WFwiaW5cbmEpcmV0dXJuIGEubW92ZW1lbnRYO2EhPT15ZCYmKHlkJiZcIm1vdXNlbW92ZVwiPT09YS50eXBlPyh3ZD1hLnNjcmVlblgteWQuc2NyZWVuWCx4ZD1hLnNjcmVlblkteWQuc2NyZWVuWSk6eGQ9d2Q9MCx5ZD1hKTtyZXR1cm4gd2R9LG1vdmVtZW50WTpmdW5jdGlvbihhKXtyZXR1cm5cIm1vdmVtZW50WVwiaW4gYT9hLm1vdmVtZW50WTp4ZH19KSxCZD1yZChBZCksQ2Q9QSh7fSxBZCx7ZGF0YVRyYW5zZmVyOjB9KSxEZD1yZChDZCksRWQ9QSh7fSx1ZCx7cmVsYXRlZFRhcmdldDowfSksRmQ9cmQoRWQpLEdkPUEoe30sc2Qse2FuaW1hdGlvbk5hbWU6MCxlbGFwc2VkVGltZTowLHBzZXVkb0VsZW1lbnQ6MH0pLEhkPXJkKEdkKSxJZD1BKHt9LHNkLHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSksSmQ9cmQoSWQpLEtkPUEoe30sc2Qse2RhdGE6MH0pLExkPXJkKEtkKSxNZD17RXNjOlwiRXNjYXBlXCIsXG5TcGFjZWJhcjpcIiBcIixMZWZ0OlwiQXJyb3dMZWZ0XCIsVXA6XCJBcnJvd1VwXCIsUmlnaHQ6XCJBcnJvd1JpZ2h0XCIsRG93bjpcIkFycm93RG93blwiLERlbDpcIkRlbGV0ZVwiLFdpbjpcIk9TXCIsTWVudTpcIkNvbnRleHRNZW51XCIsQXBwczpcIkNvbnRleHRNZW51XCIsU2Nyb2xsOlwiU2Nyb2xsTG9ja1wiLE1velByaW50YWJsZUtleTpcIlVuaWRlbnRpZmllZFwifSxOZD17ODpcIkJhY2tzcGFjZVwiLDk6XCJUYWJcIiwxMjpcIkNsZWFyXCIsMTM6XCJFbnRlclwiLDE2OlwiU2hpZnRcIiwxNzpcIkNvbnRyb2xcIiwxODpcIkFsdFwiLDE5OlwiUGF1c2VcIiwyMDpcIkNhcHNMb2NrXCIsMjc6XCJFc2NhcGVcIiwzMjpcIiBcIiwzMzpcIlBhZ2VVcFwiLDM0OlwiUGFnZURvd25cIiwzNTpcIkVuZFwiLDM2OlwiSG9tZVwiLDM3OlwiQXJyb3dMZWZ0XCIsMzg6XCJBcnJvd1VwXCIsMzk6XCJBcnJvd1JpZ2h0XCIsNDA6XCJBcnJvd0Rvd25cIiw0NTpcIkluc2VydFwiLDQ2OlwiRGVsZXRlXCIsMTEyOlwiRjFcIiwxMTM6XCJGMlwiLDExNDpcIkYzXCIsMTE1OlwiRjRcIiwxMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIixcbjExOTpcIkY4XCIsMTIwOlwiRjlcIiwxMjE6XCJGMTBcIiwxMjI6XCJGMTFcIiwxMjM6XCJGMTJcIiwxNDQ6XCJOdW1Mb2NrXCIsMTQ1OlwiU2Nyb2xsTG9ja1wiLDIyNDpcIk1ldGFcIn0sT2Q9e0FsdDpcImFsdEtleVwiLENvbnRyb2w6XCJjdHJsS2V5XCIsTWV0YTpcIm1ldGFLZXlcIixTaGlmdDpcInNoaWZ0S2V5XCJ9O2Z1bmN0aW9uIFBkKGEpe3ZhciBiPXRoaXMubmF0aXZlRXZlbnQ7cmV0dXJuIGIuZ2V0TW9kaWZpZXJTdGF0ZT9iLmdldE1vZGlmaWVyU3RhdGUoYSk6KGE9T2RbYV0pPyEhYlthXTohMX1mdW5jdGlvbiB6ZCgpe3JldHVybiBQZH1cbnZhciBRZD1BKHt9LHVkLHtrZXk6ZnVuY3Rpb24oYSl7aWYoYS5rZXkpe3ZhciBiPU1kW2Eua2V5XXx8YS5rZXk7aWYoXCJVbmlkZW50aWZpZWRcIiE9PWIpcmV0dXJuIGJ9cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlPyhhPW9kKGEpLDEzPT09YT9cIkVudGVyXCI6U3RyaW5nLmZyb21DaGFyQ29kZShhKSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9OZFthLmtleUNvZGVdfHxcIlVuaWRlbnRpZmllZFwiOlwiXCJ9LGNvZGU6MCxsb2NhdGlvbjowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxyZXBlYXQ6MCxsb2NhbGU6MCxnZXRNb2RpZmllclN0YXRlOnpkLGNoYXJDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT9vZChhKTowfSxrZXlDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9LHdoaWNoOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PVxuYS50eXBlP29kKGEpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9fSksUmQ9cmQoUWQpLFNkPUEoe30sQWQse3BvaW50ZXJJZDowLHdpZHRoOjAsaGVpZ2h0OjAscHJlc3N1cmU6MCx0YW5nZW50aWFsUHJlc3N1cmU6MCx0aWx0WDowLHRpbHRZOjAsdHdpc3Q6MCxwb2ludGVyVHlwZTowLGlzUHJpbWFyeTowfSksVGQ9cmQoU2QpLFVkPUEoe30sdWQse3RvdWNoZXM6MCx0YXJnZXRUb3VjaGVzOjAsY2hhbmdlZFRvdWNoZXM6MCxhbHRLZXk6MCxtZXRhS2V5OjAsY3RybEtleTowLHNoaWZ0S2V5OjAsZ2V0TW9kaWZpZXJTdGF0ZTp6ZH0pLFZkPXJkKFVkKSxXZD1BKHt9LHNkLHtwcm9wZXJ0eU5hbWU6MCxlbGFwc2VkVGltZTowLHBzZXVkb0VsZW1lbnQ6MH0pLFhkPXJkKFdkKSxZZD1BKHt9LEFkLHtkZWx0YVg6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVhcImluIGE/YS5kZWx0YVg6XCJ3aGVlbERlbHRhWFwiaW4gYT8tYS53aGVlbERlbHRhWDowfSxcbmRlbHRhWTpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWVwiaW4gYT9hLmRlbHRhWTpcIndoZWVsRGVsdGFZXCJpbiBhPy1hLndoZWVsRGVsdGFZOlwid2hlZWxEZWx0YVwiaW4gYT8tYS53aGVlbERlbHRhOjB9LGRlbHRhWjowLGRlbHRhTW9kZTowfSksWmQ9cmQoWWQpLCRkPVs5LDEzLDI3LDMyXSxhZT1pYSYmXCJDb21wb3NpdGlvbkV2ZW50XCJpbiB3aW5kb3csYmU9bnVsbDtpYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYoYmU9ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTt2YXIgY2U9aWEmJlwiVGV4dEV2ZW50XCJpbiB3aW5kb3cmJiFiZSxkZT1pYSYmKCFhZXx8YmUmJjg8YmUmJjExPj1iZSksZWU9U3RyaW5nLmZyb21DaGFyQ29kZSgzMiksZmU9ITE7XG5mdW5jdGlvbiBnZShhLGIpe3N3aXRjaChhKXtjYXNlIFwia2V5dXBcIjpyZXR1cm4tMSE9PSRkLmluZGV4T2YoYi5rZXlDb2RlKTtjYXNlIFwia2V5ZG93blwiOnJldHVybiAyMjkhPT1iLmtleUNvZGU7Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJmb2N1c291dFwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIGhlKGEpe2E9YS5kZXRhaWw7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcImRhdGFcImluIGE/YS5kYXRhOm51bGx9dmFyIGllPSExO2Z1bmN0aW9uIGplKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBoZShiKTtjYXNlIFwia2V5cHJlc3NcIjppZigzMiE9PWIud2hpY2gpcmV0dXJuIG51bGw7ZmU9ITA7cmV0dXJuIGVlO2Nhc2UgXCJ0ZXh0SW5wdXRcIjpyZXR1cm4gYT1iLmRhdGEsYT09PWVlJiZmZT9udWxsOmE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBrZShhLGIpe2lmKGllKXJldHVyblwiY29tcG9zaXRpb25lbmRcIj09PWF8fCFhZSYmZ2UoYSxiKT8oYT1uZCgpLG1kPWxkPWtkPW51bGwsaWU9ITEsYSk6bnVsbDtzd2l0Y2goYSl7Y2FzZSBcInBhc3RlXCI6cmV0dXJuIG51bGw7Y2FzZSBcImtleXByZXNzXCI6aWYoIShiLmN0cmxLZXl8fGIuYWx0S2V5fHxiLm1ldGFLZXkpfHxiLmN0cmxLZXkmJmIuYWx0S2V5KXtpZihiLmNoYXImJjE8Yi5jaGFyLmxlbmd0aClyZXR1cm4gYi5jaGFyO2lmKGIud2hpY2gpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCl9cmV0dXJuIG51bGw7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGRlJiZcImtvXCIhPT1iLmxvY2FsZT9udWxsOmIuZGF0YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciBsZT17Y29sb3I6ITAsZGF0ZTohMCxkYXRldGltZTohMCxcImRhdGV0aW1lLWxvY2FsXCI6ITAsZW1haWw6ITAsbW9udGg6ITAsbnVtYmVyOiEwLHBhc3N3b3JkOiEwLHJhbmdlOiEwLHNlYXJjaDohMCx0ZWw6ITAsdGV4dDohMCx0aW1lOiEwLHVybDohMCx3ZWVrOiEwfTtmdW5jdGlvbiBtZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09Yj8hIWxlW2EudHlwZV06XCJ0ZXh0YXJlYVwiPT09Yj8hMDohMX1mdW5jdGlvbiBuZShhLGIsYyxkKXtFYihkKTtiPW9lKGIsXCJvbkNoYW5nZVwiKTswPGIubGVuZ3RoJiYoYz1uZXcgdGQoXCJvbkNoYW5nZVwiLFwiY2hhbmdlXCIsbnVsbCxjLGQpLGEucHVzaCh7ZXZlbnQ6YyxsaXN0ZW5lcnM6Yn0pKX12YXIgcGU9bnVsbCxxZT1udWxsO2Z1bmN0aW9uIHJlKGEpe3NlKGEsMCl9ZnVuY3Rpb24gdGUoYSl7dmFyIGI9dWUoYSk7aWYoV2EoYikpcmV0dXJuIGF9XG5mdW5jdGlvbiB2ZShhLGIpe2lmKFwiY2hhbmdlXCI9PT1hKXJldHVybiBifXZhciB3ZT0hMTtpZihpYSl7dmFyIHhlO2lmKGlhKXt2YXIgeWU9XCJvbmlucHV0XCJpbiBkb2N1bWVudDtpZigheWUpe3ZhciB6ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3plLnNldEF0dHJpYnV0ZShcIm9uaW5wdXRcIixcInJldHVybjtcIik7eWU9XCJmdW5jdGlvblwiPT09dHlwZW9mIHplLm9uaW5wdXR9eGU9eWV9ZWxzZSB4ZT0hMTt3ZT14ZSYmKCFkb2N1bWVudC5kb2N1bWVudE1vZGV8fDk8ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKX1mdW5jdGlvbiBBZSgpe3BlJiYocGUuZGV0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsQmUpLHFlPXBlPW51bGwpfWZ1bmN0aW9uIEJlKGEpe2lmKFwidmFsdWVcIj09PWEucHJvcGVydHlOYW1lJiZ0ZShxZSkpe3ZhciBiPVtdO25lKGIscWUsYSx4YihhKSk7SmIocmUsYil9fVxuZnVuY3Rpb24gQ2UoYSxiLGMpe1wiZm9jdXNpblwiPT09YT8oQWUoKSxwZT1iLHFlPWMscGUuYXR0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsQmUpKTpcImZvY3Vzb3V0XCI9PT1hJiZBZSgpfWZ1bmN0aW9uIERlKGEpe2lmKFwic2VsZWN0aW9uY2hhbmdlXCI9PT1hfHxcImtleXVwXCI9PT1hfHxcImtleWRvd25cIj09PWEpcmV0dXJuIHRlKHFlKX1mdW5jdGlvbiBFZShhLGIpe2lmKFwiY2xpY2tcIj09PWEpcmV0dXJuIHRlKGIpfWZ1bmN0aW9uIEZlKGEsYil7aWYoXCJpbnB1dFwiPT09YXx8XCJjaGFuZ2VcIj09PWEpcmV0dXJuIHRlKGIpfWZ1bmN0aW9uIEdlKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgSGU9XCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5pcz9PYmplY3QuaXM6R2U7XG5mdW5jdGlvbiBJZShhLGIpe2lmKEhlKGEsYikpcmV0dXJuITA7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBifHxudWxsPT09YilyZXR1cm4hMTt2YXIgYz1PYmplY3Qua2V5cyhhKSxkPU9iamVjdC5rZXlzKGIpO2lmKGMubGVuZ3RoIT09ZC5sZW5ndGgpcmV0dXJuITE7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXTtpZighamEuY2FsbChiLGUpfHwhSGUoYVtlXSxiW2VdKSlyZXR1cm4hMX1yZXR1cm4hMH1mdW5jdGlvbiBKZShhKXtmb3IoO2EmJmEuZmlyc3RDaGlsZDspYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9XG5mdW5jdGlvbiBLZShhLGIpe3ZhciBjPUplKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPUplKGMpfX1mdW5jdGlvbiBMZShhLGIpe3JldHVybiBhJiZiP2E9PT1iPyEwOmEmJjM9PT1hLm5vZGVUeXBlPyExOmImJjM9PT1iLm5vZGVUeXBlP0xlKGEsYi5wYXJlbnROb2RlKTpcImNvbnRhaW5zXCJpbiBhP2EuY29udGFpbnMoYik6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8hIShhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpJjE2KTohMTohMX1cbmZ1bmN0aW9uIE1lKCl7Zm9yKHZhciBhPXdpbmRvdyxiPVhhKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPVhhKGEuZG9jdW1lbnQpfXJldHVybiBifWZ1bmN0aW9uIE5lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gYiYmKFwiaW5wdXRcIj09PWImJihcInRleHRcIj09PWEudHlwZXx8XCJzZWFyY2hcIj09PWEudHlwZXx8XCJ0ZWxcIj09PWEudHlwZXx8XCJ1cmxcIj09PWEudHlwZXx8XCJwYXNzd29yZFwiPT09YS50eXBlKXx8XCJ0ZXh0YXJlYVwiPT09Ynx8XCJ0cnVlXCI9PT1hLmNvbnRlbnRFZGl0YWJsZSl9XG5mdW5jdGlvbiBPZShhKXt2YXIgYj1NZSgpLGM9YS5mb2N1c2VkRWxlbSxkPWEuc2VsZWN0aW9uUmFuZ2U7aWYoYiE9PWMmJmMmJmMub3duZXJEb2N1bWVudCYmTGUoYy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxjKSl7aWYobnVsbCE9PWQmJk5lKGMpKWlmKGI9ZC5zdGFydCxhPWQuZW5kLHZvaWQgMD09PWEmJihhPWIpLFwic2VsZWN0aW9uU3RhcnRcImluIGMpYy5zZWxlY3Rpb25TdGFydD1iLGMuc2VsZWN0aW9uRW5kPU1hdGgubWluKGEsYy52YWx1ZS5sZW5ndGgpO2Vsc2UgaWYoYT0oYj1jLm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmYi5kZWZhdWx0Vmlld3x8d2luZG93LGEuZ2V0U2VsZWN0aW9uKXthPWEuZ2V0U2VsZWN0aW9uKCk7dmFyIGU9Yy50ZXh0Q29udGVudC5sZW5ndGgsZj1NYXRoLm1pbihkLnN0YXJ0LGUpO2Q9dm9pZCAwPT09ZC5lbmQ/ZjpNYXRoLm1pbihkLmVuZCxlKTshYS5leHRlbmQmJmY+ZCYmKGU9ZCxkPWYsZj1lKTtlPUtlKGMsZik7dmFyIGc9S2UoYyxcbmQpO2UmJmcmJigxIT09YS5yYW5nZUNvdW50fHxhLmFuY2hvck5vZGUhPT1lLm5vZGV8fGEuYW5jaG9yT2Zmc2V0IT09ZS5vZmZzZXR8fGEuZm9jdXNOb2RlIT09Zy5ub2RlfHxhLmZvY3VzT2Zmc2V0IT09Zy5vZmZzZXQpJiYoYj1iLmNyZWF0ZVJhbmdlKCksYi5zZXRTdGFydChlLm5vZGUsZS5vZmZzZXQpLGEucmVtb3ZlQWxsUmFuZ2VzKCksZj5kPyhhLmFkZFJhbmdlKGIpLGEuZXh0ZW5kKGcubm9kZSxnLm9mZnNldCkpOihiLnNldEVuZChnLm5vZGUsZy5vZmZzZXQpLGEuYWRkUmFuZ2UoYikpKX1iPVtdO2ZvcihhPWM7YT1hLnBhcmVudE5vZGU7KTE9PT1hLm5vZGVUeXBlJiZiLnB1c2goe2VsZW1lbnQ6YSxsZWZ0OmEuc2Nyb2xsTGVmdCx0b3A6YS5zY3JvbGxUb3B9KTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5mb2N1cyYmYy5mb2N1cygpO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspYT1iW2NdLGEuZWxlbWVudC5zY3JvbGxMZWZ0PWEubGVmdCxhLmVsZW1lbnQuc2Nyb2xsVG9wPWEudG9wfX1cbnZhciBQZT1pYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYxMT49ZG9jdW1lbnQuZG9jdW1lbnRNb2RlLFFlPW51bGwsUmU9bnVsbCxTZT1udWxsLFRlPSExO1xuZnVuY3Rpb24gVWUoYSxiLGMpe3ZhciBkPWMud2luZG93PT09Yz9jLmRvY3VtZW50Ojk9PT1jLm5vZGVUeXBlP2M6Yy5vd25lckRvY3VtZW50O1RlfHxudWxsPT1RZXx8UWUhPT1YYShkKXx8KGQ9UWUsXCJzZWxlY3Rpb25TdGFydFwiaW4gZCYmTmUoZCk/ZD17c3RhcnQ6ZC5zZWxlY3Rpb25TdGFydCxlbmQ6ZC5zZWxlY3Rpb25FbmR9OihkPShkLm93bmVyRG9jdW1lbnQmJmQub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSxkPXthbmNob3JOb2RlOmQuYW5jaG9yTm9kZSxhbmNob3JPZmZzZXQ6ZC5hbmNob3JPZmZzZXQsZm9jdXNOb2RlOmQuZm9jdXNOb2RlLGZvY3VzT2Zmc2V0OmQuZm9jdXNPZmZzZXR9KSxTZSYmSWUoU2UsZCl8fChTZT1kLGQ9b2UoUmUsXCJvblNlbGVjdFwiKSwwPGQubGVuZ3RoJiYoYj1uZXcgdGQoXCJvblNlbGVjdFwiLFwic2VsZWN0XCIsbnVsbCxiLGMpLGEucHVzaCh7ZXZlbnQ6YixsaXN0ZW5lcnM6ZH0pLGIudGFyZ2V0PVFlKSkpfVxuZnVuY3Rpb24gVmUoYSxiKXt2YXIgYz17fTtjW2EudG9Mb3dlckNhc2UoKV09Yi50b0xvd2VyQ2FzZSgpO2NbXCJXZWJraXRcIithXT1cIndlYmtpdFwiK2I7Y1tcIk1velwiK2FdPVwibW96XCIrYjtyZXR1cm4gY312YXIgV2U9e2FuaW1hdGlvbmVuZDpWZShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uRW5kXCIpLGFuaW1hdGlvbml0ZXJhdGlvbjpWZShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uSXRlcmF0aW9uXCIpLGFuaW1hdGlvbnN0YXJ0OlZlKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25TdGFydFwiKSx0cmFuc2l0aW9uZW5kOlZlKFwiVHJhbnNpdGlvblwiLFwiVHJhbnNpdGlvbkVuZFwiKX0sWGU9e30sWWU9e307XG5pYSYmKFllPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXCJBbmltYXRpb25FdmVudFwiaW4gd2luZG93fHwoZGVsZXRlIFdlLmFuaW1hdGlvbmVuZC5hbmltYXRpb24sZGVsZXRlIFdlLmFuaW1hdGlvbml0ZXJhdGlvbi5hbmltYXRpb24sZGVsZXRlIFdlLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbiksXCJUcmFuc2l0aW9uRXZlbnRcImluIHdpbmRvd3x8ZGVsZXRlIFdlLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbik7ZnVuY3Rpb24gWmUoYSl7aWYoWGVbYV0pcmV0dXJuIFhlW2FdO2lmKCFXZVthXSlyZXR1cm4gYTt2YXIgYj1XZVthXSxjO2ZvcihjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSYmYyBpbiBZZSlyZXR1cm4gWGVbYV09YltjXTtyZXR1cm4gYX12YXIgJGU9WmUoXCJhbmltYXRpb25lbmRcIiksYWY9WmUoXCJhbmltYXRpb25pdGVyYXRpb25cIiksYmY9WmUoXCJhbmltYXRpb25zdGFydFwiKSxjZj1aZShcInRyYW5zaXRpb25lbmRcIiksZGY9bmV3IE1hcCxlZj1cImFib3J0IGF1eENsaWNrIGNhbmNlbCBjYW5QbGF5IGNhblBsYXlUaHJvdWdoIGNsaWNrIGNsb3NlIGNvbnRleHRNZW51IGNvcHkgY3V0IGRyYWcgZHJhZ0VuZCBkcmFnRW50ZXIgZHJhZ0V4aXQgZHJhZ0xlYXZlIGRyYWdPdmVyIGRyYWdTdGFydCBkcm9wIGR1cmF0aW9uQ2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGdvdFBvaW50ZXJDYXB0dXJlIGlucHV0IGludmFsaWQga2V5RG93biBrZXlQcmVzcyBrZXlVcCBsb2FkIGxvYWRlZERhdGEgbG9hZGVkTWV0YWRhdGEgbG9hZFN0YXJ0IGxvc3RQb2ludGVyQ2FwdHVyZSBtb3VzZURvd24gbW91c2VNb3ZlIG1vdXNlT3V0IG1vdXNlT3ZlciBtb3VzZVVwIHBhc3RlIHBhdXNlIHBsYXkgcGxheWluZyBwb2ludGVyQ2FuY2VsIHBvaW50ZXJEb3duIHBvaW50ZXJNb3ZlIHBvaW50ZXJPdXQgcG9pbnRlck92ZXIgcG9pbnRlclVwIHByb2dyZXNzIHJhdGVDaGFuZ2UgcmVzZXQgcmVzaXplIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VibWl0IHN1c3BlbmQgdGltZVVwZGF0ZSB0b3VjaENhbmNlbCB0b3VjaEVuZCB0b3VjaFN0YXJ0IHZvbHVtZUNoYW5nZSBzY3JvbGwgdG9nZ2xlIHRvdWNoTW92ZSB3YWl0aW5nIHdoZWVsXCIuc3BsaXQoXCIgXCIpO1xuZnVuY3Rpb24gZmYoYSxiKXtkZi5zZXQoYSxiKTtmYShiLFthXSl9Zm9yKHZhciBnZj0wO2dmPGVmLmxlbmd0aDtnZisrKXt2YXIgaGY9ZWZbZ2ZdLGpmPWhmLnRvTG93ZXJDYXNlKCksa2Y9aGZbMF0udG9VcHBlckNhc2UoKStoZi5zbGljZSgxKTtmZihqZixcIm9uXCIra2YpfWZmKCRlLFwib25BbmltYXRpb25FbmRcIik7ZmYoYWYsXCJvbkFuaW1hdGlvbkl0ZXJhdGlvblwiKTtmZihiZixcIm9uQW5pbWF0aW9uU3RhcnRcIik7ZmYoXCJkYmxjbGlja1wiLFwib25Eb3VibGVDbGlja1wiKTtmZihcImZvY3VzaW5cIixcIm9uRm9jdXNcIik7ZmYoXCJmb2N1c291dFwiLFwib25CbHVyXCIpO2ZmKGNmLFwib25UcmFuc2l0aW9uRW5kXCIpO2hhKFwib25Nb3VzZUVudGVyXCIsW1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXSk7aGEoXCJvbk1vdXNlTGVhdmVcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtoYShcIm9uUG9pbnRlckVudGVyXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO1xuaGEoXCJvblBvaW50ZXJMZWF2ZVwiLFtcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdKTtmYShcIm9uQ2hhbmdlXCIsXCJjaGFuZ2UgY2xpY2sgZm9jdXNpbiBmb2N1c291dCBpbnB1dCBrZXlkb3duIGtleXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKSk7ZmEoXCJvblNlbGVjdFwiLFwiZm9jdXNvdXQgY29udGV4dG1lbnUgZHJhZ2VuZCBmb2N1c2luIGtleWRvd24ga2V5dXAgbW91c2Vkb3duIG1vdXNldXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtmYShcIm9uQmVmb3JlSW5wdXRcIixbXCJjb21wb3NpdGlvbmVuZFwiLFwia2V5cHJlc3NcIixcInRleHRJbnB1dFwiLFwicGFzdGVcIl0pO2ZhKFwib25Db21wb3NpdGlvbkVuZFwiLFwiY29tcG9zaXRpb25lbmQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO2ZhKFwib25Db21wb3NpdGlvblN0YXJ0XCIsXCJjb21wb3NpdGlvbnN0YXJ0IGZvY3Vzb3V0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpKTtcbmZhKFwib25Db21wb3NpdGlvblVwZGF0ZVwiLFwiY29tcG9zaXRpb251cGRhdGUgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO3ZhciBsZj1cImFib3J0IGNhbnBsYXkgY2FucGxheXRocm91Z2ggZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgbG9hZGVkZGF0YSBsb2FkZWRtZXRhZGF0YSBsb2Fkc3RhcnQgcGF1c2UgcGxheSBwbGF5aW5nIHByb2dyZXNzIHJhdGVjaGFuZ2UgcmVzaXplIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nXCIuc3BsaXQoXCIgXCIpLG1mPW5ldyBTZXQoXCJjYW5jZWwgY2xvc2UgaW52YWxpZCBsb2FkIHNjcm9sbCB0b2dnbGVcIi5zcGxpdChcIiBcIikuY29uY2F0KGxmKSk7XG5mdW5jdGlvbiBuZihhLGIsYyl7dmFyIGQ9YS50eXBlfHxcInVua25vd24tZXZlbnRcIjthLmN1cnJlbnRUYXJnZXQ9YztVYihkLGIsdm9pZCAwLGEpO2EuY3VycmVudFRhcmdldD1udWxsfVxuZnVuY3Rpb24gc2UoYSxiKXtiPTAhPT0oYiY0KTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YVtjXSxlPWQuZXZlbnQ7ZD1kLmxpc3RlbmVyczthOnt2YXIgZj12b2lkIDA7aWYoYilmb3IodmFyIGc9ZC5sZW5ndGgtMTswPD1nO2ctLSl7dmFyIGg9ZFtnXSxrPWguaW5zdGFuY2UsbD1oLmN1cnJlbnRUYXJnZXQ7aD1oLmxpc3RlbmVyO2lmKGshPT1mJiZlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYnJlYWsgYTtuZihlLGgsbCk7Zj1rfWVsc2UgZm9yKGc9MDtnPGQubGVuZ3RoO2crKyl7aD1kW2ddO2s9aC5pbnN0YW5jZTtsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO25mKGUsaCxsKTtmPWt9fX1pZihRYil0aHJvdyBhPVJiLFFiPSExLFJiPW51bGwsYTt9XG5mdW5jdGlvbiBEKGEsYil7dmFyIGM9YltvZl07dm9pZCAwPT09YyYmKGM9YltvZl09bmV3IFNldCk7dmFyIGQ9YStcIl9fYnViYmxlXCI7Yy5oYXMoZCl8fChwZihiLGEsMiwhMSksYy5hZGQoZCkpfWZ1bmN0aW9uIHFmKGEsYixjKXt2YXIgZD0wO2ImJihkfD00KTtwZihjLGEsZCxiKX12YXIgcmY9XCJfcmVhY3RMaXN0ZW5pbmdcIitNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtmdW5jdGlvbiBzZihhKXtpZighYVtyZl0pe2FbcmZdPSEwO2RhLmZvckVhY2goZnVuY3Rpb24oYil7XCJzZWxlY3Rpb25jaGFuZ2VcIiE9PWImJihtZi5oYXMoYil8fHFmKGIsITEsYSkscWYoYiwhMCxhKSl9KTt2YXIgYj05PT09YS5ub2RlVHlwZT9hOmEub3duZXJEb2N1bWVudDtudWxsPT09Ynx8YltyZl18fChiW3JmXT0hMCxxZihcInNlbGVjdGlvbmNoYW5nZVwiLCExLGIpKX19XG5mdW5jdGlvbiBwZihhLGIsYyxkKXtzd2l0Y2goamQoYikpe2Nhc2UgMTp2YXIgZT1lZDticmVhaztjYXNlIDQ6ZT1nZDticmVhaztkZWZhdWx0OmU9ZmR9Yz1lLmJpbmQobnVsbCxiLGMsYSk7ZT12b2lkIDA7IUxifHxcInRvdWNoc3RhcnRcIiE9PWImJlwidG91Y2htb3ZlXCIhPT1iJiZcIndoZWVsXCIhPT1ifHwoZT0hMCk7ZD92b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse2NhcHR1cmU6ITAscGFzc2l2ZTplfSk6YS5hZGRFdmVudExpc3RlbmVyKGIsYywhMCk6dm9pZCAwIT09ZT9hLmFkZEV2ZW50TGlzdGVuZXIoYixjLHtwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX1cbmZ1bmN0aW9uIGhkKGEsYixjLGQsZSl7dmFyIGY9ZDtpZigwPT09KGImMSkmJjA9PT0oYiYyKSYmbnVsbCE9PWQpYTpmb3IoOzspe2lmKG51bGw9PT1kKXJldHVybjt2YXIgZz1kLnRhZztpZigzPT09Z3x8ND09PWcpe3ZhciBoPWQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoaD09PWV8fDg9PT1oLm5vZGVUeXBlJiZoLnBhcmVudE5vZGU9PT1lKWJyZWFrO2lmKDQ9PT1nKWZvcihnPWQucmV0dXJuO251bGwhPT1nOyl7dmFyIGs9Zy50YWc7aWYoMz09PWt8fDQ9PT1rKWlmKGs9Zy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxrPT09ZXx8OD09PWsubm9kZVR5cGUmJmsucGFyZW50Tm9kZT09PWUpcmV0dXJuO2c9Zy5yZXR1cm59Zm9yKDtudWxsIT09aDspe2c9V2MoaCk7aWYobnVsbD09PWcpcmV0dXJuO2s9Zy50YWc7aWYoNT09PWt8fDY9PT1rKXtkPWY9Zztjb250aW51ZSBhfWg9aC5wYXJlbnROb2RlfX1kPWQucmV0dXJufUpiKGZ1bmN0aW9uKCl7dmFyIGQ9ZixlPXhiKGMpLGc9W107XG5hOnt2YXIgaD1kZi5nZXQoYSk7aWYodm9pZCAwIT09aCl7dmFyIGs9dGQsbj1hO3N3aXRjaChhKXtjYXNlIFwia2V5cHJlc3NcIjppZigwPT09b2QoYykpYnJlYWsgYTtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOms9UmQ7YnJlYWs7Y2FzZSBcImZvY3VzaW5cIjpuPVwiZm9jdXNcIjtrPUZkO2JyZWFrO2Nhc2UgXCJmb2N1c291dFwiOm49XCJibHVyXCI7az1GZDticmVhaztjYXNlIFwiYmVmb3JlYmx1clwiOmNhc2UgXCJhZnRlcmJsdXJcIjprPUZkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilicmVhayBhO2Nhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6az1CZDticmVhaztjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjprPVxuRGQ7YnJlYWs7Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6az1WZDticmVhaztjYXNlICRlOmNhc2UgYWY6Y2FzZSBiZjprPUhkO2JyZWFrO2Nhc2UgY2Y6az1YZDticmVhaztjYXNlIFwic2Nyb2xsXCI6az12ZDticmVhaztjYXNlIFwid2hlZWxcIjprPVpkO2JyZWFrO2Nhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJwYXN0ZVwiOms9SmQ7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcnVwXCI6az1UZH12YXIgdD0wIT09KGImNCksSj0hdCYmXCJzY3JvbGxcIj09PWEseD10P251bGwhPT1oP2grXCJDYXB0dXJlXCI6bnVsbDpoO3Q9W107Zm9yKHZhciB3PWQsdTtudWxsIT09XG53Oyl7dT13O3ZhciBGPXUuc3RhdGVOb2RlOzU9PT11LnRhZyYmbnVsbCE9PUYmJih1PUYsbnVsbCE9PXgmJihGPUtiKHcseCksbnVsbCE9RiYmdC5wdXNoKHRmKHcsRix1KSkpKTtpZihKKWJyZWFrO3c9dy5yZXR1cm59MDx0Lmxlbmd0aCYmKGg9bmV3IGsoaCxuLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmgsbGlzdGVuZXJzOnR9KSl9fWlmKDA9PT0oYiY3KSl7YTp7aD1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YTtrPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihoJiZjIT09d2ImJihuPWMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCkmJihXYyhuKXx8blt1Zl0pKWJyZWFrIGE7aWYoa3x8aCl7aD1lLndpbmRvdz09PWU/ZTooaD1lLm93bmVyRG9jdW1lbnQpP2guZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93OndpbmRvdztpZihrKXtpZihuPWMucmVsYXRlZFRhcmdldHx8Yy50b0VsZW1lbnQsaz1kLG49bj9XYyhuKTpudWxsLG51bGwhPT1cbm4mJihKPVZiKG4pLG4hPT1KfHw1IT09bi50YWcmJjYhPT1uLnRhZykpbj1udWxsfWVsc2Ugaz1udWxsLG49ZDtpZihrIT09bil7dD1CZDtGPVwib25Nb3VzZUxlYXZlXCI7eD1cIm9uTW91c2VFbnRlclwiO3c9XCJtb3VzZVwiO2lmKFwicG9pbnRlcm91dFwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSl0PVRkLEY9XCJvblBvaW50ZXJMZWF2ZVwiLHg9XCJvblBvaW50ZXJFbnRlclwiLHc9XCJwb2ludGVyXCI7Sj1udWxsPT1rP2g6dWUoayk7dT1udWxsPT1uP2g6dWUobik7aD1uZXcgdChGLHcrXCJsZWF2ZVwiLGssYyxlKTtoLnRhcmdldD1KO2gucmVsYXRlZFRhcmdldD11O0Y9bnVsbDtXYyhlKT09PWQmJih0PW5ldyB0KHgsdytcImVudGVyXCIsbixjLGUpLHQudGFyZ2V0PXUsdC5yZWxhdGVkVGFyZ2V0PUosRj10KTtKPUY7aWYoayYmbiliOnt0PWs7eD1uO3c9MDtmb3IodT10O3U7dT12Zih1KSl3Kys7dT0wO2ZvcihGPXg7RjtGPXZmKEYpKXUrKztmb3IoOzA8dy11Oyl0PXZmKHQpLHctLTtmb3IoOzA8dS13Oyl4PVxudmYoeCksdS0tO2Zvcig7dy0tOyl7aWYodD09PXh8fG51bGwhPT14JiZ0PT09eC5hbHRlcm5hdGUpYnJlYWsgYjt0PXZmKHQpO3g9dmYoeCl9dD1udWxsfWVsc2UgdD1udWxsO251bGwhPT1rJiZ3ZihnLGgsayx0LCExKTtudWxsIT09biYmbnVsbCE9PUomJndmKGcsSixuLHQsITApfX19YTp7aD1kP3VlKGQpOndpbmRvdztrPWgubm9kZU5hbWUmJmgubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtpZihcInNlbGVjdFwiPT09a3x8XCJpbnB1dFwiPT09ayYmXCJmaWxlXCI9PT1oLnR5cGUpdmFyIG5hPXZlO2Vsc2UgaWYobWUoaCkpaWYod2UpbmE9RmU7ZWxzZXtuYT1EZTt2YXIgeGE9Q2V9ZWxzZShrPWgubm9kZU5hbWUpJiZcImlucHV0XCI9PT1rLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1oLnR5cGV8fFwicmFkaW9cIj09PWgudHlwZSkmJihuYT1FZSk7aWYobmEmJihuYT1uYShhLGQpKSl7bmUoZyxuYSxjLGUpO2JyZWFrIGF9eGEmJnhhKGEsaCxkKTtcImZvY3Vzb3V0XCI9PT1hJiYoeGE9aC5fd3JhcHBlclN0YXRlKSYmXG54YS5jb250cm9sbGVkJiZcIm51bWJlclwiPT09aC50eXBlJiZjYihoLFwibnVtYmVyXCIsaC52YWx1ZSl9eGE9ZD91ZShkKTp3aW5kb3c7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6aWYobWUoeGEpfHxcInRydWVcIj09PXhhLmNvbnRlbnRFZGl0YWJsZSlRZT14YSxSZT1kLFNlPW51bGw7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6U2U9UmU9UWU9bnVsbDticmVhaztjYXNlIFwibW91c2Vkb3duXCI6VGU9ITA7YnJlYWs7Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwiZHJhZ2VuZFwiOlRlPSExO1VlKGcsYyxlKTticmVhaztjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6aWYoUGUpYnJlYWs7Y2FzZSBcImtleWRvd25cIjpjYXNlIFwia2V5dXBcIjpVZShnLGMsZSl9dmFyICRhO2lmKGFlKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOnZhciBiYT1cIm9uQ29tcG9zaXRpb25TdGFydFwiO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6YmE9XCJvbkNvbXBvc2l0aW9uRW5kXCI7XG5icmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbnVwZGF0ZVwiOmJhPVwib25Db21wb3NpdGlvblVwZGF0ZVwiO2JyZWFrIGJ9YmE9dm9pZCAwfWVsc2UgaWU/Z2UoYSxjKSYmKGJhPVwib25Db21wb3NpdGlvbkVuZFwiKTpcImtleWRvd25cIj09PWEmJjIyOT09PWMua2V5Q29kZSYmKGJhPVwib25Db21wb3NpdGlvblN0YXJ0XCIpO2JhJiYoZGUmJlwia29cIiE9PWMubG9jYWxlJiYoaWV8fFwib25Db21wb3NpdGlvblN0YXJ0XCIhPT1iYT9cIm9uQ29tcG9zaXRpb25FbmRcIj09PWJhJiZpZSYmKCRhPW5kKCkpOihrZD1lLGxkPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGllPSEwKSkseGE9b2UoZCxiYSksMDx4YS5sZW5ndGgmJihiYT1uZXcgTGQoYmEsYSxudWxsLGMsZSksZy5wdXNoKHtldmVudDpiYSxsaXN0ZW5lcnM6eGF9KSwkYT9iYS5kYXRhPSRhOigkYT1oZShjKSxudWxsIT09JGEmJihiYS5kYXRhPSRhKSkpKTtpZigkYT1jZT9qZShhLGMpOmtlKGEsYykpZD1vZShkLFwib25CZWZvcmVJbnB1dFwiKSxcbjA8ZC5sZW5ndGgmJihlPW5ldyBMZChcIm9uQmVmb3JlSW5wdXRcIixcImJlZm9yZWlucHV0XCIsbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6ZSxsaXN0ZW5lcnM6ZH0pLGUuZGF0YT0kYSl9c2UoZyxiKX0pfWZ1bmN0aW9uIHRmKGEsYixjKXtyZXR1cm57aW5zdGFuY2U6YSxsaXN0ZW5lcjpiLGN1cnJlbnRUYXJnZXQ6Y319ZnVuY3Rpb24gb2UoYSxiKXtmb3IodmFyIGM9YitcIkNhcHR1cmVcIixkPVtdO251bGwhPT1hOyl7dmFyIGU9YSxmPWUuc3RhdGVOb2RlOzU9PT1lLnRhZyYmbnVsbCE9PWYmJihlPWYsZj1LYihhLGMpLG51bGwhPWYmJmQudW5zaGlmdCh0ZihhLGYsZSkpLGY9S2IoYSxiKSxudWxsIT1mJiZkLnB1c2godGYoYSxmLGUpKSk7YT1hLnJldHVybn1yZXR1cm4gZH1mdW5jdGlvbiB2ZihhKXtpZihudWxsPT09YSlyZXR1cm4gbnVsbDtkbyBhPWEucmV0dXJuO3doaWxlKGEmJjUhPT1hLnRhZyk7cmV0dXJuIGE/YTpudWxsfVxuZnVuY3Rpb24gd2YoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yi5fcmVhY3ROYW1lLGc9W107bnVsbCE9PWMmJmMhPT1kOyl7dmFyIGg9YyxrPWguYWx0ZXJuYXRlLGw9aC5zdGF0ZU5vZGU7aWYobnVsbCE9PWsmJms9PT1kKWJyZWFrOzU9PT1oLnRhZyYmbnVsbCE9PWwmJihoPWwsZT8oaz1LYihjLGYpLG51bGwhPWsmJmcudW5zaGlmdCh0ZihjLGssaCkpKTplfHwoaz1LYihjLGYpLG51bGwhPWsmJmcucHVzaCh0ZihjLGssaCkpKSk7Yz1jLnJldHVybn0wIT09Zy5sZW5ndGgmJmEucHVzaCh7ZXZlbnQ6YixsaXN0ZW5lcnM6Z30pfXZhciB4Zj0vXFxyXFxuPy9nLHlmPS9cXHUwMDAwfFxcdUZGRkQvZztmdW5jdGlvbiB6ZihhKXtyZXR1cm4oXCJzdHJpbmdcIj09PXR5cGVvZiBhP2E6XCJcIithKS5yZXBsYWNlKHhmLFwiXFxuXCIpLnJlcGxhY2UoeWYsXCJcIil9ZnVuY3Rpb24gQWYoYSxiLGMpe2I9emYoYik7aWYoemYoYSkhPT1iJiZjKXRocm93IEVycm9yKHAoNDI1KSk7fWZ1bmN0aW9uIEJmKCl7fVxudmFyIENmPW51bGwsRGY9bnVsbDtmdW5jdGlvbiBFZihhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwibm9zY3JpcHRcIj09PWF8fFwic3RyaW5nXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJudW1iZXJcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbH1cbnZhciBGZj1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCxHZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp2b2lkIDAsSGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIFByb21pc2U/UHJvbWlzZTp2b2lkIDAsSmY9XCJmdW5jdGlvblwiPT09dHlwZW9mIHF1ZXVlTWljcm90YXNrP3F1ZXVlTWljcm90YXNrOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgSGY/ZnVuY3Rpb24oYSl7cmV0dXJuIEhmLnJlc29sdmUobnVsbCkudGhlbihhKS5jYXRjaChJZil9OkZmO2Z1bmN0aW9uIElmKGEpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBhO30pfVxuZnVuY3Rpb24gS2YoYSxiKXt2YXIgYz1iLGQ9MDtkb3t2YXIgZT1jLm5leHRTaWJsaW5nO2EucmVtb3ZlQ2hpbGQoYyk7aWYoZSYmOD09PWUubm9kZVR5cGUpaWYoYz1lLmRhdGEsXCIvJFwiPT09Yyl7aWYoMD09PWQpe2EucmVtb3ZlQ2hpbGQoZSk7YmQoYik7cmV0dXJufWQtLX1lbHNlXCIkXCIhPT1jJiZcIiQ/XCIhPT1jJiZcIiQhXCIhPT1jfHxkKys7Yz1lfXdoaWxlKGMpO2JkKGIpfWZ1bmN0aW9uIExmKGEpe2Zvcig7bnVsbCE9YTthPWEubmV4dFNpYmxpbmcpe3ZhciBiPWEubm9kZVR5cGU7aWYoMT09PWJ8fDM9PT1iKWJyZWFrO2lmKDg9PT1iKXtiPWEuZGF0YTtpZihcIiRcIj09PWJ8fFwiJCFcIj09PWJ8fFwiJD9cIj09PWIpYnJlYWs7aWYoXCIvJFwiPT09YilyZXR1cm4gbnVsbH19cmV0dXJuIGF9XG5mdW5jdGlvbiBNZihhKXthPWEucHJldmlvdXNTaWJsaW5nO2Zvcih2YXIgYj0wO2E7KXtpZig4PT09YS5ub2RlVHlwZSl7dmFyIGM9YS5kYXRhO2lmKFwiJFwiPT09Y3x8XCIkIVwiPT09Y3x8XCIkP1wiPT09Yyl7aWYoMD09PWIpcmV0dXJuIGE7Yi0tfWVsc2VcIi8kXCI9PT1jJiZiKyt9YT1hLnByZXZpb3VzU2libGluZ31yZXR1cm4gbnVsbH12YXIgTmY9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksT2Y9XCJfX3JlYWN0RmliZXIkXCIrTmYsUGY9XCJfX3JlYWN0UHJvcHMkXCIrTmYsdWY9XCJfX3JlYWN0Q29udGFpbmVyJFwiK05mLG9mPVwiX19yZWFjdEV2ZW50cyRcIitOZixRZj1cIl9fcmVhY3RMaXN0ZW5lcnMkXCIrTmYsUmY9XCJfX3JlYWN0SGFuZGxlcyRcIitOZjtcbmZ1bmN0aW9uIFdjKGEpe3ZhciBiPWFbT2ZdO2lmKGIpcmV0dXJuIGI7Zm9yKHZhciBjPWEucGFyZW50Tm9kZTtjOyl7aWYoYj1jW3VmXXx8Y1tPZl0pe2M9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWIuY2hpbGR8fG51bGwhPT1jJiZudWxsIT09Yy5jaGlsZClmb3IoYT1NZihhKTtudWxsIT09YTspe2lmKGM9YVtPZl0pcmV0dXJuIGM7YT1NZihhKX1yZXR1cm4gYn1hPWM7Yz1hLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQ2IoYSl7YT1hW09mXXx8YVt1Zl07cmV0dXJuIWF8fDUhPT1hLnRhZyYmNiE9PWEudGFnJiYxMyE9PWEudGFnJiYzIT09YS50YWc/bnVsbDphfWZ1bmN0aW9uIHVlKGEpe2lmKDU9PT1hLnRhZ3x8Nj09PWEudGFnKXJldHVybiBhLnN0YXRlTm9kZTt0aHJvdyBFcnJvcihwKDMzKSk7fWZ1bmN0aW9uIERiKGEpe3JldHVybiBhW1BmXXx8bnVsbH12YXIgU2Y9W10sVGY9LTE7ZnVuY3Rpb24gVWYoYSl7cmV0dXJue2N1cnJlbnQ6YX19XG5mdW5jdGlvbiBFKGEpezA+VGZ8fChhLmN1cnJlbnQ9U2ZbVGZdLFNmW1RmXT1udWxsLFRmLS0pfWZ1bmN0aW9uIEcoYSxiKXtUZisrO1NmW1RmXT1hLmN1cnJlbnQ7YS5jdXJyZW50PWJ9dmFyIFZmPXt9LEg9VWYoVmYpLFdmPVVmKCExKSxYZj1WZjtmdW5jdGlvbiBZZihhLGIpe3ZhciBjPWEudHlwZS5jb250ZXh0VHlwZXM7aWYoIWMpcmV0dXJuIFZmO3ZhciBkPWEuc3RhdGVOb2RlO2lmKGQmJmQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD09PWIpcmV0dXJuIGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ7dmFyIGU9e30sZjtmb3IoZiBpbiBjKWVbZl09YltmXTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9YixhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWUpO3JldHVybiBlfVxuZnVuY3Rpb24gWmYoYSl7YT1hLmNoaWxkQ29udGV4dFR5cGVzO3JldHVybiBudWxsIT09YSYmdm9pZCAwIT09YX1mdW5jdGlvbiAkZigpe0UoV2YpO0UoSCl9ZnVuY3Rpb24gYWcoYSxiLGMpe2lmKEguY3VycmVudCE9PVZmKXRocm93IEVycm9yKHAoMTY4KSk7RyhILGIpO0coV2YsYyl9ZnVuY3Rpb24gYmcoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2I9Yi5jaGlsZENvbnRleHRUeXBlcztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZC5nZXRDaGlsZENvbnRleHQpcmV0dXJuIGM7ZD1kLmdldENoaWxkQ29udGV4dCgpO2Zvcih2YXIgZSBpbiBkKWlmKCEoZSBpbiBiKSl0aHJvdyBFcnJvcihwKDEwOCxSYShhKXx8XCJVbmtub3duXCIsZSkpO3JldHVybiBBKHt9LGMsZCl9XG5mdW5jdGlvbiBjZyhhKXthPShhPWEuc3RhdGVOb2RlKSYmYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dHx8VmY7WGY9SC5jdXJyZW50O0coSCxhKTtHKFdmLFdmLmN1cnJlbnQpO3JldHVybiEwfWZ1bmN0aW9uIGRnKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtpZighZCl0aHJvdyBFcnJvcihwKDE2OSkpO2M/KGE9YmcoYSxiLFhmKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWEsRShXZiksRShIKSxHKEgsYSkpOkUoV2YpO0coV2YsYyl9dmFyIGVnPW51bGwsZmc9ITEsZ2c9ITE7ZnVuY3Rpb24gaGcoYSl7bnVsbD09PWVnP2VnPVthXTplZy5wdXNoKGEpfWZ1bmN0aW9uIGlnKGEpe2ZnPSEwO2hnKGEpfVxuZnVuY3Rpb24gamcoKXtpZighZ2cmJm51bGwhPT1lZyl7Z2c9ITA7dmFyIGE9MCxiPUM7dHJ5e3ZhciBjPWVnO2ZvcihDPTE7YTxjLmxlbmd0aDthKyspe3ZhciBkPWNbYV07ZG8gZD1kKCEwKTt3aGlsZShudWxsIT09ZCl9ZWc9bnVsbDtmZz0hMX1jYXRjaChlKXt0aHJvdyBudWxsIT09ZWcmJihlZz1lZy5zbGljZShhKzEpKSxhYyhmYyxqZyksZTt9ZmluYWxseXtDPWIsZ2c9ITF9fXJldHVybiBudWxsfXZhciBrZz1bXSxsZz0wLG1nPW51bGwsbmc9MCxvZz1bXSxwZz0wLHFnPW51bGwscmc9MSxzZz1cIlwiO2Z1bmN0aW9uIHRnKGEsYil7a2dbbGcrK109bmc7a2dbbGcrK109bWc7bWc9YTtuZz1ifVxuZnVuY3Rpb24gdWcoYSxiLGMpe29nW3BnKytdPXJnO29nW3BnKytdPXNnO29nW3BnKytdPXFnO3FnPWE7dmFyIGQ9cmc7YT1zZzt2YXIgZT0zMi1vYyhkKS0xO2QmPX4oMTw8ZSk7Yys9MTt2YXIgZj0zMi1vYyhiKStlO2lmKDMwPGYpe3ZhciBnPWUtZSU1O2Y9KGQmKDE8PGcpLTEpLnRvU3RyaW5nKDMyKTtkPj49ZztlLT1nO3JnPTE8PDMyLW9jKGIpK2V8Yzw8ZXxkO3NnPWYrYX1lbHNlIHJnPTE8PGZ8Yzw8ZXxkLHNnPWF9ZnVuY3Rpb24gdmcoYSl7bnVsbCE9PWEucmV0dXJuJiYodGcoYSwxKSx1ZyhhLDEsMCkpfWZ1bmN0aW9uIHdnKGEpe2Zvcig7YT09PW1nOyltZz1rZ1stLWxnXSxrZ1tsZ109bnVsbCxuZz1rZ1stLWxnXSxrZ1tsZ109bnVsbDtmb3IoO2E9PT1xZzspcWc9b2dbLS1wZ10sb2dbcGddPW51bGwsc2c9b2dbLS1wZ10sb2dbcGddPW51bGwscmc9b2dbLS1wZ10sb2dbcGddPW51bGx9dmFyIHhnPW51bGwseWc9bnVsbCxJPSExLHpnPW51bGw7XG5mdW5jdGlvbiBBZyhhLGIpe3ZhciBjPUJnKDUsbnVsbCxudWxsLDApO2MuZWxlbWVudFR5cGU9XCJERUxFVEVEXCI7Yy5zdGF0ZU5vZGU9YjtjLnJldHVybj1hO2I9YS5kZWxldGlvbnM7bnVsbD09PWI/KGEuZGVsZXRpb25zPVtjXSxhLmZsYWdzfD0xNik6Yi5wdXNoKGMpfVxuZnVuY3Rpb24gQ2coYSxiKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTp2YXIgYz1hLnR5cGU7Yj0xIT09Yi5ub2RlVHlwZXx8Yy50b0xvd2VyQ2FzZSgpIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP251bGw6YjtyZXR1cm4gbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIseGc9YSx5Zz1MZihiLmZpcnN0Q2hpbGQpLCEwKTohMTtjYXNlIDY6cmV0dXJuIGI9XCJcIj09PWEucGVuZGluZ1Byb3BzfHwzIT09Yi5ub2RlVHlwZT9udWxsOmIsbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIseGc9YSx5Zz1udWxsLCEwKTohMTtjYXNlIDEzOnJldHVybiBiPTghPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYz1udWxsIT09cWc/e2lkOnJnLG92ZXJmbG93OnNnfTpudWxsLGEubWVtb2l6ZWRTdGF0ZT17ZGVoeWRyYXRlZDpiLHRyZWVDb250ZXh0OmMscmV0cnlMYW5lOjEwNzM3NDE4MjR9LGM9QmcoMTgsbnVsbCxudWxsLDApLGMuc3RhdGVOb2RlPWIsYy5yZXR1cm49YSxhLmNoaWxkPWMseGc9YSx5Zz1cbm51bGwsITApOiExO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIERnKGEpe3JldHVybiAwIT09KGEubW9kZSYxKSYmMD09PShhLmZsYWdzJjEyOCl9ZnVuY3Rpb24gRWcoYSl7aWYoSSl7dmFyIGI9eWc7aWYoYil7dmFyIGM9YjtpZighQ2coYSxiKSl7aWYoRGcoYSkpdGhyb3cgRXJyb3IocCg0MTgpKTtiPUxmKGMubmV4dFNpYmxpbmcpO3ZhciBkPXhnO2ImJkNnKGEsYik/QWcoZCxjKTooYS5mbGFncz1hLmZsYWdzJi00MDk3fDIsST0hMSx4Zz1hKX19ZWxzZXtpZihEZyhhKSl0aHJvdyBFcnJvcihwKDQxOCkpO2EuZmxhZ3M9YS5mbGFncyYtNDA5N3wyO0k9ITE7eGc9YX19fWZ1bmN0aW9uIEZnKGEpe2ZvcihhPWEucmV0dXJuO251bGwhPT1hJiY1IT09YS50YWcmJjMhPT1hLnRhZyYmMTMhPT1hLnRhZzspYT1hLnJldHVybjt4Zz1hfVxuZnVuY3Rpb24gR2coYSl7aWYoYSE9PXhnKXJldHVybiExO2lmKCFJKXJldHVybiBGZyhhKSxJPSEwLCExO3ZhciBiOyhiPTMhPT1hLnRhZykmJiEoYj01IT09YS50YWcpJiYoYj1hLnR5cGUsYj1cImhlYWRcIiE9PWImJlwiYm9keVwiIT09YiYmIUVmKGEudHlwZSxhLm1lbW9pemVkUHJvcHMpKTtpZihiJiYoYj15Zykpe2lmKERnKGEpKXRocm93IEhnKCksRXJyb3IocCg0MTgpKTtmb3IoO2I7KUFnKGEsYiksYj1MZihiLm5leHRTaWJsaW5nKX1GZyhhKTtpZigxMz09PWEudGFnKXthPWEubWVtb2l6ZWRTdGF0ZTthPW51bGwhPT1hP2EuZGVoeWRyYXRlZDpudWxsO2lmKCFhKXRocm93IEVycm9yKHAoMzE3KSk7YTp7YT1hLm5leHRTaWJsaW5nO2ZvcihiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIvJFwiPT09Yyl7aWYoMD09PWIpe3lnPUxmKGEubmV4dFNpYmxpbmcpO2JyZWFrIGF9Yi0tfWVsc2VcIiRcIiE9PWMmJlwiJCFcIiE9PWMmJlwiJD9cIiE9PWN8fGIrK31hPWEubmV4dFNpYmxpbmd9eWc9XG5udWxsfX1lbHNlIHlnPXhnP0xmKGEuc3RhdGVOb2RlLm5leHRTaWJsaW5nKTpudWxsO3JldHVybiEwfWZ1bmN0aW9uIEhnKCl7Zm9yKHZhciBhPXlnO2E7KWE9TGYoYS5uZXh0U2libGluZyl9ZnVuY3Rpb24gSWcoKXt5Zz14Zz1udWxsO0k9ITF9ZnVuY3Rpb24gSmcoYSl7bnVsbD09PXpnP3pnPVthXTp6Zy5wdXNoKGEpfXZhciBLZz11YS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZztcbmZ1bmN0aW9uIExnKGEsYixjKXthPWMucmVmO2lmKG51bGwhPT1hJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmXCJvYmplY3RcIiE9PXR5cGVvZiBhKXtpZihjLl9vd25lcil7Yz1jLl9vd25lcjtpZihjKXtpZigxIT09Yy50YWcpdGhyb3cgRXJyb3IocCgzMDkpKTt2YXIgZD1jLnN0YXRlTm9kZX1pZighZCl0aHJvdyBFcnJvcihwKDE0NyxhKSk7dmFyIGU9ZCxmPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1mKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWUucmVmcztudWxsPT09YT9kZWxldGUgYltmXTpiW2ZdPWF9O2IuX3N0cmluZ1JlZj1mO3JldHVybiBifWlmKFwic3RyaW5nXCIhPT10eXBlb2YgYSl0aHJvdyBFcnJvcihwKDI4NCkpO2lmKCFjLl9vd25lcil0aHJvdyBFcnJvcihwKDI5MCxhKSk7fXJldHVybiBhfVxuZnVuY3Rpb24gTWcoYSxiKXthPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChiKTt0aHJvdyBFcnJvcihwKDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1hP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYikuam9pbihcIiwgXCIpK1wifVwiOmEpKTt9ZnVuY3Rpb24gTmcoYSl7dmFyIGI9YS5faW5pdDtyZXR1cm4gYihhLl9wYXlsb2FkKX1cbmZ1bmN0aW9uIE9nKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmRlbGV0aW9ucztudWxsPT09ZD8oYi5kZWxldGlvbnM9W2NdLGIuZmxhZ3N8PTE2KTpkLnB1c2goYyl9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiKXthPVBnKGEsYik7YS5pbmRleD0wO2Euc2libGluZz1udWxsO3JldHVybiBhfWZ1bmN0aW9uIGYoYixjLGQpe2IuaW5kZXg9ZDtpZighYSlyZXR1cm4gYi5mbGFnc3w9MTA0ODU3NixjO2Q9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWQpcmV0dXJuIGQ9ZC5pbmRleCxkPGM/KGIuZmxhZ3N8PTIsYyk6ZDtiLmZsYWdzfD0yO3JldHVybiBjfWZ1bmN0aW9uIGcoYil7YSYmXG5udWxsPT09Yi5hbHRlcm5hdGUmJihiLmZsYWdzfD0yKTtyZXR1cm4gYn1mdW5jdGlvbiBoKGEsYixjLGQpe2lmKG51bGw9PT1ifHw2IT09Yi50YWcpcmV0dXJuIGI9UWcoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gayhhLGIsYyxkKXt2YXIgZj1jLnR5cGU7aWYoZj09PXlhKXJldHVybiBtKGEsYixjLnByb3BzLmNoaWxkcmVuLGQsYy5rZXkpO2lmKG51bGwhPT1iJiYoYi5lbGVtZW50VHlwZT09PWZ8fFwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYuJCR0eXBlb2Y9PT1IYSYmTmcoZik9PT1iLnR5cGUpKXJldHVybiBkPWUoYixjLnByb3BzKSxkLnJlZj1MZyhhLGIsYyksZC5yZXR1cm49YSxkO2Q9UmcoYy50eXBlLGMua2V5LGMucHJvcHMsbnVsbCxhLm1vZGUsZCk7ZC5yZWY9TGcoYSxiLGMpO2QucmV0dXJuPWE7cmV0dXJuIGR9ZnVuY3Rpb24gbChhLGIsYyxkKXtpZihudWxsPT09Ynx8NCE9PWIudGFnfHxcbmIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8hPT1jLmNvbnRhaW5lckluZm98fGIuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uIT09Yy5pbXBsZW1lbnRhdGlvbilyZXR1cm4gYj1TZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYy5jaGlsZHJlbnx8W10pO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbShhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9VGcoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBxKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGImJlwiXCIhPT1ifHxcIm51bWJlclwiPT09dHlwZW9mIGIpcmV0dXJuIGI9UWcoXCJcIitiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBiJiZudWxsIT09Yil7c3dpdGNoKGIuJCR0eXBlb2Ype2Nhc2UgdmE6cmV0dXJuIGM9UmcoYi50eXBlLGIua2V5LGIucHJvcHMsbnVsbCxhLm1vZGUsYyksXG5jLnJlZj1MZyhhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2Ugd2E6cmV0dXJuIGI9U2coYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2Nhc2UgSGE6dmFyIGQ9Yi5faW5pdDtyZXR1cm4gcShhLGQoYi5fcGF5bG9hZCksYyl9aWYoZWIoYil8fEthKGIpKXJldHVybiBiPVRnKGIsYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO01nKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcihhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYyYmXCJcIiE9PWN8fFwibnVtYmVyXCI9PT10eXBlb2YgYylyZXR1cm4gbnVsbCE9PWU/bnVsbDpoKGEsYixcIlwiK2MsZCk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yyl7c3dpdGNoKGMuJCR0eXBlb2Ype2Nhc2UgdmE6cmV0dXJuIGMua2V5PT09ZT9rKGEsYixjLGQpOm51bGw7Y2FzZSB3YTpyZXR1cm4gYy5rZXk9PT1lP2woYSxiLGMsZCk6bnVsbDtjYXNlIEhhOnJldHVybiBlPWMuX2luaXQscihhLFxuYixlKGMuX3BheWxvYWQpLGQpfWlmKGViKGMpfHxLYShjKSlyZXR1cm4gbnVsbCE9PWU/bnVsbDptKGEsYixjLGQsbnVsbCk7TWcoYSxjKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB5KGEsYixjLGQsZSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkJiZcIlwiIT09ZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLGgoYixhLFwiXCIrZCxlKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGQmJm51bGwhPT1kKXtzd2l0Y2goZC4kJHR5cGVvZil7Y2FzZSB2YTpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsayhiLGEsZCxlKTtjYXNlIHdhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxsKGIsYSxkLGUpO2Nhc2UgSGE6dmFyIGY9ZC5faW5pdDtyZXR1cm4geShhLGIsYyxmKGQuX3BheWxvYWQpLGUpfWlmKGViKGQpfHxLYShkKSlyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxtKGIsYSxkLGUsbnVsbCk7TWcoYixkKX1yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIG4oZSxnLGgsayl7Zm9yKHZhciBsPW51bGwsbT1udWxsLHU9Zyx3PWc9MCx4PW51bGw7bnVsbCE9PXUmJnc8aC5sZW5ndGg7dysrKXt1LmluZGV4Pnc/KHg9dSx1PW51bGwpOng9dS5zaWJsaW5nO3ZhciBuPXIoZSx1LGhbd10sayk7aWYobnVsbD09PW4pe251bGw9PT11JiYodT14KTticmVha31hJiZ1JiZudWxsPT09bi5hbHRlcm5hdGUmJmIoZSx1KTtnPWYobixnLHcpO251bGw9PT1tP2w9bjptLnNpYmxpbmc9bjttPW47dT14fWlmKHc9PT1oLmxlbmd0aClyZXR1cm4gYyhlLHUpLEkmJnRnKGUsdyksbDtpZihudWxsPT09dSl7Zm9yKDt3PGgubGVuZ3RoO3crKyl1PXEoZSxoW3ddLGspLG51bGwhPT11JiYoZz1mKHUsZyx3KSxudWxsPT09bT9sPXU6bS5zaWJsaW5nPXUsbT11KTtJJiZ0ZyhlLHcpO3JldHVybiBsfWZvcih1PWQoZSx1KTt3PGgubGVuZ3RoO3crKyl4PXkodSxlLHcsaFt3XSxrKSxudWxsIT09eCYmKGEmJm51bGwhPT14LmFsdGVybmF0ZSYmdS5kZWxldGUobnVsbD09PVxueC5rZXk/dzp4LmtleSksZz1mKHgsZyx3KSxudWxsPT09bT9sPXg6bS5zaWJsaW5nPXgsbT14KTthJiZ1LmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO0kmJnRnKGUsdyk7cmV0dXJuIGx9ZnVuY3Rpb24gdChlLGcsaCxrKXt2YXIgbD1LYShoKTtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgbCl0aHJvdyBFcnJvcihwKDE1MCkpO2g9bC5jYWxsKGgpO2lmKG51bGw9PWgpdGhyb3cgRXJyb3IocCgxNTEpKTtmb3IodmFyIHU9bD1udWxsLG09Zyx3PWc9MCx4PW51bGwsbj1oLm5leHQoKTtudWxsIT09bSYmIW4uZG9uZTt3Kyssbj1oLm5leHQoKSl7bS5pbmRleD53Pyh4PW0sbT1udWxsKTp4PW0uc2libGluZzt2YXIgdD1yKGUsbSxuLnZhbHVlLGspO2lmKG51bGw9PT10KXtudWxsPT09bSYmKG09eCk7YnJlYWt9YSYmbSYmbnVsbD09PXQuYWx0ZXJuYXRlJiZiKGUsbSk7Zz1mKHQsZyx3KTtudWxsPT09dT9sPXQ6dS5zaWJsaW5nPXQ7dT10O209eH1pZihuLmRvbmUpcmV0dXJuIGMoZSxcbm0pLEkmJnRnKGUsdyksbDtpZihudWxsPT09bSl7Zm9yKDshbi5kb25lO3crKyxuPWgubmV4dCgpKW49cShlLG4udmFsdWUsayksbnVsbCE9PW4mJihnPWYobixnLHcpLG51bGw9PT11P2w9bjp1LnNpYmxpbmc9bix1PW4pO0kmJnRnKGUsdyk7cmV0dXJuIGx9Zm9yKG09ZChlLG0pOyFuLmRvbmU7dysrLG49aC5uZXh0KCkpbj15KG0sZSx3LG4udmFsdWUsayksbnVsbCE9PW4mJihhJiZudWxsIT09bi5hbHRlcm5hdGUmJm0uZGVsZXRlKG51bGw9PT1uLmtleT93Om4ua2V5KSxnPWYobixnLHcpLG51bGw9PT11P2w9bjp1LnNpYmxpbmc9bix1PW4pO2EmJm0uZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7SSYmdGcoZSx3KTtyZXR1cm4gbH1mdW5jdGlvbiBKKGEsZCxmLGgpe1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PXlhJiZudWxsPT09Zi5rZXkmJihmPWYucHJvcHMuY2hpbGRyZW4pO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYpe3N3aXRjaChmLiQkdHlwZW9mKXtjYXNlIHZhOmE6e2Zvcih2YXIgaz1cbmYua2V5LGw9ZDtudWxsIT09bDspe2lmKGwua2V5PT09ayl7az1mLnR5cGU7aWYoaz09PXlhKXtpZig3PT09bC50YWcpe2MoYSxsLnNpYmxpbmcpO2Q9ZShsLGYucHJvcHMuY2hpbGRyZW4pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9fWVsc2UgaWYobC5lbGVtZW50VHlwZT09PWt8fFwib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWsmJmsuJCR0eXBlb2Y9PT1IYSYmTmcoayk9PT1sLnR5cGUpe2MoYSxsLnNpYmxpbmcpO2Q9ZShsLGYucHJvcHMpO2QucmVmPUxnKGEsbCxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWMoYSxsKTticmVha31lbHNlIGIoYSxsKTtsPWwuc2libGluZ31mLnR5cGU9PT15YT8oZD1UZyhmLnByb3BzLmNoaWxkcmVuLGEubW9kZSxoLGYua2V5KSxkLnJldHVybj1hLGE9ZCk6KGg9UmcoZi50eXBlLGYua2V5LGYucHJvcHMsbnVsbCxhLm1vZGUsaCksaC5yZWY9TGcoYSxkLGYpLGgucmV0dXJuPWEsYT1oKX1yZXR1cm4gZyhhKTtjYXNlIHdhOmE6e2ZvcihsPWYua2V5O251bGwhPT1cbmQ7KXtpZihkLmtleT09PWwpaWYoND09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLGQpO2JyZWFrfWVsc2UgYihhLGQpO2Q9ZC5zaWJsaW5nfWQ9U2coZixhLm1vZGUsaCk7ZC5yZXR1cm49YTthPWR9cmV0dXJuIGcoYSk7Y2FzZSBIYTpyZXR1cm4gbD1mLl9pbml0LEooYSxkLGwoZi5fcGF5bG9hZCksaCl9aWYoZWIoZikpcmV0dXJuIG4oYSxkLGYsaCk7aWYoS2EoZikpcmV0dXJuIHQoYSxkLGYsaCk7TWcoYSxmKX1yZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGYmJlwiXCIhPT1mfHxcIm51bWJlclwiPT09dHlwZW9mIGY/KGY9XCJcIitmLG51bGwhPT1kJiY2PT09ZC50YWc/KGMoYSxkLnNpYmxpbmcpLGQ9ZShkLGYpLGQucmV0dXJuPWEsYT1kKTpcbihjKGEsZCksZD1RZyhmLGEubW9kZSxoKSxkLnJldHVybj1hLGE9ZCksZyhhKSk6YyhhLGQpfXJldHVybiBKfXZhciBVZz1PZyghMCksVmc9T2coITEpLFdnPVVmKG51bGwpLFhnPW51bGwsWWc9bnVsbCxaZz1udWxsO2Z1bmN0aW9uICRnKCl7Wmc9WWc9WGc9bnVsbH1mdW5jdGlvbiBhaChhKXt2YXIgYj1XZy5jdXJyZW50O0UoV2cpO2EuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIGJoKGEsYixjKXtmb3IoO251bGwhPT1hOyl7dmFyIGQ9YS5hbHRlcm5hdGU7KGEuY2hpbGRMYW5lcyZiKSE9PWI/KGEuY2hpbGRMYW5lc3w9YixudWxsIT09ZCYmKGQuY2hpbGRMYW5lc3w9YikpOm51bGwhPT1kJiYoZC5jaGlsZExhbmVzJmIpIT09YiYmKGQuY2hpbGRMYW5lc3w9Yik7aWYoYT09PWMpYnJlYWs7YT1hLnJldHVybn19XG5mdW5jdGlvbiBjaChhLGIpe1hnPWE7Wmc9WWc9bnVsbDthPWEuZGVwZW5kZW5jaWVzO251bGwhPT1hJiZudWxsIT09YS5maXJzdENvbnRleHQmJigwIT09KGEubGFuZXMmYikmJihkaD0hMCksYS5maXJzdENvbnRleHQ9bnVsbCl9ZnVuY3Rpb24gZWgoYSl7dmFyIGI9YS5fY3VycmVudFZhbHVlO2lmKFpnIT09YSlpZihhPXtjb250ZXh0OmEsbWVtb2l6ZWRWYWx1ZTpiLG5leHQ6bnVsbH0sbnVsbD09PVlnKXtpZihudWxsPT09WGcpdGhyb3cgRXJyb3IocCgzMDgpKTtZZz1hO1hnLmRlcGVuZGVuY2llcz17bGFuZXM6MCxmaXJzdENvbnRleHQ6YX19ZWxzZSBZZz1ZZy5uZXh0PWE7cmV0dXJuIGJ9dmFyIGZoPW51bGw7ZnVuY3Rpb24gZ2goYSl7bnVsbD09PWZoP2ZoPVthXTpmaC5wdXNoKGEpfVxuZnVuY3Rpb24gaGgoYSxiLGMsZCl7dmFyIGU9Yi5pbnRlcmxlYXZlZDtudWxsPT09ZT8oYy5uZXh0PWMsZ2goYikpOihjLm5leHQ9ZS5uZXh0LGUubmV4dD1jKTtiLmludGVybGVhdmVkPWM7cmV0dXJuIGloKGEsZCl9ZnVuY3Rpb24gaWgoYSxiKXthLmxhbmVzfD1iO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiYoYy5sYW5lc3w9Yik7Yz1hO2ZvcihhPWEucmV0dXJuO251bGwhPT1hOylhLmNoaWxkTGFuZXN8PWIsYz1hLmFsdGVybmF0ZSxudWxsIT09YyYmKGMuY2hpbGRMYW5lc3w9YiksYz1hLGE9YS5yZXR1cm47cmV0dXJuIDM9PT1jLnRhZz9jLnN0YXRlTm9kZTpudWxsfXZhciBqaD0hMTtmdW5jdGlvbiBraChhKXthLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5tZW1vaXplZFN0YXRlLGZpcnN0QmFzZVVwZGF0ZTpudWxsLGxhc3RCYXNlVXBkYXRlOm51bGwsc2hhcmVkOntwZW5kaW5nOm51bGwsaW50ZXJsZWF2ZWQ6bnVsbCxsYW5lczowfSxlZmZlY3RzOm51bGx9fVxuZnVuY3Rpb24gbGgoYSxiKXthPWEudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT09PWEmJihiLnVwZGF0ZVF1ZXVlPXtiYXNlU3RhdGU6YS5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmEuZmlyc3RCYXNlVXBkYXRlLGxhc3RCYXNlVXBkYXRlOmEubGFzdEJhc2VVcGRhdGUsc2hhcmVkOmEuc2hhcmVkLGVmZmVjdHM6YS5lZmZlY3RzfSl9ZnVuY3Rpb24gbWgoYSxiKXtyZXR1cm57ZXZlbnRUaW1lOmEsbGFuZTpiLHRhZzowLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbH19XG5mdW5jdGlvbiBuaChhLGIsYyl7dmFyIGQ9YS51cGRhdGVRdWV1ZTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtkPWQuc2hhcmVkO2lmKDAhPT0oSyYyKSl7dmFyIGU9ZC5wZW5kaW5nO251bGw9PT1lP2IubmV4dD1iOihiLm5leHQ9ZS5uZXh0LGUubmV4dD1iKTtkLnBlbmRpbmc9YjtyZXR1cm4gaWgoYSxjKX1lPWQuaW50ZXJsZWF2ZWQ7bnVsbD09PWU/KGIubmV4dD1iLGdoKGQpKTooYi5uZXh0PWUubmV4dCxlLm5leHQ9Yik7ZC5pbnRlcmxlYXZlZD1iO3JldHVybiBpaChhLGMpfWZ1bmN0aW9uIG9oKGEsYixjKXtiPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWImJihiPWIuc2hhcmVkLDAhPT0oYyY0MTk0MjQwKSkpe3ZhciBkPWIubGFuZXM7ZCY9YS5wZW5kaW5nTGFuZXM7Y3w9ZDtiLmxhbmVzPWM7Q2MoYSxjKX19XG5mdW5jdGlvbiBwaChhLGIpe3ZhciBjPWEudXBkYXRlUXVldWUsZD1hLmFsdGVybmF0ZTtpZihudWxsIT09ZCYmKGQ9ZC51cGRhdGVRdWV1ZSxjPT09ZCkpe3ZhciBlPW51bGwsZj1udWxsO2M9Yy5maXJzdEJhc2VVcGRhdGU7aWYobnVsbCE9PWMpe2Rve3ZhciBnPXtldmVudFRpbWU6Yy5ldmVudFRpbWUsbGFuZTpjLmxhbmUsdGFnOmMudGFnLHBheWxvYWQ6Yy5wYXlsb2FkLGNhbGxiYWNrOmMuY2FsbGJhY2ssbmV4dDpudWxsfTtudWxsPT09Zj9lPWY9ZzpmPWYubmV4dD1nO2M9Yy5uZXh0fXdoaWxlKG51bGwhPT1jKTtudWxsPT09Zj9lPWY9YjpmPWYubmV4dD1ifWVsc2UgZT1mPWI7Yz17YmFzZVN0YXRlOmQuYmFzZVN0YXRlLGZpcnN0QmFzZVVwZGF0ZTplLGxhc3RCYXNlVXBkYXRlOmYsc2hhcmVkOmQuc2hhcmVkLGVmZmVjdHM6ZC5lZmZlY3RzfTthLnVwZGF0ZVF1ZXVlPWM7cmV0dXJufWE9Yy5sYXN0QmFzZVVwZGF0ZTtudWxsPT09YT9jLmZpcnN0QmFzZVVwZGF0ZT1iOmEubmV4dD1cbmI7Yy5sYXN0QmFzZVVwZGF0ZT1ifVxuZnVuY3Rpb24gcWgoYSxiLGMsZCl7dmFyIGU9YS51cGRhdGVRdWV1ZTtqaD0hMTt2YXIgZj1lLmZpcnN0QmFzZVVwZGF0ZSxnPWUubGFzdEJhc2VVcGRhdGUsaD1lLnNoYXJlZC5wZW5kaW5nO2lmKG51bGwhPT1oKXtlLnNoYXJlZC5wZW5kaW5nPW51bGw7dmFyIGs9aCxsPWsubmV4dDtrLm5leHQ9bnVsbDtudWxsPT09Zz9mPWw6Zy5uZXh0PWw7Zz1rO3ZhciBtPWEuYWx0ZXJuYXRlO251bGwhPT1tJiYobT1tLnVwZGF0ZVF1ZXVlLGg9bS5sYXN0QmFzZVVwZGF0ZSxoIT09ZyYmKG51bGw9PT1oP20uZmlyc3RCYXNlVXBkYXRlPWw6aC5uZXh0PWwsbS5sYXN0QmFzZVVwZGF0ZT1rKSl9aWYobnVsbCE9PWYpe3ZhciBxPWUuYmFzZVN0YXRlO2c9MDttPWw9az1udWxsO2g9Zjtkb3t2YXIgcj1oLmxhbmUseT1oLmV2ZW50VGltZTtpZigoZCZyKT09PXIpe251bGwhPT1tJiYobT1tLm5leHQ9e2V2ZW50VGltZTp5LGxhbmU6MCx0YWc6aC50YWcscGF5bG9hZDpoLnBheWxvYWQsY2FsbGJhY2s6aC5jYWxsYmFjayxcbm5leHQ6bnVsbH0pO2E6e3ZhciBuPWEsdD1oO3I9Yjt5PWM7c3dpdGNoKHQudGFnKXtjYXNlIDE6bj10LnBheWxvYWQ7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIG4pe3E9bi5jYWxsKHkscSxyKTticmVhayBhfXE9bjticmVhayBhO2Nhc2UgMzpuLmZsYWdzPW4uZmxhZ3MmLTY1NTM3fDEyODtjYXNlIDA6bj10LnBheWxvYWQ7cj1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygbj9uLmNhbGwoeSxxLHIpOm47aWYobnVsbD09PXJ8fHZvaWQgMD09PXIpYnJlYWsgYTtxPUEoe30scSxyKTticmVhayBhO2Nhc2UgMjpqaD0hMH19bnVsbCE9PWguY2FsbGJhY2smJjAhPT1oLmxhbmUmJihhLmZsYWdzfD02NCxyPWUuZWZmZWN0cyxudWxsPT09cj9lLmVmZmVjdHM9W2hdOnIucHVzaChoKSl9ZWxzZSB5PXtldmVudFRpbWU6eSxsYW5lOnIsdGFnOmgudGFnLHBheWxvYWQ6aC5wYXlsb2FkLGNhbGxiYWNrOmguY2FsbGJhY2ssbmV4dDpudWxsfSxudWxsPT09bT8obD1tPXksaz1xKTptPW0ubmV4dD15LGd8PXI7XG5oPWgubmV4dDtpZihudWxsPT09aClpZihoPWUuc2hhcmVkLnBlbmRpbmcsbnVsbD09PWgpYnJlYWs7ZWxzZSByPWgsaD1yLm5leHQsci5uZXh0PW51bGwsZS5sYXN0QmFzZVVwZGF0ZT1yLGUuc2hhcmVkLnBlbmRpbmc9bnVsbH13aGlsZSgxKTtudWxsPT09bSYmKGs9cSk7ZS5iYXNlU3RhdGU9aztlLmZpcnN0QmFzZVVwZGF0ZT1sO2UubGFzdEJhc2VVcGRhdGU9bTtiPWUuc2hhcmVkLmludGVybGVhdmVkO2lmKG51bGwhPT1iKXtlPWI7ZG8gZ3w9ZS5sYW5lLGU9ZS5uZXh0O3doaWxlKGUhPT1iKX1lbHNlIG51bGw9PT1mJiYoZS5zaGFyZWQubGFuZXM9MCk7cmh8PWc7YS5sYW5lcz1nO2EubWVtb2l6ZWRTdGF0ZT1xfX1cbmZ1bmN0aW9uIHNoKGEsYixjKXthPWIuZWZmZWN0cztiLmVmZmVjdHM9bnVsbDtpZihudWxsIT09YSlmb3IoYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgZD1hW2JdLGU9ZC5jYWxsYmFjaztpZihudWxsIT09ZSl7ZC5jYWxsYmFjaz1udWxsO2Q9YztpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZSl0aHJvdyBFcnJvcihwKDE5MSxlKSk7ZS5jYWxsKGQpfX19dmFyIHRoPXt9LHVoPVVmKHRoKSx2aD1VZih0aCksd2g9VWYodGgpO2Z1bmN0aW9uIHhoKGEpe2lmKGE9PT10aCl0aHJvdyBFcnJvcihwKDE3NCkpO3JldHVybiBhfVxuZnVuY3Rpb24geWgoYSxiKXtHKHdoLGIpO0codmgsYSk7Ryh1aCx0aCk7YT1iLm5vZGVUeXBlO3N3aXRjaChhKXtjYXNlIDk6Y2FzZSAxMTpiPShiPWIuZG9jdW1lbnRFbGVtZW50KT9iLm5hbWVzcGFjZVVSSTpsYihudWxsLFwiXCIpO2JyZWFrO2RlZmF1bHQ6YT04PT09YT9iLnBhcmVudE5vZGU6YixiPWEubmFtZXNwYWNlVVJJfHxudWxsLGE9YS50YWdOYW1lLGI9bGIoYixhKX1FKHVoKTtHKHVoLGIpfWZ1bmN0aW9uIHpoKCl7RSh1aCk7RSh2aCk7RSh3aCl9ZnVuY3Rpb24gQWgoYSl7eGgod2guY3VycmVudCk7dmFyIGI9eGgodWguY3VycmVudCk7dmFyIGM9bGIoYixhLnR5cGUpO2IhPT1jJiYoRyh2aCxhKSxHKHVoLGMpKX1mdW5jdGlvbiBCaChhKXt2aC5jdXJyZW50PT09YSYmKEUodWgpLEUodmgpKX12YXIgTD1VZigwKTtcbmZ1bmN0aW9uIENoKGEpe2Zvcih2YXIgYj1hO251bGwhPT1iOyl7aWYoMTM9PT1iLnRhZyl7dmFyIGM9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1jJiYoYz1jLmRlaHlkcmF0ZWQsbnVsbD09PWN8fFwiJD9cIj09PWMuZGF0YXx8XCIkIVwiPT09Yy5kYXRhKSlyZXR1cm4gYn1lbHNlIGlmKDE5PT09Yi50YWcmJnZvaWQgMCE9PWIubWVtb2l6ZWRQcm9wcy5yZXZlYWxPcmRlcil7aWYoMCE9PShiLmZsYWdzJjEyOCkpcmV0dXJuIGJ9ZWxzZSBpZihudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfXJldHVybiBudWxsfXZhciBEaD1bXTtcbmZ1bmN0aW9uIEVoKCl7Zm9yKHZhciBhPTA7YTxEaC5sZW5ndGg7YSsrKURoW2FdLl93b3JrSW5Qcm9ncmVzc1ZlcnNpb25QcmltYXJ5PW51bGw7RGgubGVuZ3RoPTB9dmFyIEZoPXVhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsR2g9dWEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsSGg9MCxNPW51bGwsTj1udWxsLE89bnVsbCxJaD0hMSxKaD0hMSxLaD0wLExoPTA7ZnVuY3Rpb24gUCgpe3Rocm93IEVycm9yKHAoMzIxKSk7fWZ1bmN0aW9uIE1oKGEsYil7aWYobnVsbD09PWIpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aCYmYzxhLmxlbmd0aDtjKyspaWYoIUhlKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9XG5mdW5jdGlvbiBOaChhLGIsYyxkLGUsZil7SGg9ZjtNPWI7Yi5tZW1vaXplZFN0YXRlPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO2IubGFuZXM9MDtGaC5jdXJyZW50PW51bGw9PT1hfHxudWxsPT09YS5tZW1vaXplZFN0YXRlP09oOlBoO2E9YyhkLGUpO2lmKEpoKXtmPTA7ZG97Smg9ITE7S2g9MDtpZigyNTw9Zil0aHJvdyBFcnJvcihwKDMwMSkpO2YrPTE7Tz1OPW51bGw7Yi51cGRhdGVRdWV1ZT1udWxsO0ZoLmN1cnJlbnQ9UWg7YT1jKGQsZSl9d2hpbGUoSmgpfUZoLmN1cnJlbnQ9Umg7Yj1udWxsIT09TiYmbnVsbCE9PU4ubmV4dDtIaD0wO089Tj1NPW51bGw7SWg9ITE7aWYoYil0aHJvdyBFcnJvcihwKDMwMCkpO3JldHVybiBhfWZ1bmN0aW9uIFNoKCl7dmFyIGE9MCE9PUtoO0toPTA7cmV0dXJuIGF9XG5mdW5jdGlvbiBUaCgpe3ZhciBhPXttZW1vaXplZFN0YXRlOm51bGwsYmFzZVN0YXRlOm51bGwsYmFzZVF1ZXVlOm51bGwscXVldWU6bnVsbCxuZXh0Om51bGx9O251bGw9PT1PP00ubWVtb2l6ZWRTdGF0ZT1PPWE6Tz1PLm5leHQ9YTtyZXR1cm4gT31mdW5jdGlvbiBVaCgpe2lmKG51bGw9PT1OKXt2YXIgYT1NLmFsdGVybmF0ZTthPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsfWVsc2UgYT1OLm5leHQ7dmFyIGI9bnVsbD09PU8/TS5tZW1vaXplZFN0YXRlOk8ubmV4dDtpZihudWxsIT09YilPPWIsTj1hO2Vsc2V7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IocCgzMTApKTtOPWE7YT17bWVtb2l6ZWRTdGF0ZTpOLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOk4uYmFzZVN0YXRlLGJhc2VRdWV1ZTpOLmJhc2VRdWV1ZSxxdWV1ZTpOLnF1ZXVlLG5leHQ6bnVsbH07bnVsbD09PU8/TS5tZW1vaXplZFN0YXRlPU89YTpPPU8ubmV4dD1hfXJldHVybiBPfVxuZnVuY3Rpb24gVmgoYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmJ9XG5mdW5jdGlvbiBXaChhKXt2YXIgYj1VaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcihwKDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPU4sZT1kLmJhc2VRdWV1ZSxmPWMucGVuZGluZztpZihudWxsIT09Zil7aWYobnVsbCE9PWUpe3ZhciBnPWUubmV4dDtlLm5leHQ9Zi5uZXh0O2YubmV4dD1nfWQuYmFzZVF1ZXVlPWU9ZjtjLnBlbmRpbmc9bnVsbH1pZihudWxsIT09ZSl7Zj1lLm5leHQ7ZD1kLmJhc2VTdGF0ZTt2YXIgaD1nPW51bGwsaz1udWxsLGw9Zjtkb3t2YXIgbT1sLmxhbmU7aWYoKEhoJm0pPT09bSludWxsIT09ayYmKGs9ay5uZXh0PXtsYW5lOjAsYWN0aW9uOmwuYWN0aW9uLGhhc0VhZ2VyU3RhdGU6bC5oYXNFYWdlclN0YXRlLGVhZ2VyU3RhdGU6bC5lYWdlclN0YXRlLG5leHQ6bnVsbH0pLGQ9bC5oYXNFYWdlclN0YXRlP2wuZWFnZXJTdGF0ZTphKGQsbC5hY3Rpb24pO2Vsc2V7dmFyIHE9e2xhbmU6bSxhY3Rpb246bC5hY3Rpb24saGFzRWFnZXJTdGF0ZTpsLmhhc0VhZ2VyU3RhdGUsXG5lYWdlclN0YXRlOmwuZWFnZXJTdGF0ZSxuZXh0Om51bGx9O251bGw9PT1rPyhoPWs9cSxnPWQpOms9ay5uZXh0PXE7TS5sYW5lc3w9bTtyaHw9bX1sPWwubmV4dH13aGlsZShudWxsIT09bCYmbCE9PWYpO251bGw9PT1rP2c9ZDprLm5leHQ9aDtIZShkLGIubWVtb2l6ZWRTdGF0ZSl8fChkaD0hMCk7Yi5tZW1vaXplZFN0YXRlPWQ7Yi5iYXNlU3RhdGU9ZztiLmJhc2VRdWV1ZT1rO2MubGFzdFJlbmRlcmVkU3RhdGU9ZH1hPWMuaW50ZXJsZWF2ZWQ7aWYobnVsbCE9PWEpe2U9YTtkbyBmPWUubGFuZSxNLmxhbmVzfD1mLHJofD1mLGU9ZS5uZXh0O3doaWxlKGUhPT1hKX1lbHNlIG51bGw9PT1lJiYoYy5sYW5lcz0wKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGMuZGlzcGF0Y2hdfVxuZnVuY3Rpb24gWGgoYSl7dmFyIGI9VWgoKSxjPWIucXVldWU7aWYobnVsbD09PWMpdGhyb3cgRXJyb3IocCgzMTEpKTtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTt2YXIgZD1jLmRpc3BhdGNoLGU9Yy5wZW5kaW5nLGY9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1lKXtjLnBlbmRpbmc9bnVsbDt2YXIgZz1lPWUubmV4dDtkbyBmPWEoZixnLmFjdGlvbiksZz1nLm5leHQ7d2hpbGUoZyE9PWUpO0hlKGYsYi5tZW1vaXplZFN0YXRlKXx8KGRoPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtudWxsPT09Yi5iYXNlUXVldWUmJihiLmJhc2VTdGF0ZT1mKTtjLmxhc3RSZW5kZXJlZFN0YXRlPWZ9cmV0dXJuW2YsZF19ZnVuY3Rpb24gWWgoKXt9XG5mdW5jdGlvbiBaaChhLGIpe3ZhciBjPU0sZD1VaCgpLGU9YigpLGY9IUhlKGQubWVtb2l6ZWRTdGF0ZSxlKTtmJiYoZC5tZW1vaXplZFN0YXRlPWUsZGg9ITApO2Q9ZC5xdWV1ZTskaChhaS5iaW5kKG51bGwsYyxkLGEpLFthXSk7aWYoZC5nZXRTbmFwc2hvdCE9PWJ8fGZ8fG51bGwhPT1PJiZPLm1lbW9pemVkU3RhdGUudGFnJjEpe2MuZmxhZ3N8PTIwNDg7YmkoOSxjaS5iaW5kKG51bGwsYyxkLGUsYiksdm9pZCAwLG51bGwpO2lmKG51bGw9PT1RKXRocm93IEVycm9yKHAoMzQ5KSk7MCE9PShIaCYzMCl8fGRpKGMsYixlKX1yZXR1cm4gZX1mdW5jdGlvbiBkaShhLGIsYyl7YS5mbGFnc3w9MTYzODQ7YT17Z2V0U25hcHNob3Q6Yix2YWx1ZTpjfTtiPU0udXBkYXRlUXVldWU7bnVsbD09PWI/KGI9e2xhc3RFZmZlY3Q6bnVsbCxzdG9yZXM6bnVsbH0sTS51cGRhdGVRdWV1ZT1iLGIuc3RvcmVzPVthXSk6KGM9Yi5zdG9yZXMsbnVsbD09PWM/Yi5zdG9yZXM9W2FdOmMucHVzaChhKSl9XG5mdW5jdGlvbiBjaShhLGIsYyxkKXtiLnZhbHVlPWM7Yi5nZXRTbmFwc2hvdD1kO2VpKGIpJiZmaShhKX1mdW5jdGlvbiBhaShhLGIsYyl7cmV0dXJuIGMoZnVuY3Rpb24oKXtlaShiKSYmZmkoYSl9KX1mdW5jdGlvbiBlaShhKXt2YXIgYj1hLmdldFNuYXBzaG90O2E9YS52YWx1ZTt0cnl7dmFyIGM9YigpO3JldHVybiFIZShhLGMpfWNhdGNoKGQpe3JldHVybiEwfX1mdW5jdGlvbiBmaShhKXt2YXIgYj1paChhLDEpO251bGwhPT1iJiZnaShiLGEsMSwtMSl9XG5mdW5jdGlvbiBoaShhKXt2YXIgYj1UaCgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiYoYT1hKCkpO2IubWVtb2l6ZWRTdGF0ZT1iLmJhc2VTdGF0ZT1hO2E9e3BlbmRpbmc6bnVsbCxpbnRlcmxlYXZlZDpudWxsLGxhbmVzOjAsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOlZoLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2IucXVldWU9YTthPWEuZGlzcGF0Y2g9aWkuYmluZChudWxsLE0sYSk7cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxhXX1cbmZ1bmN0aW9uIGJpKGEsYixjLGQpe2E9e3RhZzphLGNyZWF0ZTpiLGRlc3Ryb3k6YyxkZXBzOmQsbmV4dDpudWxsfTtiPU0udXBkYXRlUXVldWU7bnVsbD09PWI/KGI9e2xhc3RFZmZlY3Q6bnVsbCxzdG9yZXM6bnVsbH0sTS51cGRhdGVRdWV1ZT1iLGIubGFzdEVmZmVjdD1hLm5leHQ9YSk6KGM9Yi5sYXN0RWZmZWN0LG51bGw9PT1jP2IubGFzdEVmZmVjdD1hLm5leHQ9YTooZD1jLm5leHQsYy5uZXh0PWEsYS5uZXh0PWQsYi5sYXN0RWZmZWN0PWEpKTtyZXR1cm4gYX1mdW5jdGlvbiBqaSgpe3JldHVybiBVaCgpLm1lbW9pemVkU3RhdGV9ZnVuY3Rpb24ga2koYSxiLGMsZCl7dmFyIGU9VGgoKTtNLmZsYWdzfD1hO2UubWVtb2l6ZWRTdGF0ZT1iaSgxfGIsYyx2b2lkIDAsdm9pZCAwPT09ZD9udWxsOmQpfVxuZnVuY3Rpb24gbGkoYSxiLGMsZCl7dmFyIGU9VWgoKTtkPXZvaWQgMD09PWQ/bnVsbDpkO3ZhciBmPXZvaWQgMDtpZihudWxsIT09Til7dmFyIGc9Ti5tZW1vaXplZFN0YXRlO2Y9Zy5kZXN0cm95O2lmKG51bGwhPT1kJiZNaChkLGcuZGVwcykpe2UubWVtb2l6ZWRTdGF0ZT1iaShiLGMsZixkKTtyZXR1cm59fU0uZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPWJpKDF8YixjLGYsZCl9ZnVuY3Rpb24gbWkoYSxiKXtyZXR1cm4ga2koODM5MDY1Niw4LGEsYil9ZnVuY3Rpb24gJGgoYSxiKXtyZXR1cm4gbGkoMjA0OCw4LGEsYil9ZnVuY3Rpb24gbmkoYSxiKXtyZXR1cm4gbGkoNCwyLGEsYil9ZnVuY3Rpb24gb2koYSxiKXtyZXR1cm4gbGkoNCw0LGEsYil9XG5mdW5jdGlvbiBwaShhLGIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhPWEoKSxiKGEpLGZ1bmN0aW9uKCl7YihudWxsKX07aWYobnVsbCE9PWImJnZvaWQgMCE9PWIpcmV0dXJuIGE9YSgpLGIuY3VycmVudD1hLGZ1bmN0aW9uKCl7Yi5jdXJyZW50PW51bGx9fWZ1bmN0aW9uIHFpKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gbGkoNCw0LHBpLmJpbmQobnVsbCxiLGEpLGMpfWZ1bmN0aW9uIHJpKCl7fWZ1bmN0aW9uIHNpKGEsYil7dmFyIGM9VWgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJk1oKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfVxuZnVuY3Rpb24gdGkoYSxiKXt2YXIgYz1VaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmTWgoYixkWzFdKSlyZXR1cm4gZFswXTthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9ZnVuY3Rpb24gdWkoYSxiLGMpe2lmKDA9PT0oSGgmMjEpKXJldHVybiBhLmJhc2VTdGF0ZSYmKGEuYmFzZVN0YXRlPSExLGRoPSEwKSxhLm1lbW9pemVkU3RhdGU9YztIZShjLGIpfHwoYz15YygpLE0ubGFuZXN8PWMscmh8PWMsYS5iYXNlU3RhdGU9ITApO3JldHVybiBifWZ1bmN0aW9uIHZpKGEsYil7dmFyIGM9QztDPTAhPT1jJiY0PmM/Yzo0O2EoITApO3ZhciBkPUdoLnRyYW5zaXRpb247R2gudHJhbnNpdGlvbj17fTt0cnl7YSghMSksYigpfWZpbmFsbHl7Qz1jLEdoLnRyYW5zaXRpb249ZH19ZnVuY3Rpb24gd2koKXtyZXR1cm4gVWgoKS5tZW1vaXplZFN0YXRlfVxuZnVuY3Rpb24geGkoYSxiLGMpe3ZhciBkPXlpKGEpO2M9e2xhbmU6ZCxhY3Rpb246YyxoYXNFYWdlclN0YXRlOiExLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9O2lmKHppKGEpKUFpKGIsYyk7ZWxzZSBpZihjPWhoKGEsYixjLGQpLG51bGwhPT1jKXt2YXIgZT1SKCk7Z2koYyxhLGQsZSk7QmkoYyxiLGQpfX1cbmZ1bmN0aW9uIGlpKGEsYixjKXt2YXIgZD15aShhKSxlPXtsYW5lOmQsYWN0aW9uOmMsaGFzRWFnZXJTdGF0ZTohMSxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfTtpZih6aShhKSlBaShiLGUpO2Vsc2V7dmFyIGY9YS5hbHRlcm5hdGU7aWYoMD09PWEubGFuZXMmJihudWxsPT09Znx8MD09PWYubGFuZXMpJiYoZj1iLmxhc3RSZW5kZXJlZFJlZHVjZXIsbnVsbCE9PWYpKXRyeXt2YXIgZz1iLmxhc3RSZW5kZXJlZFN0YXRlLGg9ZihnLGMpO2UuaGFzRWFnZXJTdGF0ZT0hMDtlLmVhZ2VyU3RhdGU9aDtpZihIZShoLGcpKXt2YXIgaz1iLmludGVybGVhdmVkO251bGw9PT1rPyhlLm5leHQ9ZSxnaChiKSk6KGUubmV4dD1rLm5leHQsay5uZXh0PWUpO2IuaW50ZXJsZWF2ZWQ9ZTtyZXR1cm59fWNhdGNoKGwpe31maW5hbGx5e31jPWhoKGEsYixlLGQpO251bGwhPT1jJiYoZT1SKCksZ2koYyxhLGQsZSksQmkoYyxiLGQpKX19XG5mdW5jdGlvbiB6aShhKXt2YXIgYj1hLmFsdGVybmF0ZTtyZXR1cm4gYT09PU18fG51bGwhPT1iJiZiPT09TX1mdW5jdGlvbiBBaShhLGIpe0poPUloPSEwO3ZhciBjPWEucGVuZGluZztudWxsPT09Yz9iLm5leHQ9YjooYi5uZXh0PWMubmV4dCxjLm5leHQ9Yik7YS5wZW5kaW5nPWJ9ZnVuY3Rpb24gQmkoYSxiLGMpe2lmKDAhPT0oYyY0MTk0MjQwKSl7dmFyIGQ9Yi5sYW5lcztkJj1hLnBlbmRpbmdMYW5lcztjfD1kO2IubGFuZXM9YztDYyhhLGMpfX1cbnZhciBSaD17cmVhZENvbnRleHQ6ZWgsdXNlQ2FsbGJhY2s6UCx1c2VDb250ZXh0OlAsdXNlRWZmZWN0OlAsdXNlSW1wZXJhdGl2ZUhhbmRsZTpQLHVzZUluc2VydGlvbkVmZmVjdDpQLHVzZUxheW91dEVmZmVjdDpQLHVzZU1lbW86UCx1c2VSZWR1Y2VyOlAsdXNlUmVmOlAsdXNlU3RhdGU6UCx1c2VEZWJ1Z1ZhbHVlOlAsdXNlRGVmZXJyZWRWYWx1ZTpQLHVzZVRyYW5zaXRpb246UCx1c2VNdXRhYmxlU291cmNlOlAsdXNlU3luY0V4dGVybmFsU3RvcmU6UCx1c2VJZDpQLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sT2g9e3JlYWRDb250ZXh0OmVoLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7VGgoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDplaCx1c2VFZmZlY3Q6bWksdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIGtpKDQxOTQzMDgsXG40LHBpLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4ga2koNDE5NDMwOCw0LGEsYil9LHVzZUluc2VydGlvbkVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBraSg0LDIsYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPVRoKCk7Yj12b2lkIDA9PT1iP251bGw6YjthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVRoKCk7Yj12b2lkIDAhPT1jP2MoYik6YjtkLm1lbW9pemVkU3RhdGU9ZC5iYXNlU3RhdGU9YjthPXtwZW5kaW5nOm51bGwsaW50ZXJsZWF2ZWQ6bnVsbCxsYW5lczowLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjphLGxhc3RSZW5kZXJlZFN0YXRlOmJ9O2QucXVldWU9YTthPWEuZGlzcGF0Y2g9eGkuYmluZChudWxsLE0sYSk7cmV0dXJuW2QubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlUmVmOmZ1bmN0aW9uKGEpe3ZhciBiPVxuVGgoKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX0sdXNlU3RhdGU6aGksdXNlRGVidWdWYWx1ZTpyaSx1c2VEZWZlcnJlZFZhbHVlOmZ1bmN0aW9uKGEpe3JldHVybiBUaCgpLm1lbW9pemVkU3RhdGU9YX0sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPWhpKCExKSxiPWFbMF07YT12aS5iaW5kKG51bGwsYVsxXSk7VGgoKS5tZW1vaXplZFN0YXRlPWE7cmV0dXJuW2IsYV19LHVzZU11dGFibGVTb3VyY2U6ZnVuY3Rpb24oKXt9LHVzZVN5bmNFeHRlcm5hbFN0b3JlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1NLGU9VGgoKTtpZihJKXtpZih2b2lkIDA9PT1jKXRocm93IEVycm9yKHAoNDA3KSk7Yz1jKCl9ZWxzZXtjPWIoKTtpZihudWxsPT09USl0aHJvdyBFcnJvcihwKDM0OSkpOzAhPT0oSGgmMzApfHxkaShkLGIsYyl9ZS5tZW1vaXplZFN0YXRlPWM7dmFyIGY9e3ZhbHVlOmMsZ2V0U25hcHNob3Q6Yn07ZS5xdWV1ZT1mO21pKGFpLmJpbmQobnVsbCxkLFxuZixhKSxbYV0pO2QuZmxhZ3N8PTIwNDg7YmkoOSxjaS5iaW5kKG51bGwsZCxmLGMsYiksdm9pZCAwLG51bGwpO3JldHVybiBjfSx1c2VJZDpmdW5jdGlvbigpe3ZhciBhPVRoKCksYj1RLmlkZW50aWZpZXJQcmVmaXg7aWYoSSl7dmFyIGM9c2c7dmFyIGQ9cmc7Yz0oZCZ+KDE8PDMyLW9jKGQpLTEpKS50b1N0cmluZygzMikrYztiPVwiOlwiK2IrXCJSXCIrYztjPUtoKys7MDxjJiYoYis9XCJIXCIrYy50b1N0cmluZygzMikpO2IrPVwiOlwifWVsc2UgYz1MaCsrLGI9XCI6XCIrYitcInJcIitjLnRvU3RyaW5nKDMyKStcIjpcIjtyZXR1cm4gYS5tZW1vaXplZFN0YXRlPWJ9LHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX0sUGg9e3JlYWRDb250ZXh0OmVoLHVzZUNhbGxiYWNrOnNpLHVzZUNvbnRleHQ6ZWgsdXNlRWZmZWN0OiRoLHVzZUltcGVyYXRpdmVIYW5kbGU6cWksdXNlSW5zZXJ0aW9uRWZmZWN0Om5pLHVzZUxheW91dEVmZmVjdDpvaSx1c2VNZW1vOnRpLHVzZVJlZHVjZXI6V2gsdXNlUmVmOmppLHVzZVN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIFdoKFZoKX0sXG51c2VEZWJ1Z1ZhbHVlOnJpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9VWgoKTtyZXR1cm4gdWkoYixOLm1lbW9pemVkU3RhdGUsYSl9LHVzZVRyYW5zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT1XaChWaClbMF0sYj1VaCgpLm1lbW9pemVkU3RhdGU7cmV0dXJuW2EsYl19LHVzZU11dGFibGVTb3VyY2U6WWgsdXNlU3luY0V4dGVybmFsU3RvcmU6WmgsdXNlSWQ6d2ksdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxRaD17cmVhZENvbnRleHQ6ZWgsdXNlQ2FsbGJhY2s6c2ksdXNlQ29udGV4dDplaCx1c2VFZmZlY3Q6JGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTpxaSx1c2VJbnNlcnRpb25FZmZlY3Q6bmksdXNlTGF5b3V0RWZmZWN0Om9pLHVzZU1lbW86dGksdXNlUmVkdWNlcjpYaCx1c2VSZWY6amksdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gWGgoVmgpfSx1c2VEZWJ1Z1ZhbHVlOnJpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7dmFyIGI9VWgoKTtyZXR1cm4gbnVsbD09PVxuTj9iLm1lbW9pemVkU3RhdGU9YTp1aShiLE4ubWVtb2l6ZWRTdGF0ZSxhKX0sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPVhoKFZoKVswXSxiPVVoKCkubWVtb2l6ZWRTdGF0ZTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpZaCx1c2VTeW5jRXh0ZXJuYWxTdG9yZTpaaCx1c2VJZDp3aSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9O2Z1bmN0aW9uIENpKGEsYil7aWYoYSYmYS5kZWZhdWx0UHJvcHMpe2I9QSh7fSxiKTthPWEuZGVmYXVsdFByb3BzO2Zvcih2YXIgYyBpbiBhKXZvaWQgMD09PWJbY10mJihiW2NdPWFbY10pO3JldHVybiBifXJldHVybiBifWZ1bmN0aW9uIERpKGEsYixjLGQpe2I9YS5tZW1vaXplZFN0YXRlO2M9YyhkLGIpO2M9bnVsbD09PWN8fHZvaWQgMD09PWM/YjpBKHt9LGIsYyk7YS5tZW1vaXplZFN0YXRlPWM7MD09PWEubGFuZXMmJihhLnVwZGF0ZVF1ZXVlLmJhc2VTdGF0ZT1jKX1cbnZhciBFaT17aXNNb3VudGVkOmZ1bmN0aW9uKGEpe3JldHVybihhPWEuX3JlYWN0SW50ZXJuYWxzKT9WYihhKT09PWE6ITF9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1SKCksZT15aShhKSxmPW1oKGQsZSk7Zi5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihmLmNhbGxiYWNrPWMpO2I9bmgoYSxmLGUpO251bGwhPT1iJiYoZ2koYixhLGUsZCksb2goYixhLGUpKX0sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsczt2YXIgZD1SKCksZT15aShhKSxmPW1oKGQsZSk7Zi50YWc9MTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7Yj1uaChhLGYsZSk7bnVsbCE9PWImJihnaShiLGEsZSxkKSxvaChiLGEsZSkpfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oYSxiKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBjPVIoKSxkPVxueWkoYSksZT1taChjLGQpO2UudGFnPTI7dm9pZCAwIT09YiYmbnVsbCE9PWImJihlLmNhbGxiYWNrPWIpO2I9bmgoYSxlLGQpO251bGwhPT1iJiYoZ2koYixhLGQsYyksb2goYixhLGQpKX19O2Z1bmN0aW9uIEZpKGEsYixjLGQsZSxmLGcpe2E9YS5zdGF0ZU5vZGU7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuc2hvdWxkQ29tcG9uZW50VXBkYXRlP2Euc2hvdWxkQ29tcG9uZW50VXBkYXRlKGQsZixnKTpiLnByb3RvdHlwZSYmYi5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQ/IUllKGMsZCl8fCFJZShlLGYpOiEwfVxuZnVuY3Rpb24gR2koYSxiLGMpe3ZhciBkPSExLGU9VmY7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2Y9ZWgoZik6KGU9WmYoYik/WGY6SC5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/WWYoYSxlKTpWZik7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPUVpO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbHM9YTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9ZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWYpO3JldHVybiBifVxuZnVuY3Rpb24gSGkoYSxiLGMsZCl7YT1iLnN0YXRlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7Yi5zdGF0ZSE9PWEmJkVpLmVucXVldWVSZXBsYWNlU3RhdGUoYixiLnN0YXRlLG51bGwpfVxuZnVuY3Rpb24gSWkoYSxiLGMsZCl7dmFyIGU9YS5zdGF0ZU5vZGU7ZS5wcm9wcz1jO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2UucmVmcz17fTtraChhKTt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/ZS5jb250ZXh0PWVoKGYpOihmPVpmKGIpP1hmOkguY3VycmVudCxlLmNvbnRleHQ9WWYoYSxmKSk7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7Zj1iLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmKERpKGEsYixmLGMpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHN8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnR8fChiPWUuc3RhdGUsXG5cImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnQmJmUuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCksYiE9PWUuc3RhdGUmJkVpLmVucXVldWVSZXBsYWNlU3RhdGUoZSxlLnN0YXRlLG51bGwpLHFoKGEsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnREaWRNb3VudCYmKGEuZmxhZ3N8PTQxOTQzMDgpfWZ1bmN0aW9uIEppKGEsYil7dHJ5e3ZhciBjPVwiXCIsZD1iO2RvIGMrPVBhKGQpLGQ9ZC5yZXR1cm47d2hpbGUoZCk7dmFyIGU9Y31jYXRjaChmKXtlPVwiXFxuRXJyb3IgZ2VuZXJhdGluZyBzdGFjazogXCIrZi5tZXNzYWdlK1wiXFxuXCIrZi5zdGFja31yZXR1cm57dmFsdWU6YSxzb3VyY2U6YixzdGFjazplLGRpZ2VzdDpudWxsfX1cbmZ1bmN0aW9uIEtpKGEsYixjKXtyZXR1cm57dmFsdWU6YSxzb3VyY2U6bnVsbCxzdGFjazpudWxsIT1jP2M6bnVsbCxkaWdlc3Q6bnVsbCE9Yj9iOm51bGx9fWZ1bmN0aW9uIExpKGEsYil7dHJ5e2NvbnNvbGUuZXJyb3IoYi52YWx1ZSl9Y2F0Y2goYyl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGM7fSl9fXZhciBNaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcDtmdW5jdGlvbiBOaShhLGIsYyl7Yz1taCgtMSxjKTtjLnRhZz0zO2MucGF5bG9hZD17ZWxlbWVudDpudWxsfTt2YXIgZD1iLnZhbHVlO2MuY2FsbGJhY2s9ZnVuY3Rpb24oKXtPaXx8KE9pPSEwLFBpPWQpO0xpKGEsYil9O3JldHVybiBjfVxuZnVuY3Rpb24gUWkoYSxiLGMpe2M9bWgoLTEsYyk7Yy50YWc9Mzt2YXIgZD1hLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZT1iLnZhbHVlO2MucGF5bG9hZD1mdW5jdGlvbigpe3JldHVybiBkKGUpfTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7TGkoYSxiKX19dmFyIGY9YS5zdGF0ZU5vZGU7bnVsbCE9PWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBmLmNvbXBvbmVudERpZENhdGNoJiYoYy5jYWxsYmFjaz1mdW5jdGlvbigpe0xpKGEsYik7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09Umk/Umk9bmV3IFNldChbdGhpc10pOlJpLmFkZCh0aGlzKSk7dmFyIGM9Yi5zdGFjazt0aGlzLmNvbXBvbmVudERpZENhdGNoKGIudmFsdWUse2NvbXBvbmVudFN0YWNrOm51bGwhPT1jP2M6XCJcIn0pfSk7cmV0dXJuIGN9XG5mdW5jdGlvbiBTaShhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7aWYobnVsbD09PWQpe2Q9YS5waW5nQ2FjaGU9bmV3IE1pO3ZhciBlPW5ldyBTZXQ7ZC5zZXQoYixlKX1lbHNlIGU9ZC5nZXQoYiksdm9pZCAwPT09ZSYmKGU9bmV3IFNldCxkLnNldChiLGUpKTtlLmhhcyhjKXx8KGUuYWRkKGMpLGE9VGkuYmluZChudWxsLGEsYixjKSxiLnRoZW4oYSxhKSl9ZnVuY3Rpb24gVWkoYSl7ZG97dmFyIGI7aWYoYj0xMz09PWEudGFnKWI9YS5tZW1vaXplZFN0YXRlLGI9bnVsbCE9PWI/bnVsbCE9PWIuZGVoeWRyYXRlZD8hMDohMTohMDtpZihiKXJldHVybiBhO2E9YS5yZXR1cm59d2hpbGUobnVsbCE9PWEpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gVmkoYSxiLGMsZCxlKXtpZigwPT09KGEubW9kZSYxKSlyZXR1cm4gYT09PWI/YS5mbGFnc3w9NjU1MzY6KGEuZmxhZ3N8PTEyOCxjLmZsYWdzfD0xMzEwNzIsYy5mbGFncyY9LTUyODA1LDE9PT1jLnRhZyYmKG51bGw9PT1jLmFsdGVybmF0ZT9jLnRhZz0xNzooYj1taCgtMSwxKSxiLnRhZz0yLG5oKGMsYiwxKSkpLGMubGFuZXN8PTEpLGE7YS5mbGFnc3w9NjU1MzY7YS5sYW5lcz1lO3JldHVybiBhfXZhciBXaT11YS5SZWFjdEN1cnJlbnRPd25lcixkaD0hMTtmdW5jdGlvbiBYaShhLGIsYyxkKXtiLmNoaWxkPW51bGw9PT1hP1ZnKGIsbnVsbCxjLGQpOlVnKGIsYS5jaGlsZCxjLGQpfVxuZnVuY3Rpb24gWWkoYSxiLGMsZCxlKXtjPWMucmVuZGVyO3ZhciBmPWIucmVmO2NoKGIsZSk7ZD1OaChhLGIsYyxkLGYsZSk7Yz1TaCgpO2lmKG51bGwhPT1hJiYhZGgpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tMjA1MyxhLmxhbmVzJj1+ZSxaaShhLGIsZSk7SSYmYyYmdmcoYik7Yi5mbGFnc3w9MTtYaShhLGIsZCxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uICRpKGEsYixjLGQsZSl7aWYobnVsbD09PWEpe3ZhciBmPWMudHlwZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmIWFqKGYpJiZ2b2lkIDA9PT1mLmRlZmF1bHRQcm9wcyYmbnVsbD09PWMuY29tcGFyZSYmdm9pZCAwPT09Yy5kZWZhdWx0UHJvcHMpcmV0dXJuIGIudGFnPTE1LGIudHlwZT1mLGJqKGEsYixmLGQsZSk7YT1SZyhjLnR5cGUsbnVsbCxkLGIsYi5tb2RlLGUpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1mPWEuY2hpbGQ7aWYoMD09PShhLmxhbmVzJmUpKXt2YXIgZz1mLm1lbW9pemVkUHJvcHM7Yz1jLmNvbXBhcmU7Yz1udWxsIT09Yz9jOkllO2lmKGMoZyxkKSYmYS5yZWY9PT1iLnJlZilyZXR1cm4gWmkoYSxiLGUpfWIuZmxhZ3N8PTE7YT1QZyhmLGQpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1cbmZ1bmN0aW9uIGJqKGEsYixjLGQsZSl7aWYobnVsbCE9PWEpe3ZhciBmPWEubWVtb2l6ZWRQcm9wcztpZihJZShmLGQpJiZhLnJlZj09PWIucmVmKWlmKGRoPSExLGIucGVuZGluZ1Byb3BzPWQ9ZiwwIT09KGEubGFuZXMmZSkpMCE9PShhLmZsYWdzJjEzMTA3MikmJihkaD0hMCk7ZWxzZSByZXR1cm4gYi5sYW5lcz1hLmxhbmVzLFppKGEsYixlKX1yZXR1cm4gY2ooYSxiLGMsZCxlKX1cbmZ1bmN0aW9uIGRqKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQuY2hpbGRyZW4sZj1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtpZihcImhpZGRlblwiPT09ZC5tb2RlKWlmKDA9PT0oYi5tb2RlJjEpKWIubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjAsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6bnVsbH0sRyhlaixmaiksZmp8PWM7ZWxzZXtpZigwPT09KGMmMTA3Mzc0MTgyNCkpcmV0dXJuIGE9bnVsbCE9PWY/Zi5iYXNlTGFuZXN8YzpjLGIubGFuZXM9Yi5jaGlsZExhbmVzPTEwNzM3NDE4MjQsYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6YSxjYWNoZVBvb2w6bnVsbCx0cmFuc2l0aW9uczpudWxsfSxiLnVwZGF0ZVF1ZXVlPW51bGwsRyhlaixmaiksZmp8PWEsbnVsbDtiLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczowLGNhY2hlUG9vbDpudWxsLHRyYW5zaXRpb25zOm51bGx9O2Q9bnVsbCE9PWY/Zi5iYXNlTGFuZXM6YztHKGVqLGZqKTtmanw9ZH1lbHNlIG51bGwhPT1cbmY/KGQ9Zi5iYXNlTGFuZXN8YyxiLm1lbW9pemVkU3RhdGU9bnVsbCk6ZD1jLEcoZWosZmopLGZqfD1kO1hpKGEsYixlLGMpO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIGdqKGEsYil7dmFyIGM9Yi5yZWY7aWYobnVsbD09PWEmJm51bGwhPT1jfHxudWxsIT09YSYmYS5yZWYhPT1jKWIuZmxhZ3N8PTUxMixiLmZsYWdzfD0yMDk3MTUyfWZ1bmN0aW9uIGNqKGEsYixjLGQsZSl7dmFyIGY9WmYoYyk/WGY6SC5jdXJyZW50O2Y9WWYoYixmKTtjaChiLGUpO2M9TmgoYSxiLGMsZCxmLGUpO2Q9U2goKTtpZihudWxsIT09YSYmIWRoKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5mbGFncyY9LTIwNTMsYS5sYW5lcyY9fmUsWmkoYSxiLGUpO0kmJmQmJnZnKGIpO2IuZmxhZ3N8PTE7WGkoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBoaihhLGIsYyxkLGUpe2lmKFpmKGMpKXt2YXIgZj0hMDtjZyhiKX1lbHNlIGY9ITE7Y2goYixlKTtpZihudWxsPT09Yi5zdGF0ZU5vZGUpaWooYSxiKSxHaShiLGMsZCksSWkoYixjLGQsZSksZD0hMDtlbHNlIGlmKG51bGw9PT1hKXt2YXIgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcztnLnByb3BzPWg7dmFyIGs9Zy5jb250ZXh0LGw9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGwmJm51bGwhPT1sP2w9ZWgobCk6KGw9WmYoYyk/WGY6SC5jdXJyZW50LGw9WWYoYixsKSk7dmFyIG09Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMscT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgbXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU7cXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fFxuKGghPT1kfHxrIT09bCkmJkhpKGIsZyxkLGwpO2poPSExO3ZhciByPWIubWVtb2l6ZWRTdGF0ZTtnLnN0YXRlPXI7cWgoYixkLGcsZSk7az1iLm1lbW9pemVkU3RhdGU7aCE9PWR8fHIhPT1rfHxXZi5jdXJyZW50fHxqaD8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG0mJihEaShiLGMsbSxkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGg9amh8fEZpKGIsYyxoLGQscixrLGwpKT8ocXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQxOTQzMDgpKTpcbihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZmxhZ3N8PTQxOTQzMDgpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1rKSxnLnByb3BzPWQsZy5zdGF0ZT1rLGcuY29udGV4dD1sLGQ9aCk6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NDE5NDMwOCksZD0hMSl9ZWxzZXtnPWIuc3RhdGVOb2RlO2xoKGEsYik7aD1iLm1lbW9pemVkUHJvcHM7bD1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2g6Q2koYi50eXBlLGgpO2cucHJvcHM9bDtxPWIucGVuZGluZ1Byb3BzO3I9Zy5jb250ZXh0O2s9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9ZWgoayk6KGs9WmYoYyk/WGY6SC5jdXJyZW50LGs9WWYoYixrKSk7dmFyIHk9Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7KG09XCJmdW5jdGlvblwiPT09dHlwZW9mIHl8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKXx8XG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1xfHxyIT09aykmJkhpKGIsZyxkLGspO2poPSExO3I9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cjtxaChiLGQsZyxlKTt2YXIgbj1iLm1lbW9pemVkU3RhdGU7aCE9PXF8fHIhPT1ufHxXZi5jdXJyZW50fHxqaD8oXCJmdW5jdGlvblwiPT09dHlwZW9mIHkmJihEaShiLGMseSxkKSxuPWIubWVtb2l6ZWRTdGF0ZSksKGw9amh8fEZpKGIsYyxsLGQscixuLGspfHwhMSk/KG18fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlfHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5jb21wb25lbnRXaWxsVXBkYXRlKGQsbixrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXG5nLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlKGQsbixrKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlJiYoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihiLmZsYWdzfD0xMDI0KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcj09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZyPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MTAyNCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPW4pLGcucHJvcHM9ZCxnLnN0YXRlPW4sZy5jb250ZXh0PWssZD1sKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZyPT09XG5hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmcj09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTEwMjQpLGQ9ITEpfXJldHVybiBqaihhLGIsYyxkLGYsZSl9XG5mdW5jdGlvbiBqaihhLGIsYyxkLGUsZil7Z2ooYSxiKTt2YXIgZz0wIT09KGIuZmxhZ3MmMTI4KTtpZighZCYmIWcpcmV0dXJuIGUmJmRnKGIsYywhMSksWmkoYSxiLGYpO2Q9Yi5zdGF0ZU5vZGU7V2kuY3VycmVudD1iO3ZhciBoPWcmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcj9udWxsOmQucmVuZGVyKCk7Yi5mbGFnc3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1VZyhiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPVVnKGIsbnVsbCxoLGYpKTpYaShhLGIsaCxmKTtiLm1lbW9pemVkU3RhdGU9ZC5zdGF0ZTtlJiZkZyhiLGMsITApO3JldHVybiBiLmNoaWxkfWZ1bmN0aW9uIGtqKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2IucGVuZGluZ0NvbnRleHQ/YWcoYSxiLnBlbmRpbmdDb250ZXh0LGIucGVuZGluZ0NvbnRleHQhPT1iLmNvbnRleHQpOmIuY29udGV4dCYmYWcoYSxiLmNvbnRleHQsITEpO3loKGEsYi5jb250YWluZXJJbmZvKX1cbmZ1bmN0aW9uIGxqKGEsYixjLGQsZSl7SWcoKTtKZyhlKTtiLmZsYWdzfD0yNTY7WGkoYSxiLGMsZCk7cmV0dXJuIGIuY2hpbGR9dmFyIG1qPXtkZWh5ZHJhdGVkOm51bGwsdHJlZUNvbnRleHQ6bnVsbCxyZXRyeUxhbmU6MH07ZnVuY3Rpb24gbmooYSl7cmV0dXJue2Jhc2VMYW5lczphLGNhY2hlUG9vbDpudWxsLHRyYW5zaXRpb25zOm51bGx9fVxuZnVuY3Rpb24gb2ooYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9TC5jdXJyZW50LGY9ITEsZz0wIT09KGIuZmxhZ3MmMTI4KSxoOyhoPWcpfHwoaD1udWxsIT09YSYmbnVsbD09PWEubWVtb2l6ZWRTdGF0ZT8hMTowIT09KGUmMikpO2lmKGgpZj0hMCxiLmZsYWdzJj0tMTI5O2Vsc2UgaWYobnVsbD09PWF8fG51bGwhPT1hLm1lbW9pemVkU3RhdGUpZXw9MTtHKEwsZSYxKTtpZihudWxsPT09YSl7RWcoYik7YT1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJihhPWEuZGVoeWRyYXRlZCxudWxsIT09YSkpcmV0dXJuIDA9PT0oYi5tb2RlJjEpP2IubGFuZXM9MTpcIiQhXCI9PT1hLmRhdGE/Yi5sYW5lcz04OmIubGFuZXM9MTA3Mzc0MTgyNCxudWxsO2c9ZC5jaGlsZHJlbjthPWQuZmFsbGJhY2s7cmV0dXJuIGY/KGQ9Yi5tb2RlLGY9Yi5jaGlsZCxnPXttb2RlOlwiaGlkZGVuXCIsY2hpbGRyZW46Z30sMD09PShkJjEpJiZudWxsIT09Zj8oZi5jaGlsZExhbmVzPTAsZi5wZW5kaW5nUHJvcHM9XG5nKTpmPXBqKGcsZCwwLG51bGwpLGE9VGcoYSxkLGMsbnVsbCksZi5yZXR1cm49YixhLnJldHVybj1iLGYuc2libGluZz1hLGIuY2hpbGQ9ZixiLmNoaWxkLm1lbW9pemVkU3RhdGU9bmooYyksYi5tZW1vaXplZFN0YXRlPW1qLGEpOnFqKGIsZyl9ZT1hLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWUmJihoPWUuZGVoeWRyYXRlZCxudWxsIT09aCkpcmV0dXJuIHJqKGEsYixnLGQsaCxlLGMpO2lmKGYpe2Y9ZC5mYWxsYmFjaztnPWIubW9kZTtlPWEuY2hpbGQ7aD1lLnNpYmxpbmc7dmFyIGs9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpkLmNoaWxkcmVufTswPT09KGcmMSkmJmIuY2hpbGQhPT1lPyhkPWIuY2hpbGQsZC5jaGlsZExhbmVzPTAsZC5wZW5kaW5nUHJvcHM9ayxiLmRlbGV0aW9ucz1udWxsKTooZD1QZyhlLGspLGQuc3VidHJlZUZsYWdzPWUuc3VidHJlZUZsYWdzJjE0NjgwMDY0KTtudWxsIT09aD9mPVBnKGgsZik6KGY9VGcoZixnLGMsbnVsbCksZi5mbGFnc3w9Mik7Zi5yZXR1cm49XG5iO2QucmV0dXJuPWI7ZC5zaWJsaW5nPWY7Yi5jaGlsZD1kO2Q9ZjtmPWIuY2hpbGQ7Zz1hLmNoaWxkLm1lbW9pemVkU3RhdGU7Zz1udWxsPT09Zz9uaihjKTp7YmFzZUxhbmVzOmcuYmFzZUxhbmVzfGMsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6Zy50cmFuc2l0aW9uc307Zi5tZW1vaXplZFN0YXRlPWc7Zi5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcyZ+YztiLm1lbW9pemVkU3RhdGU9bWo7cmV0dXJuIGR9Zj1hLmNoaWxkO2E9Zi5zaWJsaW5nO2Q9UGcoZix7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjpkLmNoaWxkcmVufSk7MD09PShiLm1vZGUmMSkmJihkLmxhbmVzPWMpO2QucmV0dXJuPWI7ZC5zaWJsaW5nPW51bGw7bnVsbCE9PWEmJihjPWIuZGVsZXRpb25zLG51bGw9PT1jPyhiLmRlbGV0aW9ucz1bYV0sYi5mbGFnc3w9MTYpOmMucHVzaChhKSk7Yi5jaGlsZD1kO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBkfVxuZnVuY3Rpb24gcWooYSxiKXtiPXBqKHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmJ9LGEubW9kZSwwLG51bGwpO2IucmV0dXJuPWE7cmV0dXJuIGEuY2hpbGQ9Yn1mdW5jdGlvbiBzaihhLGIsYyxkKXtudWxsIT09ZCYmSmcoZCk7VWcoYixhLmNoaWxkLG51bGwsYyk7YT1xaihiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuKTthLmZsYWdzfD0yO2IubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBhfVxuZnVuY3Rpb24gcmooYSxiLGMsZCxlLGYsZyl7aWYoYyl7aWYoYi5mbGFncyYyNTYpcmV0dXJuIGIuZmxhZ3MmPS0yNTcsZD1LaShFcnJvcihwKDQyMikpKSxzaihhLGIsZyxkKTtpZihudWxsIT09Yi5tZW1vaXplZFN0YXRlKXJldHVybiBiLmNoaWxkPWEuY2hpbGQsYi5mbGFnc3w9MTI4LG51bGw7Zj1kLmZhbGxiYWNrO2U9Yi5tb2RlO2Q9cGooe21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46ZC5jaGlsZHJlbn0sZSwwLG51bGwpO2Y9VGcoZixlLGcsbnVsbCk7Zi5mbGFnc3w9MjtkLnJldHVybj1iO2YucmV0dXJuPWI7ZC5zaWJsaW5nPWY7Yi5jaGlsZD1kOzAhPT0oYi5tb2RlJjEpJiZVZyhiLGEuY2hpbGQsbnVsbCxnKTtiLmNoaWxkLm1lbW9pemVkU3RhdGU9bmooZyk7Yi5tZW1vaXplZFN0YXRlPW1qO3JldHVybiBmfWlmKDA9PT0oYi5tb2RlJjEpKXJldHVybiBzaihhLGIsZyxudWxsKTtpZihcIiQhXCI9PT1lLmRhdGEpe2Q9ZS5uZXh0U2libGluZyYmZS5uZXh0U2libGluZy5kYXRhc2V0O1xuaWYoZCl2YXIgaD1kLmRnc3Q7ZD1oO2Y9RXJyb3IocCg0MTkpKTtkPUtpKGYsZCx2b2lkIDApO3JldHVybiBzaihhLGIsZyxkKX1oPTAhPT0oZyZhLmNoaWxkTGFuZXMpO2lmKGRofHxoKXtkPVE7aWYobnVsbCE9PWQpe3N3aXRjaChnJi1nKXtjYXNlIDQ6ZT0yO2JyZWFrO2Nhc2UgMTY6ZT04O2JyZWFrO2Nhc2UgNjQ6Y2FzZSAxMjg6Y2FzZSAyNTY6Y2FzZSA1MTI6Y2FzZSAxMDI0OmNhc2UgMjA0ODpjYXNlIDQwOTY6Y2FzZSA4MTkyOmNhc2UgMTYzODQ6Y2FzZSAzMjc2ODpjYXNlIDY1NTM2OmNhc2UgMTMxMDcyOmNhc2UgMjYyMTQ0OmNhc2UgNTI0Mjg4OmNhc2UgMTA0ODU3NjpjYXNlIDIwOTcxNTI6Y2FzZSA0MTk0MzA0OmNhc2UgODM4ODYwODpjYXNlIDE2Nzc3MjE2OmNhc2UgMzM1NTQ0MzI6Y2FzZSA2NzEwODg2NDplPTMyO2JyZWFrO2Nhc2UgNTM2ODcwOTEyOmU9MjY4NDM1NDU2O2JyZWFrO2RlZmF1bHQ6ZT0wfWU9MCE9PShlJihkLnN1c3BlbmRlZExhbmVzfGcpKT8wOmU7XG4wIT09ZSYmZSE9PWYucmV0cnlMYW5lJiYoZi5yZXRyeUxhbmU9ZSxpaChhLGUpLGdpKGQsYSxlLC0xKSl9dGooKTtkPUtpKEVycm9yKHAoNDIxKSkpO3JldHVybiBzaihhLGIsZyxkKX1pZihcIiQ/XCI9PT1lLmRhdGEpcmV0dXJuIGIuZmxhZ3N8PTEyOCxiLmNoaWxkPWEuY2hpbGQsYj11ai5iaW5kKG51bGwsYSksZS5fcmVhY3RSZXRyeT1iLG51bGw7YT1mLnRyZWVDb250ZXh0O3lnPUxmKGUubmV4dFNpYmxpbmcpO3hnPWI7ST0hMDt6Zz1udWxsO251bGwhPT1hJiYob2dbcGcrK109cmcsb2dbcGcrK109c2csb2dbcGcrK109cWcscmc9YS5pZCxzZz1hLm92ZXJmbG93LHFnPWIpO2I9cWooYixkLmNoaWxkcmVuKTtiLmZsYWdzfD00MDk2O3JldHVybiBifWZ1bmN0aW9uIHZqKGEsYixjKXthLmxhbmVzfD1iO3ZhciBkPWEuYWx0ZXJuYXRlO251bGwhPT1kJiYoZC5sYW5lc3w9Yik7YmgoYS5yZXR1cm4sYixjKX1cbmZ1bmN0aW9uIHdqKGEsYixjLGQsZSl7dmFyIGY9YS5tZW1vaXplZFN0YXRlO251bGw9PT1mP2EubWVtb2l6ZWRTdGF0ZT17aXNCYWNrd2FyZHM6YixyZW5kZXJpbmc6bnVsbCxyZW5kZXJpbmdTdGFydFRpbWU6MCxsYXN0OmQsdGFpbDpjLHRhaWxNb2RlOmV9OihmLmlzQmFja3dhcmRzPWIsZi5yZW5kZXJpbmc9bnVsbCxmLnJlbmRlcmluZ1N0YXJ0VGltZT0wLGYubGFzdD1kLGYudGFpbD1jLGYudGFpbE1vZGU9ZSl9XG5mdW5jdGlvbiB4aihhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1kLnJldmVhbE9yZGVyLGY9ZC50YWlsO1hpKGEsYixkLmNoaWxkcmVuLGMpO2Q9TC5jdXJyZW50O2lmKDAhPT0oZCYyKSlkPWQmMXwyLGIuZmxhZ3N8PTEyODtlbHNle2lmKG51bGwhPT1hJiYwIT09KGEuZmxhZ3MmMTI4KSlhOmZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtpZigxMz09PWEudGFnKW51bGwhPT1hLm1lbW9pemVkU3RhdGUmJnZqKGEsYyxiKTtlbHNlIGlmKDE5PT09YS50YWcpdmooYSxjLGIpO2Vsc2UgaWYobnVsbCE9PWEuY2hpbGQpe2EuY2hpbGQucmV0dXJuPWE7YT1hLmNoaWxkO2NvbnRpbnVlfWlmKGE9PT1iKWJyZWFrIGE7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PWEucmV0dXJufHxhLnJldHVybj09PWIpYnJlYWsgYTthPWEucmV0dXJufWEuc2libGluZy5yZXR1cm49YS5yZXR1cm47YT1hLnNpYmxpbmd9ZCY9MX1HKEwsZCk7aWYoMD09PShiLm1vZGUmMSkpYi5tZW1vaXplZFN0YXRlPVxubnVsbDtlbHNlIHN3aXRjaChlKXtjYXNlIFwiZm9yd2FyZHNcIjpjPWIuY2hpbGQ7Zm9yKGU9bnVsbDtudWxsIT09YzspYT1jLmFsdGVybmF0ZSxudWxsIT09YSYmbnVsbD09PUNoKGEpJiYoZT1jKSxjPWMuc2libGluZztjPWU7bnVsbD09PWM/KGU9Yi5jaGlsZCxiLmNoaWxkPW51bGwpOihlPWMuc2libGluZyxjLnNpYmxpbmc9bnVsbCk7d2ooYiwhMSxlLGMsZik7YnJlYWs7Y2FzZSBcImJhY2t3YXJkc1wiOmM9bnVsbDtlPWIuY2hpbGQ7Zm9yKGIuY2hpbGQ9bnVsbDtudWxsIT09ZTspe2E9ZS5hbHRlcm5hdGU7aWYobnVsbCE9PWEmJm51bGw9PT1DaChhKSl7Yi5jaGlsZD1lO2JyZWFrfWE9ZS5zaWJsaW5nO2Uuc2libGluZz1jO2M9ZTtlPWF9d2ooYiwhMCxjLG51bGwsZik7YnJlYWs7Y2FzZSBcInRvZ2V0aGVyXCI6d2ooYiwhMSxudWxsLG51bGwsdm9pZCAwKTticmVhaztkZWZhdWx0OmIubWVtb2l6ZWRTdGF0ZT1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gaWooYSxiKXswPT09KGIubW9kZSYxKSYmbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5mbGFnc3w9Mil9ZnVuY3Rpb24gWmkoYSxiLGMpe251bGwhPT1hJiYoYi5kZXBlbmRlbmNpZXM9YS5kZXBlbmRlbmNpZXMpO3JofD1iLmxhbmVzO2lmKDA9PT0oYyZiLmNoaWxkTGFuZXMpKXJldHVybiBudWxsO2lmKG51bGwhPT1hJiZiLmNoaWxkIT09YS5jaGlsZCl0aHJvdyBFcnJvcihwKDE1MykpO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1QZyhhLGEucGVuZGluZ1Byb3BzKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9UGcoYSxhLnBlbmRpbmdQcm9wcyksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIHlqKGEsYixjKXtzd2l0Y2goYi50YWcpe2Nhc2UgMzpraihiKTtJZygpO2JyZWFrO2Nhc2UgNTpBaChiKTticmVhaztjYXNlIDE6WmYoYi50eXBlKSYmY2coYik7YnJlYWs7Y2FzZSA0OnloKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyk7YnJlYWs7Y2FzZSAxMDp2YXIgZD1iLnR5cGUuX2NvbnRleHQsZT1iLm1lbW9pemVkUHJvcHMudmFsdWU7RyhXZyxkLl9jdXJyZW50VmFsdWUpO2QuX2N1cnJlbnRWYWx1ZT1lO2JyZWFrO2Nhc2UgMTM6ZD1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQpe2lmKG51bGwhPT1kLmRlaHlkcmF0ZWQpcmV0dXJuIEcoTCxMLmN1cnJlbnQmMSksYi5mbGFnc3w9MTI4LG51bGw7aWYoMCE9PShjJmIuY2hpbGQuY2hpbGRMYW5lcykpcmV0dXJuIG9qKGEsYixjKTtHKEwsTC5jdXJyZW50JjEpO2E9WmkoYSxiLGMpO3JldHVybiBudWxsIT09YT9hLnNpYmxpbmc6bnVsbH1HKEwsTC5jdXJyZW50JjEpO2JyZWFrO2Nhc2UgMTk6ZD0wIT09KGMmXG5iLmNoaWxkTGFuZXMpO2lmKDAhPT0oYS5mbGFncyYxMjgpKXtpZihkKXJldHVybiB4aihhLGIsYyk7Yi5mbGFnc3w9MTI4fWU9Yi5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYoZS5yZW5kZXJpbmc9bnVsbCxlLnRhaWw9bnVsbCxlLmxhc3RFZmZlY3Q9bnVsbCk7RyhMLEwuY3VycmVudCk7aWYoZClicmVhaztlbHNlIHJldHVybiBudWxsO2Nhc2UgMjI6Y2FzZSAyMzpyZXR1cm4gYi5sYW5lcz0wLGRqKGEsYixjKX1yZXR1cm4gWmkoYSxiLGMpfXZhciB6aixBaixCaixDajtcbnpqPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTtBaj1mdW5jdGlvbigpe307XG5Caj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1hLm1lbW9pemVkUHJvcHM7aWYoZSE9PWQpe2E9Yi5zdGF0ZU5vZGU7eGgodWguY3VycmVudCk7dmFyIGY9bnVsbDtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6ZT1ZYShhLGUpO2Q9WWEoYSxkKTtmPVtdO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjplPUEoe30sZSx7dmFsdWU6dm9pZCAwfSk7ZD1BKHt9LGQse3ZhbHVlOnZvaWQgMH0pO2Y9W107YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZT1nYihhLGUpO2Q9Z2IoYSxkKTtmPVtdO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiIT09dHlwZW9mIGUub25DbGljayYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGQub25DbGljayYmKGEub25jbGljaz1CZil9dWIoYyxkKTt2YXIgZztjPW51bGw7Zm9yKGwgaW4gZSlpZighZC5oYXNPd25Qcm9wZXJ0eShsKSYmZS5oYXNPd25Qcm9wZXJ0eShsKSYmbnVsbCE9ZVtsXSlpZihcInN0eWxlXCI9PT1sKXt2YXIgaD1lW2xdO2ZvcihnIGluIGgpaC5oYXNPd25Qcm9wZXJ0eShnKSYmXG4oY3x8KGM9e30pLGNbZ109XCJcIil9ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJlwiY2hpbGRyZW5cIiE9PWwmJlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihlYS5oYXNPd25Qcm9wZXJ0eShsKT9mfHwoZj1bXSk6KGY9Znx8W10pLnB1c2gobCxudWxsKSk7Zm9yKGwgaW4gZCl7dmFyIGs9ZFtsXTtoPW51bGwhPWU/ZVtsXTp2b2lkIDA7aWYoZC5oYXNPd25Qcm9wZXJ0eShsKSYmayE9PWgmJihudWxsIT1rfHxudWxsIT1oKSlpZihcInN0eWxlXCI9PT1sKWlmKGgpe2ZvcihnIGluIGgpIWguaGFzT3duUHJvcGVydHkoZyl8fGsmJmsuaGFzT3duUHJvcGVydHkoZyl8fChjfHwoYz17fSksY1tnXT1cIlwiKTtmb3IoZyBpbiBrKWsuaGFzT3duUHJvcGVydHkoZykmJmhbZ10hPT1rW2ddJiYoY3x8KGM9e30pLGNbZ109a1tnXSl9ZWxzZSBjfHwoZnx8KGY9W10pLGYucHVzaChsLFxuYykpLGM9aztlbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8oaz1rP2suX19odG1sOnZvaWQgMCxoPWg/aC5fX2h0bWw6dm9pZCAwLG51bGwhPWsmJmghPT1rJiYoZj1mfHxbXSkucHVzaChsLGspKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCIhPT10eXBlb2YgayYmXCJudW1iZXJcIiE9PXR5cGVvZiBrfHwoZj1mfHxbXSkucHVzaChsLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiYoZWEuaGFzT3duUHJvcGVydHkobCk/KG51bGwhPWsmJlwib25TY3JvbGxcIj09PWwmJkQoXCJzY3JvbGxcIixhKSxmfHxoPT09a3x8KGY9W10pKTooZj1mfHxbXSkucHVzaChsLGspKX1jJiYoZj1mfHxbXSkucHVzaChcInN0eWxlXCIsYyk7dmFyIGw9ZjtpZihiLnVwZGF0ZVF1ZXVlPWwpYi5mbGFnc3w9NH19O0NqPWZ1bmN0aW9uKGEsYixjLGQpe2MhPT1kJiYoYi5mbGFnc3w9NCl9O1xuZnVuY3Rpb24gRGooYSxiKXtpZighSSlzd2l0Y2goYS50YWlsTW9kZSl7Y2FzZSBcImhpZGRlblwiOmI9YS50YWlsO2Zvcih2YXIgYz1udWxsO251bGwhPT1iOyludWxsIT09Yi5hbHRlcm5hdGUmJihjPWIpLGI9Yi5zaWJsaW5nO251bGw9PT1jP2EudGFpbD1udWxsOmMuc2libGluZz1udWxsO2JyZWFrO2Nhc2UgXCJjb2xsYXBzZWRcIjpjPWEudGFpbDtmb3IodmFyIGQ9bnVsbDtudWxsIT09YzspbnVsbCE9PWMuYWx0ZXJuYXRlJiYoZD1jKSxjPWMuc2libGluZztudWxsPT09ZD9ifHxudWxsPT09YS50YWlsP2EudGFpbD1udWxsOmEudGFpbC5zaWJsaW5nPW51bGw6ZC5zaWJsaW5nPW51bGx9fVxuZnVuY3Rpb24gUyhhKXt2YXIgYj1udWxsIT09YS5hbHRlcm5hdGUmJmEuYWx0ZXJuYXRlLmNoaWxkPT09YS5jaGlsZCxjPTAsZD0wO2lmKGIpZm9yKHZhciBlPWEuY2hpbGQ7bnVsbCE9PWU7KWN8PWUubGFuZXN8ZS5jaGlsZExhbmVzLGR8PWUuc3VidHJlZUZsYWdzJjE0NjgwMDY0LGR8PWUuZmxhZ3MmMTQ2ODAwNjQsZS5yZXR1cm49YSxlPWUuc2libGluZztlbHNlIGZvcihlPWEuY2hpbGQ7bnVsbCE9PWU7KWN8PWUubGFuZXN8ZS5jaGlsZExhbmVzLGR8PWUuc3VidHJlZUZsYWdzLGR8PWUuZmxhZ3MsZS5yZXR1cm49YSxlPWUuc2libGluZzthLnN1YnRyZWVGbGFnc3w9ZDthLmNoaWxkTGFuZXM9YztyZXR1cm4gYn1cbmZ1bmN0aW9uIEVqKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wczt3ZyhiKTtzd2l0Y2goYi50YWcpe2Nhc2UgMjpjYXNlIDE2OmNhc2UgMTU6Y2FzZSAwOmNhc2UgMTE6Y2FzZSA3OmNhc2UgODpjYXNlIDEyOmNhc2UgOTpjYXNlIDE0OnJldHVybiBTKGIpLG51bGw7Y2FzZSAxOnJldHVybiBaZihiLnR5cGUpJiYkZigpLFMoYiksbnVsbDtjYXNlIDM6ZD1iLnN0YXRlTm9kZTt6aCgpO0UoV2YpO0UoSCk7RWgoKTtkLnBlbmRpbmdDb250ZXh0JiYoZC5jb250ZXh0PWQucGVuZGluZ0NvbnRleHQsZC5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpR2coYik/Yi5mbGFnc3w9NDpudWxsPT09YXx8YS5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZCYmMD09PShiLmZsYWdzJjI1Nil8fChiLmZsYWdzfD0xMDI0LG51bGwhPT16ZyYmKEZqKHpnKSx6Zz1udWxsKSk7QWooYSxiKTtTKGIpO3JldHVybiBudWxsO2Nhc2UgNTpCaChiKTt2YXIgZT14aCh3aC5jdXJyZW50KTtcbmM9Yi50eXBlO2lmKG51bGwhPT1hJiZudWxsIT1iLnN0YXRlTm9kZSlCaihhLGIsYyxkLGUpLGEucmVmIT09Yi5yZWYmJihiLmZsYWdzfD01MTIsYi5mbGFnc3w9MjA5NzE1Mik7ZWxzZXtpZighZCl7aWYobnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHAoMTY2KSk7UyhiKTtyZXR1cm4gbnVsbH1hPXhoKHVoLmN1cnJlbnQpO2lmKEdnKGIpKXtkPWIuc3RhdGVOb2RlO2M9Yi50eXBlO3ZhciBmPWIubWVtb2l6ZWRQcm9wcztkW09mXT1iO2RbUGZdPWY7YT0wIT09KGIubW9kZSYxKTtzd2l0Y2goYyl7Y2FzZSBcImRpYWxvZ1wiOkQoXCJjYW5jZWxcIixkKTtEKFwiY2xvc2VcIixkKTticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkQoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGU9MDtlPGxmLmxlbmd0aDtlKyspRChsZltlXSxkKTticmVhaztjYXNlIFwic291cmNlXCI6RChcImVycm9yXCIsZCk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RChcImVycm9yXCIsXG5kKTtEKFwibG9hZFwiLGQpO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RChcInRvZ2dsZVwiLGQpO2JyZWFrO2Nhc2UgXCJpbnB1dFwiOlphKGQsZik7RChcImludmFsaWRcIixkKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZC5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWYubXVsdGlwbGV9O0QoXCJpbnZhbGlkXCIsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoZCxmKSxEKFwiaW52YWxpZFwiLGQpfXViKGMsZik7ZT1udWxsO2Zvcih2YXIgZyBpbiBmKWlmKGYuaGFzT3duUHJvcGVydHkoZykpe3ZhciBoPWZbZ107XCJjaGlsZHJlblwiPT09Zz9cInN0cmluZ1wiPT09dHlwZW9mIGg/ZC50ZXh0Q29udGVudCE9PWgmJighMCE9PWYuc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJiZBZihkLnRleHRDb250ZW50LGgsYSksZT1bXCJjaGlsZHJlblwiLGhdKTpcIm51bWJlclwiPT09dHlwZW9mIGgmJmQudGV4dENvbnRlbnQhPT1cIlwiK2gmJighMCE9PWYuc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJiZBZihkLnRleHRDb250ZW50LFxuaCxhKSxlPVtcImNoaWxkcmVuXCIsXCJcIitoXSk6ZWEuaGFzT3duUHJvcGVydHkoZykmJm51bGwhPWgmJlwib25TY3JvbGxcIj09PWcmJkQoXCJzY3JvbGxcIixkKX1zd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6VmEoZCk7ZGIoZCxmLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpWYShkKTtqYihkKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGYub25DbGljayYmKGQub25jbGljaz1CZil9ZD1lO2IudXBkYXRlUXVldWU9ZDtudWxsIT09ZCYmKGIuZmxhZ3N8PTQpfWVsc2V7Zz05PT09ZS5ub2RlVHlwZT9lOmUub3duZXJEb2N1bWVudDtcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWEmJihhPWtiKGMpKTtcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/XCJzY3JpcHRcIj09PWM/KGE9Zy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGEuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsYT1hLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCkpOlxuXCJzdHJpbmdcIj09PXR5cGVvZiBkLmlzP2E9Zy5jcmVhdGVFbGVtZW50KGMse2lzOmQuaXN9KTooYT1nLmNyZWF0ZUVsZW1lbnQoYyksXCJzZWxlY3RcIj09PWMmJihnPWEsZC5tdWx0aXBsZT9nLm11bHRpcGxlPSEwOmQuc2l6ZSYmKGcuc2l6ZT1kLnNpemUpKSk6YT1nLmNyZWF0ZUVsZW1lbnROUyhhLGMpO2FbT2ZdPWI7YVtQZl09ZDt6aihhLGIsITEsITEpO2Iuc3RhdGVOb2RlPWE7YTp7Zz12YihjLGQpO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RChcImNhbmNlbFwiLGEpO0QoXCJjbG9zZVwiLGEpO2U9ZDticmVhaztjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkQoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihlPTA7ZTxsZi5sZW5ndGg7ZSsrKUQobGZbZV0sYSk7ZT1kO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpEKFwiZXJyb3JcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RChcImVycm9yXCIsXG5hKTtEKFwibG9hZFwiLGEpO2U9ZDticmVhaztjYXNlIFwiZGV0YWlsc1wiOkQoXCJ0b2dnbGVcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoYSxkKTtlPVlhKGEsZCk7RChcImludmFsaWRcIixhKTticmVhaztjYXNlIFwib3B0aW9uXCI6ZT1kO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjphLl93cmFwcGVyU3RhdGU9e3dhc011bHRpcGxlOiEhZC5tdWx0aXBsZX07ZT1BKHt9LGQse3ZhbHVlOnZvaWQgMH0pO0QoXCJpbnZhbGlkXCIsYSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aGIoYSxkKTtlPWdiKGEsZCk7RChcImludmFsaWRcIixhKTticmVhaztkZWZhdWx0OmU9ZH11YihjLGUpO2g9ZTtmb3IoZiBpbiBoKWlmKGguaGFzT3duUHJvcGVydHkoZikpe3ZhciBrPWhbZl07XCJzdHlsZVwiPT09Zj9zYihhLGspOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWY/KGs9az9rLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmbmIoYSxrKSk6XCJjaGlsZHJlblwiPT09Zj9cInN0cmluZ1wiPT09dHlwZW9mIGs/KFwidGV4dGFyZWFcIiE9PVxuY3x8XCJcIiE9PWspJiZvYihhLGspOlwibnVtYmVyXCI9PT10eXBlb2YgayYmb2IoYSxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1mJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09ZiYmXCJhdXRvRm9jdXNcIiE9PWYmJihlYS5oYXNPd25Qcm9wZXJ0eShmKT9udWxsIT1rJiZcIm9uU2Nyb2xsXCI9PT1mJiZEKFwic2Nyb2xsXCIsYSk6bnVsbCE9ayYmdGEoYSxmLGssZykpfXN3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShhKTtkYihhLGQsITEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGEpO2piKGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpudWxsIT1kLnZhbHVlJiZhLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIitTYShkLnZhbHVlKSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEubXVsdGlwbGU9ISFkLm11bHRpcGxlO2Y9ZC52YWx1ZTtudWxsIT1mP2ZiKGEsISFkLm11bHRpcGxlLGYsITEpOm51bGwhPWQuZGVmYXVsdFZhbHVlJiZmYihhLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSxcbiEwKTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLm9uQ2xpY2smJihhLm9uY2xpY2s9QmYpfXN3aXRjaChjKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOmQ9ISFkLmF1dG9Gb2N1czticmVhayBhO2Nhc2UgXCJpbWdcIjpkPSEwO2JyZWFrIGE7ZGVmYXVsdDpkPSExfX1kJiYoYi5mbGFnc3w9NCl9bnVsbCE9PWIucmVmJiYoYi5mbGFnc3w9NTEyLGIuZmxhZ3N8PTIwOTcxNTIpfVMoYik7cmV0dXJuIG51bGw7Y2FzZSA2OmlmKGEmJm51bGwhPWIuc3RhdGVOb2RlKUNqKGEsYixhLm1lbW9pemVkUHJvcHMsZCk7ZWxzZXtpZihcInN0cmluZ1wiIT09dHlwZW9mIGQmJm51bGw9PT1iLnN0YXRlTm9kZSl0aHJvdyBFcnJvcihwKDE2NikpO2M9eGgod2guY3VycmVudCk7eGgodWguY3VycmVudCk7aWYoR2coYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLm1lbW9pemVkUHJvcHM7ZFtPZl09YjtpZihmPWQubm9kZVZhbHVlIT09YylpZihhPVxueGcsbnVsbCE9PWEpc3dpdGNoKGEudGFnKXtjYXNlIDM6QWYoZC5ub2RlVmFsdWUsYywwIT09KGEubW9kZSYxKSk7YnJlYWs7Y2FzZSA1OiEwIT09YS5tZW1vaXplZFByb3BzLnN1cHByZXNzSHlkcmF0aW9uV2FybmluZyYmQWYoZC5ub2RlVmFsdWUsYywwIT09KGEubW9kZSYxKSl9ZiYmKGIuZmxhZ3N8PTQpfWVsc2UgZD0oOT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQpLmNyZWF0ZVRleHROb2RlKGQpLGRbT2ZdPWIsYi5zdGF0ZU5vZGU9ZH1TKGIpO3JldHVybiBudWxsO2Nhc2UgMTM6RShMKTtkPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsPT09YXx8bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZS5kZWh5ZHJhdGVkKXtpZihJJiZudWxsIT09eWcmJjAhPT0oYi5tb2RlJjEpJiYwPT09KGIuZmxhZ3MmMTI4KSlIZygpLElnKCksYi5mbGFnc3w9OTg1NjAsZj0hMTtlbHNlIGlmKGY9R2coYiksbnVsbCE9PWQmJm51bGwhPT1kLmRlaHlkcmF0ZWQpe2lmKG51bGw9PT1cbmEpe2lmKCFmKXRocm93IEVycm9yKHAoMzE4KSk7Zj1iLm1lbW9pemVkU3RhdGU7Zj1udWxsIT09Zj9mLmRlaHlkcmF0ZWQ6bnVsbDtpZighZil0aHJvdyBFcnJvcihwKDMxNykpO2ZbT2ZdPWJ9ZWxzZSBJZygpLDA9PT0oYi5mbGFncyYxMjgpJiYoYi5tZW1vaXplZFN0YXRlPW51bGwpLGIuZmxhZ3N8PTQ7UyhiKTtmPSExfWVsc2UgbnVsbCE9PXpnJiYoRmooemcpLHpnPW51bGwpLGY9ITA7aWYoIWYpcmV0dXJuIGIuZmxhZ3MmNjU1MzY/YjpudWxsfWlmKDAhPT0oYi5mbGFncyYxMjgpKXJldHVybiBiLmxhbmVzPWMsYjtkPW51bGwhPT1kO2QhPT0obnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUpJiZkJiYoYi5jaGlsZC5mbGFnc3w9ODE5MiwwIT09KGIubW9kZSYxKSYmKG51bGw9PT1hfHwwIT09KEwuY3VycmVudCYxKT8wPT09VCYmKFQ9Myk6dGooKSkpO251bGwhPT1iLnVwZGF0ZVF1ZXVlJiYoYi5mbGFnc3w9NCk7UyhiKTtyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIHpoKCksXG5BaihhLGIpLG51bGw9PT1hJiZzZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKSxTKGIpLG51bGw7Y2FzZSAxMDpyZXR1cm4gYWgoYi50eXBlLl9jb250ZXh0KSxTKGIpLG51bGw7Y2FzZSAxNzpyZXR1cm4gWmYoYi50eXBlKSYmJGYoKSxTKGIpLG51bGw7Y2FzZSAxOTpFKEwpO2Y9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1mKXJldHVybiBTKGIpLG51bGw7ZD0wIT09KGIuZmxhZ3MmMTI4KTtnPWYucmVuZGVyaW5nO2lmKG51bGw9PT1nKWlmKGQpRGooZiwhMSk7ZWxzZXtpZigwIT09VHx8bnVsbCE9PWEmJjAhPT0oYS5mbGFncyYxMjgpKWZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtnPUNoKGEpO2lmKG51bGwhPT1nKXtiLmZsYWdzfD0xMjg7RGooZiwhMSk7ZD1nLnVwZGF0ZVF1ZXVlO251bGwhPT1kJiYoYi51cGRhdGVRdWV1ZT1kLGIuZmxhZ3N8PTQpO2Iuc3VidHJlZUZsYWdzPTA7ZD1jO2ZvcihjPWIuY2hpbGQ7bnVsbCE9PWM7KWY9YyxhPWQsZi5mbGFncyY9MTQ2ODAwNjYsXG5nPWYuYWx0ZXJuYXRlLG51bGw9PT1nPyhmLmNoaWxkTGFuZXM9MCxmLmxhbmVzPWEsZi5jaGlsZD1udWxsLGYuc3VidHJlZUZsYWdzPTAsZi5tZW1vaXplZFByb3BzPW51bGwsZi5tZW1vaXplZFN0YXRlPW51bGwsZi51cGRhdGVRdWV1ZT1udWxsLGYuZGVwZW5kZW5jaWVzPW51bGwsZi5zdGF0ZU5vZGU9bnVsbCk6KGYuY2hpbGRMYW5lcz1nLmNoaWxkTGFuZXMsZi5sYW5lcz1nLmxhbmVzLGYuY2hpbGQ9Zy5jaGlsZCxmLnN1YnRyZWVGbGFncz0wLGYuZGVsZXRpb25zPW51bGwsZi5tZW1vaXplZFByb3BzPWcubWVtb2l6ZWRQcm9wcyxmLm1lbW9pemVkU3RhdGU9Zy5tZW1vaXplZFN0YXRlLGYudXBkYXRlUXVldWU9Zy51cGRhdGVRdWV1ZSxmLnR5cGU9Zy50eXBlLGE9Zy5kZXBlbmRlbmNpZXMsZi5kZXBlbmRlbmNpZXM9bnVsbD09PWE/bnVsbDp7bGFuZXM6YS5sYW5lcyxmaXJzdENvbnRleHQ6YS5maXJzdENvbnRleHR9KSxjPWMuc2libGluZztHKEwsTC5jdXJyZW50JjF8Mik7cmV0dXJuIGIuY2hpbGR9YT1cbmEuc2libGluZ31udWxsIT09Zi50YWlsJiZCKCk+R2omJihiLmZsYWdzfD0xMjgsZD0hMCxEaihmLCExKSxiLmxhbmVzPTQxOTQzMDQpfWVsc2V7aWYoIWQpaWYoYT1DaChnKSxudWxsIT09YSl7aWYoYi5mbGFnc3w9MTI4LGQ9ITAsYz1hLnVwZGF0ZVF1ZXVlLG51bGwhPT1jJiYoYi51cGRhdGVRdWV1ZT1jLGIuZmxhZ3N8PTQpLERqKGYsITApLG51bGw9PT1mLnRhaWwmJlwiaGlkZGVuXCI9PT1mLnRhaWxNb2RlJiYhZy5hbHRlcm5hdGUmJiFJKXJldHVybiBTKGIpLG51bGx9ZWxzZSAyKkIoKS1mLnJlbmRlcmluZ1N0YXJ0VGltZT5HaiYmMTA3Mzc0MTgyNCE9PWMmJihiLmZsYWdzfD0xMjgsZD0hMCxEaihmLCExKSxiLmxhbmVzPTQxOTQzMDQpO2YuaXNCYWNrd2FyZHM/KGcuc2libGluZz1iLmNoaWxkLGIuY2hpbGQ9Zyk6KGM9Zi5sYXN0LG51bGwhPT1jP2Muc2libGluZz1nOmIuY2hpbGQ9ZyxmLmxhc3Q9Zyl9aWYobnVsbCE9PWYudGFpbClyZXR1cm4gYj1mLnRhaWwsZi5yZW5kZXJpbmc9XG5iLGYudGFpbD1iLnNpYmxpbmcsZi5yZW5kZXJpbmdTdGFydFRpbWU9QigpLGIuc2libGluZz1udWxsLGM9TC5jdXJyZW50LEcoTCxkP2MmMXwyOmMmMSksYjtTKGIpO3JldHVybiBudWxsO2Nhc2UgMjI6Y2FzZSAyMzpyZXR1cm4gSGooKSxkPW51bGwhPT1iLm1lbW9pemVkU3RhdGUsbnVsbCE9PWEmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUhPT1kJiYoYi5mbGFnc3w9ODE5MiksZCYmMCE9PShiLm1vZGUmMSk/MCE9PShmaiYxMDczNzQxODI0KSYmKFMoYiksYi5zdWJ0cmVlRmxhZ3MmNiYmKGIuZmxhZ3N8PTgxOTIpKTpTKGIpLG51bGw7Y2FzZSAyNDpyZXR1cm4gbnVsbDtjYXNlIDI1OnJldHVybiBudWxsfXRocm93IEVycm9yKHAoMTU2LGIudGFnKSk7fVxuZnVuY3Rpb24gSWooYSxiKXt3ZyhiKTtzd2l0Y2goYi50YWcpe2Nhc2UgMTpyZXR1cm4gWmYoYi50eXBlKSYmJGYoKSxhPWIuZmxhZ3MsYSY2NTUzNj8oYi5mbGFncz1hJi02NTUzN3wxMjgsYik6bnVsbDtjYXNlIDM6cmV0dXJuIHpoKCksRShXZiksRShIKSxFaCgpLGE9Yi5mbGFncywwIT09KGEmNjU1MzYpJiYwPT09KGEmMTI4KT8oYi5mbGFncz1hJi02NTUzN3wxMjgsYik6bnVsbDtjYXNlIDU6cmV0dXJuIEJoKGIpLG51bGw7Y2FzZSAxMzpFKEwpO2E9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1hJiZudWxsIT09YS5kZWh5ZHJhdGVkKXtpZihudWxsPT09Yi5hbHRlcm5hdGUpdGhyb3cgRXJyb3IocCgzNDApKTtJZygpfWE9Yi5mbGFncztyZXR1cm4gYSY2NTUzNj8oYi5mbGFncz1hJi02NTUzN3wxMjgsYik6bnVsbDtjYXNlIDE5OnJldHVybiBFKEwpLG51bGw7Y2FzZSA0OnJldHVybiB6aCgpLG51bGw7Y2FzZSAxMDpyZXR1cm4gYWgoYi50eXBlLl9jb250ZXh0KSxudWxsO2Nhc2UgMjI6Y2FzZSAyMzpyZXR1cm4gSGooKSxcbm51bGw7Y2FzZSAyNDpyZXR1cm4gbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX12YXIgSmo9ITEsVT0hMSxLaj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha1NldD9XZWFrU2V0OlNldCxWPW51bGw7ZnVuY3Rpb24gTGooYSxiKXt2YXIgYz1hLnJlZjtpZihudWxsIT09YylpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYyl0cnl7YyhudWxsKX1jYXRjaChkKXtXKGEsYixkKX1lbHNlIGMuY3VycmVudD1udWxsfWZ1bmN0aW9uIE1qKGEsYixjKXt0cnl7YygpfWNhdGNoKGQpe1coYSxiLGQpfX12YXIgTmo9ITE7XG5mdW5jdGlvbiBPaihhLGIpe0NmPWRkO2E9TWUoKTtpZihOZShhKSl7aWYoXCJzZWxlY3Rpb25TdGFydFwiaW4gYSl2YXIgYz17c3RhcnQ6YS5zZWxlY3Rpb25TdGFydCxlbmQ6YS5zZWxlY3Rpb25FbmR9O2Vsc2UgYTp7Yz0oYz1hLm93bmVyRG9jdW1lbnQpJiZjLmRlZmF1bHRWaWV3fHx3aW5kb3c7dmFyIGQ9Yy5nZXRTZWxlY3Rpb24mJmMuZ2V0U2VsZWN0aW9uKCk7aWYoZCYmMCE9PWQucmFuZ2VDb3VudCl7Yz1kLmFuY2hvck5vZGU7dmFyIGU9ZC5hbmNob3JPZmZzZXQsZj1kLmZvY3VzTm9kZTtkPWQuZm9jdXNPZmZzZXQ7dHJ5e2Mubm9kZVR5cGUsZi5ub2RlVHlwZX1jYXRjaChGKXtjPW51bGw7YnJlYWsgYX12YXIgZz0wLGg9LTEsaz0tMSxsPTAsbT0wLHE9YSxyPW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgeTs7KXtxIT09Y3x8MCE9PWUmJjMhPT1xLm5vZGVUeXBlfHwoaD1nK2UpO3EhPT1mfHwwIT09ZCYmMyE9PXEubm9kZVR5cGV8fChrPWcrZCk7Mz09PXEubm9kZVR5cGUmJihnKz1cbnEubm9kZVZhbHVlLmxlbmd0aCk7aWYobnVsbD09PSh5PXEuZmlyc3RDaGlsZCkpYnJlYWs7cj1xO3E9eX1mb3IoOzspe2lmKHE9PT1hKWJyZWFrIGI7cj09PWMmJisrbD09PWUmJihoPWcpO3I9PT1mJiYrK209PT1kJiYoaz1nKTtpZihudWxsIT09KHk9cS5uZXh0U2libGluZykpYnJlYWs7cT1yO3I9cS5wYXJlbnROb2RlfXE9eX1jPS0xPT09aHx8LTE9PT1rP251bGw6e3N0YXJ0OmgsZW5kOmt9fWVsc2UgYz1udWxsfWM9Y3x8e3N0YXJ0OjAsZW5kOjB9fWVsc2UgYz1udWxsO0RmPXtmb2N1c2VkRWxlbTphLHNlbGVjdGlvblJhbmdlOmN9O2RkPSExO2ZvcihWPWI7bnVsbCE9PVY7KWlmKGI9VixhPWIuY2hpbGQsMCE9PShiLnN1YnRyZWVGbGFncyYxMDI4KSYmbnVsbCE9PWEpYS5yZXR1cm49YixWPWE7ZWxzZSBmb3IoO251bGwhPT1WOyl7Yj1WO3RyeXt2YXIgbj1iLmFsdGVybmF0ZTtpZigwIT09KGIuZmxhZ3MmMTAyNCkpc3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OmJyZWFrO1xuY2FzZSAxOmlmKG51bGwhPT1uKXt2YXIgdD1uLm1lbW9pemVkUHJvcHMsSj1uLm1lbW9pemVkU3RhdGUseD1iLnN0YXRlTm9kZSx3PXguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoYi5lbGVtZW50VHlwZT09PWIudHlwZT90OkNpKGIudHlwZSx0KSxKKTt4Ll9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlPXd9YnJlYWs7Y2FzZSAzOnZhciB1PWIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87MT09PXUubm9kZVR5cGU/dS50ZXh0Q29udGVudD1cIlwiOjk9PT11Lm5vZGVUeXBlJiZ1LmRvY3VtZW50RWxlbWVudCYmdS5yZW1vdmVDaGlsZCh1LmRvY3VtZW50RWxlbWVudCk7YnJlYWs7Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpicmVhaztkZWZhdWx0OnRocm93IEVycm9yKHAoMTYzKSk7fX1jYXRjaChGKXtXKGIsYi5yZXR1cm4sRil9YT1iLnNpYmxpbmc7aWYobnVsbCE9PWEpe2EucmV0dXJuPWIucmV0dXJuO1Y9YTticmVha31WPWIucmV0dXJufW49Tmo7Tmo9ITE7cmV0dXJuIG59XG5mdW5jdGlvbiBQaihhLGIsYyl7dmFyIGQ9Yi51cGRhdGVRdWV1ZTtkPW51bGwhPT1kP2QubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1kKXt2YXIgZT1kPWQubmV4dDtkb3tpZigoZS50YWcmYSk9PT1hKXt2YXIgZj1lLmRlc3Ryb3k7ZS5kZXN0cm95PXZvaWQgMDt2b2lkIDAhPT1mJiZNaihiLGMsZil9ZT1lLm5leHR9d2hpbGUoZSE9PWQpfX1mdW5jdGlvbiBRaihhLGIpe2I9Yi51cGRhdGVRdWV1ZTtiPW51bGwhPT1iP2IubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1iKXt2YXIgYz1iPWIubmV4dDtkb3tpZigoYy50YWcmYSk9PT1hKXt2YXIgZD1jLmNyZWF0ZTtjLmRlc3Ryb3k9ZCgpfWM9Yy5uZXh0fXdoaWxlKGMhPT1iKX19ZnVuY3Rpb24gUmooYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpe3ZhciBjPWEuc3RhdGVOb2RlO3N3aXRjaChhLnRhZyl7Y2FzZSA1OmE9YzticmVhaztkZWZhdWx0OmE9Y31cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmIuY3VycmVudD1hfX1cbmZ1bmN0aW9uIFNqKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO251bGwhPT1iJiYoYS5hbHRlcm5hdGU9bnVsbCxTaihiKSk7YS5jaGlsZD1udWxsO2EuZGVsZXRpb25zPW51bGw7YS5zaWJsaW5nPW51bGw7NT09PWEudGFnJiYoYj1hLnN0YXRlTm9kZSxudWxsIT09YiYmKGRlbGV0ZSBiW09mXSxkZWxldGUgYltQZl0sZGVsZXRlIGJbb2ZdLGRlbGV0ZSBiW1FmXSxkZWxldGUgYltSZl0pKTthLnN0YXRlTm9kZT1udWxsO2EucmV0dXJuPW51bGw7YS5kZXBlbmRlbmNpZXM9bnVsbDthLm1lbW9pemVkUHJvcHM9bnVsbDthLm1lbW9pemVkU3RhdGU9bnVsbDthLnBlbmRpbmdQcm9wcz1udWxsO2Euc3RhdGVOb2RlPW51bGw7YS51cGRhdGVRdWV1ZT1udWxsfWZ1bmN0aW9uIFRqKGEpe3JldHVybiA1PT09YS50YWd8fDM9PT1hLnRhZ3x8ND09PWEudGFnfVxuZnVuY3Rpb24gVWooYSl7YTpmb3IoOzspe2Zvcig7bnVsbD09PWEuc2libGluZzspe2lmKG51bGw9PT1hLnJldHVybnx8VGooYS5yZXR1cm4pKXJldHVybiBudWxsO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjtmb3IoYT1hLnNpYmxpbmc7NSE9PWEudGFnJiY2IT09YS50YWcmJjE4IT09YS50YWc7KXtpZihhLmZsYWdzJjIpY29udGludWUgYTtpZihudWxsPT09YS5jaGlsZHx8ND09PWEudGFnKWNvbnRpbnVlIGE7ZWxzZSBhLmNoaWxkLnJldHVybj1hLGE9YS5jaGlsZH1pZighKGEuZmxhZ3MmMikpcmV0dXJuIGEuc3RhdGVOb2RlfX1cbmZ1bmN0aW9uIFZqKGEsYixjKXt2YXIgZD1hLnRhZztpZig1PT09ZHx8Nj09PWQpYT1hLnN0YXRlTm9kZSxiPzg9PT1jLm5vZGVUeXBlP2MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxiKTpjLmluc2VydEJlZm9yZShhLGIpOig4PT09Yy5ub2RlVHlwZT8oYj1jLnBhcmVudE5vZGUsYi5pbnNlcnRCZWZvcmUoYSxjKSk6KGI9YyxiLmFwcGVuZENoaWxkKGEpKSxjPWMuX3JlYWN0Um9vdENvbnRhaW5lcixudWxsIT09YyYmdm9pZCAwIT09Y3x8bnVsbCE9PWIub25jbGlja3x8KGIub25jbGljaz1CZikpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihWaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KVZqKGEsYixjKSxhPWEuc2libGluZ31cbmZ1bmN0aW9uIFdqKGEsYixjKXt2YXIgZD1hLnRhZztpZig1PT09ZHx8Nj09PWQpYT1hLnN0YXRlTm9kZSxiP2MuaW5zZXJ0QmVmb3JlKGEsYik6Yy5hcHBlbmRDaGlsZChhKTtlbHNlIGlmKDQhPT1kJiYoYT1hLmNoaWxkLG51bGwhPT1hKSlmb3IoV2ooYSxiLGMpLGE9YS5zaWJsaW5nO251bGwhPT1hOylXaihhLGIsYyksYT1hLnNpYmxpbmd9dmFyIFg9bnVsbCxYaj0hMTtmdW5jdGlvbiBZaihhLGIsYyl7Zm9yKGM9Yy5jaGlsZDtudWxsIT09YzspWmooYSxiLGMpLGM9Yy5zaWJsaW5nfVxuZnVuY3Rpb24gWmooYSxiLGMpe2lmKGxjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbGMub25Db21taXRGaWJlclVubW91bnQpdHJ5e2xjLm9uQ29tbWl0RmliZXJVbm1vdW50KGtjLGMpfWNhdGNoKGgpe31zd2l0Y2goYy50YWcpe2Nhc2UgNTpVfHxMaihjLGIpO2Nhc2UgNjp2YXIgZD1YLGU9WGo7WD1udWxsO1lqKGEsYixjKTtYPWQ7WGo9ZTtudWxsIT09WCYmKFhqPyhhPVgsYz1jLnN0YXRlTm9kZSw4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyk6YS5yZW1vdmVDaGlsZChjKSk6WC5yZW1vdmVDaGlsZChjLnN0YXRlTm9kZSkpO2JyZWFrO2Nhc2UgMTg6bnVsbCE9PVgmJihYaj8oYT1YLGM9Yy5zdGF0ZU5vZGUsOD09PWEubm9kZVR5cGU/S2YoYS5wYXJlbnROb2RlLGMpOjE9PT1hLm5vZGVUeXBlJiZLZihhLGMpLGJkKGEpKTpLZihYLGMuc3RhdGVOb2RlKSk7YnJlYWs7Y2FzZSA0OmQ9WDtlPVhqO1g9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztYaj0hMDtcbllqKGEsYixjKTtYPWQ7WGo9ZTticmVhaztjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6aWYoIVUmJihkPWMudXBkYXRlUXVldWUsbnVsbCE9PWQmJihkPWQubGFzdEVmZmVjdCxudWxsIT09ZCkpKXtlPWQ9ZC5uZXh0O2Rve3ZhciBmPWUsZz1mLmRlc3Ryb3k7Zj1mLnRhZzt2b2lkIDAhPT1nJiYoMCE9PShmJjIpP01qKGMsYixnKTowIT09KGYmNCkmJk1qKGMsYixnKSk7ZT1lLm5leHR9d2hpbGUoZSE9PWQpfVlqKGEsYixjKTticmVhaztjYXNlIDE6aWYoIVUmJihMaihjLGIpLGQ9Yy5zdGF0ZU5vZGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50V2lsbFVubW91bnQpKXRyeXtkLnByb3BzPWMubWVtb2l6ZWRQcm9wcyxkLnN0YXRlPWMubWVtb2l6ZWRTdGF0ZSxkLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goaCl7VyhjLGIsaCl9WWooYSxiLGMpO2JyZWFrO2Nhc2UgMjE6WWooYSxiLGMpO2JyZWFrO2Nhc2UgMjI6Yy5tb2RlJjE/KFU9KGQ9VSl8fG51bGwhPT1cbmMubWVtb2l6ZWRTdGF0ZSxZaihhLGIsYyksVT1kKTpZaihhLGIsYyk7YnJlYWs7ZGVmYXVsdDpZaihhLGIsYyl9fWZ1bmN0aW9uIGFrKGEpe3ZhciBiPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWIpe2EudXBkYXRlUXVldWU9bnVsbDt2YXIgYz1hLnN0YXRlTm9kZTtudWxsPT09YyYmKGM9YS5zdGF0ZU5vZGU9bmV3IEtqKTtiLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9YmsuYmluZChudWxsLGEsYik7Yy5oYXMoYil8fChjLmFkZChiKSxiLnRoZW4oZCxkKSl9KX19XG5mdW5jdGlvbiBjayhhLGIpe3ZhciBjPWIuZGVsZXRpb25zO2lmKG51bGwhPT1jKWZvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdO3RyeXt2YXIgZj1hLGc9YixoPWc7YTpmb3IoO251bGwhPT1oOyl7c3dpdGNoKGgudGFnKXtjYXNlIDU6WD1oLnN0YXRlTm9kZTtYaj0hMTticmVhayBhO2Nhc2UgMzpYPWguc3RhdGVOb2RlLmNvbnRhaW5lckluZm87WGo9ITA7YnJlYWsgYTtjYXNlIDQ6WD1oLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO1hqPSEwO2JyZWFrIGF9aD1oLnJldHVybn1pZihudWxsPT09WCl0aHJvdyBFcnJvcihwKDE2MCkpO1pqKGYsZyxlKTtYPW51bGw7WGo9ITE7dmFyIGs9ZS5hbHRlcm5hdGU7bnVsbCE9PWsmJihrLnJldHVybj1udWxsKTtlLnJldHVybj1udWxsfWNhdGNoKGwpe1coZSxiLGwpfX1pZihiLnN1YnRyZWVGbGFncyYxMjg1NClmb3IoYj1iLmNoaWxkO251bGwhPT1iOylkayhiLGEpLGI9Yi5zaWJsaW5nfVxuZnVuY3Rpb24gZGsoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZSxkPWEuZmxhZ3M7c3dpdGNoKGEudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6Y2soYixhKTtlayhhKTtpZihkJjQpe3RyeXtQaigzLGEsYS5yZXR1cm4pLFFqKDMsYSl9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfXRyeXtQaig1LGEsYS5yZXR1cm4pfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19YnJlYWs7Y2FzZSAxOmNrKGIsYSk7ZWsoYSk7ZCY1MTImJm51bGwhPT1jJiZMaihjLGMucmV0dXJuKTticmVhaztjYXNlIDU6Y2soYixhKTtlayhhKTtkJjUxMiYmbnVsbCE9PWMmJkxqKGMsYy5yZXR1cm4pO2lmKGEuZmxhZ3MmMzIpe3ZhciBlPWEuc3RhdGVOb2RlO3RyeXtvYihlLFwiXCIpfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19aWYoZCY0JiYoZT1hLnN0YXRlTm9kZSxudWxsIT1lKSl7dmFyIGY9YS5tZW1vaXplZFByb3BzLGc9bnVsbCE9PWM/Yy5tZW1vaXplZFByb3BzOmYsaD1hLnR5cGUsaz1hLnVwZGF0ZVF1ZXVlO1xuYS51cGRhdGVRdWV1ZT1udWxsO2lmKG51bGwhPT1rKXRyeXtcImlucHV0XCI9PT1oJiZcInJhZGlvXCI9PT1mLnR5cGUmJm51bGwhPWYubmFtZSYmYWIoZSxmKTt2YihoLGcpO3ZhciBsPXZiKGgsZik7Zm9yKGc9MDtnPGsubGVuZ3RoO2crPTIpe3ZhciBtPWtbZ10scT1rW2crMV07XCJzdHlsZVwiPT09bT9zYihlLHEpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PW0/bmIoZSxxKTpcImNoaWxkcmVuXCI9PT1tP29iKGUscSk6dGEoZSxtLHEsbCl9c3dpdGNoKGgpe2Nhc2UgXCJpbnB1dFwiOmJiKGUsZik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6aWIoZSxmKTticmVhaztjYXNlIFwic2VsZWN0XCI6dmFyIHI9ZS5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlO2UuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZT0hIWYubXVsdGlwbGU7dmFyIHk9Zi52YWx1ZTtudWxsIT15P2ZiKGUsISFmLm11bHRpcGxlLHksITEpOnIhPT0hIWYubXVsdGlwbGUmJihudWxsIT1mLmRlZmF1bHRWYWx1ZT9mYihlLCEhZi5tdWx0aXBsZSxcbmYuZGVmYXVsdFZhbHVlLCEwKTpmYihlLCEhZi5tdWx0aXBsZSxmLm11bHRpcGxlP1tdOlwiXCIsITEpKX1lW1BmXT1mfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19YnJlYWs7Y2FzZSA2OmNrKGIsYSk7ZWsoYSk7aWYoZCY0KXtpZihudWxsPT09YS5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IocCgxNjIpKTtlPWEuc3RhdGVOb2RlO2Y9YS5tZW1vaXplZFByb3BzO3RyeXtlLm5vZGVWYWx1ZT1mfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19YnJlYWs7Y2FzZSAzOmNrKGIsYSk7ZWsoYSk7aWYoZCY0JiZudWxsIT09YyYmYy5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZCl0cnl7YmQoYi5jb250YWluZXJJbmZvKX1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9YnJlYWs7Y2FzZSA0OmNrKGIsYSk7ZWsoYSk7YnJlYWs7Y2FzZSAxMzpjayhiLGEpO2VrKGEpO2U9YS5jaGlsZDtlLmZsYWdzJjgxOTImJihmPW51bGwhPT1lLm1lbW9pemVkU3RhdGUsZS5zdGF0ZU5vZGUuaXNIaWRkZW49ZiwhZnx8XG5udWxsIT09ZS5hbHRlcm5hdGUmJm51bGwhPT1lLmFsdGVybmF0ZS5tZW1vaXplZFN0YXRlfHwoZms9QigpKSk7ZCY0JiZhayhhKTticmVhaztjYXNlIDIyOm09bnVsbCE9PWMmJm51bGwhPT1jLm1lbW9pemVkU3RhdGU7YS5tb2RlJjE/KFU9KGw9VSl8fG0sY2soYixhKSxVPWwpOmNrKGIsYSk7ZWsoYSk7aWYoZCY4MTkyKXtsPW51bGwhPT1hLm1lbW9pemVkU3RhdGU7aWYoKGEuc3RhdGVOb2RlLmlzSGlkZGVuPWwpJiYhbSYmMCE9PShhLm1vZGUmMSkpZm9yKFY9YSxtPWEuY2hpbGQ7bnVsbCE9PW07KXtmb3IocT1WPW07bnVsbCE9PVY7KXtyPVY7eT1yLmNoaWxkO3N3aXRjaChyLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OlBqKDQscixyLnJldHVybik7YnJlYWs7Y2FzZSAxOkxqKHIsci5yZXR1cm4pO3ZhciBuPXIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBuLmNvbXBvbmVudFdpbGxVbm1vdW50KXtkPXI7Yz1yLnJldHVybjt0cnl7Yj1kLG4ucHJvcHM9XG5iLm1lbW9pemVkUHJvcHMsbi5zdGF0ZT1iLm1lbW9pemVkU3RhdGUsbi5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKHQpe1coZCxjLHQpfX1icmVhaztjYXNlIDU6TGoocixyLnJldHVybik7YnJlYWs7Y2FzZSAyMjppZihudWxsIT09ci5tZW1vaXplZFN0YXRlKXtnayhxKTtjb250aW51ZX19bnVsbCE9PXk/KHkucmV0dXJuPXIsVj15KTpnayhxKX1tPW0uc2libGluZ31hOmZvcihtPW51bGwscT1hOzspe2lmKDU9PT1xLnRhZyl7aWYobnVsbD09PW0pe209cTt0cnl7ZT1xLnN0YXRlTm9kZSxsPyhmPWUuc3R5bGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuc2V0UHJvcGVydHk/Zi5zZXRQcm9wZXJ0eShcImRpc3BsYXlcIixcIm5vbmVcIixcImltcG9ydGFudFwiKTpmLmRpc3BsYXk9XCJub25lXCIpOihoPXEuc3RhdGVOb2RlLGs9cS5tZW1vaXplZFByb3BzLnN0eWxlLGc9dm9pZCAwIT09ayYmbnVsbCE9PWsmJmsuaGFzT3duUHJvcGVydHkoXCJkaXNwbGF5XCIpP2suZGlzcGxheTpudWxsLGguc3R5bGUuZGlzcGxheT1cbnJiKFwiZGlzcGxheVwiLGcpKX1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9fX1lbHNlIGlmKDY9PT1xLnRhZyl7aWYobnVsbD09PW0pdHJ5e3Euc3RhdGVOb2RlLm5vZGVWYWx1ZT1sP1wiXCI6cS5tZW1vaXplZFByb3BzfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19ZWxzZSBpZigoMjIhPT1xLnRhZyYmMjMhPT1xLnRhZ3x8bnVsbD09PXEubWVtb2l6ZWRTdGF0ZXx8cT09PWEpJiZudWxsIT09cS5jaGlsZCl7cS5jaGlsZC5yZXR1cm49cTtxPXEuY2hpbGQ7Y29udGludWV9aWYocT09PWEpYnJlYWsgYTtmb3IoO251bGw9PT1xLnNpYmxpbmc7KXtpZihudWxsPT09cS5yZXR1cm58fHEucmV0dXJuPT09YSlicmVhayBhO209PT1xJiYobT1udWxsKTtxPXEucmV0dXJufW09PT1xJiYobT1udWxsKTtxLnNpYmxpbmcucmV0dXJuPXEucmV0dXJuO3E9cS5zaWJsaW5nfX1icmVhaztjYXNlIDE5OmNrKGIsYSk7ZWsoYSk7ZCY0JiZhayhhKTticmVhaztjYXNlIDIxOmJyZWFrO2RlZmF1bHQ6Y2soYixcbmEpLGVrKGEpfX1mdW5jdGlvbiBlayhhKXt2YXIgYj1hLmZsYWdzO2lmKGImMil7dHJ5e2E6e2Zvcih2YXIgYz1hLnJldHVybjtudWxsIT09Yzspe2lmKFRqKGMpKXt2YXIgZD1jO2JyZWFrIGF9Yz1jLnJldHVybn10aHJvdyBFcnJvcihwKDE2MCkpO31zd2l0Y2goZC50YWcpe2Nhc2UgNTp2YXIgZT1kLnN0YXRlTm9kZTtkLmZsYWdzJjMyJiYob2IoZSxcIlwiKSxkLmZsYWdzJj0tMzMpO3ZhciBmPVVqKGEpO1dqKGEsZixlKTticmVhaztjYXNlIDM6Y2FzZSA0OnZhciBnPWQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8saD1VaihhKTtWaihhLGgsZyk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihwKDE2MSkpO319Y2F0Y2goayl7VyhhLGEucmV0dXJuLGspfWEuZmxhZ3MmPS0zfWImNDA5NiYmKGEuZmxhZ3MmPS00MDk3KX1mdW5jdGlvbiBoayhhLGIsYyl7Vj1hO2lrKGEsYixjKX1cbmZ1bmN0aW9uIGlrKGEsYixjKXtmb3IodmFyIGQ9MCE9PShhLm1vZGUmMSk7bnVsbCE9PVY7KXt2YXIgZT1WLGY9ZS5jaGlsZDtpZigyMj09PWUudGFnJiZkKXt2YXIgZz1udWxsIT09ZS5tZW1vaXplZFN0YXRlfHxKajtpZighZyl7dmFyIGg9ZS5hbHRlcm5hdGUsaz1udWxsIT09aCYmbnVsbCE9PWgubWVtb2l6ZWRTdGF0ZXx8VTtoPUpqO3ZhciBsPVU7Smo9ZztpZigoVT1rKSYmIWwpZm9yKFY9ZTtudWxsIT09VjspZz1WLGs9Zy5jaGlsZCwyMj09PWcudGFnJiZudWxsIT09Zy5tZW1vaXplZFN0YXRlP2prKGUpOm51bGwhPT1rPyhrLnJldHVybj1nLFY9ayk6amsoZSk7Zm9yKDtudWxsIT09ZjspVj1mLGlrKGYsYixjKSxmPWYuc2libGluZztWPWU7Smo9aDtVPWx9a2soYSxiLGMpfWVsc2UgMCE9PShlLnN1YnRyZWVGbGFncyY4NzcyKSYmbnVsbCE9PWY/KGYucmV0dXJuPWUsVj1mKTprayhhLGIsYyl9fVxuZnVuY3Rpb24ga2soYSl7Zm9yKDtudWxsIT09Vjspe3ZhciBiPVY7aWYoMCE9PShiLmZsYWdzJjg3NzIpKXt2YXIgYz1iLmFsdGVybmF0ZTt0cnl7aWYoMCE9PShiLmZsYWdzJjg3NzIpKXN3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpVfHxRaig1LGIpO2JyZWFrO2Nhc2UgMTp2YXIgZD1iLnN0YXRlTm9kZTtpZihiLmZsYWdzJjQmJiFVKWlmKG51bGw9PT1jKWQuY29tcG9uZW50RGlkTW91bnQoKTtlbHNle3ZhciBlPWIuZWxlbWVudFR5cGU9PT1iLnR5cGU/Yy5tZW1vaXplZFByb3BzOkNpKGIudHlwZSxjLm1lbW9pemVkUHJvcHMpO2QuY29tcG9uZW50RGlkVXBkYXRlKGUsYy5tZW1vaXplZFN0YXRlLGQuX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGUpfXZhciBmPWIudXBkYXRlUXVldWU7bnVsbCE9PWYmJnNoKGIsZixkKTticmVhaztjYXNlIDM6dmFyIGc9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09Zyl7Yz1udWxsO2lmKG51bGwhPT1iLmNoaWxkKXN3aXRjaChiLmNoaWxkLnRhZyl7Y2FzZSA1OmM9XG5iLmNoaWxkLnN0YXRlTm9kZTticmVhaztjYXNlIDE6Yz1iLmNoaWxkLnN0YXRlTm9kZX1zaChiLGcsYyl9YnJlYWs7Y2FzZSA1OnZhciBoPWIuc3RhdGVOb2RlO2lmKG51bGw9PT1jJiZiLmZsYWdzJjQpe2M9aDt2YXIgaz1iLm1lbW9pemVkUHJvcHM7c3dpdGNoKGIudHlwZSl7Y2FzZSBcImJ1dHRvblwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwidGV4dGFyZWFcIjprLmF1dG9Gb2N1cyYmYy5mb2N1cygpO2JyZWFrO2Nhc2UgXCJpbWdcIjprLnNyYyYmKGMuc3JjPWsuc3JjKX19YnJlYWs7Y2FzZSA2OmJyZWFrO2Nhc2UgNDpicmVhaztjYXNlIDEyOmJyZWFrO2Nhc2UgMTM6aWYobnVsbD09PWIubWVtb2l6ZWRTdGF0ZSl7dmFyIGw9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWwpe3ZhciBtPWwubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09bSl7dmFyIHE9bS5kZWh5ZHJhdGVkO251bGwhPT1xJiZiZChxKX19fWJyZWFrO2Nhc2UgMTk6Y2FzZSAxNzpjYXNlIDIxOmNhc2UgMjI6Y2FzZSAyMzpjYXNlIDI1OmJyZWFrO1xuZGVmYXVsdDp0aHJvdyBFcnJvcihwKDE2MykpO31VfHxiLmZsYWdzJjUxMiYmUmooYil9Y2F0Y2gocil7VyhiLGIucmV0dXJuLHIpfX1pZihiPT09YSl7Vj1udWxsO2JyZWFrfWM9Yi5zaWJsaW5nO2lmKG51bGwhPT1jKXtjLnJldHVybj1iLnJldHVybjtWPWM7YnJlYWt9Vj1iLnJldHVybn19ZnVuY3Rpb24gZ2soYSl7Zm9yKDtudWxsIT09Vjspe3ZhciBiPVY7aWYoYj09PWEpe1Y9bnVsbDticmVha312YXIgYz1iLnNpYmxpbmc7aWYobnVsbCE9PWMpe2MucmV0dXJuPWIucmV0dXJuO1Y9YzticmVha31WPWIucmV0dXJufX1cbmZ1bmN0aW9uIGprKGEpe2Zvcig7bnVsbCE9PVY7KXt2YXIgYj1WO3RyeXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6dmFyIGM9Yi5yZXR1cm47dHJ5e1FqKDQsYil9Y2F0Y2goayl7VyhiLGMsayl9YnJlYWs7Y2FzZSAxOnZhciBkPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZE1vdW50KXt2YXIgZT1iLnJldHVybjt0cnl7ZC5jb21wb25lbnREaWRNb3VudCgpfWNhdGNoKGspe1coYixlLGspfX12YXIgZj1iLnJldHVybjt0cnl7UmooYil9Y2F0Y2goayl7VyhiLGYsayl9YnJlYWs7Y2FzZSA1OnZhciBnPWIucmV0dXJuO3RyeXtSaihiKX1jYXRjaChrKXtXKGIsZyxrKX19fWNhdGNoKGspe1coYixiLnJldHVybixrKX1pZihiPT09YSl7Vj1udWxsO2JyZWFrfXZhciBoPWIuc2libGluZztpZihudWxsIT09aCl7aC5yZXR1cm49Yi5yZXR1cm47Vj1oO2JyZWFrfVY9Yi5yZXR1cm59fVxudmFyIGxrPU1hdGguY2VpbCxtaz11YS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLG5rPXVhLlJlYWN0Q3VycmVudE93bmVyLG9rPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLEs9MCxRPW51bGwsWT1udWxsLFo9MCxmaj0wLGVqPVVmKDApLFQ9MCxwaz1udWxsLHJoPTAscWs9MCxyaz0wLHNrPW51bGwsdGs9bnVsbCxmaz0wLEdqPUluZmluaXR5LHVrPW51bGwsT2k9ITEsUGk9bnVsbCxSaT1udWxsLHZrPSExLHdrPW51bGwseGs9MCx5az0wLHprPW51bGwsQWs9LTEsQms9MDtmdW5jdGlvbiBSKCl7cmV0dXJuIDAhPT0oSyY2KT9CKCk6LTEhPT1Baz9BazpBaz1CKCl9XG5mdW5jdGlvbiB5aShhKXtpZigwPT09KGEubW9kZSYxKSlyZXR1cm4gMTtpZigwIT09KEsmMikmJjAhPT1aKXJldHVybiBaJi1aO2lmKG51bGwhPT1LZy50cmFuc2l0aW9uKXJldHVybiAwPT09QmsmJihCaz15YygpKSxCazthPUM7aWYoMCE9PWEpcmV0dXJuIGE7YT13aW5kb3cuZXZlbnQ7YT12b2lkIDA9PT1hPzE2OmpkKGEudHlwZSk7cmV0dXJuIGF9ZnVuY3Rpb24gZ2koYSxiLGMsZCl7aWYoNTA8eWspdGhyb3cgeWs9MCx6az1udWxsLEVycm9yKHAoMTg1KSk7QWMoYSxjLGQpO2lmKDA9PT0oSyYyKXx8YSE9PVEpYT09PVEmJigwPT09KEsmMikmJihxa3w9YyksND09PVQmJkNrKGEsWikpLERrKGEsZCksMT09PWMmJjA9PT1LJiYwPT09KGIubW9kZSYxKSYmKEdqPUIoKSs1MDAsZmcmJmpnKCkpfVxuZnVuY3Rpb24gRGsoYSxiKXt2YXIgYz1hLmNhbGxiYWNrTm9kZTt3YyhhLGIpO3ZhciBkPXVjKGEsYT09PVE/WjowKTtpZigwPT09ZCludWxsIT09YyYmYmMoYyksYS5jYWxsYmFja05vZGU9bnVsbCxhLmNhbGxiYWNrUHJpb3JpdHk9MDtlbHNlIGlmKGI9ZCYtZCxhLmNhbGxiYWNrUHJpb3JpdHkhPT1iKXtudWxsIT1jJiZiYyhjKTtpZigxPT09YikwPT09YS50YWc/aWcoRWsuYmluZChudWxsLGEpKTpoZyhFay5iaW5kKG51bGwsYSkpLEpmKGZ1bmN0aW9uKCl7MD09PShLJjYpJiZqZygpfSksYz1udWxsO2Vsc2V7c3dpdGNoKERjKGQpKXtjYXNlIDE6Yz1mYzticmVhaztjYXNlIDQ6Yz1nYzticmVhaztjYXNlIDE2OmM9aGM7YnJlYWs7Y2FzZSA1MzY4NzA5MTI6Yz1qYzticmVhaztkZWZhdWx0OmM9aGN9Yz1GayhjLEdrLmJpbmQobnVsbCxhKSl9YS5jYWxsYmFja1ByaW9yaXR5PWI7YS5jYWxsYmFja05vZGU9Y319XG5mdW5jdGlvbiBHayhhLGIpe0FrPS0xO0JrPTA7aWYoMCE9PShLJjYpKXRocm93IEVycm9yKHAoMzI3KSk7dmFyIGM9YS5jYWxsYmFja05vZGU7aWYoSGsoKSYmYS5jYWxsYmFja05vZGUhPT1jKXJldHVybiBudWxsO3ZhciBkPXVjKGEsYT09PVE/WjowKTtpZigwPT09ZClyZXR1cm4gbnVsbDtpZigwIT09KGQmMzApfHwwIT09KGQmYS5leHBpcmVkTGFuZXMpfHxiKWI9SWsoYSxkKTtlbHNle2I9ZDt2YXIgZT1LO0t8PTI7dmFyIGY9SmsoKTtpZihRIT09YXx8WiE9PWIpdWs9bnVsbCxHaj1CKCkrNTAwLEtrKGEsYik7ZG8gdHJ5e0xrKCk7YnJlYWt9Y2F0Y2goaCl7TWsoYSxoKX13aGlsZSgxKTskZygpO21rLmN1cnJlbnQ9ZjtLPWU7bnVsbCE9PVk/Yj0wOihRPW51bGwsWj0wLGI9VCl9aWYoMCE9PWIpezI9PT1iJiYoZT14YyhhKSwwIT09ZSYmKGQ9ZSxiPU5rKGEsZSkpKTtpZigxPT09Yil0aHJvdyBjPXBrLEtrKGEsMCksQ2soYSxkKSxEayhhLEIoKSksYztpZig2PT09YilDayhhLGQpO1xuZWxzZXtlPWEuY3VycmVudC5hbHRlcm5hdGU7aWYoMD09PShkJjMwKSYmIU9rKGUpJiYoYj1JayhhLGQpLDI9PT1iJiYoZj14YyhhKSwwIT09ZiYmKGQ9ZixiPU5rKGEsZikpKSwxPT09YikpdGhyb3cgYz1wayxLayhhLDApLENrKGEsZCksRGsoYSxCKCkpLGM7YS5maW5pc2hlZFdvcms9ZTthLmZpbmlzaGVkTGFuZXM9ZDtzd2l0Y2goYil7Y2FzZSAwOmNhc2UgMTp0aHJvdyBFcnJvcihwKDM0NSkpO2Nhc2UgMjpQayhhLHRrLHVrKTticmVhaztjYXNlIDM6Q2soYSxkKTtpZigoZCYxMzAwMjM0MjQpPT09ZCYmKGI9ZmsrNTAwLUIoKSwxMDxiKSl7aWYoMCE9PXVjKGEsMCkpYnJlYWs7ZT1hLnN1c3BlbmRlZExhbmVzO2lmKChlJmQpIT09ZCl7UigpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmZTticmVha31hLnRpbWVvdXRIYW5kbGU9RmYoUGsuYmluZChudWxsLGEsdGssdWspLGIpO2JyZWFrfVBrKGEsdGssdWspO2JyZWFrO2Nhc2UgNDpDayhhLGQpO2lmKChkJjQxOTQyNDApPT09XG5kKWJyZWFrO2I9YS5ldmVudFRpbWVzO2ZvcihlPS0xOzA8ZDspe3ZhciBnPTMxLW9jKGQpO2Y9MTw8ZztnPWJbZ107Zz5lJiYoZT1nKTtkJj1+Zn1kPWU7ZD1CKCktZDtkPSgxMjA+ZD8xMjA6NDgwPmQ/NDgwOjEwODA+ZD8xMDgwOjE5MjA+ZD8xOTIwOjNFMz5kPzNFMzo0MzIwPmQ/NDMyMDoxOTYwKmxrKGQvMTk2MCkpLWQ7aWYoMTA8ZCl7YS50aW1lb3V0SGFuZGxlPUZmKFBrLmJpbmQobnVsbCxhLHRrLHVrKSxkKTticmVha31QayhhLHRrLHVrKTticmVhaztjYXNlIDU6UGsoYSx0ayx1ayk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihwKDMyOSkpO319fURrKGEsQigpKTtyZXR1cm4gYS5jYWxsYmFja05vZGU9PT1jP0drLmJpbmQobnVsbCxhKTpudWxsfVxuZnVuY3Rpb24gTmsoYSxiKXt2YXIgYz1zazthLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQmJihLayhhLGIpLmZsYWdzfD0yNTYpO2E9SWsoYSxiKTsyIT09YSYmKGI9dGssdGs9YyxudWxsIT09YiYmRmooYikpO3JldHVybiBhfWZ1bmN0aW9uIEZqKGEpe251bGw9PT10az90az1hOnRrLnB1c2guYXBwbHkodGssYSl9XG5mdW5jdGlvbiBPayhhKXtmb3IodmFyIGI9YTs7KXtpZihiLmZsYWdzJjE2Mzg0KXt2YXIgYz1iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1jJiYoYz1jLnN0b3JlcyxudWxsIT09YykpZm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0sZj1lLmdldFNuYXBzaG90O2U9ZS52YWx1ZTt0cnl7aWYoIUhlKGYoKSxlKSlyZXR1cm4hMX1jYXRjaChnKXtyZXR1cm4hMX19fWM9Yi5jaGlsZDtpZihiLnN1YnRyZWVGbGFncyYxNjM4NCYmbnVsbCE9PWMpYy5yZXR1cm49YixiPWM7ZWxzZXtpZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4hMDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fXJldHVybiEwfVxuZnVuY3Rpb24gQ2soYSxiKXtiJj1+cms7YiY9fnFrO2Euc3VzcGVuZGVkTGFuZXN8PWI7YS5waW5nZWRMYW5lcyY9fmI7Zm9yKGE9YS5leHBpcmF0aW9uVGltZXM7MDxiOyl7dmFyIGM9MzEtb2MoYiksZD0xPDxjO2FbY109LTE7YiY9fmR9fWZ1bmN0aW9uIEVrKGEpe2lmKDAhPT0oSyY2KSl0aHJvdyBFcnJvcihwKDMyNykpO0hrKCk7dmFyIGI9dWMoYSwwKTtpZigwPT09KGImMSkpcmV0dXJuIERrKGEsQigpKSxudWxsO3ZhciBjPUlrKGEsYik7aWYoMCE9PWEudGFnJiYyPT09Yyl7dmFyIGQ9eGMoYSk7MCE9PWQmJihiPWQsYz1OayhhLGQpKX1pZigxPT09Yyl0aHJvdyBjPXBrLEtrKGEsMCksQ2soYSxiKSxEayhhLEIoKSksYztpZig2PT09Yyl0aHJvdyBFcnJvcihwKDM0NSkpO2EuZmluaXNoZWRXb3JrPWEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZExhbmVzPWI7UGsoYSx0ayx1ayk7RGsoYSxCKCkpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gUWsoYSxiKXt2YXIgYz1LO0t8PTE7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7Sz1jLDA9PT1LJiYoR2o9QigpKzUwMCxmZyYmamcoKSl9fWZ1bmN0aW9uIFJrKGEpe251bGwhPT13ayYmMD09PXdrLnRhZyYmMD09PShLJjYpJiZIaygpO3ZhciBiPUs7S3w9MTt2YXIgYz1vay50cmFuc2l0aW9uLGQ9Qzt0cnl7aWYob2sudHJhbnNpdGlvbj1udWxsLEM9MSxhKXJldHVybiBhKCl9ZmluYWxseXtDPWQsb2sudHJhbnNpdGlvbj1jLEs9YiwwPT09KEsmNikmJmpnKCl9fWZ1bmN0aW9uIEhqKCl7Zmo9ZWouY3VycmVudDtFKGVqKX1cbmZ1bmN0aW9uIEtrKGEsYil7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDt2YXIgYz1hLnRpbWVvdXRIYW5kbGU7LTEhPT1jJiYoYS50aW1lb3V0SGFuZGxlPS0xLEdmKGMpKTtpZihudWxsIT09WSlmb3IoYz1ZLnJldHVybjtudWxsIT09Yzspe3ZhciBkPWM7d2coZCk7c3dpdGNoKGQudGFnKXtjYXNlIDE6ZD1kLnR5cGUuY2hpbGRDb250ZXh0VHlwZXM7bnVsbCE9PWQmJnZvaWQgMCE9PWQmJiRmKCk7YnJlYWs7Y2FzZSAzOnpoKCk7RShXZik7RShIKTtFaCgpO2JyZWFrO2Nhc2UgNTpCaChkKTticmVhaztjYXNlIDQ6emgoKTticmVhaztjYXNlIDEzOkUoTCk7YnJlYWs7Y2FzZSAxOTpFKEwpO2JyZWFrO2Nhc2UgMTA6YWgoZC50eXBlLl9jb250ZXh0KTticmVhaztjYXNlIDIyOmNhc2UgMjM6SGooKX1jPWMucmV0dXJufVE9YTtZPWE9UGcoYS5jdXJyZW50LG51bGwpO1o9Zmo9YjtUPTA7cGs9bnVsbDtyaz1xaz1yaD0wO3RrPXNrPW51bGw7aWYobnVsbCE9PWZoKXtmb3IoYj1cbjA7YjxmaC5sZW5ndGg7YisrKWlmKGM9ZmhbYl0sZD1jLmludGVybGVhdmVkLG51bGwhPT1kKXtjLmludGVybGVhdmVkPW51bGw7dmFyIGU9ZC5uZXh0LGY9Yy5wZW5kaW5nO2lmKG51bGwhPT1mKXt2YXIgZz1mLm5leHQ7Zi5uZXh0PWU7ZC5uZXh0PWd9Yy5wZW5kaW5nPWR9Zmg9bnVsbH1yZXR1cm4gYX1cbmZ1bmN0aW9uIE1rKGEsYil7ZG97dmFyIGM9WTt0cnl7JGcoKTtGaC5jdXJyZW50PVJoO2lmKEloKXtmb3IodmFyIGQ9TS5tZW1vaXplZFN0YXRlO251bGwhPT1kOyl7dmFyIGU9ZC5xdWV1ZTtudWxsIT09ZSYmKGUucGVuZGluZz1udWxsKTtkPWQubmV4dH1JaD0hMX1IaD0wO089Tj1NPW51bGw7Smg9ITE7S2g9MDtuay5jdXJyZW50PW51bGw7aWYobnVsbD09PWN8fG51bGw9PT1jLnJldHVybil7VD0xO3BrPWI7WT1udWxsO2JyZWFrfWE6e3ZhciBmPWEsZz1jLnJldHVybixoPWMsaz1iO2I9WjtoLmZsYWdzfD0zMjc2ODtpZihudWxsIT09ayYmXCJvYmplY3RcIj09PXR5cGVvZiBrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay50aGVuKXt2YXIgbD1rLG09aCxxPW0udGFnO2lmKDA9PT0obS5tb2RlJjEpJiYoMD09PXF8fDExPT09cXx8MTU9PT1xKSl7dmFyIHI9bS5hbHRlcm5hdGU7cj8obS51cGRhdGVRdWV1ZT1yLnVwZGF0ZVF1ZXVlLG0ubWVtb2l6ZWRTdGF0ZT1yLm1lbW9pemVkU3RhdGUsXG5tLmxhbmVzPXIubGFuZXMpOihtLnVwZGF0ZVF1ZXVlPW51bGwsbS5tZW1vaXplZFN0YXRlPW51bGwpfXZhciB5PVVpKGcpO2lmKG51bGwhPT15KXt5LmZsYWdzJj0tMjU3O1ZpKHksZyxoLGYsYik7eS5tb2RlJjEmJlNpKGYsbCxiKTtiPXk7az1sO3ZhciBuPWIudXBkYXRlUXVldWU7aWYobnVsbD09PW4pe3ZhciB0PW5ldyBTZXQ7dC5hZGQoayk7Yi51cGRhdGVRdWV1ZT10fWVsc2Ugbi5hZGQoayk7YnJlYWsgYX1lbHNle2lmKDA9PT0oYiYxKSl7U2koZixsLGIpO3RqKCk7YnJlYWsgYX1rPUVycm9yKHAoNDI2KSl9fWVsc2UgaWYoSSYmaC5tb2RlJjEpe3ZhciBKPVVpKGcpO2lmKG51bGwhPT1KKXswPT09KEouZmxhZ3MmNjU1MzYpJiYoSi5mbGFnc3w9MjU2KTtWaShKLGcsaCxmLGIpO0pnKEppKGssaCkpO2JyZWFrIGF9fWY9az1KaShrLGgpOzQhPT1UJiYoVD0yKTtudWxsPT09c2s/c2s9W2ZdOnNrLnB1c2goZik7Zj1nO2Rve3N3aXRjaChmLnRhZyl7Y2FzZSAzOmYuZmxhZ3N8PTY1NTM2O1xuYiY9LWI7Zi5sYW5lc3w9Yjt2YXIgeD1OaShmLGssYik7cGgoZix4KTticmVhayBhO2Nhc2UgMTpoPWs7dmFyIHc9Zi50eXBlLHU9Zi5zdGF0ZU5vZGU7aWYoMD09PShmLmZsYWdzJjEyOCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygdy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT11JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgdS5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1SaXx8IVJpLmhhcyh1KSkpKXtmLmZsYWdzfD02NTUzNjtiJj0tYjtmLmxhbmVzfD1iO3ZhciBGPVFpKGYsaCxiKTtwaChmLEYpO2JyZWFrIGF9fWY9Zi5yZXR1cm59d2hpbGUobnVsbCE9PWYpfVNrKGMpfWNhdGNoKG5hKXtiPW5hO1k9PT1jJiZudWxsIT09YyYmKFk9Yz1jLnJldHVybik7Y29udGludWV9YnJlYWt9d2hpbGUoMSl9ZnVuY3Rpb24gSmsoKXt2YXIgYT1tay5jdXJyZW50O21rLmN1cnJlbnQ9Umg7cmV0dXJuIG51bGw9PT1hP1JoOmF9XG5mdW5jdGlvbiB0aigpe2lmKDA9PT1UfHwzPT09VHx8Mj09PVQpVD00O251bGw9PT1RfHwwPT09KHJoJjI2ODQzNTQ1NSkmJjA9PT0ocWsmMjY4NDM1NDU1KXx8Q2soUSxaKX1mdW5jdGlvbiBJayhhLGIpe3ZhciBjPUs7S3w9Mjt2YXIgZD1KaygpO2lmKFEhPT1hfHxaIT09Yil1az1udWxsLEtrKGEsYik7ZG8gdHJ5e1RrKCk7YnJlYWt9Y2F0Y2goZSl7TWsoYSxlKX13aGlsZSgxKTskZygpO0s9Yzttay5jdXJyZW50PWQ7aWYobnVsbCE9PVkpdGhyb3cgRXJyb3IocCgyNjEpKTtRPW51bGw7Wj0wO3JldHVybiBUfWZ1bmN0aW9uIFRrKCl7Zm9yKDtudWxsIT09WTspVWsoWSl9ZnVuY3Rpb24gTGsoKXtmb3IoO251bGwhPT1ZJiYhY2MoKTspVWsoWSl9ZnVuY3Rpb24gVWsoYSl7dmFyIGI9VmsoYS5hbHRlcm5hdGUsYSxmaik7YS5tZW1vaXplZFByb3BzPWEucGVuZGluZ1Byb3BzO251bGw9PT1iP1NrKGEpOlk9Yjtuay5jdXJyZW50PW51bGx9XG5mdW5jdGlvbiBTayhhKXt2YXIgYj1hO2Rve3ZhciBjPWIuYWx0ZXJuYXRlO2E9Yi5yZXR1cm47aWYoMD09PShiLmZsYWdzJjMyNzY4KSl7aWYoYz1FaihjLGIsZmopLG51bGwhPT1jKXtZPWM7cmV0dXJufX1lbHNle2M9SWooYyxiKTtpZihudWxsIT09Yyl7Yy5mbGFncyY9MzI3Njc7WT1jO3JldHVybn1pZihudWxsIT09YSlhLmZsYWdzfD0zMjc2OCxhLnN1YnRyZWVGbGFncz0wLGEuZGVsZXRpb25zPW51bGw7ZWxzZXtUPTY7WT1udWxsO3JldHVybn19Yj1iLnNpYmxpbmc7aWYobnVsbCE9PWIpe1k9YjtyZXR1cm59WT1iPWF9d2hpbGUobnVsbCE9PWIpOzA9PT1UJiYoVD01KX1mdW5jdGlvbiBQayhhLGIsYyl7dmFyIGQ9QyxlPW9rLnRyYW5zaXRpb247dHJ5e29rLnRyYW5zaXRpb249bnVsbCxDPTEsV2soYSxiLGMsZCl9ZmluYWxseXtvay50cmFuc2l0aW9uPWUsQz1kfXJldHVybiBudWxsfVxuZnVuY3Rpb24gV2soYSxiLGMsZCl7ZG8gSGsoKTt3aGlsZShudWxsIT09d2spO2lmKDAhPT0oSyY2KSl0aHJvdyBFcnJvcihwKDMyNykpO2M9YS5maW5pc2hlZFdvcms7dmFyIGU9YS5maW5pc2hlZExhbmVzO2lmKG51bGw9PT1jKXJldHVybiBudWxsO2EuZmluaXNoZWRXb3JrPW51bGw7YS5maW5pc2hlZExhbmVzPTA7aWYoYz09PWEuY3VycmVudCl0aHJvdyBFcnJvcihwKDE3NykpO2EuY2FsbGJhY2tOb2RlPW51bGw7YS5jYWxsYmFja1ByaW9yaXR5PTA7dmFyIGY9Yy5sYW5lc3xjLmNoaWxkTGFuZXM7QmMoYSxmKTthPT09USYmKFk9UT1udWxsLFo9MCk7MD09PShjLnN1YnRyZWVGbGFncyYyMDY0KSYmMD09PShjLmZsYWdzJjIwNjQpfHx2a3x8KHZrPSEwLEZrKGhjLGZ1bmN0aW9uKCl7SGsoKTtyZXR1cm4gbnVsbH0pKTtmPTAhPT0oYy5mbGFncyYxNTk5MCk7aWYoMCE9PShjLnN1YnRyZWVGbGFncyYxNTk5MCl8fGYpe2Y9b2sudHJhbnNpdGlvbjtvay50cmFuc2l0aW9uPW51bGw7XG52YXIgZz1DO0M9MTt2YXIgaD1LO0t8PTQ7bmsuY3VycmVudD1udWxsO09qKGEsYyk7ZGsoYyxhKTtPZShEZik7ZGQ9ISFDZjtEZj1DZj1udWxsO2EuY3VycmVudD1jO2hrKGMsYSxlKTtkYygpO0s9aDtDPWc7b2sudHJhbnNpdGlvbj1mfWVsc2UgYS5jdXJyZW50PWM7dmsmJih2az0hMSx3az1hLHhrPWUpO2Y9YS5wZW5kaW5nTGFuZXM7MD09PWYmJihSaT1udWxsKTttYyhjLnN0YXRlTm9kZSxkKTtEayhhLEIoKSk7aWYobnVsbCE9PWIpZm9yKGQ9YS5vblJlY292ZXJhYmxlRXJyb3IsYz0wO2M8Yi5sZW5ndGg7YysrKWU9YltjXSxkKGUudmFsdWUse2NvbXBvbmVudFN0YWNrOmUuc3RhY2ssZGlnZXN0OmUuZGlnZXN0fSk7aWYoT2kpdGhyb3cgT2k9ITEsYT1QaSxQaT1udWxsLGE7MCE9PSh4ayYxKSYmMCE9PWEudGFnJiZIaygpO2Y9YS5wZW5kaW5nTGFuZXM7MCE9PShmJjEpP2E9PT16az95aysrOih5az0wLHprPWEpOnlrPTA7amcoKTtyZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIEhrKCl7aWYobnVsbCE9PXdrKXt2YXIgYT1EYyh4ayksYj1vay50cmFuc2l0aW9uLGM9Qzt0cnl7b2sudHJhbnNpdGlvbj1udWxsO0M9MTY+YT8xNjphO2lmKG51bGw9PT13ayl2YXIgZD0hMTtlbHNle2E9d2s7d2s9bnVsbDt4az0wO2lmKDAhPT0oSyY2KSl0aHJvdyBFcnJvcihwKDMzMSkpO3ZhciBlPUs7S3w9NDtmb3IoVj1hLmN1cnJlbnQ7bnVsbCE9PVY7KXt2YXIgZj1WLGc9Zi5jaGlsZDtpZigwIT09KFYuZmxhZ3MmMTYpKXt2YXIgaD1mLmRlbGV0aW9ucztpZihudWxsIT09aCl7Zm9yKHZhciBrPTA7azxoLmxlbmd0aDtrKyspe3ZhciBsPWhba107Zm9yKFY9bDtudWxsIT09Vjspe3ZhciBtPVY7c3dpdGNoKG0udGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlBqKDgsbSxmKX12YXIgcT1tLmNoaWxkO2lmKG51bGwhPT1xKXEucmV0dXJuPW0sVj1xO2Vsc2UgZm9yKDtudWxsIT09Vjspe209Vjt2YXIgcj1tLnNpYmxpbmcseT1tLnJldHVybjtTaihtKTtpZihtPT09XG5sKXtWPW51bGw7YnJlYWt9aWYobnVsbCE9PXIpe3IucmV0dXJuPXk7Vj1yO2JyZWFrfVY9eX19fXZhciBuPWYuYWx0ZXJuYXRlO2lmKG51bGwhPT1uKXt2YXIgdD1uLmNoaWxkO2lmKG51bGwhPT10KXtuLmNoaWxkPW51bGw7ZG97dmFyIEo9dC5zaWJsaW5nO3Quc2libGluZz1udWxsO3Q9Sn13aGlsZShudWxsIT09dCl9fVY9Zn19aWYoMCE9PShmLnN1YnRyZWVGbGFncyYyMDY0KSYmbnVsbCE9PWcpZy5yZXR1cm49ZixWPWc7ZWxzZSBiOmZvcig7bnVsbCE9PVY7KXtmPVY7aWYoMCE9PShmLmZsYWdzJjIwNDgpKXN3aXRjaChmLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTpQaig5LGYsZi5yZXR1cm4pfXZhciB4PWYuc2libGluZztpZihudWxsIT09eCl7eC5yZXR1cm49Zi5yZXR1cm47Vj14O2JyZWFrIGJ9Vj1mLnJldHVybn19dmFyIHc9YS5jdXJyZW50O2ZvcihWPXc7bnVsbCE9PVY7KXtnPVY7dmFyIHU9Zy5jaGlsZDtpZigwIT09KGcuc3VidHJlZUZsYWdzJjIwNjQpJiZudWxsIT09XG51KXUucmV0dXJuPWcsVj11O2Vsc2UgYjpmb3IoZz13O251bGwhPT1WOyl7aD1WO2lmKDAhPT0oaC5mbGFncyYyMDQ4KSl0cnl7c3dpdGNoKGgudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlFqKDksaCl9fWNhdGNoKG5hKXtXKGgsaC5yZXR1cm4sbmEpfWlmKGg9PT1nKXtWPW51bGw7YnJlYWsgYn12YXIgRj1oLnNpYmxpbmc7aWYobnVsbCE9PUYpe0YucmV0dXJuPWgucmV0dXJuO1Y9RjticmVhayBifVY9aC5yZXR1cm59fUs9ZTtqZygpO2lmKGxjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbGMub25Qb3N0Q29tbWl0RmliZXJSb290KXRyeXtsYy5vblBvc3RDb21taXRGaWJlclJvb3Qoa2MsYSl9Y2F0Y2gobmEpe31kPSEwfXJldHVybiBkfWZpbmFsbHl7Qz1jLG9rLnRyYW5zaXRpb249Yn19cmV0dXJuITF9ZnVuY3Rpb24gWGsoYSxiLGMpe2I9SmkoYyxiKTtiPU5pKGEsYiwxKTthPW5oKGEsYiwxKTtiPVIoKTtudWxsIT09YSYmKEFjKGEsMSxiKSxEayhhLGIpKX1cbmZ1bmN0aW9uIFcoYSxiLGMpe2lmKDM9PT1hLnRhZylYayhhLGEsYyk7ZWxzZSBmb3IoO251bGwhPT1iOyl7aWYoMz09PWIudGFnKXtYayhiLGEsYyk7YnJlYWt9ZWxzZSBpZigxPT09Yi50YWcpe3ZhciBkPWIuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1SaXx8IVJpLmhhcyhkKSkpe2E9SmkoYyxhKTthPVFpKGIsYSwxKTtiPW5oKGIsYSwxKTthPVIoKTtudWxsIT09YiYmKEFjKGIsMSxhKSxEayhiLGEpKTticmVha319Yj1iLnJldHVybn19XG5mdW5jdGlvbiBUaShhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7bnVsbCE9PWQmJmQuZGVsZXRlKGIpO2I9UigpO2EucGluZ2VkTGFuZXN8PWEuc3VzcGVuZGVkTGFuZXMmYztRPT09YSYmKFomYyk9PT1jJiYoND09PVR8fDM9PT1UJiYoWiYxMzAwMjM0MjQpPT09WiYmNTAwPkIoKS1maz9LayhhLDApOnJrfD1jKTtEayhhLGIpfWZ1bmN0aW9uIFlrKGEsYil7MD09PWImJigwPT09KGEubW9kZSYxKT9iPTE6KGI9c2Msc2M8PD0xLDA9PT0oc2MmMTMwMDIzNDI0KSYmKHNjPTQxOTQzMDQpKSk7dmFyIGM9UigpO2E9aWgoYSxiKTtudWxsIT09YSYmKEFjKGEsYixjKSxEayhhLGMpKX1mdW5jdGlvbiB1aihhKXt2YXIgYj1hLm1lbW9pemVkU3RhdGUsYz0wO251bGwhPT1iJiYoYz1iLnJldHJ5TGFuZSk7WWsoYSxjKX1cbmZ1bmN0aW9uIGJrKGEsYil7dmFyIGM9MDtzd2l0Y2goYS50YWcpe2Nhc2UgMTM6dmFyIGQ9YS5zdGF0ZU5vZGU7dmFyIGU9YS5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYoYz1lLnJldHJ5TGFuZSk7YnJlYWs7Y2FzZSAxOTpkPWEuc3RhdGVOb2RlO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IocCgzMTQpKTt9bnVsbCE9PWQmJmQuZGVsZXRlKGIpO1lrKGEsYyl9dmFyIFZrO1xuVms9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGwhPT1hKWlmKGEubWVtb2l6ZWRQcm9wcyE9PWIucGVuZGluZ1Byb3BzfHxXZi5jdXJyZW50KWRoPSEwO2Vsc2V7aWYoMD09PShhLmxhbmVzJmMpJiYwPT09KGIuZmxhZ3MmMTI4KSlyZXR1cm4gZGg9ITEseWooYSxiLGMpO2RoPTAhPT0oYS5mbGFncyYxMzEwNzIpPyEwOiExfWVsc2UgZGg9ITEsSSYmMCE9PShiLmZsYWdzJjEwNDg1NzYpJiZ1ZyhiLG5nLGIuaW5kZXgpO2IubGFuZXM9MDtzd2l0Y2goYi50YWcpe2Nhc2UgMjp2YXIgZD1iLnR5cGU7aWooYSxiKTthPWIucGVuZGluZ1Byb3BzO3ZhciBlPVlmKGIsSC5jdXJyZW50KTtjaChiLGMpO2U9TmgobnVsbCxiLGQsYSxlLGMpO3ZhciBmPVNoKCk7Yi5mbGFnc3w9MTtcIm9iamVjdFwiPT09dHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Y/KGIudGFnPTEsYi5tZW1vaXplZFN0YXRlPW51bGwsYi51cGRhdGVRdWV1ZT1cbm51bGwsWmYoZCk/KGY9ITAsY2coYikpOmY9ITEsYi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbCxraChiKSxlLnVwZGF0ZXI9RWksYi5zdGF0ZU5vZGU9ZSxlLl9yZWFjdEludGVybmFscz1iLElpKGIsZCxhLGMpLGI9amoobnVsbCxiLGQsITAsZixjKSk6KGIudGFnPTAsSSYmZiYmdmcoYiksWGkobnVsbCxiLGUsYyksYj1iLmNoaWxkKTtyZXR1cm4gYjtjYXNlIDE2OmQ9Yi5lbGVtZW50VHlwZTthOntpaihhLGIpO2E9Yi5wZW5kaW5nUHJvcHM7ZT1kLl9pbml0O2Q9ZShkLl9wYXlsb2FkKTtiLnR5cGU9ZDtlPWIudGFnPVprKGQpO2E9Q2koZCxhKTtzd2l0Y2goZSl7Y2FzZSAwOmI9Y2oobnVsbCxiLGQsYSxjKTticmVhayBhO2Nhc2UgMTpiPWhqKG51bGwsYixkLGEsYyk7YnJlYWsgYTtjYXNlIDExOmI9WWkobnVsbCxiLGQsYSxjKTticmVhayBhO2Nhc2UgMTQ6Yj0kaShudWxsLGIsZCxDaShkLnR5cGUsYSksYyk7YnJlYWsgYX10aHJvdyBFcnJvcihwKDMwNixcbmQsXCJcIikpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkNpKGQsZSksY2ooYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkNpKGQsZSksaGooYSxiLGQsZSxjKTtjYXNlIDM6YTp7a2ooYik7aWYobnVsbD09PWEpdGhyb3cgRXJyb3IocCgzODcpKTtkPWIucGVuZGluZ1Byb3BzO2Y9Yi5tZW1vaXplZFN0YXRlO2U9Zi5lbGVtZW50O2xoKGEsYik7cWgoYixkLG51bGwsYyk7dmFyIGc9Yi5tZW1vaXplZFN0YXRlO2Q9Zy5lbGVtZW50O2lmKGYuaXNEZWh5ZHJhdGVkKWlmKGY9e2VsZW1lbnQ6ZCxpc0RlaHlkcmF0ZWQ6ITEsY2FjaGU6Zy5jYWNoZSxwZW5kaW5nU3VzcGVuc2VCb3VuZGFyaWVzOmcucGVuZGluZ1N1c3BlbnNlQm91bmRhcmllcyx0cmFuc2l0aW9uczpnLnRyYW5zaXRpb25zfSxiLnVwZGF0ZVF1ZXVlLmJhc2VTdGF0ZT1cbmYsYi5tZW1vaXplZFN0YXRlPWYsYi5mbGFncyYyNTYpe2U9SmkoRXJyb3IocCg0MjMpKSxiKTtiPWxqKGEsYixkLGMsZSk7YnJlYWsgYX1lbHNlIGlmKGQhPT1lKXtlPUppKEVycm9yKHAoNDI0KSksYik7Yj1saihhLGIsZCxjLGUpO2JyZWFrIGF9ZWxzZSBmb3IoeWc9TGYoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mby5maXJzdENoaWxkKSx4Zz1iLEk9ITAsemc9bnVsbCxjPVZnKGIsbnVsbCxkLGMpLGIuY2hpbGQ9YztjOyljLmZsYWdzPWMuZmxhZ3MmLTN8NDA5NixjPWMuc2libGluZztlbHNle0lnKCk7aWYoZD09PWUpe2I9WmkoYSxiLGMpO2JyZWFrIGF9WGkoYSxiLGQsYyl9Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgNTpyZXR1cm4gQWgoYiksbnVsbD09PWEmJkVnKGIpLGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZj1udWxsIT09YT9hLm1lbW9pemVkUHJvcHM6bnVsbCxnPWUuY2hpbGRyZW4sRWYoZCxlKT9nPW51bGw6bnVsbCE9PWYmJkVmKGQsZikmJihiLmZsYWdzfD0zMiksXG5naihhLGIpLFhpKGEsYixnLGMpLGIuY2hpbGQ7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmRWcoYiksbnVsbDtjYXNlIDEzOnJldHVybiBvaihhLGIsYyk7Y2FzZSA0OnJldHVybiB5aChiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1VZyhiLG51bGwsZCxjKTpYaShhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkNpKGQsZSksWWkoYSxiLGQsZSxjKTtjYXNlIDc6cmV0dXJuIFhpKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gWGkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMjpyZXR1cm4gWGkoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMDphOntkPWIudHlwZS5fY29udGV4dDtlPWIucGVuZGluZ1Byb3BzO2Y9Yi5tZW1vaXplZFByb3BzO1xuZz1lLnZhbHVlO0coV2csZC5fY3VycmVudFZhbHVlKTtkLl9jdXJyZW50VmFsdWU9ZztpZihudWxsIT09ZilpZihIZShmLnZhbHVlLGcpKXtpZihmLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIVdmLmN1cnJlbnQpe2I9WmkoYSxiLGMpO2JyZWFrIGF9fWVsc2UgZm9yKGY9Yi5jaGlsZCxudWxsIT09ZiYmKGYucmV0dXJuPWIpO251bGwhPT1mOyl7dmFyIGg9Zi5kZXBlbmRlbmNpZXM7aWYobnVsbCE9PWgpe2c9Zi5jaGlsZDtmb3IodmFyIGs9aC5maXJzdENvbnRleHQ7bnVsbCE9PWs7KXtpZihrLmNvbnRleHQ9PT1kKXtpZigxPT09Zi50YWcpe2s9bWgoLTEsYyYtYyk7ay50YWc9Mjt2YXIgbD1mLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1sKXtsPWwuc2hhcmVkO3ZhciBtPWwucGVuZGluZztudWxsPT09bT9rLm5leHQ9azooay5uZXh0PW0ubmV4dCxtLm5leHQ9ayk7bC5wZW5kaW5nPWt9fWYubGFuZXN8PWM7az1mLmFsdGVybmF0ZTtudWxsIT09ayYmKGsubGFuZXN8PWMpO2JoKGYucmV0dXJuLFxuYyxiKTtoLmxhbmVzfD1jO2JyZWFrfWs9ay5uZXh0fX1lbHNlIGlmKDEwPT09Zi50YWcpZz1mLnR5cGU9PT1iLnR5cGU/bnVsbDpmLmNoaWxkO2Vsc2UgaWYoMTg9PT1mLnRhZyl7Zz1mLnJldHVybjtpZihudWxsPT09Zyl0aHJvdyBFcnJvcihwKDM0MSkpO2cubGFuZXN8PWM7aD1nLmFsdGVybmF0ZTtudWxsIT09aCYmKGgubGFuZXN8PWMpO2JoKGcsYyxiKTtnPWYuc2libGluZ31lbHNlIGc9Zi5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1mO2Vsc2UgZm9yKGc9ZjtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9Zj1nLnNpYmxpbmc7aWYobnVsbCE9PWYpe2YucmV0dXJuPWcucmV0dXJuO2c9ZjticmVha31nPWcucmV0dXJufWY9Z31YaShhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxkPWIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGNoKGIsYyksZT1laChlKSxkPWQoZSksYi5mbGFnc3w9MSxYaShhLGIsZCxjKSxcbmIuY2hpbGQ7Y2FzZSAxNDpyZXR1cm4gZD1iLnR5cGUsZT1DaShkLGIucGVuZGluZ1Byb3BzKSxlPUNpKGQudHlwZSxlKSwkaShhLGIsZCxlLGMpO2Nhc2UgMTU6cmV0dXJuIGJqKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsYyk7Y2FzZSAxNzpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6Q2koZCxlKSxpaihhLGIpLGIudGFnPTEsWmYoZCk/KGE9ITAsY2coYikpOmE9ITEsY2goYixjKSxHaShiLGQsZSksSWkoYixkLGUsYyksamoobnVsbCxiLGQsITAsYSxjKTtjYXNlIDE5OnJldHVybiB4aihhLGIsYyk7Y2FzZSAyMjpyZXR1cm4gZGooYSxiLGMpfXRocm93IEVycm9yKHAoMTU2LGIudGFnKSk7fTtmdW5jdGlvbiBGayhhLGIpe3JldHVybiBhYyhhLGIpfVxuZnVuY3Rpb24gJGsoYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmRlcGVuZGVuY2llcz10aGlzLm1lbW9pemVkU3RhdGU9dGhpcy51cGRhdGVRdWV1ZT10aGlzLm1lbW9pemVkUHJvcHM9bnVsbDt0aGlzLm1vZGU9ZDt0aGlzLnN1YnRyZWVGbGFncz10aGlzLmZsYWdzPTA7dGhpcy5kZWxldGlvbnM9bnVsbDt0aGlzLmNoaWxkTGFuZXM9dGhpcy5sYW5lcz0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gQmcoYSxiLGMsZCl7cmV0dXJuIG5ldyAkayhhLGIsYyxkKX1mdW5jdGlvbiBhaihhKXthPWEucHJvdG90eXBlO3JldHVybiEoIWF8fCFhLmlzUmVhY3RDb21wb25lbnQpfVxuZnVuY3Rpb24gWmsoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGFqKGEpPzE6MDtpZih2b2lkIDAhPT1hJiZudWxsIT09YSl7YT1hLiQkdHlwZW9mO2lmKGE9PT1EYSlyZXR1cm4gMTE7aWYoYT09PUdhKXJldHVybiAxNH1yZXR1cm4gMn1cbmZ1bmN0aW9uIFBnKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbD09PWM/KGM9QmcoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy50eXBlPWEudHlwZSxjLmZsYWdzPTAsYy5zdWJ0cmVlRmxhZ3M9MCxjLmRlbGV0aW9ucz1udWxsKTtjLmZsYWdzPWEuZmxhZ3MmMTQ2ODAwNjQ7Yy5jaGlsZExhbmVzPWEuY2hpbGRMYW5lcztjLmxhbmVzPWEubGFuZXM7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yj1hLmRlcGVuZGVuY2llcztjLmRlcGVuZGVuY2llcz1udWxsPT09Yj9udWxsOntsYW5lczpiLmxhbmVzLGZpcnN0Q29udGV4dDpiLmZpcnN0Q29udGV4dH07XG5jLnNpYmxpbmc9YS5zaWJsaW5nO2MuaW5kZXg9YS5pbmRleDtjLnJlZj1hLnJlZjtyZXR1cm4gY31cbmZ1bmN0aW9uIFJnKGEsYixjLGQsZSxmKXt2YXIgZz0yO2Q9YTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlhaihhKSYmKGc9MSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpZz01O2Vsc2UgYTpzd2l0Y2goYSl7Y2FzZSB5YTpyZXR1cm4gVGcoYy5jaGlsZHJlbixlLGYsYik7Y2FzZSB6YTpnPTg7ZXw9ODticmVhaztjYXNlIEFhOnJldHVybiBhPUJnKDEyLGMsYixlfDIpLGEuZWxlbWVudFR5cGU9QWEsYS5sYW5lcz1mLGE7Y2FzZSBFYTpyZXR1cm4gYT1CZygxMyxjLGIsZSksYS5lbGVtZW50VHlwZT1FYSxhLmxhbmVzPWYsYTtjYXNlIEZhOnJldHVybiBhPUJnKDE5LGMsYixlKSxhLmVsZW1lbnRUeXBlPUZhLGEubGFuZXM9ZixhO2Nhc2UgSWE6cmV0dXJuIHBqKGMsZSxmLGIpO2RlZmF1bHQ6aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBCYTpnPTEwO2JyZWFrIGE7Y2FzZSBDYTpnPTk7YnJlYWsgYTtjYXNlIERhOmc9MTE7XG5icmVhayBhO2Nhc2UgR2E6Zz0xNDticmVhayBhO2Nhc2UgSGE6Zz0xNjtkPW51bGw7YnJlYWsgYX10aHJvdyBFcnJvcihwKDEzMCxudWxsPT1hP2E6dHlwZW9mIGEsXCJcIikpO31iPUJnKGcsYyxiLGUpO2IuZWxlbWVudFR5cGU9YTtiLnR5cGU9ZDtiLmxhbmVzPWY7cmV0dXJuIGJ9ZnVuY3Rpb24gVGcoYSxiLGMsZCl7YT1CZyg3LGEsZCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9ZnVuY3Rpb24gcGooYSxiLGMsZCl7YT1CZygyMixhLGQsYik7YS5lbGVtZW50VHlwZT1JYTthLmxhbmVzPWM7YS5zdGF0ZU5vZGU9e2lzSGlkZGVuOiExfTtyZXR1cm4gYX1mdW5jdGlvbiBRZyhhLGIsYyl7YT1CZyg2LGEsbnVsbCxiKTthLmxhbmVzPWM7cmV0dXJuIGF9XG5mdW5jdGlvbiBTZyhhLGIsYyl7Yj1CZyg0LG51bGwhPT1hLmNoaWxkcmVuP2EuY2hpbGRyZW46W10sYS5rZXksYik7Yi5sYW5lcz1jO2Iuc3RhdGVOb2RlPXtjb250YWluZXJJbmZvOmEuY29udGFpbmVySW5mbyxwZW5kaW5nQ2hpbGRyZW46bnVsbCxpbXBsZW1lbnRhdGlvbjphLmltcGxlbWVudGF0aW9ufTtyZXR1cm4gYn1cbmZ1bmN0aW9uIGFsKGEsYixjLGQsZSl7dGhpcy50YWc9Yjt0aGlzLmNvbnRhaW5lckluZm89YTt0aGlzLmZpbmlzaGVkV29yaz10aGlzLnBpbmdDYWNoZT10aGlzLmN1cnJlbnQ9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLnRpbWVvdXRIYW5kbGU9LTE7dGhpcy5jYWxsYmFja05vZGU9dGhpcy5wZW5kaW5nQ29udGV4dD10aGlzLmNvbnRleHQ9bnVsbDt0aGlzLmNhbGxiYWNrUHJpb3JpdHk9MDt0aGlzLmV2ZW50VGltZXM9emMoMCk7dGhpcy5leHBpcmF0aW9uVGltZXM9emMoLTEpO3RoaXMuZW50YW5nbGVkTGFuZXM9dGhpcy5maW5pc2hlZExhbmVzPXRoaXMubXV0YWJsZVJlYWRMYW5lcz10aGlzLmV4cGlyZWRMYW5lcz10aGlzLnBpbmdlZExhbmVzPXRoaXMuc3VzcGVuZGVkTGFuZXM9dGhpcy5wZW5kaW5nTGFuZXM9MDt0aGlzLmVudGFuZ2xlbWVudHM9emMoMCk7dGhpcy5pZGVudGlmaWVyUHJlZml4PWQ7dGhpcy5vblJlY292ZXJhYmxlRXJyb3I9ZTt0aGlzLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9XG5udWxsfWZ1bmN0aW9uIGJsKGEsYixjLGQsZSxmLGcsaCxrKXthPW5ldyBhbChhLGIsYyxoLGspOzE9PT1iPyhiPTEsITA9PT1mJiYoYnw9OCkpOmI9MDtmPUJnKDMsbnVsbCxudWxsLGIpO2EuY3VycmVudD1mO2Yuc3RhdGVOb2RlPWE7Zi5tZW1vaXplZFN0YXRlPXtlbGVtZW50OmQsaXNEZWh5ZHJhdGVkOmMsY2FjaGU6bnVsbCx0cmFuc2l0aW9uczpudWxsLHBlbmRpbmdTdXNwZW5zZUJvdW5kYXJpZXM6bnVsbH07a2goZik7cmV0dXJuIGF9ZnVuY3Rpb24gY2woYSxiLGMpe3ZhciBkPTM8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsO3JldHVybnskJHR5cGVvZjp3YSxrZXk6bnVsbD09ZD9udWxsOlwiXCIrZCxjaGlsZHJlbjphLGNvbnRhaW5lckluZm86YixpbXBsZW1lbnRhdGlvbjpjfX1cbmZ1bmN0aW9uIGRsKGEpe2lmKCFhKXJldHVybiBWZjthPWEuX3JlYWN0SW50ZXJuYWxzO2E6e2lmKFZiKGEpIT09YXx8MSE9PWEudGFnKXRocm93IEVycm9yKHAoMTcwKSk7dmFyIGI9YTtkb3tzd2l0Y2goYi50YWcpe2Nhc2UgMzpiPWIuc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYTtjYXNlIDE6aWYoWmYoYi50eXBlKSl7Yj1iLnN0YXRlTm9kZS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dDticmVhayBhfX1iPWIucmV0dXJufXdoaWxlKG51bGwhPT1iKTt0aHJvdyBFcnJvcihwKDE3MSkpO31pZigxPT09YS50YWcpe3ZhciBjPWEudHlwZTtpZihaZihjKSlyZXR1cm4gYmcoYSxjLGIpfXJldHVybiBifVxuZnVuY3Rpb24gZWwoYSxiLGMsZCxlLGYsZyxoLGspe2E9YmwoYyxkLCEwLGEsZSxmLGcsaCxrKTthLmNvbnRleHQ9ZGwobnVsbCk7Yz1hLmN1cnJlbnQ7ZD1SKCk7ZT15aShjKTtmPW1oKGQsZSk7Zi5jYWxsYmFjaz12b2lkIDAhPT1iJiZudWxsIT09Yj9iOm51bGw7bmgoYyxmLGUpO2EuY3VycmVudC5sYW5lcz1lO0FjKGEsZSxkKTtEayhhLGQpO3JldHVybiBhfWZ1bmN0aW9uIGZsKGEsYixjLGQpe3ZhciBlPWIuY3VycmVudCxmPVIoKSxnPXlpKGUpO2M9ZGwoYyk7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj1taChmLGcpO2IucGF5bG9hZD17ZWxlbWVudDphfTtkPXZvaWQgMD09PWQ/bnVsbDpkO251bGwhPT1kJiYoYi5jYWxsYmFjaz1kKTthPW5oKGUsYixnKTtudWxsIT09YSYmKGdpKGEsZSxnLGYpLG9oKGEsZSxnKSk7cmV0dXJuIGd9XG5mdW5jdGlvbiBnbChhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIGhsKGEsYil7YT1hLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJm51bGwhPT1hLmRlaHlkcmF0ZWQpe3ZhciBjPWEucmV0cnlMYW5lO2EucmV0cnlMYW5lPTAhPT1jJiZjPGI/YzpifX1mdW5jdGlvbiBpbChhLGIpe2hsKGEsYik7KGE9YS5hbHRlcm5hdGUpJiZobChhLGIpfWZ1bmN0aW9uIGpsKCl7cmV0dXJuIG51bGx9dmFyIGtsPVwiZnVuY3Rpb25cIj09PXR5cGVvZiByZXBvcnRFcnJvcj9yZXBvcnRFcnJvcjpmdW5jdGlvbihhKXtjb25zb2xlLmVycm9yKGEpfTtmdW5jdGlvbiBsbChhKXt0aGlzLl9pbnRlcm5hbFJvb3Q9YX1cbm1sLnByb3RvdHlwZS5yZW5kZXI9bGwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl9pbnRlcm5hbFJvb3Q7aWYobnVsbD09PWIpdGhyb3cgRXJyb3IocCg0MDkpKTtmbChhLGIsbnVsbCxudWxsKX07bWwucHJvdG90eXBlLnVubW91bnQ9bGwucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9pbnRlcm5hbFJvb3Q7aWYobnVsbCE9PWEpe3RoaXMuX2ludGVybmFsUm9vdD1udWxsO3ZhciBiPWEuY29udGFpbmVySW5mbztSayhmdW5jdGlvbigpe2ZsKG51bGwsYSxudWxsLG51bGwpfSk7Ylt1Zl09bnVsbH19O2Z1bmN0aW9uIG1sKGEpe3RoaXMuX2ludGVybmFsUm9vdD1hfVxubWwucHJvdG90eXBlLnVuc3RhYmxlX3NjaGVkdWxlSHlkcmF0aW9uPWZ1bmN0aW9uKGEpe2lmKGEpe3ZhciBiPUhjKCk7YT17YmxvY2tlZE9uOm51bGwsdGFyZ2V0OmEscHJpb3JpdHk6Yn07Zm9yKHZhciBjPTA7YzxRYy5sZW5ndGgmJjAhPT1iJiZiPFFjW2NdLnByaW9yaXR5O2MrKyk7UWMuc3BsaWNlKGMsMCxhKTswPT09YyYmVmMoYSl9fTtmdW5jdGlvbiBubChhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSl9ZnVuY3Rpb24gb2woYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfWZ1bmN0aW9uIHBsKCl7fVxuZnVuY3Rpb24gcWwoYSxiLGMsZCxlKXtpZihlKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGY9ZDtkPWZ1bmN0aW9uKCl7dmFyIGE9Z2woZyk7Zi5jYWxsKGEpfX12YXIgZz1lbChiLGQsYSwwLG51bGwsITEsITEsXCJcIixwbCk7YS5fcmVhY3RSb290Q29udGFpbmVyPWc7YVt1Zl09Zy5jdXJyZW50O3NmKDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphKTtSaygpO3JldHVybiBnfWZvcig7ZT1hLmxhc3RDaGlsZDspYS5yZW1vdmVDaGlsZChlKTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGg9ZDtkPWZ1bmN0aW9uKCl7dmFyIGE9Z2woayk7aC5jYWxsKGEpfX12YXIgaz1ibChhLDAsITEsbnVsbCxudWxsLCExLCExLFwiXCIscGwpO2EuX3JlYWN0Um9vdENvbnRhaW5lcj1rO2FbdWZdPWsuY3VycmVudDtzZig4PT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7UmsoZnVuY3Rpb24oKXtmbChiLGssYyxkKX0pO3JldHVybiBrfVxuZnVuY3Rpb24gcmwoYSxiLGMsZCxlKXt2YXIgZj1jLl9yZWFjdFJvb3RDb250YWluZXI7aWYoZil7dmFyIGc9ZjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9Z2woZyk7aC5jYWxsKGEpfX1mbChiLGcsYSxlKX1lbHNlIGc9cWwoYyxiLGEsZSxkKTtyZXR1cm4gZ2woZyl9RWM9ZnVuY3Rpb24oYSl7c3dpdGNoKGEudGFnKXtjYXNlIDM6dmFyIGI9YS5zdGF0ZU5vZGU7aWYoYi5jdXJyZW50Lm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkKXt2YXIgYz10YyhiLnBlbmRpbmdMYW5lcyk7MCE9PWMmJihDYyhiLGN8MSksRGsoYixCKCkpLDA9PT0oSyY2KSYmKEdqPUIoKSs1MDAsamcoKSkpfWJyZWFrO2Nhc2UgMTM6UmsoZnVuY3Rpb24oKXt2YXIgYj1paChhLDEpO2lmKG51bGwhPT1iKXt2YXIgYz1SKCk7Z2koYixhLDEsYyl9fSksaWwoYSwxKX19O1xuRmM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9aWgoYSwxMzQyMTc3MjgpO2lmKG51bGwhPT1iKXt2YXIgYz1SKCk7Z2koYixhLDEzNDIxNzcyOCxjKX1pbChhLDEzNDIxNzcyOCl9fTtHYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj15aShhKSxjPWloKGEsYik7aWYobnVsbCE9PWMpe3ZhciBkPVIoKTtnaShjLGEsYixkKX1pbChhLGIpfX07SGM9ZnVuY3Rpb24oKXtyZXR1cm4gQ307SWM9ZnVuY3Rpb24oYSxiKXt2YXIgYz1DO3RyeXtyZXR1cm4gQz1hLGIoKX1maW5hbGx5e0M9Y319O1xueWI9ZnVuY3Rpb24oYSxiLGMpe3N3aXRjaChiKXtjYXNlIFwiaW5wdXRcIjpiYihhLGMpO2I9Yy5uYW1lO2lmKFwicmFkaW9cIj09PWMudHlwZSYmbnVsbCE9Yil7Zm9yKGM9YTtjLnBhcmVudE5vZGU7KWM9Yy5wYXJlbnROb2RlO2M9Yy5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRbbmFtZT1cIitKU09OLnN0cmluZ2lmeShcIlwiK2IpKyddW3R5cGU9XCJyYWRpb1wiXScpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07aWYoZCE9PWEmJmQuZm9ybT09PWEuZm9ybSl7dmFyIGU9RGIoZCk7aWYoIWUpdGhyb3cgRXJyb3IocCg5MCkpO1dhKGQpO2JiKGQsZSl9fX1icmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihhLGMpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMudmFsdWUsbnVsbCE9YiYmZmIoYSwhIWMubXVsdGlwbGUsYiwhMSl9fTtHYj1RaztIYj1SaztcbnZhciBzbD17dXNpbmdDbGllbnRFbnRyeVBvaW50OiExLEV2ZW50czpbQ2IsdWUsRGIsRWIsRmIsUWtdfSx0bD17ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6V2MsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxOC4zLjFcIixyZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9O1xudmFyIHVsPXtidW5kbGVUeXBlOnRsLmJ1bmRsZVR5cGUsdmVyc2lvbjp0bC52ZXJzaW9uLHJlbmRlcmVyUGFja2FnZU5hbWU6dGwucmVuZGVyZXJQYWNrYWdlTmFtZSxyZW5kZXJlckNvbmZpZzp0bC5yZW5kZXJlckNvbmZpZyxvdmVycmlkZUhvb2tTdGF0ZTpudWxsLG92ZXJyaWRlSG9va1N0YXRlRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlSG9va1N0YXRlUmVuYW1lUGF0aDpudWxsLG92ZXJyaWRlUHJvcHM6bnVsbCxvdmVycmlkZVByb3BzRGVsZXRlUGF0aDpudWxsLG92ZXJyaWRlUHJvcHNSZW5hbWVQYXRoOm51bGwsc2V0RXJyb3JIYW5kbGVyOm51bGwsc2V0U3VzcGVuc2VIYW5kbGVyOm51bGwsc2NoZWR1bGVVcGRhdGU6bnVsbCxjdXJyZW50RGlzcGF0Y2hlclJlZjp1YS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLGZpbmRIb3N0SW5zdGFuY2VCeUZpYmVyOmZ1bmN0aW9uKGEpe2E9WmIoYSk7cmV0dXJuIG51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9LGZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOnRsLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlfHxcbmpsLGZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaDpudWxsLHNjaGVkdWxlUmVmcmVzaDpudWxsLHNjaGVkdWxlUm9vdDpudWxsLHNldFJlZnJlc2hIYW5kbGVyOm51bGwsZ2V0Q3VycmVudEZpYmVyOm51bGwscmVjb25jaWxlclZlcnNpb246XCIxOC4zLjEtbmV4dC1mMTMzOGY4MDgwLTIwMjQwNDI2XCJ9O2lmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKXt2YXIgdmw9X19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKCF2bC5pc0Rpc2FibGVkJiZ2bC5zdXBwb3J0c0ZpYmVyKXRyeXtrYz12bC5pbmplY3QodWwpLGxjPXZsfWNhdGNoKGEpe319ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1zbDtcbmV4cG9ydHMuY3JlYXRlUG9ydGFsPWZ1bmN0aW9uKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYoIW5sKGIpKXRocm93IEVycm9yKHAoMjAwKSk7cmV0dXJuIGNsKGEsYixudWxsLGMpfTtleHBvcnRzLmNyZWF0ZVJvb3Q9ZnVuY3Rpb24oYSxiKXtpZighbmwoYSkpdGhyb3cgRXJyb3IocCgyOTkpKTt2YXIgYz0hMSxkPVwiXCIsZT1rbDtudWxsIT09YiYmdm9pZCAwIT09YiYmKCEwPT09Yi51bnN0YWJsZV9zdHJpY3RNb2RlJiYoYz0hMCksdm9pZCAwIT09Yi5pZGVudGlmaWVyUHJlZml4JiYoZD1iLmlkZW50aWZpZXJQcmVmaXgpLHZvaWQgMCE9PWIub25SZWNvdmVyYWJsZUVycm9yJiYoZT1iLm9uUmVjb3ZlcmFibGVFcnJvcikpO2I9YmwoYSwxLCExLG51bGwsbnVsbCxjLCExLGQsZSk7YVt1Zl09Yi5jdXJyZW50O3NmKDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphKTtyZXR1cm4gbmV3IGxsKGIpfTtcbmV4cG9ydHMuZmluZERPTU5vZGU9ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gYTt2YXIgYj1hLl9yZWFjdEludGVybmFscztpZih2b2lkIDA9PT1iKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5yZW5kZXIpdGhyb3cgRXJyb3IocCgxODgpKTthPU9iamVjdC5rZXlzKGEpLmpvaW4oXCIsXCIpO3Rocm93IEVycm9yKHAoMjY4LGEpKTt9YT1aYihiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGU7cmV0dXJuIGF9O2V4cG9ydHMuZmx1c2hTeW5jPWZ1bmN0aW9uKGEpe3JldHVybiBSayhhKX07ZXhwb3J0cy5oeWRyYXRlPWZ1bmN0aW9uKGEsYixjKXtpZighb2woYikpdGhyb3cgRXJyb3IocCgyMDApKTtyZXR1cm4gcmwobnVsbCxhLGIsITAsYyl9O1xuZXhwb3J0cy5oeWRyYXRlUm9vdD1mdW5jdGlvbihhLGIsYyl7aWYoIW5sKGEpKXRocm93IEVycm9yKHAoNDA1KSk7dmFyIGQ9bnVsbCE9YyYmYy5oeWRyYXRlZFNvdXJjZXN8fG51bGwsZT0hMSxmPVwiXCIsZz1rbDtudWxsIT09YyYmdm9pZCAwIT09YyYmKCEwPT09Yy51bnN0YWJsZV9zdHJpY3RNb2RlJiYoZT0hMCksdm9pZCAwIT09Yy5pZGVudGlmaWVyUHJlZml4JiYoZj1jLmlkZW50aWZpZXJQcmVmaXgpLHZvaWQgMCE9PWMub25SZWNvdmVyYWJsZUVycm9yJiYoZz1jLm9uUmVjb3ZlcmFibGVFcnJvcikpO2I9ZWwoYixudWxsLGEsMSxudWxsIT1jP2M6bnVsbCxlLCExLGYsZyk7YVt1Zl09Yi5jdXJyZW50O3NmKGEpO2lmKGQpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyljPWRbYV0sZT1jLl9nZXRWZXJzaW9uLGU9ZShjLl9zb3VyY2UpLG51bGw9PWIubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT9iLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGE9W2MsZV06Yi5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhLnB1c2goYyxcbmUpO3JldHVybiBuZXcgbWwoYil9O2V4cG9ydHMucmVuZGVyPWZ1bmN0aW9uKGEsYixjKXtpZighb2woYikpdGhyb3cgRXJyb3IocCgyMDApKTtyZXR1cm4gcmwobnVsbCxhLGIsITEsYyl9O2V4cG9ydHMudW5tb3VudENvbXBvbmVudEF0Tm9kZT1mdW5jdGlvbihhKXtpZighb2woYSkpdGhyb3cgRXJyb3IocCg0MCkpO3JldHVybiBhLl9yZWFjdFJvb3RDb250YWluZXI/KFJrKGZ1bmN0aW9uKCl7cmwobnVsbCxudWxsLGEsITEsZnVuY3Rpb24oKXthLl9yZWFjdFJvb3RDb250YWluZXI9bnVsbDthW3VmXT1udWxsfSl9KSwhMCk6ITF9O2V4cG9ydHMudW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM9UWs7XG5leHBvcnRzLnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyPWZ1bmN0aW9uKGEsYixjLGQpe2lmKCFvbChjKSl0aHJvdyBFcnJvcihwKDIwMCkpO2lmKG51bGw9PWF8fHZvaWQgMD09PWEuX3JlYWN0SW50ZXJuYWxzKXRocm93IEVycm9yKHAoMzgpKTtyZXR1cm4gcmwoYSxiLGMsITEsZCl9O2V4cG9ydHMudmVyc2lvbj1cIjE4LjMuMS1uZXh0LWYxMzM4ZjgwODAtMjAyNDA0MjZcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG0gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGV4cG9ydHMuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gZnVuY3Rpb24oYywgaCwgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uaHlkcmF0ZVJvb3QoYywgaCwgbyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjaGVja0RDRSgpIHtcbiAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuICBpZiAoXG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgYnJhbmNoIGlzIHVucmVhY2hhYmxlIGJlY2F1c2UgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGNhbGxlZFxuICAgIC8vIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgY29uZGl0aW9uIGlzIHRydWUgb25seSBpbiBkZXZlbG9wbWVudC5cbiAgICAvLyBUaGVyZWZvcmUgaWYgdGhlIGJyYW5jaCBpcyBzdGlsbCBoZXJlLCBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2Fzbid0XG4gICAgLy8gcHJvcGVybHkgYXBwbGllZC5cbiAgICAvLyBEb24ndCBjaGFuZ2UgdGhlIG1lc3NhZ2UuIFJlYWN0IERldlRvb2xzIHJlbGllcyBvbiBpdC4gQWxzbyBtYWtlIHN1cmVcbiAgICAvLyB0aGlzIG1lc3NhZ2UgZG9lc24ndCBvY2N1ciBlbHNld2hlcmUgaW4gdGhpcyBmdW5jdGlvbiwgb3IgaXQgd2lsbCBjYXVzZVxuICAgIC8vIGEgZmFsc2UgcG9zaXRpdmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdeX14nKTtcbiAgfVxuICB0cnkge1xuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBjb2RlIGFib3ZlIGhhcyBiZWVuIGRlYWQgY29kZSBlbGltaW5hdGVkIChEQ0UnZCkuXG4gICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFKGNoZWNrRENFKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gRGV2VG9vbHMgc2hvdWxkbid0IGNyYXNoIFJlYWN0LCBubyBtYXR0ZXIgd2hhdC5cbiAgICAvLyBXZSBzaG91bGQgc3RpbGwgcmVwb3J0IGluIGNhc2Ugd2UgYnJlYWsgdGhpcyBjb2RlLlxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBEQ0UgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgUmVhY3RET00gYnVuZGxlIGV4ZWN1dGVzIHNvIHRoYXRcbiAgLy8gRGV2VG9vbHMgY2FuIHJlcG9ydCBiYWQgbWluaWZpY2F0aW9uIGR1cmluZyBpbmplY3Rpb24uXG4gIGNoZWNrRENFKCk7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9cblN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOjYwMTIwLHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSx0PWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsdj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKTo2MDEyMSx3PWI/U3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpOjYwMTE3LHg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpOjYwMTE4LHk9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik6NjAxMTk7XG5mdW5jdGlvbiB6KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSB0OmNhc2UgcjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gQShhKXtyZXR1cm4geihhKT09PW19ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO2V4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9dDtleHBvcnRzLk1lbW89cjtleHBvcnRzLlBvcnRhbD1kO1xuZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBBKGEpfHx6KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPUE7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWt9O2V4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXR9O1xuZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1yfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1mfTtleHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1wfTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8YT09PXF8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09dHx8YS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW58fGEuJCR0eXBlb2Y9PT13fHxhLiQkdHlwZW9mPT09eHx8YS4kJHR5cGVvZj09PXl8fGEuJCR0eXBlb2Y9PT12KX07ZXhwb3J0cy50eXBlT2Y9ejtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBmPXJlcXVpcmUoXCJyZWFjdFwiKSxrPVN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpLGw9U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLG09T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxuPWYuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQuUmVhY3RDdXJyZW50T3duZXIscD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gcShjLGEsZyl7dmFyIGIsZD17fSxlPW51bGwsaD1udWxsO3ZvaWQgMCE9PWcmJihlPVwiXCIrZyk7dm9pZCAwIT09YS5rZXkmJihlPVwiXCIrYS5rZXkpO3ZvaWQgMCE9PWEucmVmJiYoaD1hLnJlZik7Zm9yKGIgaW4gYSltLmNhbGwoYSxiKSYmIXAuaGFzT3duUHJvcGVydHkoYikmJihkW2JdPWFbYl0pO2lmKGMmJmMuZGVmYXVsdFByb3BzKWZvcihiIGluIGE9Yy5kZWZhdWx0UHJvcHMsYSl2b2lkIDA9PT1kW2JdJiYoZFtiXT1hW2JdKTtyZXR1cm57JCR0eXBlb2Y6ayx0eXBlOmMsa2V5OmUscmVmOmgscHJvcHM6ZCxfb3duZXI6bi5jdXJyZW50fX1leHBvcnRzLkZyYWdtZW50PWw7ZXhwb3J0cy5qc3g9cTtleHBvcnRzLmpzeHM9cTtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSxuPVN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIikscD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIikscT1TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikscj1TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksdD1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksdT1TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSx2PVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSx3PVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSx4PVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHk9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksej1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eiYmYVt6XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfVxudmFyIEI9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEM9T2JqZWN0LmFzc2lnbixEPXt9O2Z1bmN0aW9uIEUoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn1FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O1xuRS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWV8fEJ9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7QyhILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPUFycmF5LmlzQXJyYXksSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEs9e2N1cnJlbnQ6bnVsbH0sTD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTShhLGIsZSl7dmFyIGQsYz17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGQgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilKLmNhbGwoYixkKSYmIUwuaGFzT3duUHJvcGVydHkoZCkmJihjW2RdPWJbZF0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZyljLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2MuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZCBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09Y1tkXSYmKGNbZF09Z1tkXSk7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmMsX293bmVyOksuY3VycmVudH19XG5mdW5jdGlvbiBOKGEsYil7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBPKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1sfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgUD0vXFwvKy9nO2Z1bmN0aW9uIFEoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBSKGEsYixlLGQsYyl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGw6Y2FzZSBuOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxjPWMoaCksYT1cIlwiPT09ZD9cIi5cIitRKGgsMCk6ZCxJKGMpPyhlPVwiXCIsbnVsbCE9YSYmKGU9YS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpLFIoYyxiLGUsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1jJiYoTyhjKSYmKGM9TihjLGUrKCFjLmtleXx8aCYmaC5rZXk9PT1jLmtleT9cIlwiOihcIlwiK2Mua2V5KS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goYykpLDE7aD0wO2Q9XCJcIj09PWQ/XCIuXCI6ZCtcIjpcIjtpZihJKGEpKWZvcih2YXIgZz0wO2c8YS5sZW5ndGg7ZysrKXtrPVxuYVtnXTt2YXIgZj1kK1EoayxnKTtoKz1SKGssYixlLGYsYyl9ZWxzZSBpZihmPUEoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWQrUShrLGcrKyksaCs9UihrLGIsZSxmLGMpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1TdHJpbmcoYSksRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiKyhcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKStcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIik7cmV0dXJuIGh9XG5mdW5jdGlvbiBTKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBkPVtdLGM9MDtSKGEsZCxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChlLGEsYysrKX0pO3JldHVybiBkfWZ1bmN0aW9uIFQoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTtiLnRoZW4oZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWJ9LGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9zdGF0dXN8fC0xPT09YS5fc3RhdHVzKWEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1ifSk7LTE9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MCxhLl9yZXN1bHQ9Yil9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0LmRlZmF1bHQ7dGhyb3cgYS5fcmVzdWx0O31cbnZhciBVPXtjdXJyZW50Om51bGx9LFY9e3RyYW5zaXRpb246bnVsbH0sVz17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpVLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOlYsUmVhY3RDdXJyZW50T3duZXI6S307ZnVuY3Rpb24gWCgpe3Rocm93IEVycm9yKFwiYWN0KC4uLikgaXMgbm90IHN1cHBvcnRlZCBpbiBwcm9kdWN0aW9uIGJ1aWxkcyBvZiBSZWFjdC5cIik7fVxuZXhwb3J0cy5DaGlsZHJlbj17bWFwOlMsZm9yRWFjaDpmdW5jdGlvbihhLGIsZSl7UyhhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1MoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBTKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIU8oYSkpdGhyb3cgRXJyb3IoXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIik7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1FO2V4cG9ydHMuRnJhZ21lbnQ9cDtleHBvcnRzLlByb2ZpbGVyPXI7ZXhwb3J0cy5QdXJlQ29tcG9uZW50PUc7ZXhwb3J0cy5TdHJpY3RNb2RlPXE7ZXhwb3J0cy5TdXNwZW5zZT13O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1XO2V4cG9ydHMuYWN0PVg7XG5leHBvcnRzLmNsb25lRWxlbWVudD1mdW5jdGlvbihhLGIsZSl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgRXJyb3IoXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIithK1wiLlwiKTt2YXIgZD1DKHt9LGEucHJvcHMpLGM9YS5rZXksaz1hLnJlZixoPWEuX293bmVyO2lmKG51bGwhPWIpe3ZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZixoPUsuY3VycmVudCk7dm9pZCAwIT09Yi5rZXkmJihjPVwiXCIrYi5rZXkpO2lmKGEudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyl2YXIgZz1hLnR5cGUuZGVmYXVsdFByb3BzO2ZvcihmIGluIGIpSi5jYWxsKGIsZikmJiFMLmhhc093blByb3BlcnR5KGYpJiYoZFtmXT12b2lkIDA9PT1iW2ZdJiZ2b2lkIDAhPT1nP2dbZl06YltmXSl9dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWQuY2hpbGRyZW49ZTtlbHNlIGlmKDE8Zil7Zz1BcnJheShmKTtcbmZvcih2YXIgbT0wO208ZjttKyspZ1ttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWd9cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLnR5cGUsa2V5OmMscmVmOmsscHJvcHM6ZCxfb3duZXI6aH19O2V4cG9ydHMuY3JlYXRlQ29udGV4dD1mdW5jdGlvbihhKXthPXskJHR5cGVvZjp1LF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbCxfZGVmYXVsdFZhbHVlOm51bGwsX2dsb2JhbE5hbWU6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6dCxfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9TTtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9TS5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O1xuZXhwb3J0cy5mb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp2LHJlbmRlcjphfX07ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudD1PO2V4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6eSxfcGF5bG9hZDp7X3N0YXR1czotMSxfcmVzdWx0OmF9LF9pbml0OlR9fTtleHBvcnRzLm1lbW89ZnVuY3Rpb24oYSxiKXtyZXR1cm57JCR0eXBlb2Y6eCx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19O2V4cG9ydHMuc3RhcnRUcmFuc2l0aW9uPWZ1bmN0aW9uKGEpe3ZhciBiPVYudHJhbnNpdGlvbjtWLnRyYW5zaXRpb249e307dHJ5e2EoKX1maW5hbGx5e1YudHJhbnNpdGlvbj1ifX07ZXhwb3J0cy51bnN0YWJsZV9hY3Q9WDtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VDb250ZXh0KGEpfTtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZT1mdW5jdGlvbigpe307ZXhwb3J0cy51c2VEZWZlcnJlZFZhbHVlPWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlRGVmZXJyZWRWYWx1ZShhKX07ZXhwb3J0cy51c2VFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUlkPWZ1bmN0aW9uKCl7cmV0dXJuIFUuY3VycmVudC51c2VJZCgpfTtleHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGU9ZnVuY3Rpb24oYSxiLGUpe3JldHVybiBVLmN1cnJlbnQudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsZSl9O2V4cG9ydHMudXNlSW5zZXJ0aW9uRWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VJbnNlcnRpb25FZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VMYXlvdXRFZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUxheW91dEVmZmVjdChhLGIpfTtcbmV4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGUpe3JldHVybiBVLmN1cnJlbnQudXNlUmVkdWNlcihhLGIsZSl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlU3RhdGUoYSl9O2V4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmU9ZnVuY3Rpb24oYSxiLGUpe3JldHVybiBVLmN1cnJlbnQudXNlU3luY0V4dGVybmFsU3RvcmUoYSxiLGUpfTtleHBvcnRzLnVzZVRyYW5zaXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZVRyYW5zaXRpb24oKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTguMy4xXCI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0JztmdW5jdGlvbiBmKGEsYil7dmFyIGM9YS5sZW5ndGg7YS5wdXNoKGIpO2E6Zm9yKDswPGM7KXt2YXIgZD1jLTE+Pj4xLGU9YVtkXTtpZigwPGcoZSxiKSlhW2RdPWIsYVtjXT1lLGM9ZDtlbHNlIGJyZWFrIGF9fWZ1bmN0aW9uIGgoYSl7cmV0dXJuIDA9PT1hLmxlbmd0aD9udWxsOmFbMF19ZnVuY3Rpb24gayhhKXtpZigwPT09YS5sZW5ndGgpcmV0dXJuIG51bGw7dmFyIGI9YVswXSxjPWEucG9wKCk7aWYoYyE9PWIpe2FbMF09YzthOmZvcih2YXIgZD0wLGU9YS5sZW5ndGgsdz1lPj4+MTtkPHc7KXt2YXIgbT0yKihkKzEpLTEsQz1hW21dLG49bSsxLHg9YVtuXTtpZigwPmcoQyxjKSluPGUmJjA+Zyh4LEMpPyhhW2RdPXgsYVtuXT1jLGQ9bik6KGFbZF09QyxhW21dPWMsZD1tKTtlbHNlIGlmKG48ZSYmMD5nKHgsYykpYVtkXT14LGFbbl09YyxkPW47ZWxzZSBicmVhayBhfX1yZXR1cm4gYn1cbmZ1bmN0aW9uIGcoYSxiKXt2YXIgYz1hLnNvcnRJbmRleC1iLnNvcnRJbmRleDtyZXR1cm4gMCE9PWM/YzphLmlkLWIuaWR9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdyl7dmFyIGw9cGVyZm9ybWFuY2U7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gbC5ub3coKX19ZWxzZXt2YXIgcD1EYXRlLHE9cC5ub3coKTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBwLm5vdygpLXF9fXZhciByPVtdLHQ9W10sdT0xLHY9bnVsbCx5PTMsej0hMSxBPSExLEI9ITEsRD1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0Om51bGwsRT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDpudWxsLEY9XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBzZXRJbW1lZGlhdGU/c2V0SW1tZWRpYXRlOm51bGw7XG5cInVuZGVmaW5lZFwiIT09dHlwZW9mIG5hdmlnYXRvciYmdm9pZCAwIT09bmF2aWdhdG9yLnNjaGVkdWxpbmcmJnZvaWQgMCE9PW5hdmlnYXRvci5zY2hlZHVsaW5nLmlzSW5wdXRQZW5kaW5nJiZuYXZpZ2F0b3Iuc2NoZWR1bGluZy5pc0lucHV0UGVuZGluZy5iaW5kKG5hdmlnYXRvci5zY2hlZHVsaW5nKTtmdW5jdGlvbiBHKGEpe2Zvcih2YXIgYj1oKHQpO251bGwhPT1iOyl7aWYobnVsbD09PWIuY2FsbGJhY2spayh0KTtlbHNlIGlmKGIuc3RhcnRUaW1lPD1hKWsodCksYi5zb3J0SW5kZXg9Yi5leHBpcmF0aW9uVGltZSxmKHIsYik7ZWxzZSBicmVhaztiPWgodCl9fWZ1bmN0aW9uIEgoYSl7Qj0hMTtHKGEpO2lmKCFBKWlmKG51bGwhPT1oKHIpKUE9ITAsSShKKTtlbHNle3ZhciBiPWgodCk7bnVsbCE9PWImJksoSCxiLnN0YXJ0VGltZS1hKX19XG5mdW5jdGlvbiBKKGEsYil7QT0hMTtCJiYoQj0hMSxFKEwpLEw9LTEpO3o9ITA7dmFyIGM9eTt0cnl7RyhiKTtmb3Iodj1oKHIpO251bGwhPT12JiYoISh2LmV4cGlyYXRpb25UaW1lPmIpfHxhJiYhTSgpKTspe3ZhciBkPXYuY2FsbGJhY2s7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3YuY2FsbGJhY2s9bnVsbDt5PXYucHJpb3JpdHlMZXZlbDt2YXIgZT1kKHYuZXhwaXJhdGlvblRpbWU8PWIpO2I9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZT92LmNhbGxiYWNrPWU6dj09PWgocikmJmsocik7RyhiKX1lbHNlIGsocik7dj1oKHIpfWlmKG51bGwhPT12KXZhciB3PSEwO2Vsc2V7dmFyIG09aCh0KTtudWxsIT09bSYmSyhILG0uc3RhcnRUaW1lLWIpO3c9ITF9cmV0dXJuIHd9ZmluYWxseXt2PW51bGwseT1jLHo9ITF9fXZhciBOPSExLE89bnVsbCxMPS0xLFA9NSxRPS0xO1xuZnVuY3Rpb24gTSgpe3JldHVybiBleHBvcnRzLnVuc3RhYmxlX25vdygpLVE8UD8hMTohMH1mdW5jdGlvbiBSKCl7aWYobnVsbCE9PU8pe3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7UT1hO3ZhciBiPSEwO3RyeXtiPU8oITAsYSl9ZmluYWxseXtiP1MoKTooTj0hMSxPPW51bGwpfX1lbHNlIE49ITF9dmFyIFM7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEYpUz1mdW5jdGlvbigpe0YoUil9O2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCl7dmFyIFQ9bmV3IE1lc3NhZ2VDaGFubmVsLFU9VC5wb3J0MjtULnBvcnQxLm9ubWVzc2FnZT1SO1M9ZnVuY3Rpb24oKXtVLnBvc3RNZXNzYWdlKG51bGwpfX1lbHNlIFM9ZnVuY3Rpb24oKXtEKFIsMCl9O2Z1bmN0aW9uIEkoYSl7Tz1hO058fChOPSEwLFMoKSl9ZnVuY3Rpb24gSyhhLGIpe0w9RChmdW5jdGlvbigpe2EoZXhwb3J0cy51bnN0YWJsZV9ub3coKSl9LGIpfVxuZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHk9NTtleHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5PTE7ZXhwb3J0cy51bnN0YWJsZV9Mb3dQcmlvcml0eT00O2V4cG9ydHMudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk9MztleHBvcnRzLnVuc3RhYmxlX1Byb2ZpbGluZz1udWxsO2V4cG9ydHMudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHk9MjtleHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrPWZ1bmN0aW9uKGEpe2EuY2FsbGJhY2s9bnVsbH07ZXhwb3J0cy51bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbj1mdW5jdGlvbigpe0F8fHp8fChBPSEwLEkoSikpfTtcbmV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGU9ZnVuY3Rpb24oYSl7MD5hfHwxMjU8YT9jb25zb2xlLmVycm9yKFwiZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsIGZvcmNpbmcgZnJhbWUgcmF0ZXMgaGlnaGVyIHRoYW4gMTI1IGZwcyBpcyBub3Qgc3VwcG9ydGVkXCIpOlA9MDxhP01hdGguZmxvb3IoMUUzL2EpOjV9O2V4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw9ZnVuY3Rpb24oKXtyZXR1cm4geX07ZXhwb3J0cy51bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZT1mdW5jdGlvbigpe3JldHVybiBoKHIpfTtleHBvcnRzLnVuc3RhYmxlX25leHQ9ZnVuY3Rpb24oYSl7c3dpdGNoKHkpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOnZhciBiPTM7YnJlYWs7ZGVmYXVsdDpiPXl9dmFyIGM9eTt5PWI7dHJ5e3JldHVybiBhKCl9ZmluYWxseXt5PWN9fTtleHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7fTtcbmV4cG9ydHMudW5zdGFibGVfcmVxdWVzdFBhaW50PWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPXk7eT1hO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7eT1jfX07XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJvYmplY3RcIj09PXR5cGVvZiBjJiZudWxsIT09Yz8oYz1jLmRlbGF5LGM9XCJudW1iZXJcIj09PXR5cGVvZiBjJiYwPGM/ZCtjOmQpOmM9ZDtzd2l0Y2goYSl7Y2FzZSAxOnZhciBlPS0xO2JyZWFrO2Nhc2UgMjplPTI1MDticmVhaztjYXNlIDU6ZT0xMDczNzQxODIzO2JyZWFrO2Nhc2UgNDplPTFFNDticmVhaztkZWZhdWx0OmU9NUUzfWU9YytlO2E9e2lkOnUrKyxjYWxsYmFjazpiLHByaW9yaXR5TGV2ZWw6YSxzdGFydFRpbWU6YyxleHBpcmF0aW9uVGltZTplLHNvcnRJbmRleDotMX07Yz5kPyhhLnNvcnRJbmRleD1jLGYodCxhKSxudWxsPT09aChyKSYmYT09PWgodCkmJihCPyhFKEwpLEw9LTEpOkI9ITAsSyhILGMtZCkpKTooYS5zb3J0SW5kZXg9ZSxmKHIsYSksQXx8enx8KEE9ITAsSShKKSkpO3JldHVybiBhfTtcbmV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9TTtleHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj15O3JldHVybiBmdW5jdGlvbigpe3ZhciBjPXk7eT1iO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXt5PWN9fX07XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImpzeCIsIl9qc3giLCJjc3MiLCJIb21lUGFnZSIsInRlbXBsYXRlT2JqZWN0XzEiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeHMiLCJfanN4cyIsIkdsb2JhbCIsImVtb3Rpb25Ob3JtYWxpemUiLCJBcHAiLCJjaGlsZHJlbiIsInN0eWxlcyIsIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiU3RyaWN0TW9kZSJdLCJzb3VyY2VSb290IjoiIn0=