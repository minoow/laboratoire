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
    css: /*#__PURE__*/(0,emotion_react_browser_esm.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      padding: 80px 120px;\n      @media screen and (max-width: 720px) {\n      padding: 24px 40px;\n      " + ( true ? "" : 0) + ( true ? "" : 0)], ["\n      padding: 80px 120px;\n      @media screen and (max-width: 720px) {\n      padding: 24px 40px;\n      " + ( true ? "" : 0) + ( true ? "" : 0)]))),
    children: "github action test"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sb0JBQW9CLE1BQU0sYUFBYSxNQUFNLGNBQWMsTUFBTSxHQUFHLDZFQUE2RSx5SEFBeUg7QUFDM2QsNEJBQTRCLEdBQUcsNkJBQTZCLGFBQWEsUUFBUSxrQkFBa0IsUUFBUSxJQUFJLElBQUksK0JBQStCLFFBQVE7Ozs7Ozs7O0FDbEI3STs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUseUNBQTZEO0FBQy9ELEVBQUUsS0FBSyxFQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2hlZXQvZGlzdC9lbW90aW9uLXNoZWV0LmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL1V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9Ub2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9FbnVtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL3N0eWxpcy9zcmMvU2VyaWFsaXplci5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9zdHlsaXMvc3JjL01pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvc3R5bGlzL3NyYy9QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY2FjaGUvZGlzdC9lbW90aW9uLWNhY2hlLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vd2Vhay1tZW1vaXplL2Rpc3QvZW1vdGlvbi13ZWFrLW1lbW9pemUuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tZWxlbWVudC01NDg2YzUxYy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaGFzaC9kaXN0L2Vtb3Rpb24taGFzaC5lc20uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdW5pdGxlc3MvZGlzdC9lbW90aW9uLXVuaXRsZXNzLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zZXJpYWxpemUvZGlzdC9lbW90aW9uLXNlcmlhbGl6ZS5lc20uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXNlLWluc2VydGlvbi1lZmZlY3Qtd2l0aC1mYWxsYmFja3MvZGlzdC9lbW90aW9uLXVzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3V0aWxzL2Rpc3QvZW1vdGlvbi11dGlscy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9yZWFjdC9qc3gtcnVudGltZS9kaXN0L2Vtb3Rpb24tcmVhY3QtanN4LXJ1bnRpbWUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvcGFnZXMvSG9tZVBhZ2UudHN4Iiwid2VicGFjazovL2xzLy4vc3JjL0FwcC50c3giLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL2Vtb3Rpb24tbm9ybWFsaXplL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL2xzLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly9scy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vbHMvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBpc0RldmVsb3BtZW50ID0gZmFsc2U7XG5cbi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG5cbmZ1bmN0aW9uIHNoZWV0Rm9yVGFnKHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfSAvLyB0aGlzIHdlaXJkbmVzcyBicm91Z2h0IHRvIHlvdSBieSBmaXJlZm94XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQuc3R5bGVTaGVldHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB9XG4gIH0gLy8gdGhpcyBmdW5jdGlvbiBzaG91bGQgYWx3YXlzIHJldHVybiB3aXRoIGEgdmFsdWVcbiAgLy8gVFMgY2FuJ3QgdW5kZXJzdGFuZCBpdCB0aG91Z2ggc28gd2UgbWFrZSBpdCBzdG9wIGNvbXBsYWluaW5nIGhlcmVcblxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB0YWcuc2V0QXR0cmlidXRlKCdkYXRhLWVtb3Rpb24nLCBvcHRpb25zLmtleSk7XG5cbiAgaWYgKG9wdGlvbnMubm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgb3B0aW9ucy5ub25jZSk7XG4gIH1cblxuICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICByZXR1cm4gdGFnO1xufVxuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIFVzaW5nIE5vZGUgaW5zdGVhZCBvZiBIVE1MRWxlbWVudCBzaW5jZSBjb250YWluZXIgbWF5IGJlIGEgU2hhZG93Um9vdFxuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faW5zZXJ0VGFnID0gZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKF90aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChfdGhpcy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgICAgIGJlZm9yZSA9IF90aGlzLmluc2VydGlvblBvaW50Lm5leHRTaWJsaW5nO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnByZXBlbmQpIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5jb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBiZWZvcmUgPSBfdGhpcy5iZWZvcmU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnRhZ3NbX3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0YWcsIGJlZm9yZSk7XG5cbiAgICAgIF90aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgIH07XG5cbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/ICFpc0RldmVsb3BtZW50IDogb3B0aW9ucy5zcGVlZHk7XG4gICAgdGhpcy50YWdzID0gW107XG4gICAgdGhpcy5jdHIgPSAwO1xuICAgIHRoaXMubm9uY2UgPSBvcHRpb25zLm5vbmNlOyAvLyBrZXkgaXMgdGhlIHZhbHVlIG9mIHRoZSBkYXRhLWVtb3Rpb24gYXR0cmlidXRlLCBpdCdzIHVzZWQgdG8gaWRlbnRpZnkgZGlmZmVyZW50IHNoZWV0c1xuXG4gICAgdGhpcy5rZXkgPSBvcHRpb25zLmtleTtcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyO1xuICAgIHRoaXMucHJlcGVuZCA9IG9wdGlvbnMucHJlcGVuZDtcbiAgICB0aGlzLmluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcbiAgICB0aGlzLmJlZm9yZSA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmh5ZHJhdGUgPSBmdW5jdGlvbiBoeWRyYXRlKG5vZGVzKSB7XG4gICAgbm9kZXMuZm9yRWFjaCh0aGlzLl9pbnNlcnRUYWcpO1xuICB9O1xuXG4gIF9wcm90by5pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQocnVsZSkge1xuICAgIC8vIHRoZSBtYXggbGVuZ3RoIGlzIGhvdyBtYW55IHJ1bGVzIHdlIGhhdmUgcGVyIHN0eWxlIHRhZywgaXQncyA2NTAwMCBpbiBzcGVlZHkgbW9kZVxuICAgIC8vIGl0J3MgMSBpbiBkZXYgYmVjYXVzZSB3ZSBpbnNlcnQgc291cmNlIG1hcHMgdGhhdCBtYXAgYSBzaW5nbGUgcnVsZSB0byBhIGxvY2F0aW9uXG4gICAgLy8gYW5kIHlvdSBjYW4gb25seSBoYXZlIG9uZSBzb3VyY2UgbWFwIHBlciBzdHlsZSB0YWdcbiAgICBpZiAodGhpcy5jdHIgJSAodGhpcy5pc1NwZWVkeSA/IDY1MDAwIDogMSkgPT09IDApIHtcbiAgICAgIHRoaXMuX2luc2VydFRhZyhjcmVhdGVTdHlsZUVsZW1lbnQodGhpcykpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSB0aGlzLnRhZ3NbdGhpcy50YWdzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKHRoaXMuaXNTcGVlZHkpIHtcbiAgICAgIHZhciBzaGVldCA9IHNoZWV0Rm9yVGFnKHRhZyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIHVsdHJhZmFzdCB2ZXJzaW9uLCB3b3JrcyBhY3Jvc3MgYnJvd3NlcnNcbiAgICAgICAgLy8gdGhlIGJpZyBkcmF3YmFjayBpcyB0aGF0IHRoZSBjc3Mgd29uJ3QgYmUgZWRpdGFibGUgaW4gZGV2dG9vbHNcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xuICAgIH1cblxuICAgIHRoaXMuY3RyKys7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIF90YWckcGFyZW50Tm9kZTtcblxuICAgICAgcmV0dXJuIChfdGFnJHBhcmVudE5vZGUgPSB0YWcucGFyZW50Tm9kZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90YWckcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgIH0pO1xuICAgIHRoaXMudGFncyA9IFtdO1xuICAgIHRoaXMuY3RyID0gMDtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVTaGVldDtcbn0oKTtcblxuZXhwb3J0IHsgU3R5bGVTaGVldCB9O1xuIiwiLyoqXG4gKiBAcGFyYW0ge251bWJlcn1cbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IHZhciBhYnMgPSBNYXRoLmFic1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgdmFyIGZyb20gPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9XG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCB2YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzaCAodmFsdWUsIGxlbmd0aCkge1xuXHRyZXR1cm4gY2hhcmF0KHZhbHVlLCAwKSBeIDQ1ID8gKCgoKCgoKGxlbmd0aCA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMCkpIDw8IDIpIF4gY2hhcmF0KHZhbHVlLCAxKSkgPDwgMikgXiBjaGFyYXQodmFsdWUsIDIpKSA8PCAyKSBeIGNoYXJhdCh2YWx1ZSwgMykgOiAwXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmltICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUudHJpbSgpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuICogQHJldHVybiB7c3RyaW5nP31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoICh2YWx1ZSwgcGF0dGVybikge1xuXHRyZXR1cm4gKHZhbHVlID0gcGF0dGVybi5leGVjKHZhbHVlKSkgPyB2YWx1ZVswXSA6IHZhbHVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlICh2YWx1ZSwgcGF0dGVybiwgcmVwbGFjZW1lbnQpIHtcblx0cmV0dXJuIHZhbHVlLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQpXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmRleG9mICh2YWx1ZSwgc2VhcmNoKSB7XG5cdHJldHVybiB2YWx1ZS5pbmRleE9mKHNlYXJjaClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhcmF0ICh2YWx1ZSwgaW5kZXgpIHtcblx0cmV0dXJuIHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpIHwgMFxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGJlZ2luXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHIgKHZhbHVlLCBiZWdpbiwgZW5kKSB7XG5cdHJldHVybiB2YWx1ZS5zbGljZShiZWdpbiwgZW5kKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RybGVuICh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUubGVuZ3RoXG59XG5cbi8qKlxuICogQHBhcmFtIHthbnlbXX0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVvZiAodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLmxlbmd0aFxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHthbnlbXX0gYXJyYXlcbiAqIEByZXR1cm4ge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZCAodmFsdWUsIGFycmF5KSB7XG5cdHJldHVybiBhcnJheS5wdXNoKHZhbHVlKSwgdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBhcnJheVxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUgKGFycmF5LCBjYWxsYmFjaykge1xuXHRyZXR1cm4gYXJyYXkubWFwKGNhbGxiYWNrKS5qb2luKCcnKVxufVxuIiwiaW1wb3J0IHtmcm9tLCB0cmltLCBjaGFyYXQsIHN0cmxlbiwgc3Vic3RyLCBhcHBlbmQsIGFzc2lnbn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuXG5leHBvcnQgdmFyIGxpbmUgPSAxXG5leHBvcnQgdmFyIGNvbHVtbiA9IDFcbmV4cG9ydCB2YXIgbGVuZ3RoID0gMFxuZXhwb3J0IHZhciBwb3NpdGlvbiA9IDBcbmV4cG9ydCB2YXIgY2hhcmFjdGVyID0gMFxuZXhwb3J0IHZhciBjaGFyYWN0ZXJzID0gJydcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsfSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZ1tdIHwgc3RyaW5nfSBwcm9wc1xuICogQHBhcmFtIHtvYmplY3RbXSB8IHN0cmluZ30gY2hpbGRyZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vZGUgKHZhbHVlLCByb290LCBwYXJlbnQsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgbGVuZ3RoKSB7XG5cdHJldHVybiB7dmFsdWU6IHZhbHVlLCByb290OiByb290LCBwYXJlbnQ6IHBhcmVudCwgdHlwZTogdHlwZSwgcHJvcHM6IHByb3BzLCBjaGlsZHJlbjogY2hpbGRyZW4sIGxpbmU6IGxpbmUsIGNvbHVtbjogY29sdW1uLCBsZW5ndGg6IGxlbmd0aCwgcmV0dXJuOiAnJ31cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5IChyb290LCBwcm9wcykge1xuXHRyZXR1cm4gYXNzaWduKG5vZGUoJycsIG51bGwsIG51bGwsICcnLCBudWxsLCBudWxsLCAwKSwgcm9vdCwge2xlbmd0aDogLXJvb3QubGVuZ3RofSwgcHJvcHMpXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhciAoKSB7XG5cdHJldHVybiBjaGFyYWN0ZXJcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ICgpIHtcblx0Y2hhcmFjdGVyID0gcG9zaXRpb24gPiAwID8gY2hhcmF0KGNoYXJhY3RlcnMsIC0tcG9zaXRpb24pIDogMFxuXG5cdGlmIChjb2x1bW4tLSwgY2hhcmFjdGVyID09PSAxMClcblx0XHRjb2x1bW4gPSAxLCBsaW5lLS1cblxuXHRyZXR1cm4gY2hhcmFjdGVyXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dCAoKSB7XG5cdGNoYXJhY3RlciA9IHBvc2l0aW9uIDwgbGVuZ3RoID8gY2hhcmF0KGNoYXJhY3RlcnMsIHBvc2l0aW9uKyspIDogMFxuXG5cdGlmIChjb2x1bW4rKywgY2hhcmFjdGVyID09PSAxMClcblx0XHRjb2x1bW4gPSAxLCBsaW5lKytcblxuXHRyZXR1cm4gY2hhcmFjdGVyXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGVlayAoKSB7XG5cdHJldHVybiBjaGFyYXQoY2hhcmFjdGVycywgcG9zaXRpb24pXG59XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FyZXQgKCkge1xuXHRyZXR1cm4gcG9zaXRpb25cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gYmVnaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmRcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsaWNlIChiZWdpbiwgZW5kKSB7XG5cdHJldHVybiBzdWJzdHIoY2hhcmFjdGVycywgYmVnaW4sIGVuZClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW4gKHR5cGUpIHtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Ly8gXFwwIFxcdCBcXG4gXFxyIFxccyB3aGl0ZXNwYWNlIHRva2VuXG5cdFx0Y2FzZSAwOiBjYXNlIDk6IGNhc2UgMTA6IGNhc2UgMTM6IGNhc2UgMzI6XG5cdFx0XHRyZXR1cm4gNVxuXHRcdC8vICEgKyAsIC8gPiBAIH4gaXNvbGF0ZSB0b2tlblxuXHRcdGNhc2UgMzM6IGNhc2UgNDM6IGNhc2UgNDQ6IGNhc2UgNDc6IGNhc2UgNjI6IGNhc2UgNjQ6IGNhc2UgMTI2OlxuXHRcdC8vIDsgeyB9IGJyZWFrcG9pbnQgdG9rZW5cblx0XHRjYXNlIDU5OiBjYXNlIDEyMzogY2FzZSAxMjU6XG5cdFx0XHRyZXR1cm4gNFxuXHRcdC8vIDogYWNjb21wYW5pZWQgdG9rZW5cblx0XHRjYXNlIDU4OlxuXHRcdFx0cmV0dXJuIDNcblx0XHQvLyBcIiAnICggWyBvcGVuaW5nIGRlbGltaXQgdG9rZW5cblx0XHRjYXNlIDM0OiBjYXNlIDM5OiBjYXNlIDQwOiBjYXNlIDkxOlxuXHRcdFx0cmV0dXJuIDJcblx0XHQvLyApIF0gY2xvc2luZyBkZWxpbWl0IHRva2VuXG5cdFx0Y2FzZSA0MTogY2FzZSA5Mzpcblx0XHRcdHJldHVybiAxXG5cdH1cblxuXHRyZXR1cm4gMFxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7YW55W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGxvYyAodmFsdWUpIHtcblx0cmV0dXJuIGxpbmUgPSBjb2x1bW4gPSAxLCBsZW5ndGggPSBzdHJsZW4oY2hhcmFjdGVycyA9IHZhbHVlKSwgcG9zaXRpb24gPSAwLCBbXVxufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybiB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVhbGxvYyAodmFsdWUpIHtcblx0cmV0dXJuIGNoYXJhY3RlcnMgPSAnJywgdmFsdWVcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsaW1pdCAodHlwZSkge1xuXHRyZXR1cm4gdHJpbShzbGljZShwb3NpdGlvbiAtIDEsIGRlbGltaXRlcih0eXBlID09PSA5MSA/IHR5cGUgKyAyIDogdHlwZSA9PT0gNDAgPyB0eXBlICsgMSA6IHR5cGUpKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9rZW5pemUgKHZhbHVlKSB7XG5cdHJldHVybiBkZWFsbG9jKHRva2VuaXplcihhbGxvYyh2YWx1ZSkpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGl0ZXNwYWNlICh0eXBlKSB7XG5cdHdoaWxlIChjaGFyYWN0ZXIgPSBwZWVrKCkpXG5cdFx0aWYgKGNoYXJhY3RlciA8IDMzKVxuXHRcdFx0bmV4dCgpXG5cdFx0ZWxzZVxuXHRcdFx0YnJlYWtcblxuXHRyZXR1cm4gdG9rZW4odHlwZSkgPiAyIHx8IHRva2VuKGNoYXJhY3RlcikgPiAzID8gJycgOiAnICdcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjaGlsZHJlblxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZXIgKGNoaWxkcmVuKSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0c3dpdGNoICh0b2tlbihjaGFyYWN0ZXIpKSB7XG5cdFx0XHRjYXNlIDA6IGFwcGVuZChpZGVudGlmaWVyKHBvc2l0aW9uIC0gMSksIGNoaWxkcmVuKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOiBhcHBlbmQoZGVsaW1pdChjaGFyYWN0ZXIpLCBjaGlsZHJlbilcblx0XHRcdFx0YnJlYWtcblx0XHRcdGRlZmF1bHQ6IGFwcGVuZChmcm9tKGNoYXJhY3RlciksIGNoaWxkcmVuKVxuXHRcdH1cblxuXHRyZXR1cm4gY2hpbGRyZW5cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBpbmcgKGluZGV4LCBjb3VudCkge1xuXHR3aGlsZSAoLS1jb3VudCAmJiBuZXh0KCkpXG5cdFx0Ly8gbm90IDAtOSBBLUYgYS1mXG5cdFx0aWYgKGNoYXJhY3RlciA8IDQ4IHx8IGNoYXJhY3RlciA+IDEwMiB8fCAoY2hhcmFjdGVyID4gNTcgJiYgY2hhcmFjdGVyIDwgNjUpIHx8IChjaGFyYWN0ZXIgPiA3MCAmJiBjaGFyYWN0ZXIgPCA5NykpXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiBzbGljZShpbmRleCwgY2FyZXQoKSArIChjb3VudCA8IDYgJiYgcGVlaygpID09IDMyICYmIG5leHQoKSA9PSAzMikpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGVcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGltaXRlciAodHlwZSkge1xuXHR3aGlsZSAobmV4dCgpKVxuXHRcdHN3aXRjaCAoY2hhcmFjdGVyKSB7XG5cdFx0XHQvLyBdICkgXCIgJ1xuXHRcdFx0Y2FzZSB0eXBlOlxuXHRcdFx0XHRyZXR1cm4gcG9zaXRpb25cblx0XHRcdC8vIFwiICdcblx0XHRcdGNhc2UgMzQ6IGNhc2UgMzk6XG5cdFx0XHRcdGlmICh0eXBlICE9PSAzNCAmJiB0eXBlICE9PSAzOSlcblx0XHRcdFx0XHRkZWxpbWl0ZXIoY2hhcmFjdGVyKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gKFxuXHRcdFx0Y2FzZSA0MDpcblx0XHRcdFx0aWYgKHR5cGUgPT09IDQxKVxuXHRcdFx0XHRcdGRlbGltaXRlcih0eXBlKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFxcblx0XHRcdGNhc2UgOTI6XG5cdFx0XHRcdG5leHQoKVxuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRyZXR1cm4gcG9zaXRpb25cbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tZW50ZXIgKHR5cGUsIGluZGV4KSB7XG5cdHdoaWxlIChuZXh0KCkpXG5cdFx0Ly8gLy9cblx0XHRpZiAodHlwZSArIGNoYXJhY3RlciA9PT0gNDcgKyAxMClcblx0XHRcdGJyZWFrXG5cdFx0Ly8gLypcblx0XHRlbHNlIGlmICh0eXBlICsgY2hhcmFjdGVyID09PSA0MiArIDQyICYmIHBlZWsoKSA9PT0gNDcpXG5cdFx0XHRicmVha1xuXG5cdHJldHVybiAnLyonICsgc2xpY2UoaW5kZXgsIHBvc2l0aW9uIC0gMSkgKyAnKicgKyBmcm9tKHR5cGUgPT09IDQ3ID8gdHlwZSA6IG5leHQoKSlcbn1cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZpZXIgKGluZGV4KSB7XG5cdHdoaWxlICghdG9rZW4ocGVlaygpKSlcblx0XHRuZXh0KClcblxuXHRyZXR1cm4gc2xpY2UoaW5kZXgsIHBvc2l0aW9uKVxufVxuIiwiZXhwb3J0IHZhciBNUyA9ICctbXMtJ1xuZXhwb3J0IHZhciBNT1ogPSAnLW1vei0nXG5leHBvcnQgdmFyIFdFQktJVCA9ICctd2Via2l0LSdcblxuZXhwb3J0IHZhciBDT01NRU5UID0gJ2NvbW0nXG5leHBvcnQgdmFyIFJVTEVTRVQgPSAncnVsZSdcbmV4cG9ydCB2YXIgREVDTEFSQVRJT04gPSAnZGVjbCdcblxuZXhwb3J0IHZhciBQQUdFID0gJ0BwYWdlJ1xuZXhwb3J0IHZhciBNRURJQSA9ICdAbWVkaWEnXG5leHBvcnQgdmFyIElNUE9SVCA9ICdAaW1wb3J0J1xuZXhwb3J0IHZhciBDSEFSU0VUID0gJ0BjaGFyc2V0J1xuZXhwb3J0IHZhciBWSUVXUE9SVCA9ICdAdmlld3BvcnQnXG5leHBvcnQgdmFyIFNVUFBPUlRTID0gJ0BzdXBwb3J0cydcbmV4cG9ydCB2YXIgRE9DVU1FTlQgPSAnQGRvY3VtZW50J1xuZXhwb3J0IHZhciBOQU1FU1BBQ0UgPSAnQG5hbWVzcGFjZSdcbmV4cG9ydCB2YXIgS0VZRlJBTUVTID0gJ0BrZXlmcmFtZXMnXG5leHBvcnQgdmFyIEZPTlRfRkFDRSA9ICdAZm9udC1mYWNlJ1xuZXhwb3J0IHZhciBDT1VOVEVSX1NUWUxFID0gJ0Bjb3VudGVyLXN0eWxlJ1xuZXhwb3J0IHZhciBGT05UX0ZFQVRVUkVfVkFMVUVTID0gJ0Bmb250LWZlYXR1cmUtdmFsdWVzJ1xuZXhwb3J0IHZhciBMQVlFUiA9ICdAbGF5ZXInXG4iLCJpbXBvcnQge0lNUE9SVCwgTEFZRVIsIENPTU1FTlQsIFJVTEVTRVQsIERFQ0xBUkFUSU9OLCBLRVlGUkFNRVN9IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7c3RybGVuLCBzaXplb2Z9IGZyb20gJy4vVXRpbGl0eS5qcydcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdFtdfSBjaGlsZHJlblxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSAoY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHZhciBvdXRwdXQgPSAnJ1xuXHR2YXIgbGVuZ3RoID0gc2l6ZW9mKGNoaWxkcmVuKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG5cdFx0b3V0cHV0ICs9IGNhbGxiYWNrKGNoaWxkcmVuW2ldLCBpLCBjaGlsZHJlbiwgY2FsbGJhY2spIHx8ICcnXG5cblx0cmV0dXJuIG91dHB1dFxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5IChlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG5cdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0Y2FzZSBMQVlFUjogaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoKSBicmVha1xuXHRcdGNhc2UgSU1QT1JUOiBjYXNlIERFQ0xBUkFUSU9OOiByZXR1cm4gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnJldHVybiB8fCBlbGVtZW50LnZhbHVlXG5cdFx0Y2FzZSBDT01NRU5UOiByZXR1cm4gJydcblx0XHRjYXNlIEtFWUZSQU1FUzogcmV0dXJuIGVsZW1lbnQucmV0dXJuID0gZWxlbWVudC52YWx1ZSArICd7JyArIHNlcmlhbGl6ZShlbGVtZW50LmNoaWxkcmVuLCBjYWxsYmFjaykgKyAnfSdcblx0XHRjYXNlIFJVTEVTRVQ6IGVsZW1lbnQudmFsdWUgPSBlbGVtZW50LnByb3BzLmpvaW4oJywnKVxuXHR9XG5cblx0cmV0dXJuIHN0cmxlbihjaGlsZHJlbiA9IHNlcmlhbGl6ZShlbGVtZW50LmNoaWxkcmVuLCBjYWxsYmFjaykpID8gZWxlbWVudC5yZXR1cm4gPSBlbGVtZW50LnZhbHVlICsgJ3snICsgY2hpbGRyZW4gKyAnfScgOiAnJ1xufVxuIiwiaW1wb3J0IHtNUywgTU9aLCBXRUJLSVQsIFJVTEVTRVQsIEtFWUZSQU1FUywgREVDTEFSQVRJT059IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7bWF0Y2gsIGNoYXJhdCwgc3Vic3RyLCBzdHJsZW4sIHNpemVvZiwgcmVwbGFjZSwgY29tYmluZX0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuaW1wb3J0IHtjb3B5LCB0b2tlbml6ZX0gZnJvbSAnLi9Ub2tlbml6ZXIuanMnXG5pbXBvcnQge3NlcmlhbGl6ZX0gZnJvbSAnLi9TZXJpYWxpemVyLmpzJ1xuaW1wb3J0IHtwcmVmaXh9IGZyb20gJy4vUHJlZml4ZXIuanMnXG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbltdfSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUgKGNvbGxlY3Rpb24pIHtcblx0dmFyIGxlbmd0aCA9IHNpemVvZihjb2xsZWN0aW9uKVxuXG5cdHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgsIGNoaWxkcmVuLCBjYWxsYmFjaykge1xuXHRcdHZhciBvdXRwdXQgPSAnJ1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcblx0XHRcdG91dHB1dCArPSBjb2xsZWN0aW9uW2ldKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHx8ICcnXG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydWxlc2hlZXQgKGNhbGxiYWNrKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdGlmICghZWxlbWVudC5yb290KVxuXHRcdFx0aWYgKGVsZW1lbnQgPSBlbGVtZW50LnJldHVybilcblx0XHRcdFx0Y2FsbGJhY2soZWxlbWVudClcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0W119IGNoaWxkcmVuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4ZXIgKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbiwgY2FsbGJhY2spIHtcblx0aWYgKGVsZW1lbnQubGVuZ3RoID4gLTEpXG5cdFx0aWYgKCFlbGVtZW50LnJldHVybilcblx0XHRcdHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgREVDTEFSQVRJT046IGVsZW1lbnQucmV0dXJuID0gcHJlZml4KGVsZW1lbnQudmFsdWUsIGVsZW1lbnQubGVuZ3RoLCBjaGlsZHJlbilcblx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0Y2FzZSBLRVlGUkFNRVM6XG5cdFx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7dmFsdWU6IHJlcGxhY2UoZWxlbWVudC52YWx1ZSwgJ0AnLCAnQCcgKyBXRUJLSVQpfSldLCBjYWxsYmFjaylcblx0XHRcdFx0Y2FzZSBSVUxFU0VUOlxuXHRcdFx0XHRcdGlmIChlbGVtZW50Lmxlbmd0aClcblx0XHRcdFx0XHRcdHJldHVybiBjb21iaW5lKGVsZW1lbnQucHJvcHMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKG1hdGNoKHZhbHVlLCAvKDo6cGxhY1xcdyt8OnJlYWQtXFx3KykvKSkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIDpyZWFkLShvbmx5fHdyaXRlKVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJzpyZWFkLW9ubHknOiBjYXNlICc6cmVhZC13cml0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHtwcm9wczogW3JlcGxhY2UodmFsdWUsIC86KHJlYWQtXFx3KykvLCAnOicgKyBNT1ogKyAnJDEnKV19KV0sIGNhbGxiYWNrKVxuXHRcdFx0XHRcdFx0XHRcdC8vIDpwbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJzo6cGxhY2Vob2xkZXInOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlcmlhbGl6ZShbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgV0VCS0lUICsgJ2lucHV0LSQxJyldfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgTU9aICsgJyQxJyldfSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvcHkoZWxlbWVudCwge3Byb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgTVMgKyAnaW5wdXQtJDEnKV19KVxuXHRcdFx0XHRcdFx0XHRcdFx0XSwgY2FsbGJhY2spXG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJydcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtvYmplY3RbXX0gY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5hbWVzcGFjZSAoZWxlbWVudCkge1xuXHRzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuXHRcdGNhc2UgUlVMRVNFVDpcblx0XHRcdGVsZW1lbnQucHJvcHMgPSBlbGVtZW50LnByb3BzLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIGNvbWJpbmUodG9rZW5pemUodmFsdWUpLCBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBjaGlsZHJlbikge1xuXHRcdFx0XHRcdHN3aXRjaCAoY2hhcmF0KHZhbHVlLCAwKSkge1xuXHRcdFx0XHRcdFx0Ly8gXFxmXG5cdFx0XHRcdFx0XHRjYXNlIDEyOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc3Vic3RyKHZhbHVlLCAxLCBzdHJsZW4odmFsdWUpKVxuXHRcdFx0XHRcdFx0Ly8gXFwwICggKyA+IH5cblx0XHRcdFx0XHRcdGNhc2UgMDogY2FzZSA0MDogY2FzZSA0MzogY2FzZSA2MjogY2FzZSAxMjY6XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZVxuXHRcdFx0XHRcdFx0Ly8gOlxuXHRcdFx0XHRcdFx0Y2FzZSA1ODpcblx0XHRcdFx0XHRcdFx0aWYgKGNoaWxkcmVuWysraW5kZXhdID09PSAnZ2xvYmFsJylcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbltpbmRleF0gPSAnJywgY2hpbGRyZW5bKytpbmRleF0gPSAnXFxmJyArIHN1YnN0cihjaGlsZHJlbltpbmRleF0sIGluZGV4ID0gMSwgLTEpXG5cdFx0XHRcdFx0XHQvLyBcXHNcblx0XHRcdFx0XHRcdGNhc2UgMzI6XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbmRleCA9PT0gMSA/ICcnIDogdmFsdWVcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoaW5kZXgpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIDA6IGVsZW1lbnQgPSB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHNpemVvZihjaGlsZHJlbikgPiAxID8gJycgOiB2YWx1ZVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgaW5kZXggPSBzaXplb2YoY2hpbGRyZW4pIC0gMTogY2FzZSAyOlxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGluZGV4ID09PSAyID8gdmFsdWUgKyBlbGVtZW50ICsgZWxlbWVudCA6IHZhbHVlICsgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdH1cbn1cbiIsImltcG9ydCB7Q09NTUVOVCwgUlVMRVNFVCwgREVDTEFSQVRJT059IGZyb20gJy4vRW51bS5qcydcbmltcG9ydCB7YWJzLCBjaGFyYXQsIHRyaW0sIGZyb20sIHNpemVvZiwgc3RybGVuLCBzdWJzdHIsIGFwcGVuZCwgcmVwbGFjZSwgaW5kZXhvZn0gZnJvbSAnLi9VdGlsaXR5LmpzJ1xuaW1wb3J0IHtub2RlLCBjaGFyLCBwcmV2LCBuZXh0LCBwZWVrLCBjYXJldCwgYWxsb2MsIGRlYWxsb2MsIGRlbGltaXQsIHdoaXRlc3BhY2UsIGVzY2FwaW5nLCBpZGVudGlmaWVyLCBjb21tZW50ZXJ9IGZyb20gJy4vVG9rZW5pemVyLmpzJ1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7b2JqZWN0W119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlICh2YWx1ZSkge1xuXHRyZXR1cm4gZGVhbGxvYyhwYXJzZSgnJywgbnVsbCwgbnVsbCwgbnVsbCwgWycnXSwgdmFsdWUgPSBhbGxvYyh2YWx1ZSksIDAsIFswXSwgdmFsdWUpKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IHJvb3RcbiAqIEBwYXJhbSB7b2JqZWN0P30gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBydWxlc1xuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNldHNcbiAqIEBwYXJhbSB7bnVtYmVyW119IHBzZXVkb1xuICogQHBhcmFtIHtudW1iZXJbXX0gcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBkZWNsYXJhdGlvbnNcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlICh2YWx1ZSwgcm9vdCwgcGFyZW50LCBydWxlLCBydWxlcywgcnVsZXNldHMsIHBzZXVkbywgcG9pbnRzLCBkZWNsYXJhdGlvbnMpIHtcblx0dmFyIGluZGV4ID0gMFxuXHR2YXIgb2Zmc2V0ID0gMFxuXHR2YXIgbGVuZ3RoID0gcHNldWRvXG5cdHZhciBhdHJ1bGUgPSAwXG5cdHZhciBwcm9wZXJ0eSA9IDBcblx0dmFyIHByZXZpb3VzID0gMFxuXHR2YXIgdmFyaWFibGUgPSAxXG5cdHZhciBzY2FubmluZyA9IDFcblx0dmFyIGFtcGVyc2FuZCA9IDFcblx0dmFyIGNoYXJhY3RlciA9IDBcblx0dmFyIHR5cGUgPSAnJ1xuXHR2YXIgcHJvcHMgPSBydWxlc1xuXHR2YXIgY2hpbGRyZW4gPSBydWxlc2V0c1xuXHR2YXIgcmVmZXJlbmNlID0gcnVsZVxuXHR2YXIgY2hhcmFjdGVycyA9IHR5cGVcblxuXHR3aGlsZSAoc2Nhbm5pbmcpXG5cdFx0c3dpdGNoIChwcmV2aW91cyA9IGNoYXJhY3RlciwgY2hhcmFjdGVyID0gbmV4dCgpKSB7XG5cdFx0XHQvLyAoXG5cdFx0XHRjYXNlIDQwOlxuXHRcdFx0XHRpZiAocHJldmlvdXMgIT0gMTA4ICYmIGNoYXJhdChjaGFyYWN0ZXJzLCBsZW5ndGggLSAxKSA9PSA1OCkge1xuXHRcdFx0XHRcdGlmIChpbmRleG9mKGNoYXJhY3RlcnMgKz0gcmVwbGFjZShkZWxpbWl0KGNoYXJhY3RlciksICcmJywgJyZcXGYnKSwgJyZcXGYnKSAhPSAtMSlcblx0XHRcdFx0XHRcdGFtcGVyc2FuZCA9IC0xXG5cdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0fVxuXHRcdFx0Ly8gXCIgJyBbXG5cdFx0XHRjYXNlIDM0OiBjYXNlIDM5OiBjYXNlIDkxOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGRlbGltaXQoY2hhcmFjdGVyKVxuXHRcdFx0XHRicmVha1xuXHRcdFx0Ly8gXFx0IFxcbiBcXHIgXFxzXG5cdFx0XHRjYXNlIDk6IGNhc2UgMTA6IGNhc2UgMTM6IGNhc2UgMzI6XG5cdFx0XHRcdGNoYXJhY3RlcnMgKz0gd2hpdGVzcGFjZShwcmV2aW91cylcblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIFxcXG5cdFx0XHRjYXNlIDkyOlxuXHRcdFx0XHRjaGFyYWN0ZXJzICs9IGVzY2FwaW5nKGNhcmV0KCkgLSAxLCA3KVxuXHRcdFx0XHRjb250aW51ZVxuXHRcdFx0Ly8gL1xuXHRcdFx0Y2FzZSA0Nzpcblx0XHRcdFx0c3dpdGNoIChwZWVrKCkpIHtcblx0XHRcdFx0XHRjYXNlIDQyOiBjYXNlIDQ3OlxuXHRcdFx0XHRcdFx0YXBwZW5kKGNvbW1lbnQoY29tbWVudGVyKG5leHQoKSwgY2FyZXQoKSksIHJvb3QsIHBhcmVudCksIGRlY2xhcmF0aW9ucylcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGNoYXJhY3RlcnMgKz0gJy8nXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWtcblx0XHRcdC8vIHtcblx0XHRcdGNhc2UgMTIzICogdmFyaWFibGU6XG5cdFx0XHRcdHBvaW50c1tpbmRleCsrXSA9IHN0cmxlbihjaGFyYWN0ZXJzKSAqIGFtcGVyc2FuZFxuXHRcdFx0Ly8gfSA7IFxcMFxuXHRcdFx0Y2FzZSAxMjUgKiB2YXJpYWJsZTogY2FzZSA1OTogY2FzZSAwOlxuXHRcdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlcikge1xuXHRcdFx0XHRcdC8vIFxcMCB9XG5cdFx0XHRcdFx0Y2FzZSAwOiBjYXNlIDEyNTogc2Nhbm5pbmcgPSAwXG5cdFx0XHRcdFx0Ly8gO1xuXHRcdFx0XHRcdGNhc2UgNTkgKyBvZmZzZXQ6IGlmIChhbXBlcnNhbmQgPT0gLTEpIGNoYXJhY3RlcnMgPSByZXBsYWNlKGNoYXJhY3RlcnMsIC9cXGYvZywgJycpXG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHkgPiAwICYmIChzdHJsZW4oY2hhcmFjdGVycykgLSBsZW5ndGgpKVxuXHRcdFx0XHRcdFx0XHRhcHBlbmQocHJvcGVydHkgPiAzMiA/IGRlY2xhcmF0aW9uKGNoYXJhY3RlcnMgKyAnOycsIHJ1bGUsIHBhcmVudCwgbGVuZ3RoIC0gMSkgOiBkZWNsYXJhdGlvbihyZXBsYWNlKGNoYXJhY3RlcnMsICcgJywgJycpICsgJzsnLCBydWxlLCBwYXJlbnQsIGxlbmd0aCAtIDIpLCBkZWNsYXJhdGlvbnMpXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIEAgO1xuXHRcdFx0XHRcdGNhc2UgNTk6IGNoYXJhY3RlcnMgKz0gJzsnXG5cdFx0XHRcdFx0Ly8geyBydWxlL2F0LXJ1bGVcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0YXBwZW5kKHJlZmVyZW5jZSA9IHJ1bGVzZXQoY2hhcmFjdGVycywgcm9vdCwgcGFyZW50LCBpbmRleCwgb2Zmc2V0LCBydWxlcywgcG9pbnRzLCB0eXBlLCBwcm9wcyA9IFtdLCBjaGlsZHJlbiA9IFtdLCBsZW5ndGgpLCBydWxlc2V0cylcblxuXHRcdFx0XHRcdFx0aWYgKGNoYXJhY3RlciA9PT0gMTIzKVxuXHRcdFx0XHRcdFx0XHRpZiAob2Zmc2V0ID09PSAwKVxuXHRcdFx0XHRcdFx0XHRcdHBhcnNlKGNoYXJhY3RlcnMsIHJvb3QsIHJlZmVyZW5jZSwgcmVmZXJlbmNlLCBwcm9wcywgcnVsZXNldHMsIGxlbmd0aCwgcG9pbnRzLCBjaGlsZHJlbilcblx0XHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoYXRydWxlID09PSA5OSAmJiBjaGFyYXQoY2hhcmFjdGVycywgMykgPT09IDExMCA/IDEwMCA6IGF0cnVsZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gZCBsIG0gc1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxMDA6IGNhc2UgMTA4OiBjYXNlIDEwOTogY2FzZSAxMTU6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlKHZhbHVlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgcnVsZSAmJiBhcHBlbmQocnVsZXNldCh2YWx1ZSwgcmVmZXJlbmNlLCByZWZlcmVuY2UsIDAsIDAsIHJ1bGVzLCBwb2ludHMsIHR5cGUsIHJ1bGVzLCBwcm9wcyA9IFtdLCBsZW5ndGgpLCBjaGlsZHJlbiksIHJ1bGVzLCBjaGlsZHJlbiwgbGVuZ3RoLCBwb2ludHMsIHJ1bGUgPyBwcm9wcyA6IGNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyc2UoY2hhcmFjdGVycywgcmVmZXJlbmNlLCByZWZlcmVuY2UsIHJlZmVyZW5jZSwgWycnXSwgY2hpbGRyZW4sIDAsIHBvaW50cywgY2hpbGRyZW4pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aW5kZXggPSBvZmZzZXQgPSBwcm9wZXJ0eSA9IDAsIHZhcmlhYmxlID0gYW1wZXJzYW5kID0gMSwgdHlwZSA9IGNoYXJhY3RlcnMgPSAnJywgbGVuZ3RoID0gcHNldWRvXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHQvLyA6XG5cdFx0XHRjYXNlIDU4OlxuXHRcdFx0XHRsZW5ndGggPSAxICsgc3RybGVuKGNoYXJhY3RlcnMpLCBwcm9wZXJ0eSA9IHByZXZpb3VzXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAodmFyaWFibGUgPCAxKVxuXHRcdFx0XHRcdGlmIChjaGFyYWN0ZXIgPT0gMTIzKVxuXHRcdFx0XHRcdFx0LS12YXJpYWJsZVxuXHRcdFx0XHRcdGVsc2UgaWYgKGNoYXJhY3RlciA9PSAxMjUgJiYgdmFyaWFibGUrKyA9PSAwICYmIHByZXYoKSA9PSAxMjUpXG5cdFx0XHRcdFx0XHRjb250aW51ZVxuXG5cdFx0XHRcdHN3aXRjaCAoY2hhcmFjdGVycyArPSBmcm9tKGNoYXJhY3RlciksIGNoYXJhY3RlciAqIHZhcmlhYmxlKSB7XG5cdFx0XHRcdFx0Ly8gJlxuXHRcdFx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdFx0XHRhbXBlcnNhbmQgPSBvZmZzZXQgPiAwID8gMSA6IChjaGFyYWN0ZXJzICs9ICdcXGYnLCAtMSlcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gLFxuXHRcdFx0XHRcdGNhc2UgNDQ6XG5cdFx0XHRcdFx0XHRwb2ludHNbaW5kZXgrK10gPSAoc3RybGVuKGNoYXJhY3RlcnMpIC0gMSkgKiBhbXBlcnNhbmQsIGFtcGVyc2FuZCA9IDFcblx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0Ly8gQFxuXHRcdFx0XHRcdGNhc2UgNjQ6XG5cdFx0XHRcdFx0XHQvLyAtXG5cdFx0XHRcdFx0XHRpZiAocGVlaygpID09PSA0NSlcblx0XHRcdFx0XHRcdFx0Y2hhcmFjdGVycyArPSBkZWxpbWl0KG5leHQoKSlcblxuXHRcdFx0XHRcdFx0YXRydWxlID0gcGVlaygpLCBvZmZzZXQgPSBsZW5ndGggPSBzdHJsZW4odHlwZSA9IGNoYXJhY3RlcnMgKz0gaWRlbnRpZmllcihjYXJldCgpKSksIGNoYXJhY3RlcisrXG5cdFx0XHRcdFx0XHRicmVha1xuXHRcdFx0XHRcdC8vIC1cblx0XHRcdFx0XHRjYXNlIDQ1OlxuXHRcdFx0XHRcdFx0aWYgKHByZXZpb3VzID09PSA0NSAmJiBzdHJsZW4oY2hhcmFjdGVycykgPT0gMilcblx0XHRcdFx0XHRcdFx0dmFyaWFibGUgPSAwXG5cdFx0XHRcdH1cblx0XHR9XG5cblx0cmV0dXJuIHJ1bGVzZXRzXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldFxuICogQHBhcmFtIHtzdHJpbmdbXX0gcnVsZXNcbiAqIEBwYXJhbSB7bnVtYmVyW119IHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVsZXNldCAodmFsdWUsIHJvb3QsIHBhcmVudCwgaW5kZXgsIG9mZnNldCwgcnVsZXMsIHBvaW50cywgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpIHtcblx0dmFyIHBvc3QgPSBvZmZzZXQgLSAxXG5cdHZhciBydWxlID0gb2Zmc2V0ID09PSAwID8gcnVsZXMgOiBbJyddXG5cdHZhciBzaXplID0gc2l6ZW9mKHJ1bGUpXG5cblx0Zm9yICh2YXIgaSA9IDAsIGogPSAwLCBrID0gMDsgaSA8IGluZGV4OyArK2kpXG5cdFx0Zm9yICh2YXIgeCA9IDAsIHkgPSBzdWJzdHIodmFsdWUsIHBvc3QgKyAxLCBwb3N0ID0gYWJzKGogPSBwb2ludHNbaV0pKSwgeiA9IHZhbHVlOyB4IDwgc2l6ZTsgKyt4KVxuXHRcdFx0aWYgKHogPSB0cmltKGogPiAwID8gcnVsZVt4XSArICcgJyArIHkgOiByZXBsYWNlKHksIC8mXFxmL2csIHJ1bGVbeF0pKSlcblx0XHRcdFx0cHJvcHNbaysrXSA9IHpcblxuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBvZmZzZXQgPT09IDAgPyBSVUxFU0VUIDogdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBsZW5ndGgpXG59XG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gcm9vdFxuICogQHBhcmFtIHtvYmplY3Q/fSBwYXJlbnRcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1lbnQgKHZhbHVlLCByb290LCBwYXJlbnQpIHtcblx0cmV0dXJuIG5vZGUodmFsdWUsIHJvb3QsIHBhcmVudCwgQ09NTUVOVCwgZnJvbShjaGFyKCkpLCBzdWJzdHIodmFsdWUsIDIsIC0yKSwgMClcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSByb290XG4gKiBAcGFyYW0ge29iamVjdD99IHBhcmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjbGFyYXRpb24gKHZhbHVlLCByb290LCBwYXJlbnQsIGxlbmd0aCkge1xuXHRyZXR1cm4gbm9kZSh2YWx1ZSwgcm9vdCwgcGFyZW50LCBERUNMQVJBVElPTiwgc3Vic3RyKHZhbHVlLCAwLCBsZW5ndGgpLCBzdWJzdHIodmFsdWUsIGxlbmd0aCArIDEsIC0xKSwgbGVuZ3RoKVxufVxuIiwiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ0BlbW90aW9uL3NoZWV0JztcbmltcG9ydCB7IGRlYWxsb2MsIGFsbG9jLCBuZXh0LCB0b2tlbiwgZnJvbSwgcGVlaywgZGVsaW1pdCwgc2xpY2UsIHBvc2l0aW9uLCBSVUxFU0VULCBjb21iaW5lLCBtYXRjaCwgc2VyaWFsaXplLCBjb3B5LCByZXBsYWNlLCBXRUJLSVQsIE1PWiwgTVMsIEtFWUZSQU1FUywgREVDTEFSQVRJT04sIGhhc2gsIGNoYXJhdCwgc3RybGVuLCBpbmRleG9mLCBzdHJpbmdpZnksIHJ1bGVzaGVldCwgbWlkZGxld2FyZSwgY29tcGlsZSB9IGZyb20gJ3N0eWxpcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nID0gZnVuY3Rpb24gaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nKGJlZ2luLCBwb2ludHMsIGluZGV4KSB7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIHZhciBjaGFyYWN0ZXIgPSAwO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgcHJldmlvdXMgPSBjaGFyYWN0ZXI7XG4gICAgY2hhcmFjdGVyID0gcGVlaygpOyAvLyAmXFxmXG5cbiAgICBpZiAocHJldmlvdXMgPT09IDM4ICYmIGNoYXJhY3RlciA9PT0gMTIpIHtcbiAgICAgIHBvaW50c1tpbmRleF0gPSAxO1xuICAgIH1cblxuICAgIGlmICh0b2tlbihjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBuZXh0KCk7XG4gIH1cblxuICByZXR1cm4gc2xpY2UoYmVnaW4sIHBvc2l0aW9uKTtcbn07XG5cbnZhciB0b1J1bGVzID0gZnVuY3Rpb24gdG9SdWxlcyhwYXJzZWQsIHBvaW50cykge1xuICAvLyBwcmV0ZW5kIHdlJ3ZlIHN0YXJ0ZWQgd2l0aCBhIGNvbW1hXG4gIHZhciBpbmRleCA9IC0xO1xuICB2YXIgY2hhcmFjdGVyID0gNDQ7XG5cbiAgZG8ge1xuICAgIHN3aXRjaCAodG9rZW4oY2hhcmFjdGVyKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAvLyAmXFxmXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IDM4ICYmIHBlZWsoKSA9PT0gMTIpIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIG5vdCAxMDAlIGNvcnJlY3QsIHdlIGRvbid0IGFjY291bnQgZm9yIGxpdGVyYWwgc2VxdWVuY2VzIGhlcmUgLSBsaWtlIGZvciBleGFtcGxlIHF1b3RlZCBzdHJpbmdzXG4gICAgICAgICAgLy8gc3R5bGlzIGluc2VydHMgXFxmIGFmdGVyICYgdG8ga25vdyB3aGVuICYgd2hlcmUgaXQgc2hvdWxkIHJlcGxhY2UgdGhpcyBzZXF1ZW5jZSB3aXRoIHRoZSBjb250ZXh0IHNlbGVjdG9yXG4gICAgICAgICAgLy8gYW5kIHdoZW4gaXQgc2hvdWxkIGp1c3QgY29uY2F0ZW5hdGUgdGhlIG91dGVyIGFuZCBpbm5lciBzZWxlY3RvcnNcbiAgICAgICAgICAvLyBpdCdzIHZlcnkgdW5saWtlbHkgZm9yIHRoaXMgc2VxdWVuY2UgdG8gYWN0dWFsbHkgYXBwZWFyIGluIGEgZGlmZmVyZW50IGNvbnRleHQsIHNvIHdlIGp1c3QgbGV2ZXJhZ2UgdGhpcyBmYWN0IGhlcmVcbiAgICAgICAgICBwb2ludHNbaW5kZXhdID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gaWRlbnRpZmllcldpdGhQb2ludFRyYWNraW5nKHBvc2l0aW9uIC0gMSwgcG9pbnRzLCBpbmRleCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gZGVsaW1pdChjaGFyYWN0ZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICAvLyBjb21tYVxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSA0NCkge1xuICAgICAgICAgIC8vIGNvbG9uXG4gICAgICAgICAgcGFyc2VkWysraW5kZXhdID0gcGVlaygpID09PSA1OCA/ICcmXFxmJyA6ICcnO1xuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSBwYXJzZWRbaW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxsdGhyb3VnaFxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGZyb20oY2hhcmFjdGVyKTtcbiAgICB9XG4gIH0gd2hpbGUgKGNoYXJhY3RlciA9IG5leHQoKSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHZhbHVlLCBwb2ludHMpIHtcbiAgcmV0dXJuIGRlYWxsb2ModG9SdWxlcyhhbGxvYyh2YWx1ZSksIHBvaW50cykpO1xufTsgLy8gV2Vha1NldCB3b3VsZCBiZSBtb3JlIGFwcHJvcHJpYXRlLCBidXQgb25seSBXZWFrTWFwIGlzIHN1cHBvcnRlZCBpbiBJRTExXG5cblxudmFyIGZpeGVkRWxlbWVudHMgPSAvKiAjX19QVVJFX18gKi9uZXcgV2Vha01hcCgpO1xudmFyIGNvbXBhdCA9IGZ1bmN0aW9uIGNvbXBhdChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJyB8fCAhZWxlbWVudC5wYXJlbnQgfHwgLy8gcG9zaXRpdmUgLmxlbmd0aCBpbmRpY2F0ZXMgdGhhdCB0aGlzIHJ1bGUgY29udGFpbnMgcHNldWRvXG4gIC8vIG5lZ2F0aXZlIC5sZW5ndGggaW5kaWNhdGVzIHRoYXQgdGhpcyBydWxlIGhhcyBiZWVuIGFscmVhZHkgcHJlZml4ZWRcbiAgZWxlbWVudC5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZSxcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50O1xuICB2YXIgaXNJbXBsaWNpdFJ1bGUgPSBlbGVtZW50LmNvbHVtbiA9PT0gcGFyZW50LmNvbHVtbiAmJiBlbGVtZW50LmxpbmUgPT09IHBhcmVudC5saW5lO1xuXG4gIHdoaWxlIChwYXJlbnQudHlwZSAhPT0gJ3J1bGUnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuICB9IC8vIHNob3J0LWNpcmN1aXQgZm9yIHRoZSBzaW1wbGVzdCBjYXNlXG5cblxuICBpZiAoZWxlbWVudC5wcm9wcy5sZW5ndGggPT09IDEgJiYgdmFsdWUuY2hhckNvZGVBdCgwKSAhPT0gNThcbiAgLyogY29sb24gKi9cbiAgJiYgIWZpeGVkRWxlbWVudHMuZ2V0KHBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhpcyBpcyBhbiBpbXBsaWNpdGx5IGluc2VydGVkIHJ1bGUgKHRoZSBvbmUgZWFnZXJseSBpbnNlcnRlZCBhdCB0aGUgZWFjaCBuZXcgbmVzdGVkIGxldmVsKVxuICAvLyB0aGVuIHRoZSBwcm9wcyBoYXMgYWxyZWFkeSBiZWVuIG1hbmlwdWxhdGVkIGJlZm9yZWhhbmQgYXMgdGhleSB0aGF0IGFycmF5IGlzIHNoYXJlZCBiZXR3ZWVuIGl0IGFuZCBpdHMgXCJydWxlIHBhcmVudFwiXG5cblxuICBpZiAoaXNJbXBsaWNpdFJ1bGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmaXhlZEVsZW1lbnRzLnNldChlbGVtZW50LCB0cnVlKTtcbiAgdmFyIHBvaW50cyA9IFtdO1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKTtcbiAgdmFyIHBhcmVudFJ1bGVzID0gcGFyZW50LnByb3BzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBrID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJlbnRSdWxlcy5sZW5ndGg7IGorKywgaysrKSB7XG4gICAgICBlbGVtZW50LnByb3BzW2tdID0gcG9pbnRzW2ldID8gcnVsZXNbaV0ucmVwbGFjZSgvJlxcZi9nLCBwYXJlbnRSdWxlc1tqXSkgOiBwYXJlbnRSdWxlc1tqXSArIFwiIFwiICsgcnVsZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIHJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlID09PSAnZGVjbCcpIHtcbiAgICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgaWYgKCAvLyBjaGFyY29kZSBmb3IgbFxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMCkgPT09IDEwOCAmJiAvLyBjaGFyY29kZSBmb3IgYlxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XG4gICAgICAvLyB0aGlzIGlnbm9yZXMgbGFiZWxcbiAgICAgIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn07XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXG5cbmZ1bmN0aW9uIHByZWZpeCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHN3aXRjaCAoaGFzaCh2YWx1ZSwgbGVuZ3RoKSkge1xuICAgIC8vIGNvbG9yLWFkanVzdFxuICAgIGNhc2UgNTEwMzpcbiAgICAgIHJldHVybiBXRUJLSVQgKyAncHJpbnQtJyArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gYW5pbWF0aW9uLCBhbmltYXRpb24tKGRlbGF5fGRpcmVjdGlvbnxkdXJhdGlvbnxmaWxsLW1vZGV8aXRlcmF0aW9uLWNvdW50fG5hbWV8cGxheS1zdGF0ZXx0aW1pbmctZnVuY3Rpb24pXG5cbiAgICBjYXNlIDU3Mzc6XG4gICAgY2FzZSA0MjAxOlxuICAgIGNhc2UgMzE3NzpcbiAgICBjYXNlIDM0MzM6XG4gICAgY2FzZSAxNjQxOlxuICAgIGNhc2UgNDQ1NzpcbiAgICBjYXNlIDI5MjE6IC8vIHRleHQtZGVjb3JhdGlvbiwgZmlsdGVyLCBjbGlwLXBhdGgsIGJhY2tmYWNlLXZpc2liaWxpdHksIGNvbHVtbiwgYm94LWRlY29yYXRpb24tYnJlYWtcblxuICAgIGNhc2UgNTU3MjpcbiAgICBjYXNlIDYzNTY6XG4gICAgY2FzZSA1ODQ0OlxuICAgIGNhc2UgMzE5MTpcbiAgICBjYXNlIDY2NDU6XG4gICAgY2FzZSAzMDA1OiAvLyBtYXNrLCBtYXNrLWltYWdlLCBtYXNrLShtb2RlfGNsaXB8c2l6ZSksIG1hc2stKHJlcGVhdHxvcmlnaW4pLCBtYXNrLXBvc2l0aW9uLCBtYXNrLWNvbXBvc2l0ZSxcblxuICAgIGNhc2UgNjM5MTpcbiAgICBjYXNlIDU4Nzk6XG4gICAgY2FzZSA1NjIzOlxuICAgIGNhc2UgNjEzNTpcbiAgICBjYXNlIDQ1OTk6XG4gICAgY2FzZSA0ODU1OiAvLyBiYWNrZ3JvdW5kLWNsaXAsIGNvbHVtbnMsIGNvbHVtbi0oY291bnR8ZmlsbHxnYXB8cnVsZXxydWxlLWNvbG9yfHJ1bGUtc3R5bGV8cnVsZS13aWR0aHxzcGFufHdpZHRoKVxuXG4gICAgY2FzZSA0MjE1OlxuICAgIGNhc2UgNjM4OTpcbiAgICBjYXNlIDUxMDk6XG4gICAgY2FzZSA1MzY1OlxuICAgIGNhc2UgNTYyMTpcbiAgICBjYXNlIDM4Mjk6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyB2YWx1ZTtcbiAgICAvLyBhcHBlYXJhbmNlLCB1c2VyLXNlbGVjdCwgdHJhbnNmb3JtLCBoeXBoZW5zLCB0ZXh0LXNpemUtYWRqdXN0XG5cbiAgICBjYXNlIDUzNDk6XG4gICAgY2FzZSA0MjQ2OlxuICAgIGNhc2UgNDgxMDpcbiAgICBjYXNlIDY5Njg6XG4gICAgY2FzZSAyNzU2OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTU9aICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gZmxleCwgZmxleC1kaXJlY3Rpb25cblxuICAgIGNhc2UgNjgyODpcbiAgICBjYXNlIDQyNjg6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gb3JkZXJcblxuICAgIGNhc2UgNjE2NTpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtJyArIHZhbHVlICsgdmFsdWU7XG4gICAgLy8gYWxpZ24taXRlbXNcblxuICAgIGNhc2UgNTE4NzpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIHJlcGxhY2UodmFsdWUsIC8oXFx3KykuKyg6W15dKykvLCBXRUJLSVQgKyAnYm94LSQxJDInICsgTVMgKyAnZmxleC0kMSQyJykgKyB2YWx1ZTtcbiAgICAvLyBhbGlnbi1zZWxmXG5cbiAgICBjYXNlIDU0NDM6XG4gICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArICdmbGV4LWl0ZW0tJyArIHJlcGxhY2UodmFsdWUsIC9mbGV4LXwtc2VsZi8sICcnKSArIHZhbHVlO1xuICAgIC8vIGFsaWduLWNvbnRlbnRcblxuICAgIGNhc2UgNDY3NTpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgJ2ZsZXgtbGluZS1wYWNrJyArIHJlcGxhY2UodmFsdWUsIC9hbGlnbi1jb250ZW50fGZsZXgtfC1zZWxmLywgJycpICsgdmFsdWU7XG4gICAgLy8gZmxleC1zaHJpbmtcblxuICAgIGNhc2UgNTU0ODpcbiAgICAgIHJldHVybiBXRUJLSVQgKyB2YWx1ZSArIE1TICsgcmVwbGFjZSh2YWx1ZSwgJ3NocmluaycsICduZWdhdGl2ZScpICsgdmFsdWU7XG4gICAgLy8gZmxleC1iYXNpc1xuXG4gICAgY2FzZSA1MjkyOlxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIHZhbHVlO1xuICAgIC8vIGZsZXgtZ3Jvd1xuXG4gICAgY2FzZSA2MDYwOlxuICAgICAgcmV0dXJuIFdFQktJVCArICdib3gtJyArIHJlcGxhY2UodmFsdWUsICctZ3JvdycsICcnKSArIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAnZ3JvdycsICdwb3NpdGl2ZScpICsgdmFsdWU7XG4gICAgLy8gdHJhbnNpdGlvblxuXG4gICAgY2FzZSA0NTU0OlxuICAgICAgcmV0dXJuIFdFQktJVCArIHJlcGxhY2UodmFsdWUsIC8oW14tXSkodHJhbnNmb3JtKS9nLCAnJDEnICsgV0VCS0lUICsgJyQyJykgKyB2YWx1ZTtcbiAgICAvLyBjdXJzb3JcblxuICAgIGNhc2UgNjE4NzpcbiAgICAgIHJldHVybiByZXBsYWNlKHJlcGxhY2UocmVwbGFjZSh2YWx1ZSwgLyh6b29tLXxncmFiKS8sIFdFQktJVCArICckMScpLCAvKGltYWdlLXNldCkvLCBXRUJLSVQgKyAnJDEnKSwgdmFsdWUsICcnKSArIHZhbHVlO1xuICAgIC8vIGJhY2tncm91bmQsIGJhY2tncm91bmQtaW1hZ2VcblxuICAgIGNhc2UgNTQ5NTpcbiAgICBjYXNlIDM5NTk6XG4gICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyhpbWFnZS1zZXRcXChbXl0qKS8sIFdFQktJVCArICckMScgKyAnJGAkMScpO1xuICAgIC8vIGp1c3RpZnktY29udGVudFxuXG4gICAgY2FzZSA0OTY4OlxuICAgICAgcmV0dXJuIHJlcGxhY2UocmVwbGFjZSh2YWx1ZSwgLyguKzopKGZsZXgtKT8oLiopLywgV0VCS0lUICsgJ2JveC1wYWNrOiQzJyArIE1TICsgJ2ZsZXgtcGFjazokMycpLCAvcy4rLWJbXjtdKy8sICdqdXN0aWZ5JykgKyBXRUJLSVQgKyB2YWx1ZSArIHZhbHVlO1xuICAgIC8vIChtYXJnaW58cGFkZGluZyktaW5saW5lLShzdGFydHxlbmQpXG5cbiAgICBjYXNlIDQwOTU6XG4gICAgY2FzZSAzNTgzOlxuICAgIGNhc2UgNDA2ODpcbiAgICBjYXNlIDI1MzI6XG4gICAgICByZXR1cm4gcmVwbGFjZSh2YWx1ZSwgLyguKyktaW5saW5lKC4rKS8sIFdFQktJVCArICckMSQyJykgKyB2YWx1ZTtcbiAgICAvLyAobWlufG1heCk/KHdpZHRofGhlaWdodHxpbmxpbmUtc2l6ZXxibG9jay1zaXplKVxuXG4gICAgY2FzZSA4MTE2OlxuICAgIGNhc2UgNzA1OTpcbiAgICBjYXNlIDU3NTM6XG4gICAgY2FzZSA1NTM1OlxuICAgIGNhc2UgNTQ0NTpcbiAgICBjYXNlIDU3MDE6XG4gICAgY2FzZSA0OTMzOlxuICAgIGNhc2UgNDY3NzpcbiAgICBjYXNlIDU1MzM6XG4gICAgY2FzZSA1Nzg5OlxuICAgIGNhc2UgNTAyMTpcbiAgICBjYXNlIDQ3NjU6XG4gICAgICAvLyBzdHJldGNoLCBtYXgtY29udGVudCwgbWluLWNvbnRlbnQsIGZpbGwtYXZhaWxhYmxlXG4gICAgICBpZiAoc3RybGVuKHZhbHVlKSAtIDEgLSBsZW5ndGggPiA2KSBzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMSkpIHtcbiAgICAgICAgLy8gKG0pYXgtY29udGVudCwgKG0paW4tY29udGVudFxuICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAvLyAtXG4gICAgICAgICAgaWYgKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgNCkgIT09IDQ1KSBicmVhaztcbiAgICAgICAgLy8gKGYpaWxsLWF2YWlsYWJsZSwgKGYpaXQtY29udGVudFxuXG4gICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rOikoLispLShbXl0rKS8sICckMScgKyBXRUJLSVQgKyAnJDItJDMnICsgJyQxJyArIE1PWiArIChjaGFyYXQodmFsdWUsIGxlbmd0aCArIDMpID09IDEwOCA/ICckMycgOiAnJDItJDMnKSkgKyB2YWx1ZTtcbiAgICAgICAgLy8gKHMpdHJldGNoXG5cbiAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgcmV0dXJuIH5pbmRleG9mKHZhbHVlLCAnc3RyZXRjaCcpID8gcHJlZml4KHJlcGxhY2UodmFsdWUsICdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGxlbmd0aCkgKyB2YWx1ZSA6IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgLy8gcG9zaXRpb246IHN0aWNreVxuXG4gICAgY2FzZSA0OTQ5OlxuICAgICAgLy8gKHMpdGlja3k/XG4gICAgICBpZiAoY2hhcmF0KHZhbHVlLCBsZW5ndGggKyAxKSAhPT0gMTE1KSBicmVhaztcbiAgICAvLyBkaXNwbGF5OiAoZmxleHxpbmxpbmUtZmxleClcblxuICAgIGNhc2UgNjQ0NDpcbiAgICAgIHN3aXRjaCAoY2hhcmF0KHZhbHVlLCBzdHJsZW4odmFsdWUpIC0gMyAtICh+aW5kZXhvZih2YWx1ZSwgJyFpbXBvcnRhbnQnKSAmJiAxMCkpKSB7XG4gICAgICAgIC8vIHN0aWMoayl5XG4gICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgIHJldHVybiByZXBsYWNlKHZhbHVlLCAnOicsICc6JyArIFdFQktJVCkgKyB2YWx1ZTtcbiAgICAgICAgLy8gKGlubGluZS0pP2ZsKGUpeFxuXG4gICAgICAgIGNhc2UgMTAxOlxuICAgICAgICAgIHJldHVybiByZXBsYWNlKHZhbHVlLCAvKC4rOikoW147IV0rKSg7fCEuKyk/LywgJyQxJyArIFdFQktJVCArIChjaGFyYXQodmFsdWUsIDE0KSA9PT0gNDUgPyAnaW5saW5lLScgOiAnJykgKyAnYm94JDMnICsgJyQxJyArIFdFQktJVCArICckMiQzJyArICckMScgKyBNUyArICckMmJveCQzJykgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgLy8gd3JpdGluZy1tb2RlXG5cbiAgICBjYXNlIDU5MzY6XG4gICAgICBzd2l0Y2ggKGNoYXJhdCh2YWx1ZSwgbGVuZ3RoICsgMTEpKSB7XG4gICAgICAgIC8vIHZlcnRpY2FsLWwocilcbiAgICAgICAgY2FzZSAxMTQ6XG4gICAgICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyByZXBsYWNlKHZhbHVlLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sICd0YicpICsgdmFsdWU7XG4gICAgICAgIC8vIHZlcnRpY2FsLXIobClcblxuICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ3RiLXJsJykgKyB2YWx1ZTtcbiAgICAgICAgLy8gaG9yaXpvbnRhbCgtKXRiXG5cbiAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICByZXR1cm4gV0VCS0lUICsgdmFsdWUgKyBNUyArIHJlcGxhY2UodmFsdWUsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgJ2xyJykgKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFdFQktJVCArIHZhbHVlICsgTVMgKyB2YWx1ZSArIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgcHJlZml4ZXIgPSBmdW5jdGlvbiBwcmVmaXhlcihlbGVtZW50LCBpbmRleCwgY2hpbGRyZW4sIGNhbGxiYWNrKSB7XG4gIGlmIChlbGVtZW50Lmxlbmd0aCA+IC0xKSBpZiAoIWVsZW1lbnRbXCJyZXR1cm5cIl0pIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgY2FzZSBERUNMQVJBVElPTjpcbiAgICAgIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSBwcmVmaXgoZWxlbWVudC52YWx1ZSwgZWxlbWVudC5sZW5ndGgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEtFWUZSQU1FUzpcbiAgICAgIHJldHVybiBzZXJpYWxpemUoW2NvcHkoZWxlbWVudCwge1xuICAgICAgICB2YWx1ZTogcmVwbGFjZShlbGVtZW50LnZhbHVlLCAnQCcsICdAJyArIFdFQktJVClcbiAgICAgIH0pXSwgY2FsbGJhY2spO1xuXG4gICAgY2FzZSBSVUxFU0VUOlxuICAgICAgaWYgKGVsZW1lbnQubGVuZ3RoKSByZXR1cm4gY29tYmluZShlbGVtZW50LnByb3BzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgc3dpdGNoIChtYXRjaCh2YWx1ZSwgLyg6OnBsYWNcXHcrfDpyZWFkLVxcdyspLykpIHtcbiAgICAgICAgICAvLyA6cmVhZC0ob25seXx3cml0ZSlcbiAgICAgICAgICBjYXNlICc6cmVhZC1vbmx5JzpcbiAgICAgICAgICBjYXNlICc6cmVhZC13cml0ZSc6XG4gICAgICAgICAgICByZXR1cm4gc2VyaWFsaXplKFtjb3B5KGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgcHJvcHM6IFtyZXBsYWNlKHZhbHVlLCAvOihyZWFkLVxcdyspLywgJzonICsgTU9aICsgJyQxJyldXG4gICAgICAgICAgICB9KV0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAvLyA6cGxhY2Vob2xkZXJcblxuICAgICAgICAgIGNhc2UgJzo6cGxhY2Vob2xkZXInOlxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZShbY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgV0VCS0lUICsgJ2lucHV0LSQxJyldXG4gICAgICAgICAgICB9KSwgY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgJzonICsgTU9aICsgJyQxJyldXG4gICAgICAgICAgICB9KSwgY29weShlbGVtZW50LCB7XG4gICAgICAgICAgICAgIHByb3BzOiBbcmVwbGFjZSh2YWx1ZSwgLzoocGxhY1xcdyspLywgTVMgKyAnaW5wdXQtJDEnKV1cbiAgICAgICAgICAgIH0pXSwgY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0U3R5bGlzUGx1Z2lucyA9IFtwcmVmaXhlcl07XG5cbnZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uXG4gIC8qOiBFbW90aW9uQ2FjaGUgKi9cbmNyZWF0ZUNhY2hlKG9wdGlvbnNcbi8qOiBPcHRpb25zICovXG4pIHtcbiAgdmFyIGtleSA9IG9wdGlvbnMua2V5O1xuXG4gIGlmIChrZXkgPT09ICdjc3MnKSB7XG4gICAgdmFyIHNzclN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtkYXRhLWVtb3Rpb25dOm5vdChbZGF0YS1zXSlcIik7IC8vIGdldCBTU1JlZCBzdHlsZXMgb3V0IG9mIHRoZSB3YXkgb2YgUmVhY3QncyBoeWRyYXRpb25cbiAgICAvLyBkb2N1bWVudC5oZWFkIGlzIGEgc2FmZSBwbGFjZSB0byBtb3ZlIHRoZW0gdG8odGhvdWdoIG5vdGUgZG9jdW1lbnQuaGVhZCBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIGxhc3QgcGxhY2UgdGhleSB3aWxsIGJlKVxuICAgIC8vIG5vdGUgdGhpcyB2ZXJ5IHZlcnkgaW50ZW50aW9uYWxseSB0YXJnZXRzIGFsbCBzdHlsZSBlbGVtZW50cyByZWdhcmRsZXNzIG9mIHRoZSBrZXkgdG8gZW5zdXJlXG4gICAgLy8gdGhhdCBjcmVhdGluZyBhIGNhY2hlIHdvcmtzIGluc2lkZSBvZiByZW5kZXIgb2YgYSBSZWFjdCBjb21wb25lbnRcblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3NyU3R5bGVzLCBmdW5jdGlvbiAobm9kZVxuICAgIC8qOiBIVE1MU3R5bGVFbGVtZW50ICovXG4gICAgKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIG9ubHkgbW92ZSBlbGVtZW50cyB3aGljaCBoYXZlIGEgc3BhY2UgaW4gdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIC8vIGJlY2F1c2UgdGhhdCBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBhbiBFbW90aW9uIDExIHNlcnZlci1zaWRlIHJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgICAvLyB3aGlsZSB3ZSB3aWxsIGFscmVhZHkgaWdub3JlIEVtb3Rpb24gMTEgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGJlY2F1c2Ugb2YgdGhlIDpub3QoW2RhdGEtc10pIHBhcnQgaW4gdGhlIHNlbGVjdG9yXG4gICAgICAvLyBFbW90aW9uIDEwIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBkaWQgbm90IGhhdmUgZGF0YS1zIChidXQgaW1wb3J0YW50bHkgZGlkIG5vdCBoYXZlIGEgc3BhY2UgaW4gdGhlaXIgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZXMpXG4gICAgICAvLyBzbyBjaGVja2luZyBmb3IgdGhlIHNwYWNlIGVuc3VyZXMgdGhhdCBsb2FkaW5nIEVtb3Rpb24gMTEgYWZ0ZXIgRW1vdGlvbiAxMCBoYXMgaW5zZXJ0ZWQgc29tZSBzdHlsZXNcbiAgICAgIC8vIHdpbGwgbm90IHJlc3VsdCBpbiB0aGUgRW1vdGlvbiAxMCBzdHlsZXMgYmVpbmcgZGVzdHJveWVkXG4gICAgICB2YXIgZGF0YUVtb3Rpb25BdHRyaWJ1dGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJyk7XG5cbiAgICAgIGlmIChkYXRhRW1vdGlvbkF0dHJpYnV0ZS5pbmRleE9mKCcgJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXMnLCAnJyk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgc3R5bGlzUGx1Z2lucyA9IG9wdGlvbnMuc3R5bGlzUGx1Z2lucyB8fCBkZWZhdWx0U3R5bGlzUGx1Z2lucztcblxuICB2YXIgaW5zZXJ0ZWQgPSB7fTtcbiAgdmFyIGNvbnRhaW5lcjtcbiAgLyogOiBOb2RlICovXG5cbiAgdmFyIG5vZGVzVG9IeWRyYXRlID0gW107XG5cbiAge1xuICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCggLy8gdGhpcyBtZWFucyB3ZSB3aWxsIGlnbm9yZSBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGEgc3BhY2UgaW4gdGhlbSB3aGljaFxuICAgIC8vIG1lYW5zIHRoYXQgdGhlIHN0eWxlIGVsZW1lbnRzIHdlJ3JlIGxvb2tpbmcgYXQgYXJlIG9ubHkgRW1vdGlvbiAxMSBzZXJ2ZXItcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uXj1cXFwiXCIgKyBrZXkgKyBcIiBcXFwiXVwiKSwgZnVuY3Rpb24gKG5vZGVcbiAgICAvKjogSFRNTFN0eWxlRWxlbWVudCAqL1xuICAgICkge1xuICAgICAgdmFyIGF0dHJpYiA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1lbW90aW9uXCIpLnNwbGl0KCcgJyk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXR0cmliLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluc2VydGVkW2F0dHJpYltpXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2Rlc1RvSHlkcmF0ZS5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG4gIC8qOiAoXG4gIHNlbGVjdG9yOiBzdHJpbmcsXG4gIHNlcmlhbGl6ZWQ6IFNlcmlhbGl6ZWRTdHlsZXMsXG4gIHNoZWV0OiBTdHlsZVNoZWV0LFxuICBzaG91bGRDYWNoZTogYm9vbGVhblxuICApID0+IHN0cmluZyB8IHZvaWQgKi9cblxuXG4gIHZhciBvbW5pcHJlc2VudFBsdWdpbnMgPSBbY29tcGF0LCByZW1vdmVMYWJlbF07XG5cbiAge1xuICAgIHZhciBjdXJyZW50U2hlZXQ7XG4gICAgdmFyIGZpbmFsaXppbmdQbHVnaW5zID0gW3N0cmluZ2lmeSwgcnVsZXNoZWV0KGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KHJ1bGUpO1xuICAgIH0pXTtcbiAgICB2YXIgc2VyaWFsaXplciA9IG1pZGRsZXdhcmUob21uaXByZXNlbnRQbHVnaW5zLmNvbmNhdChzdHlsaXNQbHVnaW5zLCBmaW5hbGl6aW5nUGx1Z2lucykpO1xuXG4gICAgdmFyIHN0eWxpcyA9IGZ1bmN0aW9uIHN0eWxpcyhzdHlsZXMpIHtcbiAgICAgIHJldHVybiBzZXJpYWxpemUoY29tcGlsZShzdHlsZXMpLCBzZXJpYWxpemVyKTtcbiAgICB9O1xuXG4gICAgX2luc2VydCA9IGZ1bmN0aW9uXG4gICAgICAvKjogdm9pZCAqL1xuICAgIGluc2VydChzZWxlY3RvclxuICAgIC8qOiBzdHJpbmcgKi9cbiAgICAsIHNlcmlhbGl6ZWRcbiAgICAvKjogU2VyaWFsaXplZFN0eWxlcyAqL1xuICAgICwgc2hlZXRcbiAgICAvKjogU3R5bGVTaGVldCAqL1xuICAgICwgc2hvdWxkQ2FjaGVcbiAgICAvKjogYm9vbGVhbiAqL1xuICAgICkge1xuICAgICAgY3VycmVudFNoZWV0ID0gc2hlZXQ7XG5cbiAgICAgIHN0eWxpcyhzZWxlY3RvciA/IHNlbGVjdG9yICsgXCJ7XCIgKyBzZXJpYWxpemVkLnN0eWxlcyArIFwifVwiIDogc2VyaWFsaXplZC5zdHlsZXMpO1xuXG4gICAgICBpZiAoc2hvdWxkQ2FjaGUpIHtcbiAgICAgICAgY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZVxuICAvKjogRW1vdGlvbkNhY2hlICovXG4gID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5LFxuICAgICAgcHJlcGVuZDogb3B0aW9ucy5wcmVwZW5kLFxuICAgICAgaW5zZXJ0aW9uUG9pbnQ6IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnRcbiAgICB9KSxcbiAgICBub25jZTogb3B0aW9ucy5ub25jZSxcbiAgICBpbnNlcnRlZDogaW5zZXJ0ZWQsXG4gICAgcmVnaXN0ZXJlZDoge30sXG4gICAgaW5zZXJ0OiBfaW5zZXJ0XG4gIH07XG4gIGNhY2hlLnNoZWV0Lmh5ZHJhdGUobm9kZXNUb0h5ZHJhdGUpO1xuICByZXR1cm4gY2FjaGU7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVDYWNoZSBhcyBkZWZhdWx0IH07XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgcmV0dXJuIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKG4pIHtcbiAgICBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIHQgPSBhcmd1bWVudHNbZV07XG4gICAgICBmb3IgKHZhciByIGluIHQpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAobltyXSA9IHRbcl0pO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfSwgX2V4dGVuZHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbmV4cG9ydCB7IF9leHRlbmRzIGFzIGRlZmF1bHQgfTsiLCJ2YXIgd2Vha01lbW9pemUgPSBmdW5jdGlvbiB3ZWFrTWVtb2l6ZShmdW5jKSB7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlLmhhcyhhcmcpKSB7XG4gICAgICAvLyBVc2Ugbm9uLW51bGwgYXNzZXJ0aW9uIGJlY2F1c2Ugd2UganVzdCBjaGVja2VkIHRoYXQgdGhlIGNhY2hlIGBoYXNgIGl0XG4gICAgICAvLyBUaGlzIGFsbG93cyB1cyB0byByZW1vdmUgYHVuZGVmaW5lZGAgZnJvbSB0aGUgcmV0dXJuIHZhbHVlXG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGFyZyk7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IGZ1bmMoYXJnKTtcbiAgICBjYWNoZS5zZXQoYXJnLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5leHBvcnQgeyB3ZWFrTWVtb2l6ZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MkMSBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5cbi8vIHRoaXMgZmlsZSBpc29sYXRlcyB0aGlzIHBhY2thZ2UgdGhhdCBpcyBub3QgdHJlZS1zaGFrZWFibGVcbi8vIGFuZCBpZiB0aGlzIG1vZHVsZSBkb2Vzbid0IGFjdHVhbGx5IGNvbnRhaW4gYW55IGxvZ2ljIG9mIGl0cyBvd25cbi8vIHRoZW4gUm9sbHVwIGp1c3QgdXNlICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycgZGlyZWN0bHkgaW4gb3RoZXIgY2h1bmtzXG5cbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyA9IChmdW5jdGlvbiAodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzJDEodGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQpO1xufSk7XG5cbmV4cG9ydCB7IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHdlYWtNZW1vaXplIGZyb20gJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnLi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCB7IGdldFJlZ2lzdGVyZWRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzLCBpbnNlcnRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0IHsgdXNlSW5zZXJ0aW9uRWZmZWN0QWx3YXlzV2l0aFN5bmNGYWxsYmFjayB9IGZyb20gJ0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzJztcblxudmFyIGlzRGV2ZWxvcG1lbnQgPSBmYWxzZTtcblxuLyogaW1wb3J0IHsgdHlwZSBFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi91dGlscycgKi9cbnZhciBFbW90aW9uQ2FjaGVDb250ZXh0XG4vKjogUmVhY3QuQ29udGV4dDxFbW90aW9uQ2FjaGUgfCBudWxsPiAqL1xuPSAvKiAjX19QVVJFX18gKi9SZWFjdC5jcmVhdGVDb250ZXh0KCAvLyB3ZSdyZSBkb2luZyB0aGlzIHRvIGF2b2lkIHByZWNvbnN0cnVjdCdzIGRlYWQgY29kZSBlbGltaW5hdGlvbiBpbiB0aGlzIG9uZSBjYXNlXG4vLyBiZWNhdXNlIHRoaXMgbW9kdWxlIGlzIHByaW1hcmlseSBpbnRlbmRlZCBmb3IgdGhlIGJyb3dzZXIgYW5kIG5vZGVcbi8vIGJ1dCBpdCdzIGFsc28gcmVxdWlyZWQgaW4gcmVhY3QgbmF0aXZlIGFuZCBzaW1pbGFyIGVudmlyb25tZW50cyBzb21ldGltZXNcbi8vIGFuZCB3ZSBjb3VsZCBoYXZlIGEgc3BlY2lhbCBidWlsZCBqdXN0IGZvciB0aGF0XG4vLyBidXQgdGhpcyBpcyBtdWNoIGVhc2llciBhbmQgdGhlIG5hdGl2ZSBwYWNrYWdlc1xuLy8gbWlnaHQgdXNlIGEgZGlmZmVyZW50IHRoZW1lIGNvbnRleHQgaW4gdGhlIGZ1dHVyZSBhbnl3YXlcbnR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgPyAvKiAjX19QVVJFX18gKi9jcmVhdGVDYWNoZSh7XG4gIGtleTogJ2Nzcydcbn0pIDogbnVsbCk7XG5cbnZhciBDYWNoZVByb3ZpZGVyID0gRW1vdGlvbkNhY2hlQ29udGV4dC5Qcm92aWRlcjtcbnZhciBfX3Vuc2FmZV91c2VFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiB1c2VFbW90aW9uQ2FjaGUoKVxuLyo6IEVtb3Rpb25DYWNoZSB8IG51bGwqL1xue1xuICByZXR1cm4gdXNlQ29udGV4dChFbW90aW9uQ2FjaGVDb250ZXh0KTtcbn07XG5cbnZhciB3aXRoRW1vdGlvbkNhY2hlID0gZnVuY3Rpb24gd2l0aEVtb3Rpb25DYWNoZVxuLyogPFByb3BzLCBSZWY6IFJlYWN0LlJlZjwqPj4gKi9cbihmdW5jXG4vKjogKHByb3BzOiBQcm9wcywgY2FjaGU6IEVtb3Rpb25DYWNoZSwgcmVmOiBSZWYpID0+IFJlYWN0Lk5vZGUgKi9cbilcbi8qOiBSZWFjdC5BYnN0cmFjdENvbXBvbmVudDxQcm9wcz4gKi9cbntcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wc1xuICAvKjogUHJvcHMgKi9cbiAgLCByZWZcbiAgLyo6IFJlZiAqL1xuICApIHtcbiAgICAvLyB0aGUgY2FjaGUgd2lsbCBuZXZlciBiZSBudWxsIGluIHRoZSBicm93c2VyXG4gICAgdmFyIGNhY2hlID0gdXNlQ29udGV4dChFbW90aW9uQ2FjaGVDb250ZXh0KTtcbiAgICByZXR1cm4gZnVuYyhwcm9wcywgY2FjaGUsIHJlZik7XG4gIH0pO1xufTtcblxudmFyIFRoZW1lQ29udGV4dCA9IC8qICNfX1BVUkVfXyAqL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgdXNlVGhlbWUgPSBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbn07XG5cbnZhciBnZXRUaGVtZSA9IGZ1bmN0aW9uIGdldFRoZW1lKG91dGVyVGhlbWVcbi8qOiBPYmplY3QgKi9cbiwgdGhlbWVcbi8qOiBPYmplY3QgfCAoT2JqZWN0ID0+IE9iamVjdCkgKi9cbikge1xuICBpZiAodHlwZW9mIHRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIG1lcmdlZFRoZW1lID0gdGhlbWUob3V0ZXJUaGVtZSk7XG5cbiAgICByZXR1cm4gbWVyZ2VkVGhlbWU7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIG91dGVyVGhlbWUsIHRoZW1lKTtcbn07XG5cbnZhciBjcmVhdGVDYWNoZVdpdGhUaGVtZSA9IC8qICNfX1BVUkVfXyAqL3dlYWtNZW1vaXplKGZ1bmN0aW9uIChvdXRlclRoZW1lKSB7XG4gIHJldHVybiB3ZWFrTWVtb2l6ZShmdW5jdGlvbiAodGhlbWUpIHtcbiAgICByZXR1cm4gZ2V0VGhlbWUob3V0ZXJUaGVtZSwgdGhlbWUpO1xuICB9KTtcbn0pO1xuLypcbnR5cGUgVGhlbWVQcm92aWRlclByb3BzID0ge1xuICB0aGVtZTogT2JqZWN0IHwgKE9iamVjdCA9PiBPYmplY3QpLFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZVxufVxuKi9cblxudmFyIFRoZW1lUHJvdmlkZXIgPSBmdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzXG4vKjogVGhlbWVQcm92aWRlclByb3BzICovXG4pIHtcbiAgdmFyIHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuXG4gIGlmIChwcm9wcy50aGVtZSAhPT0gdGhlbWUpIHtcbiAgICB0aGVtZSA9IGNyZWF0ZUNhY2hlV2l0aFRoZW1lKHRoZW1lKShwcm9wcy50aGVtZSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRoZW1lXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5mdW5jdGlvbiB3aXRoVGhlbWVcbi8qIDxDb25maWc6IHt9PiAqL1xuKENvbXBvbmVudFxuLyo6IFJlYWN0LkFic3RyYWN0Q29tcG9uZW50PENvbmZpZz4gKi9cbilcbi8qOiBSZWFjdC5BYnN0cmFjdENvbXBvbmVudDwkRGlmZjxDb25maWcsIHsgdGhlbWU6IE9iamVjdCB9Pj4gKi9cbntcbiAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihwcm9wcywgcmVmKSB7XG4gICAgdmFyIHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgcHJvcHMpKTtcbiAgfTtcblxuICB2YXIgV2l0aFRoZW1lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYocmVuZGVyKTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBjb21wb25lbnROYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhXaXRoVGhlbWUsIENvbXBvbmVudCk7XG59XG5cbnZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIHR5cGVQcm9wTmFtZSA9ICdfX0VNT1RJT05fVFlQRV9QTEVBU0VfRE9fTk9UX1VTRV9fJztcbnZhciBjcmVhdGVFbW90aW9uUHJvcHMgPSBmdW5jdGlvbiBjcmVhdGVFbW90aW9uUHJvcHModHlwZVxuLyo6IFJlYWN0LkVsZW1lbnRUeXBlICovXG4sIHByb3BzXG4vKjogT2JqZWN0ICovXG4pIHtcblxuICB2YXIgbmV3UHJvcHNcbiAgLyo6IGFueSAqL1xuICA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd24uY2FsbChwcm9wcywga2V5KSkge1xuICAgICAgbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9XG5cbiAgbmV3UHJvcHNbdHlwZVByb3BOYW1lXSA9IHR5cGU7IC8vIFJ1bnRpbWUgbGFiZWxpbmcgaXMgYW4gb3B0LWluIGZlYXR1cmUgYmVjYXVzZTpcblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgSW5zZXJ0aW9uID0gZnVuY3Rpb24gSW5zZXJ0aW9uKF9yZWYpIHtcbiAgdmFyIGNhY2hlID0gX3JlZi5jYWNoZSxcbiAgICAgIHNlcmlhbGl6ZWQgPSBfcmVmLnNlcmlhbGl6ZWQsXG4gICAgICBpc1N0cmluZ1RhZyA9IF9yZWYuaXNTdHJpbmdUYWc7XG4gIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZyk7XG4gIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG52YXIgRW1vdGlvbiA9IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoXG4vKiA8YW55LCBhbnk+ICovXG5mdW5jdGlvbiAocHJvcHMsIGNhY2hlLCByZWYpIHtcbiAgdmFyIGNzc1Byb3AgPSBwcm9wcy5jc3M7IC8vIHNvIHRoYXQgdXNpbmcgYGNzc2AgZnJvbSBgZW1vdGlvbmAgYW5kIHBhc3NpbmcgdGhlIHJlc3VsdCB0byB0aGUgY3NzIHByb3Agd29ya3NcbiAgLy8gbm90IHBhc3NpbmcgdGhlIHJlZ2lzdGVyZWQgY2FjaGUgdG8gc2VyaWFsaXplU3R5bGVzIGJlY2F1c2UgaXQgd291bGRcbiAgLy8gbWFrZSBjZXJ0YWluIGJhYmVsIG9wdGltaXNhdGlvbnMgbm90IHBvc3NpYmxlXG5cbiAgaWYgKHR5cGVvZiBjc3NQcm9wID09PSAnc3RyaW5nJyAmJiBjYWNoZS5yZWdpc3RlcmVkW2Nzc1Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICBjc3NQcm9wID0gY2FjaGUucmVnaXN0ZXJlZFtjc3NQcm9wXTtcbiAgfVxuXG4gIHZhciBXcmFwcGVkQ29tcG9uZW50ID0gcHJvcHNbdHlwZVByb3BOYW1lXTtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbY3NzUHJvcF07XG4gIHZhciBjbGFzc05hbWUgPSAnJztcblxuICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc05hbWUgPSBnZXRSZWdpc3RlcmVkU3R5bGVzKGNhY2hlLnJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIHByb3BzLmNsYXNzTmFtZSk7XG4gIH0gZWxzZSBpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIHtcbiAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIjtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKHJlZ2lzdGVyZWRTdHlsZXMsIHVuZGVmaW5lZCwgUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpKTtcblxuICBjbGFzc05hbWUgKz0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChoYXNPd24uY2FsbChwcm9wcywga2V5KSAmJiBrZXkgIT09ICdjc3MnICYmIGtleSAhPT0gdHlwZVByb3BOYW1lICYmICghaXNEZXZlbG9wbWVudCApKSB7XG4gICAgICBuZXdQcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gIH1cblxuICBuZXdQcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cbiAgaWYgKHJlZikge1xuICAgIG5ld1Byb3BzLnJlZiA9IHJlZjtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zZXJ0aW9uLCB7XG4gICAgY2FjaGU6IGNhY2hlLFxuICAgIHNlcmlhbGl6ZWQ6IHNlcmlhbGl6ZWQsXG4gICAgaXNTdHJpbmdUYWc6IHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgbmV3UHJvcHMpKTtcbn0pO1xuXG52YXIgRW1vdGlvbiQxID0gRW1vdGlvbjtcblxuZXhwb3J0IHsgQ2FjaGVQcm92aWRlciBhcyBDLCBFbW90aW9uJDEgYXMgRSwgVGhlbWVDb250ZXh0IGFzIFQsIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSBhcyBfLCBUaGVtZVByb3ZpZGVyIGFzIGEsIHdpdGhUaGVtZSBhcyBiLCBjcmVhdGVFbW90aW9uUHJvcHMgYXMgYywgaGFzT3duIGFzIGgsIGlzRGV2ZWxvcG1lbnQgYXMgaSwgdXNlVGhlbWUgYXMgdSwgd2l0aEVtb3Rpb25DYWNoZSBhcyB3IH07XG4iLCJpbXBvcnQgeyBoIGFzIGhhc093biwgRSBhcyBFbW90aW9uLCBjIGFzIGNyZWF0ZUVtb3Rpb25Qcm9wcywgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBUIGFzIFRoZW1lQ29udGV4dCwgaSBhcyBpc0RldmVsb3BtZW50IH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtNTQ4NmM1MWMuYnJvd3Nlci5lc20uanMnO1xuZXhwb3J0IHsgQyBhcyBDYWNoZVByb3ZpZGVyLCBUIGFzIFRoZW1lQ29udGV4dCwgYSBhcyBUaGVtZVByb3ZpZGVyLCBfIGFzIF9fdW5zYWZlX3VzZUVtb3Rpb25DYWNoZSwgdSBhcyB1c2VUaGVtZSwgdyBhcyB3aXRoRW1vdGlvbkNhY2hlLCBiIGFzIHdpdGhUaGVtZSB9IGZyb20gJy4vZW1vdGlvbi1lbGVtZW50LTU0ODZjNTFjLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluc2VydFN0eWxlcywgcmVnaXN0ZXJTdHlsZXMsIGdldFJlZ2lzdGVyZWRTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2ssIHVzZUluc2VydGlvbkVmZmVjdEFsd2F5c1dpdGhTeW5jRmFsbGJhY2sgfSBmcm9tICdAZW1vdGlvbi91c2UtaW5zZXJ0aW9uLWVmZmVjdC13aXRoLWZhbGxiYWNrcyc7XG5pbXBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfSBmcm9tICdAZW1vdGlvbi9zZXJpYWxpemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9jYWNoZSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgJ0BlbW90aW9uL3dlYWstbWVtb2l6ZSc7XG5pbXBvcnQgJy4uL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxudmFyIGpzeFxuLyo6IHR5cGVvZiBSZWFjdC5jcmVhdGVFbGVtZW50ICovXG49IGZ1bmN0aW9uIGpzeFxuLyo6IHR5cGVvZiBSZWFjdC5jcmVhdGVFbGVtZW50ICovXG4odHlwZVxuLyo6IFJlYWN0LkVsZW1lbnRUeXBlICovXG4sIHByb3BzXG4vKjogT2JqZWN0ICovXG4pIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgaWYgKHByb3BzID09IG51bGwgfHwgIWhhc093bi5jYWxsKHByb3BzLCAnY3NzJykpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9XG5cbiAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gRW1vdGlvbjtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xufTtcblxuLy8gaW5pdGlhbCByZW5kZXIgZnJvbSBicm93c2VyLCBpbnNlcnRCZWZvcmUgY29udGV4dC5zaGVldC50YWdzWzBdIG9yIGlmIGEgc3R5bGUgaGFzbid0IGJlZW4gaW5zZXJ0ZWQgdGhlcmUgeWV0LCBhcHBlbmRDaGlsZFxuLy8gaW5pdGlhbCBjbGllbnQtc2lkZSByZW5kZXIgZnJvbSBTU1IsIHVzZSBwbGFjZSBvZiBoeWRyYXRpbmcgdGFnXG5cbnZhciBHbG9iYWxcbi8qOiBSZWFjdC5BYnN0cmFjdENvbXBvbmVudDxcbkdsb2JhbFByb3BzXG4+ICovXG49IC8qICNfX1BVUkVfXyAqL3dpdGhFbW90aW9uQ2FjaGUoZnVuY3Rpb24gKHByb3BzXG4vKjogR2xvYmFsUHJvcHMgKi9cbiwgY2FjaGUpIHtcblxuICB2YXIgc3R5bGVzID0gcHJvcHMuc3R5bGVzO1xuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc3R5bGVzXSwgdW5kZWZpbmVkLCBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCkpO1xuICAvLyBidXQgaXQgaXMgYmFzZWQgb24gYSBjb25zdGFudCB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlIGF0IHJ1bnRpbWVcbiAgLy8gaXQncyBlZmZlY3RpdmVseSBsaWtlIGhhdmluZyB0d28gaW1wbGVtZW50YXRpb25zIGFuZCBzd2l0Y2hpbmcgdGhlbSBvdXRcbiAgLy8gc28gaXQncyBub3QgYWN0dWFsbHkgYnJlYWtpbmcgYW55dGhpbmdcblxuXG4gIHZhciBzaGVldFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXkgPSBjYWNoZS5rZXkgKyBcIi1nbG9iYWxcIjsgLy8gdXNlIGNhc2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi9pc3N1ZXMvMjY3NVxuXG4gICAgdmFyIHNoZWV0ID0gbmV3IGNhY2hlLnNoZWV0LmNvbnN0cnVjdG9yKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgbm9uY2U6IGNhY2hlLnNoZWV0Lm5vbmNlLFxuICAgICAgY29udGFpbmVyOiBjYWNoZS5zaGVldC5jb250YWluZXIsXG4gICAgICBzcGVlZHk6IGNhY2hlLnNoZWV0LmlzU3BlZWR5XG4gICAgfSk7XG4gICAgdmFyIHJlaHlkcmF0aW5nID0gZmFsc2U7XG4gICAgdmFyIG5vZGVcbiAgICAvKjogSFRNTFN0eWxlRWxlbWVudCB8IG51bGwqL1xuICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtZW1vdGlvbj1cXFwiXCIgKyBrZXkgKyBcIiBcIiArIHNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAoY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGNhY2hlLnNoZWV0LnRhZ3NbMF07XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlaHlkcmF0aW5nID0gdHJ1ZTsgLy8gY2xlYXIgdGhlIGhhc2ggc28gdGhpcyBub2RlIHdvbid0IGJlIHJlY29nbml6YWJsZSBhcyByZWh5ZHJhdGFibGUgYnkgb3RoZXIgPEdsb2JhbC8+c1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywga2V5KTtcbiAgICAgIHNoZWV0Lmh5ZHJhdGUoW25vZGVdKTtcbiAgICB9XG5cbiAgICBzaGVldFJlZi5jdXJyZW50ID0gW3NoZWV0LCByZWh5ZHJhdGluZ107XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfTtcbiAgfSwgW2NhY2hlXSk7XG4gIHVzZUluc2VydGlvbkVmZmVjdFdpdGhMYXlvdXRGYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNoZWV0UmVmQ3VycmVudCA9IHNoZWV0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRSZWZDdXJyZW50WzBdLFxuICAgICAgICByZWh5ZHJhdGluZyA9IHNoZWV0UmVmQ3VycmVudFsxXTtcblxuICAgIGlmIChyZWh5ZHJhdGluZykge1xuICAgICAgc2hlZXRSZWZDdXJyZW50WzFdID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlcmlhbGl6ZWQubmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBpbnNlcnQga2V5ZnJhbWVzXG4gICAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQubmV4dCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICAvLyBpZiB0aGlzIGRvZXNuJ3QgZXhpc3QgdGhlbiBpdCB3aWxsIGJlIG51bGwgc28gdGhlIHN0eWxlIGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZFxuICAgICAgdmFyIGVsZW1lbnQgPSBzaGVldC50YWdzW3NoZWV0LnRhZ3MubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgc2hlZXQuYmVmb3JlID0gZWxlbWVudDtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgY2FjaGUuaW5zZXJ0KFwiXCIsIHNlcmlhbGl6ZWQsIHNoZWV0LCBmYWxzZSk7XG4gIH0sIFtjYWNoZSwgc2VyaWFsaXplZC5uYW1lXSk7XG4gIHJldHVybiBudWxsO1xufSk7XG5cbi8qIGltcG9ydCB0eXBlIHsgSW50ZXJwb2xhdGlvbiwgU2VyaWFsaXplZFN0eWxlcyB9IGZyb20gJ0BlbW90aW9uL3V0aWxzJyAqL1xuXG5mdW5jdGlvbiBjc3MoKVxuLyo6IFNlcmlhbGl6ZWRTdHlsZXMgKi9cbntcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVTdHlsZXMoYXJncyk7XG59XG5cbi8qXG50eXBlIEtleWZyYW1lcyA9IHt8XG4gIG5hbWU6IHN0cmluZyxcbiAgc3R5bGVzOiBzdHJpbmcsXG4gIGFuaW06IDEsXG4gIHRvU3RyaW5nOiAoKSA9PiBzdHJpbmdcbnx9ICYgc3RyaW5nXG4qL1xuXG52YXIga2V5ZnJhbWVzID0gZnVuY3Rpb25cbiAgLyo6IEtleWZyYW1lcyAqL1xua2V5ZnJhbWVzKCkge1xuICB2YXIgaW5zZXJ0YWJsZSA9IGNzcy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gIHZhciBuYW1lID0gXCJhbmltYXRpb24tXCIgKyBpbnNlcnRhYmxlLm5hbWU7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBzdHlsZXM6IFwiQGtleWZyYW1lcyBcIiArIG5hbWUgKyBcIntcIiArIGluc2VydGFibGUuc3R5bGVzICsgXCJ9XCIsXG4gICAgYW5pbTogMSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gXCJfRU1PX1wiICsgdGhpcy5uYW1lICsgXCJfXCIgKyB0aGlzLnN0eWxlcyArIFwiX0VNT19cIjtcbiAgICB9XG4gIH07XG59O1xuXG4vKlxudHlwZSBDbGFzc05hbWVBcmcgPVxuICB8IHN0cmluZ1xuICB8IGJvb2xlYW5cbiAgfCB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfVxuICB8IEFycmF5PENsYXNzTmFtZUFyZz5cbiAgfCBudWxsXG4gIHwgdm9pZFxuKi9cblxudmFyIGNsYXNzbmFtZXMgPSBmdW5jdGlvblxuICAvKjogc3RyaW5nICovXG5jbGFzc25hbWVzKGFyZ3Ncbi8qOiBBcnJheTxDbGFzc05hbWVBcmc+ICovXG4pIHtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBjbHMgPSAnJztcblxuICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgaWYgKGFyZyA9PSBudWxsKSBjb250aW51ZTtcbiAgICB2YXIgdG9BZGQgPSB2b2lkIDA7XG5cbiAgICBzd2l0Y2ggKHR5cGVvZiBhcmcpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgICAgIHRvQWRkID0gY2xhc3NuYW1lcyhhcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRvQWRkID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gYXJnKSB7XG4gICAgICAgICAgICAgIGlmIChhcmdba10gJiYgaykge1xuICAgICAgICAgICAgICAgIHRvQWRkICYmICh0b0FkZCArPSAnICcpO1xuICAgICAgICAgICAgICAgIHRvQWRkICs9IGs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB7XG4gICAgICAgICAgdG9BZGQgPSBhcmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9BZGQpIHtcbiAgICAgIGNscyAmJiAoY2xzICs9ICcgJyk7XG4gICAgICBjbHMgKz0gdG9BZGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNscztcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKHJlZ2lzdGVyZWRcbi8qOiBPYmplY3QgKi9cbiwgY3NzXG4vKjogKC4uLmFyZ3M6IEFycmF5PGFueT4pID0+IHN0cmluZyAqL1xuLCBjbGFzc05hbWVcbi8qOiBzdHJpbmcgKi9cbikge1xuICB2YXIgcmVnaXN0ZXJlZFN0eWxlcyA9IFtdO1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gZ2V0UmVnaXN0ZXJlZFN0eWxlcyhyZWdpc3RlcmVkLCByZWdpc3RlcmVkU3R5bGVzLCBjbGFzc05hbWUpO1xuXG4gIGlmIChyZWdpc3RlcmVkU3R5bGVzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xuICB9XG5cbiAgcmV0dXJuIHJhd0NsYXNzTmFtZSArIGNzcyhyZWdpc3RlcmVkU3R5bGVzKTtcbn1cblxudmFyIEluc2VydGlvbiA9IGZ1bmN0aW9uIEluc2VydGlvbihfcmVmKSB7XG4gIHZhciBjYWNoZSA9IF9yZWYuY2FjaGUsXG4gICAgICBzZXJpYWxpemVkQXJyID0gX3JlZi5zZXJpYWxpemVkQXJyO1xuICB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrKGZ1bmN0aW9uICgpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VyaWFsaXplZEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkQXJyW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG4vKlxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46ICh7XG4gICAgY3NzOiAoLi4uYXJnczogYW55KSA9PiBzdHJpbmcsXG4gICAgY3g6ICguLi5hcmdzOiBBcnJheTxDbGFzc05hbWVBcmc+KSA9PiBzdHJpbmcsXG4gICAgdGhlbWU6IE9iamVjdFxuICB9KSA9PiBSZWFjdC5Ob2RlXG59ICovXG5cblxudmFyIENsYXNzTmFtZXNcbi8qOiBSZWFjdC5BYnN0cmFjdENvbXBvbmVudDxQcm9wcz4qL1xuPSAvKiAjX19QVVJFX18gKi93aXRoRW1vdGlvbkNhY2hlKGZ1bmN0aW9uIChwcm9wcywgY2FjaGUpIHtcbiAgdmFyIGhhc1JlbmRlcmVkID0gZmFsc2U7XG4gIHZhciBzZXJpYWxpemVkQXJyID0gW107XG5cbiAgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICBpZiAoaGFzUmVuZGVyZWQgJiYgaXNEZXZlbG9wbWVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjc3MgY2FuIG9ubHkgYmUgdXNlZCBkdXJpbmcgcmVuZGVyJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBzZXJpYWxpemVkID0gc2VyaWFsaXplU3R5bGVzKGFyZ3MsIGNhY2hlLnJlZ2lzdGVyZWQpO1xuICAgIHNlcmlhbGl6ZWRBcnIucHVzaChzZXJpYWxpemVkKTsgLy8gcmVnaXN0cmF0aW9uIGhhcyB0byBoYXBwZW4gaGVyZSBhcyB0aGUgcmVzdWx0IG9mIHRoaXMgbWlnaHQgZ2V0IGNvbnN1bWVkIGJ5IGBjeGBcblxuICAgIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBmYWxzZSk7XG4gICAgcmV0dXJuIGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuICB9O1xuXG4gIHZhciBjeCA9IGZ1bmN0aW9uIGN4KCkge1xuICAgIGlmIChoYXNSZW5kZXJlZCAmJiBpc0RldmVsb3BtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N4IGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZShjYWNoZS5yZWdpc3RlcmVkLCBjc3MsIGNsYXNzbmFtZXMoYXJncykpO1xuICB9O1xuXG4gIHZhciBjb250ZW50ID0ge1xuICAgIGNzczogY3NzLFxuICAgIGN4OiBjeCxcbiAgICB0aGVtZTogUmVhY3QudXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gIH07XG4gIHZhciBlbGUgPSBwcm9wcy5jaGlsZHJlbihjb250ZW50KTtcbiAgaGFzUmVuZGVyZWQgPSB0cnVlO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluc2VydGlvbiwge1xuICAgIGNhY2hlOiBjYWNoZSxcbiAgICBzZXJpYWxpemVkQXJyOiBzZXJpYWxpemVkQXJyXG4gIH0pLCBlbGUpO1xufSk7XG5cbmV4cG9ydCB7IENsYXNzTmFtZXMsIEdsb2JhbCwganN4IGFzIGNyZWF0ZUVsZW1lbnQsIGNzcywganN4LCBrZXlmcmFtZXMgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbi8vIFBvcnRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hYXBwbGVieS9zbWhhc2hlci9ibG9iLzYxYTA1MzBmMjgyNzdmMmU4NTBiZmMzOTYwMGNlNjFkMDJiNTE4ZGUvc3JjL011cm11ckhhc2gyLmNwcCNMMzctTDg2XG5mdW5jdGlvbiBtdXJtdXIyKHN0cikge1xuICAvLyAnbScgYW5kICdyJyBhcmUgbWl4aW5nIGNvbnN0YW50cyBnZW5lcmF0ZWQgb2ZmbGluZS5cbiAgLy8gVGhleSdyZSBub3QgcmVhbGx5ICdtYWdpYycsIHRoZXkganVzdCBoYXBwZW4gdG8gd29yayB3ZWxsLlxuICAvLyBjb25zdCBtID0gMHg1YmQxZTk5NTtcbiAgLy8gY29uc3QgciA9IDI0O1xuICAvLyBJbml0aWFsaXplIHRoZSBoYXNoXG4gIHZhciBoID0gMDsgLy8gTWl4IDQgYnl0ZXMgYXQgYSB0aW1lIGludG8gdGhlIGhhc2hcblxuICB2YXIgayxcbiAgICAgIGkgPSAwLFxuICAgICAgbGVuID0gc3RyLmxlbmd0aDtcblxuICBmb3IgKDsgbGVuID49IDQ7ICsraSwgbGVuIC09IDQpIHtcbiAgICBrID0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmIHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCA4IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAxNiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQ7XG4gICAgayA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gICAgayBePVxuICAgIC8qIGsgPj4+IHI6ICovXG4gICAgayA+Pj4gMjQ7XG4gICAgaCA9XG4gICAgLyogTWF0aC5pbXVsKGssIG0pOiAqL1xuICAgIChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGsgPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNikgXlxuICAgIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIEhhbmRsZSB0aGUgbGFzdCBmZXcgYnl0ZXMgb2YgdGhlIGlucHV0IGFycmF5XG5cblxuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMzpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAyKSAmIDB4ZmYpIDw8IDE2O1xuXG4gICAgY2FzZSAyOlxuICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcblxuICAgIGNhc2UgMTpcbiAgICAgIGggXj0gc3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmO1xuICAgICAgaCA9XG4gICAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgICAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChoID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICB9IC8vIERvIGEgZmV3IGZpbmFsIG1peGVzIG9mIHRoZSBoYXNoIHRvIGVuc3VyZSB0aGUgbGFzdCBmZXdcbiAgLy8gYnl0ZXMgYXJlIHdlbGwtaW5jb3Jwb3JhdGVkLlxuXG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9XG4gIC8qIE1hdGguaW11bChoLCBtKTogKi9cbiAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgcmV0dXJuICgoaCBeIGggPj4+IDE1KSA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnQgeyBtdXJtdXIyIGFzIGRlZmF1bHQgfTtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBhc3BlY3RSYXRpbzogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IHsgdW5pdGxlc3NLZXlzIGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgbWVtb2l6ZSBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIGlzRGV2ZWxvcG1lbnQgPSBmYWxzZTtcblxudmFyIGh5cGhlbmF0ZVJlZ2V4ID0gL1tBLVpdfF5tcy9nO1xudmFyIGFuaW1hdGlvblJlZ2V4ID0gL19FTU9fKFteX10rPylfKFteXSo/KV9FTU9fL2c7XG5cbnZhciBpc0N1c3RvbVByb3BlcnR5ID0gZnVuY3Rpb24gaXNDdXN0b21Qcm9wZXJ0eShwcm9wZXJ0eSkge1xuICByZXR1cm4gcHJvcGVydHkuY2hhckNvZGVBdCgxKSA9PT0gNDU7XG59O1xuXG52YXIgaXNQcm9jZXNzYWJsZVZhbHVlID0gZnVuY3Rpb24gaXNQcm9jZXNzYWJsZVZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nO1xufTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgcmV0dXJuIGlzQ3VzdG9tUHJvcGVydHkoc3R5bGVOYW1lKSA/IHN0eWxlTmFtZSA6IHN0eWxlTmFtZS5yZXBsYWNlKGh5cGhlbmF0ZVJlZ2V4LCAnLSQmJykudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG52YXIgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gIHN3aXRjaCAoa2V5KSB7XG4gICAgY2FzZSAnYW5pbWF0aW9uJzpcbiAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShhbmltYXRpb25SZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgbmFtZTogcDEsXG4gICAgICAgICAgICAgIHN0eWxlczogcDIsXG4gICAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBwMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgaWYgKHVuaXRsZXNzW2tleV0gIT09IDEgJiYgIWlzQ3VzdG9tUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgJ3B4JztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSA9ICdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCAnICsgJ0BlbW90aW9uL2JhYmVsLXBsdWdpbiwgdGhlIHN3YyBFbW90aW9uIHBsdWdpbiwgb3IgYW5vdGhlciBFbW90aW9uLWF3YXJlICcgKyAnY29tcGlsZXIgdHJhbnNmb3JtLic7XG5cbmZ1bmN0aW9uIGhhbmRsZUludGVycG9sYXRpb24obWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIGludGVycG9sYXRpb24pIHtcbiAgaWYgKGludGVycG9sYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHZhciBjb21wb25lbnRTZWxlY3RvciA9IGludGVycG9sYXRpb247XG5cbiAgaWYgKGNvbXBvbmVudFNlbGVjdG9yLl9fZW1vdGlvbl9zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudFNlbGVjdG9yO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgaW50ZXJwb2xhdGlvbikge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAge1xuICAgICAgICB2YXIga2V5ZnJhbWVzID0gaW50ZXJwb2xhdGlvbjtcblxuICAgICAgICBpZiAoa2V5ZnJhbWVzLmFuaW0gPT09IDEpIHtcbiAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICBuYW1lOiBrZXlmcmFtZXMubmFtZSxcbiAgICAgICAgICAgIHN0eWxlczoga2V5ZnJhbWVzLnN0eWxlcyxcbiAgICAgICAgICAgIG5leHQ6IGN1cnNvclxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGtleWZyYW1lcy5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRTdHlsZXMgPSBpbnRlcnBvbGF0aW9uO1xuXG4gICAgICAgIGlmIChzZXJpYWxpemVkU3R5bGVzLnN0eWxlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBzZXJpYWxpemVkU3R5bGVzLm5leHQ7XG5cbiAgICAgICAgICBpZiAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIG1vc3QgZWZmaWNpZW50IHRoaW5nIGV2ZXIgYnV0IHRoaXMgaXMgYSBwcmV0dHkgcmFyZSBjYXNlXG4gICAgICAgICAgICAvLyBhbmQgdGhlcmUgd2lsbCBiZSB2ZXJ5IGZldyBpdGVyYXRpb25zIG9mIHRoaXMgZ2VuZXJhbGx5XG4gICAgICAgICAgICB3aGlsZSAobmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuZXh0Lm5hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGVzOiBuZXh0LnN0eWxlcyxcbiAgICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbmV4dCA9IG5leHQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc3R5bGVzID0gc2VyaWFsaXplZFN0eWxlcy5zdHlsZXMgKyBcIjtcIjtcblxuICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgaW50ZXJwb2xhdGlvbik7XG4gICAgICB9XG5cbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIGlmIChtZXJnZWRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzQ3Vyc29yID0gY3Vyc29yO1xuICAgICAgICAgIHZhciByZXN1bHQgPSBpbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzKTtcbiAgICAgICAgICBjdXJzb3IgPSBwcmV2aW91c0N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgcmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICB9IC8vIGZpbmFsaXplIHN0cmluZyB2YWx1ZXMgKHJlZ3VsYXIgc3RyaW5ncyBhbmQgZnVuY3Rpb25zIGludGVycG9sYXRlZCBpbnRvIGNzcyBjYWxscylcblxuXG4gIHZhciBhc1N0cmluZyA9IGludGVycG9sYXRpb247XG5cbiAgaWYgKHJlZ2lzdGVyZWQgPT0gbnVsbCkge1xuICAgIHJldHVybiBhc1N0cmluZztcbiAgfVxuXG4gIHZhciBjYWNoZWQgPSByZWdpc3RlcmVkW2FzU3RyaW5nXTtcbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkID8gY2FjaGVkIDogYXNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmluZ0Zyb21PYmplY3QobWVyZ2VkUHJvcHMsIHJlZ2lzdGVyZWQsIG9iaikge1xuICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdHJpbmcgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqW2ldKSArIFwiO1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGFzU3RyaW5nID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQgIT0gbnVsbCAmJiByZWdpc3RlcmVkW2FzU3RyaW5nXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3RyaW5nICs9IGtleSArIFwie1wiICsgcmVnaXN0ZXJlZFthc1N0cmluZ10gKyBcIn1cIjtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb2Nlc3NhYmxlVmFsdWUoYXNTdHJpbmcpKSB7XG4gICAgICAgICAgc3RyaW5nICs9IHByb2Nlc3NTdHlsZU5hbWUoa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCBhc1N0cmluZykgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ05PX0NPTVBPTkVOVF9TRUxFQ1RPUicgJiYgaXNEZXZlbG9wbWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihub0NvbXBvbmVudFNlbGVjdG9yTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKGtleSkgKyBcIjpcIiArIHByb2Nlc3NTdHlsZVZhbHVlKGtleSwgdmFsdWVbX2ldKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaW50ZXJwb2xhdGVkID0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgdmFsdWUpO1xuXG4gICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKGtleSkgKyBcIjpcIiArIGludGVycG9sYXRlZCArIFwiO1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBrZXkgKyBcIntcIiArIGludGVycG9sYXRlZCArIFwifVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxudmFyIGxhYmVsUGF0dGVybiA9IC9sYWJlbDpcXHMqKFteXFxzO1xcbntdKylcXHMqKDt8JCkvZztcbi8vIGtleWZyYW1lcyBhcmUgc3RvcmVkIG9uIHRoZSBTZXJpYWxpemVkU3R5bGVzIG9iamVjdCBhcyBhIGxpbmtlZCBsaXN0XG5cblxudmFyIGN1cnNvcjtcbmZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgJiYgYXJnc1swXS5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgdmFyIHN0cmluZ01vZGUgPSB0cnVlO1xuICB2YXIgc3R5bGVzID0gJyc7XG4gIGN1cnNvciA9IHVuZGVmaW5lZDtcbiAgdmFyIHN0cmluZ3MgPSBhcmdzWzBdO1xuXG4gIGlmIChzdHJpbmdzID09IG51bGwgfHwgc3RyaW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGFzVGVtcGxhdGVTdHJpbmdzQXJyID0gc3RyaW5ncztcblxuICAgIHN0eWxlcyArPSBhc1RlbXBsYXRlU3RyaW5nc0FyclswXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSk7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgdmFyIHRlbXBsYXRlU3RyaW5nc0FyciA9IHN0cmluZ3M7XG5cbiAgICAgIHN0eWxlcyArPSB0ZW1wbGF0ZVN0cmluZ3NBcnJbaV07XG4gICAgfVxuICB9XG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyBtYXRjaFsxXTtcbiAgfVxuXG4gIHZhciBuYW1lID0gaGFzaFN0cmluZyhzdHlsZXMpICsgaWRlbnRpZmllck5hbWU7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogc3R5bGVzLFxuICAgIG5leHQ6IGN1cnNvclxuICB9O1xufVxuXG5leHBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIHN5bmNGYWxsYmFjayA9IGZ1bmN0aW9uIHN5bmNGYWxsYmFjayhjcmVhdGUpIHtcbiAgcmV0dXJuIGNyZWF0ZSgpO1xufTtcblxudmFyIHVzZUluc2VydGlvbkVmZmVjdCA9IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddID8gUmVhY3RbJ3VzZUluc2VydGlvbicgKyAnRWZmZWN0J10gOiBmYWxzZTtcbnZhciB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrID0gdXNlSW5zZXJ0aW9uRWZmZWN0IHx8IHN5bmNGYWxsYmFjaztcbnZhciB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2sgPSB1c2VJbnNlcnRpb25FZmZlY3QgfHwgUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuXG5leHBvcnQgeyB1c2VJbnNlcnRpb25FZmZlY3RBbHdheXNXaXRoU3luY0ZhbGxiYWNrLCB1c2VJbnNlcnRpb25FZmZlY3RXaXRoTGF5b3V0RmFsbGJhY2sgfTtcbiIsInZhciBpc0Jyb3dzZXIgPSB0cnVlO1xuXG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU3R5bGVzKHJlZ2lzdGVyZWQsIHJlZ2lzdGVyZWRTdHlsZXMsIGNsYXNzTmFtZXMpIHtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9ICcnO1xuICBjbGFzc05hbWVzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHJlZ2lzdGVyZWRbY2xhc3NOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZWdpc3RlcmVkU3R5bGVzLnB1c2gocmVnaXN0ZXJlZFtjbGFzc05hbWVdICsgXCI7XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXdDbGFzc05hbWUgKz0gY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJhd0NsYXNzTmFtZTtcbn1cbnZhciByZWdpc3RlclN0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZykge1xuICB2YXIgY2xhc3NOYW1lID0gY2FjaGUua2V5ICsgXCItXCIgKyBzZXJpYWxpemVkLm5hbWU7XG5cbiAgaWYgKCAvLyB3ZSBvbmx5IG5lZWQgdG8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIHJlZ2lzdGVyZWQgY2FjaGUgaWYgdGhlXG4gIC8vIGNsYXNzIG5hbWUgY291bGQgYmUgdXNlZCBmdXJ0aGVyIGRvd25cbiAgLy8gdGhlIHRyZWUgYnV0IGlmIGl0J3MgYSBzdHJpbmcgdGFnLCB3ZSBrbm93IGl0IHdvbid0XG4gIC8vIHNvIHdlIGRvbid0IGhhdmUgdG8gYWRkIGl0IHRvIHJlZ2lzdGVyZWQgY2FjaGUuXG4gIC8vIHRoaXMgaW1wcm92ZXMgbWVtb3J5IHVzYWdlIHNpbmNlIHdlIGNhbiBhdm9pZCBzdG9yaW5nIHRoZSB3aG9sZSBzdHlsZSBzdHJpbmdcbiAgKGlzU3RyaW5nVGFnID09PSBmYWxzZSB8fCAvLyB3ZSBuZWVkIHRvIGFsd2F5cyBzdG9yZSBpdCBpZiB3ZSdyZSBpbiBjb21wYXQgbW9kZSBhbmRcbiAgLy8gaW4gbm9kZSBzaW5jZSBlbW90aW9uLXNlcnZlciByZWxpZXMgb24gd2hldGhlciBhIHN0eWxlIGlzIGluXG4gIC8vIHRoZSByZWdpc3RlcmVkIGNhY2hlIHRvIGtub3cgd2hldGhlciBhIHN0eWxlIGlzIGdsb2JhbCBvciBub3RcbiAgLy8gYWxzbywgbm90ZSB0aGF0IHRoaXMgY2hlY2sgd2lsbCBiZSBkZWFkIGNvZGUgZWxpbWluYXRlZCBpbiB0aGUgYnJvd3NlclxuICBpc0Jyb3dzZXIgPT09IGZhbHNlICkgJiYgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWNoZS5yZWdpc3RlcmVkW2NsYXNzTmFtZV0gPSBzZXJpYWxpemVkLnN0eWxlcztcbiAgfVxufTtcbnZhciBpbnNlcnRTdHlsZXMgPSBmdW5jdGlvbiBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQsIGlzU3RyaW5nVGFnKSB7XG4gIHJlZ2lzdGVyU3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkLCBpc1N0cmluZ1RhZyk7XG4gIHZhciBjbGFzc05hbWUgPSBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcblxuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzZXJpYWxpemVkO1xuXG4gICAgZG8ge1xuICAgICAgY2FjaGUuaW5zZXJ0KHNlcmlhbGl6ZWQgPT09IGN1cnJlbnQgPyBcIi5cIiArIGNsYXNzTmFtZSA6ICcnLCBjdXJyZW50LCBjYWNoZS5zaGVldCwgdHJ1ZSk7XG5cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSB3aGlsZSAoY3VycmVudCAhPT0gdW5kZWZpbmVkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzLCByZWdpc3RlclN0eWxlcyB9O1xuIiwiaW1wb3J0ICogYXMgUmVhY3RKU1hSdW50aW1lIGZyb20gJ3JlYWN0L2pzeC1ydW50aW1lJztcbmltcG9ydCB7IGggYXMgaGFzT3duLCBFIGFzIEVtb3Rpb24sIGMgYXMgY3JlYXRlRW1vdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vZGlzdC9lbW90aW9uLWVsZW1lbnQtNTQ4NmM1MWMuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCAnQGVtb3Rpb24vd2Vhay1tZW1vaXplJztcbmltcG9ydCAnLi4vLi4vX2lzb2xhdGVkLWhucnMvZGlzdC9lbW90aW9uLXJlYWN0LV9pc29sYXRlZC1obnJzLmJyb3dzZXIuZXNtLmpzJztcbmltcG9ydCAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0ICdAZW1vdGlvbi91dGlscyc7XG5pbXBvcnQgJ0BlbW90aW9uL3NlcmlhbGl6ZSc7XG5pbXBvcnQgJ0BlbW90aW9uL3VzZS1pbnNlcnRpb24tZWZmZWN0LXdpdGgtZmFsbGJhY2tzJztcblxudmFyIEZyYWdtZW50ID0gUmVhY3RKU1hSdW50aW1lLkZyYWdtZW50O1xuZnVuY3Rpb24ganN4KHR5cGUsIHByb3BzLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24uY2FsbChwcm9wcywgJ2NzcycpKSB7XG4gICAgcmV0dXJuIFJlYWN0SlNYUnVudGltZS5qc3godHlwZSwgcHJvcHMsIGtleSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RKU1hSdW50aW1lLmpzeChFbW90aW9uLCBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpLCBrZXkpO1xufVxuZnVuY3Rpb24ganN4cyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIGlmICghaGFzT3duLmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIHJldHVybiBSZWFjdEpTWFJ1bnRpbWUuanN4cyh0eXBlLCBwcm9wcywga2V5KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEpTWFJ1bnRpbWUuanN4cyhFbW90aW9uLCBjcmVhdGVFbW90aW9uUHJvcHModHlwZSwgcHJvcHMpLCBrZXkpO1xufVxuXG5leHBvcnQgeyBGcmFnbWVudCwganN4LCBqc3hzIH07XG4iLCJ2YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xudmFyIEhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCB7IGNzczogY3NzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwYWRkaW5nOiA4MHB4IDEyMHB4O1xcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxuICAgICAgcGFkZGluZzogMjRweCA0MHB4O1xcbiAgICAgIFwiXSwgW1wiXFxuICAgICAgcGFkZGluZzogODBweCAxMjBweDtcXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xcbiAgICAgIHBhZGRpbmc6IDI0cHggNDBweDtcXG4gICAgICBcIl0pKSksIGNoaWxkcmVuOiBcImdpdGh1YiBhY3Rpb24gdGVzdFwiIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbnZhciB0ZW1wbGF0ZU9iamVjdF8xO1xuIiwidmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0ID0gKHRoaXMgJiYgdGhpcy5fX21ha2VUZW1wbGF0ZU9iamVjdCkgfHwgZnVuY3Rpb24gKGNvb2tlZCwgcmF3KSB7XG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgICByZXR1cm4gY29va2VkO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgZW1vdGlvbk5vcm1hbGl6ZSBmcm9tIFwiZW1vdGlvbi1ub3JtYWxpemVcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9wYWdlcy9Ib21lUGFnZVwiO1xudmFyIEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKF9qc3hzKF9GcmFnbWVudCwgeyBjaGlsZHJlbjogW19qc3goR2xvYmFsLCB7IHN0eWxlczogY3NzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICAgICAgXCIsIFwiXFxuICAgICAgICBcIl0sIFtcIlxcbiAgICAgICAgICBcIiwgXCJcXG4gICAgICAgIFwiXSkpLCBlbW90aW9uTm9ybWFsaXplKSB9KSwgX2pzeChIb21lUGFnZSwge30pXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwO1xudmFyIHRlbXBsYXRlT2JqZWN0XzE7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbnZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG52YXIgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKF9qc3goUmVhY3QuU3RyaWN0TW9kZSwgeyBjaGlsZHJlbjogX2pzeChBcHAsIHt9KSB9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpO1xuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChbXCJcXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyBcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgXFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyBcXG4gIGhlaWdodDogMDsgXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgXFxufVxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IFxcbiAgZm9udC1zaXplOiAxZW07IFxcbn1cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgXFxufVxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyBcXG4gIGZvbnQtc2l6ZTogMWVtOyBcXG59XFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyBcXG4gIGZvbnQtc2l6ZTogMTAwJTsgXFxuICBsaW5lLWhlaWdodDogMS4xNTsgXFxuICBtYXJnaW46IDA7IFxcbn1cXG5idXR0b24sXFxuaW5wdXQgeyBcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5idXR0b24sXFxuc2VsZWN0IHsgXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxuICBjb2xvcjogaW5oZXJpdDsgXFxuICBkaXNwbGF5OiB0YWJsZTsgXFxuICBtYXgtd2lkdGg6IDEwMCU7IFxcbiAgcGFkZGluZzogMDsgXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyBcXG59XFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXFxuICBwYWRkaW5nOiAwOyBcXG59XFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgXFxufVxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IFxcbiAgZm9udDogaW5oZXJpdDsgXFxufVxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHsgaWYgKCFyYXcpIHsgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTsgfSByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7IHJhdzogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpIH0gfSkpOyB9XG5cbnZhciBub3JtYWxpemUgPSAoMCwgX3JlYWN0LmNzcykoX3RlbXBsYXRlT2JqZWN0KCkpO1xudmFyIF9kZWZhdWx0ID0gbm9ybWFsaXplO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKlxuIE1vZGVybml6ciAzLjAuMHByZSAoQ3VzdG9tIEJ1aWxkKSB8IE1JVFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgYWE9cmVxdWlyZShcInJlYWN0XCIpLGNhPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24gcChhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn12YXIgZGE9bmV3IFNldCxlYT17fTtmdW5jdGlvbiBmYShhLGIpe2hhKGEsYik7aGEoYStcIkNhcHR1cmVcIixiKX1cbmZ1bmN0aW9uIGhhKGEsYil7ZWFbYV09Yjtmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKWRhLmFkZChiW2FdKX1cbnZhciBpYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudHx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCksamE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxrYT0vXls6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF1bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXC0uMC05XFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MF0qJC8sbGE9XG57fSxtYT17fTtmdW5jdGlvbiBvYShhKXtpZihqYS5jYWxsKG1hLGEpKXJldHVybiEwO2lmKGphLmNhbGwobGEsYSkpcmV0dXJuITE7aWYoa2EudGVzdChhKSlyZXR1cm4gbWFbYV09ITA7bGFbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gcGEoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBxYShhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHxwYShhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIHYoYSxiLGMsZCxlLGYsZyl7dGhpcy5hY2NlcHRzQm9vbGVhbnM9Mj09PWJ8fDM9PT1ifHw0PT09Yjt0aGlzLmF0dHJpYnV0ZU5hbWU9ZDt0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZT1lO3RoaXMubXVzdFVzZVByb3BlcnR5PWM7dGhpcy5wcm9wZXJ0eU5hbWU9YTt0aGlzLnR5cGU9Yjt0aGlzLnNhbml0aXplVVJMPWY7dGhpcy5yZW1vdmVFbXB0eVN0cmluZz1nfXZhciB6PXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMCwhMSxhLG51bGwsITEsITEpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO3pbYl09bmV3IHYoYiwxLCExLGFbMV0sbnVsbCwhMSwhMSl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMiwhMSxhLG51bGwsITEsITEpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUgZGlzYWJsZVJlbW90ZVBsYXliYWNrIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEsITEpfSk7XG5bXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDMsITAsYSxudWxsLCExLCExKX0pO1tcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7elthXT1uZXcgdihhLDQsITEsYSxudWxsLCExLCExKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsNiwhMSxhLG51bGwsITEsITEpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTt2YXIgcmE9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiBzYShhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShyYSxcbnNhKTt6W2JdPW5ldyB2KGIsMSwhMSxhLG51bGwsITEsITEpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6cm9sZSB4bGluazpzaG93IHhsaW5rOnRpdGxlIHhsaW5rOnR5cGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmEsc2EpO3pbYl09bmV3IHYoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITEsITEpfSk7W1wieG1sOmJhc2VcIixcInhtbDpsYW5nXCIsXCJ4bWw6c3BhY2VcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmEsc2EpO3pbYl09bmV3IHYoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwhMSwhMSl9KTtbXCJ0YWJJbmRleFwiLFwiY3Jvc3NPcmlnaW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSwhMSl9KTtcbnoueGxpbmtIcmVmPW5ldyB2KFwieGxpbmtIcmVmXCIsMSwhMSxcInhsaW5rOmhyZWZcIixcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMCwhMSk7W1wic3JjXCIsXCJocmVmXCIsXCJhY3Rpb25cIixcImZvcm1BY3Rpb25cIl0uZm9yRWFjaChmdW5jdGlvbihhKXt6W2FdPW5ldyB2KGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMCwhMCl9KTtcbmZ1bmN0aW9uIHRhKGEsYixjLGQpe3ZhciBlPXouaGFzT3duUHJvcGVydHkoYik/eltiXTpudWxsO2lmKG51bGwhPT1lPzAhPT1lLnR5cGU6ZHx8ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdKXFhKGIsYyxlLGQpJiYoYz1udWxsKSxkfHxudWxsPT09ZT9vYShiKSYmKG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOmEuc2V0QXR0cmlidXRlKGIsXCJcIitjKSk6ZS5tdXN0VXNlUHJvcGVydHk/YVtlLnByb3BlcnR5TmFtZV09bnVsbD09PWM/Mz09PWUudHlwZT8hMTpcIlwiOmM6KGI9ZS5hdHRyaWJ1dGVOYW1lLGQ9ZS5hdHRyaWJ1dGVOYW1lc3BhY2UsbnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6KGU9ZS50eXBlLGM9Mz09PWV8fDQ9PT1lJiYhMD09PWM/XCJcIjpcIlwiK2MsZD9hLnNldEF0dHJpYnV0ZU5TKGQsYixjKTphLnNldEF0dHJpYnV0ZShiLGMpKSl9XG52YXIgdWE9YWEuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsdmE9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksd2E9U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSx5YT1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksemE9U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpLEFhPVN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSxCYT1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksQ2E9U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIiksRGE9U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLEVhPVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSxGYT1TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSxHYT1TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSxIYT1TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTtTeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik7U3ltYm9sLmZvcihcInJlYWN0LmRlYnVnX3RyYWNlX21vZGVcIik7XG52YXIgSWE9U3ltYm9sLmZvcihcInJlYWN0Lm9mZnNjcmVlblwiKTtTeW1ib2wuZm9yKFwicmVhY3QubGVnYWN5X2hpZGRlblwiKTtTeW1ib2wuZm9yKFwicmVhY3QuY2FjaGVcIik7U3ltYm9sLmZvcihcInJlYWN0LnRyYWNpbmdfbWFya2VyXCIpO3ZhciBKYT1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gS2EoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPUphJiZhW0phXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfXZhciBBPU9iamVjdC5hc3NpZ24sTGE7ZnVuY3Rpb24gTWEoYSl7aWYodm9pZCAwPT09TGEpdHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGMpe3ZhciBiPWMuc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7TGE9YiYmYlsxXXx8XCJcIn1yZXR1cm5cIlxcblwiK0xhK2F9dmFyIE5hPSExO1xuZnVuY3Rpb24gT2EoYSxiKXtpZighYXx8TmEpcmV0dXJuXCJcIjtOYT0hMDt2YXIgYz1FcnJvci5wcmVwYXJlU3RhY2tUcmFjZTtFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT12b2lkIDA7dHJ5e2lmKGIpaWYoYj1mdW5jdGlvbigpe3Rocm93IEVycm9yKCk7fSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYi5wcm90b3R5cGUsXCJwcm9wc1wiLHtzZXQ6ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcigpO319KSxcIm9iamVjdFwiPT09dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuY29uc3RydWN0KXt0cnl7UmVmbGVjdC5jb25zdHJ1Y3QoYixbXSl9Y2F0Y2gobCl7dmFyIGQ9bH1SZWZsZWN0LmNvbnN0cnVjdChhLFtdLGIpfWVsc2V7dHJ5e2IuY2FsbCgpfWNhdGNoKGwpe2Q9bH1hLmNhbGwoYi5wcm90b3R5cGUpfWVsc2V7dHJ5e3Rocm93IEVycm9yKCk7fWNhdGNoKGwpe2Q9bH1hKCl9fWNhdGNoKGwpe2lmKGwmJmQmJlwic3RyaW5nXCI9PT10eXBlb2YgbC5zdGFjayl7Zm9yKHZhciBlPWwuc3RhY2suc3BsaXQoXCJcXG5cIiksXG5mPWQuc3RhY2suc3BsaXQoXCJcXG5cIiksZz1lLmxlbmd0aC0xLGg9Zi5sZW5ndGgtMTsxPD1nJiYwPD1oJiZlW2ddIT09ZltoXTspaC0tO2Zvcig7MTw9ZyYmMDw9aDtnLS0saC0tKWlmKGVbZ10hPT1mW2hdKXtpZigxIT09Z3x8MSE9PWgpe2RvIGlmKGctLSxoLS0sMD5ofHxlW2ddIT09ZltoXSl7dmFyIGs9XCJcXG5cIitlW2ddLnJlcGxhY2UoXCIgYXQgbmV3IFwiLFwiIGF0IFwiKTthLmRpc3BsYXlOYW1lJiZrLmluY2x1ZGVzKFwiPGFub255bW91cz5cIikmJihrPWsucmVwbGFjZShcIjxhbm9ueW1vdXM+XCIsYS5kaXNwbGF5TmFtZSkpO3JldHVybiBrfXdoaWxlKDE8PWcmJjA8PWgpfWJyZWFrfX19ZmluYWxseXtOYT0hMSxFcnJvci5wcmVwYXJlU3RhY2tUcmFjZT1jfXJldHVybihhPWE/YS5kaXNwbGF5TmFtZXx8YS5uYW1lOlwiXCIpP01hKGEpOlwiXCJ9XG5mdW5jdGlvbiBQYShhKXtzd2l0Y2goYS50YWcpe2Nhc2UgNTpyZXR1cm4gTWEoYS50eXBlKTtjYXNlIDE2OnJldHVybiBNYShcIkxhenlcIik7Y2FzZSAxMzpyZXR1cm4gTWEoXCJTdXNwZW5zZVwiKTtjYXNlIDE5OnJldHVybiBNYShcIlN1c3BlbnNlTGlzdFwiKTtjYXNlIDA6Y2FzZSAyOmNhc2UgMTU6cmV0dXJuIGE9T2EoYS50eXBlLCExKSxhO2Nhc2UgMTE6cmV0dXJuIGE9T2EoYS50eXBlLnJlbmRlciwhMSksYTtjYXNlIDE6cmV0dXJuIGE9T2EoYS50eXBlLCEwKSxhO2RlZmF1bHQ6cmV0dXJuXCJcIn19XG5mdW5jdGlvbiBRYShhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIHlhOnJldHVyblwiRnJhZ21lbnRcIjtjYXNlIHdhOnJldHVyblwiUG9ydGFsXCI7Y2FzZSBBYTpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSB6YTpyZXR1cm5cIlN0cmljdE1vZGVcIjtjYXNlIEVhOnJldHVyblwiU3VzcGVuc2VcIjtjYXNlIEZhOnJldHVyblwiU3VzcGVuc2VMaXN0XCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIENhOnJldHVybihhLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIEJhOnJldHVybihhLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIERhOnZhciBiPWEucmVuZGVyO2E9YS5kaXNwbGF5TmFtZTthfHwoYT1iLmRpc3BsYXlOYW1lfHxcbmIubmFtZXx8XCJcIixhPVwiXCIhPT1hP1wiRm9yd2FyZFJlZihcIithK1wiKVwiOlwiRm9yd2FyZFJlZlwiKTtyZXR1cm4gYTtjYXNlIEdhOnJldHVybiBiPWEuZGlzcGxheU5hbWV8fG51bGwsbnVsbCE9PWI/YjpRYShhLnR5cGUpfHxcIk1lbW9cIjtjYXNlIEhhOmI9YS5fcGF5bG9hZDthPWEuX2luaXQ7dHJ5e3JldHVybiBRYShhKGIpKX1jYXRjaChjKXt9fXJldHVybiBudWxsfVxuZnVuY3Rpb24gUmEoYSl7dmFyIGI9YS50eXBlO3N3aXRjaChhLnRhZyl7Y2FzZSAyNDpyZXR1cm5cIkNhY2hlXCI7Y2FzZSA5OnJldHVybihiLmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuQ29uc3VtZXJcIjtjYXNlIDEwOnJldHVybihiLl9jb250ZXh0LmRpc3BsYXlOYW1lfHxcIkNvbnRleHRcIikrXCIuUHJvdmlkZXJcIjtjYXNlIDE4OnJldHVyblwiRGVoeWRyYXRlZEZyYWdtZW50XCI7Y2FzZSAxMTpyZXR1cm4gYT1iLnJlbmRlcixhPWEuZGlzcGxheU5hbWV8fGEubmFtZXx8XCJcIixiLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWE/XCJGb3J3YXJkUmVmKFwiK2ErXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgNzpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSA1OnJldHVybiBiO2Nhc2UgNDpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgMzpyZXR1cm5cIlJvb3RcIjtjYXNlIDY6cmV0dXJuXCJUZXh0XCI7Y2FzZSAxNjpyZXR1cm4gUWEoYik7Y2FzZSA4OnJldHVybiBiPT09emE/XCJTdHJpY3RNb2RlXCI6XCJNb2RlXCI7Y2FzZSAyMjpyZXR1cm5cIk9mZnNjcmVlblwiO1xuY2FzZSAxMjpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSAyMTpyZXR1cm5cIlNjb3BlXCI7Y2FzZSAxMzpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSAxOTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwiO2Nhc2UgMjU6cmV0dXJuXCJUcmFjaW5nTWFya2VyXCI7Y2FzZSAxOmNhc2UgMDpjYXNlIDE3OmNhc2UgMjpjYXNlIDE0OmNhc2UgMTU6aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGIuZGlzcGxheU5hbWV8fGIubmFtZXx8bnVsbDtpZihcInN0cmluZ1wiPT09dHlwZW9mIGIpcmV0dXJuIGJ9cmV0dXJuIG51bGx9ZnVuY3Rpb24gU2EoYSl7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2Nhc2UgXCJvYmplY3RcIjpyZXR1cm4gYTtkZWZhdWx0OnJldHVyblwiXCJ9fVxuZnVuY3Rpb24gVGEoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFVhKGEpe3ZhciBiPVRhKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBWYShhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9VWEoYSkpfWZ1bmN0aW9uIFdhKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1UYShhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfWZ1bmN0aW9uIFhhKGEpe2E9YXx8KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6dm9pZCAwKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBhLmFjdGl2ZUVsZW1lbnR8fGEuYm9keX1jYXRjaChiKXtyZXR1cm4gYS5ib2R5fX1cbmZ1bmN0aW9uIFlhKGEsYil7dmFyIGM9Yi5jaGVja2VkO3JldHVybiBBKHt9LGIse2RlZmF1bHRDaGVja2VkOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLHZhbHVlOnZvaWQgMCxjaGVja2VkOm51bGwhPWM/YzphLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWR9KX1mdW5jdGlvbiBaYShhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz1TYShudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uIGFiKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmdGEoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIGJiKGEsYil7YWIoYSxiKTt2YXIgYz1TYShiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT9jYihhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZjYihhLGIudHlwZSxTYShiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIGRiKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9ISFhLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWQ7XCJcIiE9PWMmJihhLm5hbWU9Yyl9XG5mdW5jdGlvbiBjYihhLGIsYyl7aWYoXCJudW1iZXJcIiE9PWJ8fFhhKGEub3duZXJEb2N1bWVudCkhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX12YXIgZWI9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIGZiKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIitTYShjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gZ2IoYSxiKXtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXRocm93IEVycm9yKHAoOTEpKTtyZXR1cm4gQSh7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBoYihhLGIpe3ZhciBjPWIudmFsdWU7aWYobnVsbD09Yyl7Yz1iLmNoaWxkcmVuO2I9Yi5kZWZhdWx0VmFsdWU7aWYobnVsbCE9Yyl7aWYobnVsbCE9Yil0aHJvdyBFcnJvcihwKDkyKSk7aWYoZWIoYykpe2lmKDE8Yy5sZW5ndGgpdGhyb3cgRXJyb3IocCg5MykpO2M9Y1swXX1iPWN9bnVsbD09YiYmKGI9XCJcIik7Yz1ifWEuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOlNhKGMpfX1cbmZ1bmN0aW9uIGliKGEsYil7dmFyIGM9U2EoYi52YWx1ZSksZD1TYShiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIGpiKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJlwiXCIhPT1iJiZudWxsIT09YiYmKGEudmFsdWU9Yil9ZnVuY3Rpb24ga2IoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1cbmZ1bmN0aW9uIGxiKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9rYihiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciBtYixuYj1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIT09YS5uYW1lc3BhY2VVUkl8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXttYj1tYnx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTttYi5pbm5lckhUTUw9XCI8c3ZnPlwiK2IudmFsdWVPZigpLnRvU3RyaW5nKCkrXCI8L3N2Zz5cIjtmb3IoYj1tYi5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiBvYihhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIHBiPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxhc3BlY3RSYXRpbzohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsXG56b29tOiEwLGZpbGxPcGFjaXR5OiEwLGZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LHFiPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhwYikuZm9yRWFjaChmdW5jdGlvbihhKXtxYi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO3BiW2JdPXBiW2FdfSl9KTtmdW5jdGlvbiByYihhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8cGIuaGFzT3duUHJvcGVydHkoYSkmJnBiW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIHNiKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPXJiKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIHRiPUEoe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiB1YihhLGIpe2lmKGIpe2lmKHRiW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IocCgxMzcsYSkpO2lmKG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2lmKG51bGwhPWIuY2hpbGRyZW4pdGhyb3cgRXJyb3IocCg2MCkpO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTHx8IShcIl9faHRtbFwiaW4gYi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IocCg2MSkpO31pZihudWxsIT1iLnN0eWxlJiZcIm9iamVjdFwiIT09dHlwZW9mIGIuc3R5bGUpdGhyb3cgRXJyb3IocCg2MikpO319XG5mdW5jdGlvbiB2YihhLGIpe2lmKC0xPT09YS5pbmRleE9mKFwiLVwiKSlyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGIuaXM7c3dpdGNoKGEpe2Nhc2UgXCJhbm5vdGF0aW9uLXhtbFwiOmNhc2UgXCJjb2xvci1wcm9maWxlXCI6Y2FzZSBcImZvbnQtZmFjZVwiOmNhc2UgXCJmb250LWZhY2Utc3JjXCI6Y2FzZSBcImZvbnQtZmFjZS11cmlcIjpjYXNlIFwiZm9udC1mYWNlLWZvcm1hdFwiOmNhc2UgXCJmb250LWZhY2UtbmFtZVwiOmNhc2UgXCJtaXNzaW5nLWdseXBoXCI6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMH19dmFyIHdiPW51bGw7ZnVuY3Rpb24geGIoYSl7YT1hLnRhcmdldHx8YS5zcmNFbGVtZW50fHx3aW5kb3c7YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCYmKGE9YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCk7cmV0dXJuIDM9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphfXZhciB5Yj1udWxsLHpiPW51bGwsQWI9bnVsbDtcbmZ1bmN0aW9uIEJiKGEpe2lmKGE9Q2IoYSkpe2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiB5Yil0aHJvdyBFcnJvcihwKDI4MCkpO3ZhciBiPWEuc3RhdGVOb2RlO2ImJihiPURiKGIpLHliKGEuc3RhdGVOb2RlLGEudHlwZSxiKSl9fWZ1bmN0aW9uIEViKGEpe3piP0FiP0FiLnB1c2goYSk6QWI9W2FdOnpiPWF9ZnVuY3Rpb24gRmIoKXtpZih6Yil7dmFyIGE9emIsYj1BYjtBYj16Yj1udWxsO0JiKGEpO2lmKGIpZm9yKGE9MDthPGIubGVuZ3RoO2ErKylCYihiW2FdKX19ZnVuY3Rpb24gR2IoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBIYigpe312YXIgSWI9ITE7ZnVuY3Rpb24gSmIoYSxiLGMpe2lmKEliKXJldHVybiBhKGIsYyk7SWI9ITA7dHJ5e3JldHVybiBHYihhLGIsYyl9ZmluYWxseXtpZihJYj0hMSxudWxsIT09emJ8fG51bGwhPT1BYilIYigpLEZiKCl9fVxuZnVuY3Rpb24gS2IoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtpZihudWxsPT09YylyZXR1cm4gbnVsbDt2YXIgZD1EYihjKTtpZihudWxsPT09ZClyZXR1cm4gbnVsbDtjPWRbYl07YTpzd2l0Y2goYil7Y2FzZSBcIm9uQ2xpY2tcIjpjYXNlIFwib25DbGlja0NhcHR1cmVcIjpjYXNlIFwib25Eb3VibGVDbGlja1wiOmNhc2UgXCJvbkRvdWJsZUNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlRG93blwiOmNhc2UgXCJvbk1vdXNlRG93bkNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZU1vdmVcIjpjYXNlIFwib25Nb3VzZU1vdmVDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VVcFwiOmNhc2UgXCJvbk1vdXNlVXBDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VFbnRlclwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7aWYoYyYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgYyl0aHJvdyBFcnJvcihwKDIzMSxiLHR5cGVvZiBjKSk7cmV0dXJuIGN9dmFyIExiPSExO2lmKGlhKXRyeXt2YXIgTWI9e307T2JqZWN0LmRlZmluZVByb3BlcnR5KE1iLFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtMYj0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixNYixNYik7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsTWIsTWIpfWNhdGNoKGEpe0xiPSExfWZ1bmN0aW9uIE5iKGEsYixjLGQsZSxmLGcsaCxrKXt2YXIgbD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxsKX1jYXRjaChtKXt0aGlzLm9uRXJyb3IobSl9fXZhciBPYj0hMSxQYj1udWxsLFFiPSExLFJiPW51bGwsU2I9e29uRXJyb3I6ZnVuY3Rpb24oYSl7T2I9ITA7UGI9YX19O2Z1bmN0aW9uIFRiKGEsYixjLGQsZSxmLGcsaCxrKXtPYj0hMTtQYj1udWxsO05iLmFwcGx5KFNiLGFyZ3VtZW50cyl9XG5mdW5jdGlvbiBVYihhLGIsYyxkLGUsZixnLGgsayl7VGIuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKE9iKXtpZihPYil7dmFyIGw9UGI7T2I9ITE7UGI9bnVsbH1lbHNlIHRocm93IEVycm9yKHAoMTk4KSk7UWJ8fChRYj0hMCxSYj1sKX19ZnVuY3Rpb24gVmIoYSl7dmFyIGI9YSxjPWE7aWYoYS5hbHRlcm5hdGUpZm9yKDtiLnJldHVybjspYj1iLnJldHVybjtlbHNle2E9YjtkbyBiPWEsMCE9PShiLmZsYWdzJjQwOTgpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiBXYihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIFhiKGEpe2lmKFZiKGEpIT09YSl0aHJvdyBFcnJvcihwKDE4OCkpO31cbmZ1bmN0aW9uIFliKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPVZiKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHAoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIFhiKGUpLGE7aWYoZj09PWQpcmV0dXJuIFhiKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IocCgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcihwKDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHAoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcihwKDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gWmIoYSl7YT1ZYihhKTtyZXR1cm4gbnVsbCE9PWE/JGIoYSk6bnVsbH1mdW5jdGlvbiAkYihhKXtpZig1PT09YS50YWd8fDY9PT1hLnRhZylyZXR1cm4gYTtmb3IoYT1hLmNoaWxkO251bGwhPT1hOyl7dmFyIGI9JGIoYSk7aWYobnVsbCE9PWIpcmV0dXJuIGI7YT1hLnNpYmxpbmd9cmV0dXJuIG51bGx9XG52YXIgYWM9Y2EudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxiYz1jYS51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxjYz1jYS51bnN0YWJsZV9zaG91bGRZaWVsZCxkYz1jYS51bnN0YWJsZV9yZXF1ZXN0UGFpbnQsQj1jYS51bnN0YWJsZV9ub3csZWM9Y2EudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwsZmM9Y2EudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksZ2M9Y2EudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksaGM9Y2EudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksaWM9Y2EudW5zdGFibGVfTG93UHJpb3JpdHksamM9Y2EudW5zdGFibGVfSWRsZVByaW9yaXR5LGtjPW51bGwsbGM9bnVsbDtmdW5jdGlvbiBtYyhhKXtpZihsYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGxjLm9uQ29tbWl0RmliZXJSb290KXRyeXtsYy5vbkNvbW1pdEZpYmVyUm9vdChrYyxhLHZvaWQgMCwxMjg9PT0oYS5jdXJyZW50LmZsYWdzJjEyOCkpfWNhdGNoKGIpe319XG52YXIgb2M9TWF0aC5jbHozMj9NYXRoLmNsejMyOm5jLHBjPU1hdGgubG9nLHFjPU1hdGguTE4yO2Z1bmN0aW9uIG5jKGEpe2E+Pj49MDtyZXR1cm4gMD09PWE/MzI6MzEtKHBjKGEpL3FjfDApfDB9dmFyIHJjPTY0LHNjPTQxOTQzMDQ7XG5mdW5jdGlvbiB0YyhhKXtzd2l0Y2goYSYtYSl7Y2FzZSAxOnJldHVybiAxO2Nhc2UgMjpyZXR1cm4gMjtjYXNlIDQ6cmV0dXJuIDQ7Y2FzZSA4OnJldHVybiA4O2Nhc2UgMTY6cmV0dXJuIDE2O2Nhc2UgMzI6cmV0dXJuIDMyO2Nhc2UgNjQ6Y2FzZSAxMjg6Y2FzZSAyNTY6Y2FzZSA1MTI6Y2FzZSAxMDI0OmNhc2UgMjA0ODpjYXNlIDQwOTY6Y2FzZSA4MTkyOmNhc2UgMTYzODQ6Y2FzZSAzMjc2ODpjYXNlIDY1NTM2OmNhc2UgMTMxMDcyOmNhc2UgMjYyMTQ0OmNhc2UgNTI0Mjg4OmNhc2UgMTA0ODU3NjpjYXNlIDIwOTcxNTI6cmV0dXJuIGEmNDE5NDI0MDtjYXNlIDQxOTQzMDQ6Y2FzZSA4Mzg4NjA4OmNhc2UgMTY3NzcyMTY6Y2FzZSAzMzU1NDQzMjpjYXNlIDY3MTA4ODY0OnJldHVybiBhJjEzMDAyMzQyNDtjYXNlIDEzNDIxNzcyODpyZXR1cm4gMTM0MjE3NzI4O2Nhc2UgMjY4NDM1NDU2OnJldHVybiAyNjg0MzU0NTY7Y2FzZSA1MzY4NzA5MTI6cmV0dXJuIDUzNjg3MDkxMjtjYXNlIDEwNzM3NDE4MjQ6cmV0dXJuIDEwNzM3NDE4MjQ7XG5kZWZhdWx0OnJldHVybiBhfX1mdW5jdGlvbiB1YyhhLGIpe3ZhciBjPWEucGVuZGluZ0xhbmVzO2lmKDA9PT1jKXJldHVybiAwO3ZhciBkPTAsZT1hLnN1c3BlbmRlZExhbmVzLGY9YS5waW5nZWRMYW5lcyxnPWMmMjY4NDM1NDU1O2lmKDAhPT1nKXt2YXIgaD1nJn5lOzAhPT1oP2Q9dGMoaCk6KGYmPWcsMCE9PWYmJihkPXRjKGYpKSl9ZWxzZSBnPWMmfmUsMCE9PWc/ZD10YyhnKTowIT09ZiYmKGQ9dGMoZikpO2lmKDA9PT1kKXJldHVybiAwO2lmKDAhPT1iJiZiIT09ZCYmMD09PShiJmUpJiYoZT1kJi1kLGY9YiYtYixlPj1mfHwxNj09PWUmJjAhPT0oZiY0MTk0MjQwKSkpcmV0dXJuIGI7MCE9PShkJjQpJiYoZHw9YyYxNik7Yj1hLmVudGFuZ2xlZExhbmVzO2lmKDAhPT1iKWZvcihhPWEuZW50YW5nbGVtZW50cyxiJj1kOzA8YjspYz0zMS1vYyhiKSxlPTE8PGMsZHw9YVtjXSxiJj1+ZTtyZXR1cm4gZH1cbmZ1bmN0aW9uIHZjKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSA0OnJldHVybiBiKzI1MDtjYXNlIDg6Y2FzZSAxNjpjYXNlIDMyOmNhc2UgNjQ6Y2FzZSAxMjg6Y2FzZSAyNTY6Y2FzZSA1MTI6Y2FzZSAxMDI0OmNhc2UgMjA0ODpjYXNlIDQwOTY6Y2FzZSA4MTkyOmNhc2UgMTYzODQ6Y2FzZSAzMjc2ODpjYXNlIDY1NTM2OmNhc2UgMTMxMDcyOmNhc2UgMjYyMTQ0OmNhc2UgNTI0Mjg4OmNhc2UgMTA0ODU3NjpjYXNlIDIwOTcxNTI6cmV0dXJuIGIrNUUzO2Nhc2UgNDE5NDMwNDpjYXNlIDgzODg2MDg6Y2FzZSAxNjc3NzIxNjpjYXNlIDMzNTU0NDMyOmNhc2UgNjcxMDg4NjQ6cmV0dXJuLTE7Y2FzZSAxMzQyMTc3Mjg6Y2FzZSAyNjg0MzU0NTY6Y2FzZSA1MzY4NzA5MTI6Y2FzZSAxMDczNzQxODI0OnJldHVybi0xO2RlZmF1bHQ6cmV0dXJuLTF9fVxuZnVuY3Rpb24gd2MoYSxiKXtmb3IodmFyIGM9YS5zdXNwZW5kZWRMYW5lcyxkPWEucGluZ2VkTGFuZXMsZT1hLmV4cGlyYXRpb25UaW1lcyxmPWEucGVuZGluZ0xhbmVzOzA8Zjspe3ZhciBnPTMxLW9jKGYpLGg9MTw8ZyxrPWVbZ107aWYoLTE9PT1rKXtpZigwPT09KGgmYyl8fDAhPT0oaCZkKSllW2ddPXZjKGgsYil9ZWxzZSBrPD1iJiYoYS5leHBpcmVkTGFuZXN8PWgpO2YmPX5ofX1mdW5jdGlvbiB4YyhhKXthPWEucGVuZGluZ0xhbmVzJi0xMDczNzQxODI1O3JldHVybiAwIT09YT9hOmEmMTA3Mzc0MTgyND8xMDczNzQxODI0OjB9ZnVuY3Rpb24geWMoKXt2YXIgYT1yYztyYzw8PTE7MD09PShyYyY0MTk0MjQwKSYmKHJjPTY0KTtyZXR1cm4gYX1mdW5jdGlvbiB6YyhhKXtmb3IodmFyIGI9W10sYz0wOzMxPmM7YysrKWIucHVzaChhKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIEFjKGEsYixjKXthLnBlbmRpbmdMYW5lc3w9Yjs1MzY4NzA5MTIhPT1iJiYoYS5zdXNwZW5kZWRMYW5lcz0wLGEucGluZ2VkTGFuZXM9MCk7YT1hLmV2ZW50VGltZXM7Yj0zMS1vYyhiKTthW2JdPWN9ZnVuY3Rpb24gQmMoYSxiKXt2YXIgYz1hLnBlbmRpbmdMYW5lcyZ+YjthLnBlbmRpbmdMYW5lcz1iO2Euc3VzcGVuZGVkTGFuZXM9MDthLnBpbmdlZExhbmVzPTA7YS5leHBpcmVkTGFuZXMmPWI7YS5tdXRhYmxlUmVhZExhbmVzJj1iO2EuZW50YW5nbGVkTGFuZXMmPWI7Yj1hLmVudGFuZ2xlbWVudHM7dmFyIGQ9YS5ldmVudFRpbWVzO2ZvcihhPWEuZXhwaXJhdGlvblRpbWVzOzA8Yzspe3ZhciBlPTMxLW9jKGMpLGY9MTw8ZTtiW2VdPTA7ZFtlXT0tMTthW2VdPS0xO2MmPX5mfX1cbmZ1bmN0aW9uIENjKGEsYil7dmFyIGM9YS5lbnRhbmdsZWRMYW5lc3w9Yjtmb3IoYT1hLmVudGFuZ2xlbWVudHM7Yzspe3ZhciBkPTMxLW9jKGMpLGU9MTw8ZDtlJmJ8YVtkXSZiJiYoYVtkXXw9Yik7YyY9fmV9fXZhciBDPTA7ZnVuY3Rpb24gRGMoYSl7YSY9LWE7cmV0dXJuIDE8YT80PGE/MCE9PShhJjI2ODQzNTQ1NSk/MTY6NTM2ODcwOTEyOjQ6MX12YXIgRWMsRmMsR2MsSGMsSWMsSmM9ITEsS2M9W10sTGM9bnVsbCxNYz1udWxsLE5jPW51bGwsT2M9bmV3IE1hcCxQYz1uZXcgTWFwLFFjPVtdLFJjPVwibW91c2Vkb3duIG1vdXNldXAgdG91Y2hjYW5jZWwgdG91Y2hlbmQgdG91Y2hzdGFydCBhdXhjbGljayBkYmxjbGljayBwb2ludGVyY2FuY2VsIHBvaW50ZXJkb3duIHBvaW50ZXJ1cCBkcmFnZW5kIGRyYWdzdGFydCBkcm9wIGNvbXBvc2l0aW9uZW5kIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBpbnB1dCB0ZXh0SW5wdXQgY29weSBjdXQgcGFzdGUgY2xpY2sgY2hhbmdlIGNvbnRleHRtZW51IHJlc2V0IHN1Ym1pdFwiLnNwbGl0KFwiIFwiKTtcbmZ1bmN0aW9uIFNjKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c2luXCI6Y2FzZSBcImZvY3Vzb3V0XCI6TGM9bnVsbDticmVhaztjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdsZWF2ZVwiOk1jPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJtb3VzZW91dFwiOk5jPW51bGw7YnJlYWs7Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpPYy5kZWxldGUoYi5wb2ludGVySWQpO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpQYy5kZWxldGUoYi5wb2ludGVySWQpfX1cbmZ1bmN0aW9uIFRjKGEsYixjLGQsZSxmKXtpZihudWxsPT09YXx8YS5uYXRpdmVFdmVudCE9PWYpcmV0dXJuIGE9e2Jsb2NrZWRPbjpiLGRvbUV2ZW50TmFtZTpjLGV2ZW50U3lzdGVtRmxhZ3M6ZCxuYXRpdmVFdmVudDpmLHRhcmdldENvbnRhaW5lcnM6W2VdfSxudWxsIT09YiYmKGI9Q2IoYiksbnVsbCE9PWImJkZjKGIpKSxhO2EuZXZlbnRTeXN0ZW1GbGFnc3w9ZDtiPWEudGFyZ2V0Q29udGFpbmVycztudWxsIT09ZSYmLTE9PT1iLmluZGV4T2YoZSkmJmIucHVzaChlKTtyZXR1cm4gYX1cbmZ1bmN0aW9uIFVjKGEsYixjLGQsZSl7c3dpdGNoKGIpe2Nhc2UgXCJmb2N1c2luXCI6cmV0dXJuIExjPVRjKExjLGEsYixjLGQsZSksITA7Y2FzZSBcImRyYWdlbnRlclwiOnJldHVybiBNYz1UYyhNYyxhLGIsYyxkLGUpLCEwO2Nhc2UgXCJtb3VzZW92ZXJcIjpyZXR1cm4gTmM9VGMoTmMsYSxiLGMsZCxlKSwhMDtjYXNlIFwicG9pbnRlcm92ZXJcIjp2YXIgZj1lLnBvaW50ZXJJZDtPYy5zZXQoZixUYyhPYy5nZXQoZil8fG51bGwsYSxiLGMsZCxlKSk7cmV0dXJuITA7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6cmV0dXJuIGY9ZS5wb2ludGVySWQsUGMuc2V0KGYsVGMoUGMuZ2V0KGYpfHxudWxsLGEsYixjLGQsZSkpLCEwfXJldHVybiExfVxuZnVuY3Rpb24gVmMoYSl7dmFyIGI9V2MoYS50YXJnZXQpO2lmKG51bGwhPT1iKXt2YXIgYz1WYihiKTtpZihudWxsIT09YylpZihiPWMudGFnLDEzPT09Yil7aWYoYj1XYihjKSxudWxsIT09Yil7YS5ibG9ja2VkT249YjtJYyhhLnByaW9yaXR5LGZ1bmN0aW9uKCl7R2MoYyl9KTtyZXR1cm59fWVsc2UgaWYoMz09PWImJmMuc3RhdGVOb2RlLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpe2EuYmxvY2tlZE9uPTM9PT1jLnRhZz9jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7cmV0dXJufX1hLmJsb2NrZWRPbj1udWxsfVxuZnVuY3Rpb24gWGMoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO2Zvcih2YXIgYj1hLnRhcmdldENvbnRhaW5lcnM7MDxiLmxlbmd0aDspe3ZhciBjPVljKGEuZG9tRXZlbnROYW1lLGEuZXZlbnRTeXN0ZW1GbGFncyxiWzBdLGEubmF0aXZlRXZlbnQpO2lmKG51bGw9PT1jKXtjPWEubmF0aXZlRXZlbnQ7dmFyIGQ9bmV3IGMuY29uc3RydWN0b3IoYy50eXBlLGMpO3diPWQ7Yy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKTt3Yj1udWxsfWVsc2UgcmV0dXJuIGI9Q2IoYyksbnVsbCE9PWImJkZjKGIpLGEuYmxvY2tlZE9uPWMsITE7Yi5zaGlmdCgpfXJldHVybiEwfWZ1bmN0aW9uIFpjKGEsYixjKXtYYyhhKSYmYy5kZWxldGUoYil9ZnVuY3Rpb24gJGMoKXtKYz0hMTtudWxsIT09TGMmJlhjKExjKSYmKExjPW51bGwpO251bGwhPT1NYyYmWGMoTWMpJiYoTWM9bnVsbCk7bnVsbCE9PU5jJiZYYyhOYykmJihOYz1udWxsKTtPYy5mb3JFYWNoKFpjKTtQYy5mb3JFYWNoKFpjKX1cbmZ1bmN0aW9uIGFkKGEsYil7YS5ibG9ja2VkT249PT1iJiYoYS5ibG9ja2VkT249bnVsbCxKY3x8KEpjPSEwLGNhLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2soY2EudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksJGMpKSl9XG5mdW5jdGlvbiBiZChhKXtmdW5jdGlvbiBiKGIpe3JldHVybiBhZChiLGEpfWlmKDA8S2MubGVuZ3RoKXthZChLY1swXSxhKTtmb3IodmFyIGM9MTtjPEtjLmxlbmd0aDtjKyspe3ZhciBkPUtjW2NdO2QuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpfX1udWxsIT09TGMmJmFkKExjLGEpO251bGwhPT1NYyYmYWQoTWMsYSk7bnVsbCE9PU5jJiZhZChOYyxhKTtPYy5mb3JFYWNoKGIpO1BjLmZvckVhY2goYik7Zm9yKGM9MDtjPFFjLmxlbmd0aDtjKyspZD1RY1tjXSxkLmJsb2NrZWRPbj09PWEmJihkLmJsb2NrZWRPbj1udWxsKTtmb3IoOzA8UWMubGVuZ3RoJiYoYz1RY1swXSxudWxsPT09Yy5ibG9ja2VkT24pOylWYyhjKSxudWxsPT09Yy5ibG9ja2VkT24mJlFjLnNoaWZ0KCl9dmFyIGNkPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLGRkPSEwO1xuZnVuY3Rpb24gZWQoYSxiLGMsZCl7dmFyIGU9QyxmPWNkLnRyYW5zaXRpb247Y2QudHJhbnNpdGlvbj1udWxsO3RyeXtDPTEsZmQoYSxiLGMsZCl9ZmluYWxseXtDPWUsY2QudHJhbnNpdGlvbj1mfX1mdW5jdGlvbiBnZChhLGIsYyxkKXt2YXIgZT1DLGY9Y2QudHJhbnNpdGlvbjtjZC50cmFuc2l0aW9uPW51bGw7dHJ5e0M9NCxmZChhLGIsYyxkKX1maW5hbGx5e0M9ZSxjZC50cmFuc2l0aW9uPWZ9fVxuZnVuY3Rpb24gZmQoYSxiLGMsZCl7aWYoZGQpe3ZhciBlPVljKGEsYixjLGQpO2lmKG51bGw9PT1lKWhkKGEsYixkLGlkLGMpLFNjKGEsZCk7ZWxzZSBpZihVYyhlLGEsYixjLGQpKWQuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihTYyhhLGQpLGImNCYmLTE8UmMuaW5kZXhPZihhKSl7Zm9yKDtudWxsIT09ZTspe3ZhciBmPUNiKGUpO251bGwhPT1mJiZFYyhmKTtmPVljKGEsYixjLGQpO251bGw9PT1mJiZoZChhLGIsZCxpZCxjKTtpZihmPT09ZSlicmVhaztlPWZ9bnVsbCE9PWUmJmQuc3RvcFByb3BhZ2F0aW9uKCl9ZWxzZSBoZChhLGIsZCxudWxsLGMpfX12YXIgaWQ9bnVsbDtcbmZ1bmN0aW9uIFljKGEsYixjLGQpe2lkPW51bGw7YT14YihkKTthPVdjKGEpO2lmKG51bGwhPT1hKWlmKGI9VmIoYSksbnVsbD09PWIpYT1udWxsO2Vsc2UgaWYoYz1iLnRhZywxMz09PWMpe2E9V2IoYik7aWYobnVsbCE9PWEpcmV0dXJuIGE7YT1udWxsfWVsc2UgaWYoMz09PWMpe2lmKGIuc3RhdGVOb2RlLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpcmV0dXJuIDM9PT1iLnRhZz9iLnN0YXRlTm9kZS5jb250YWluZXJJbmZvOm51bGw7YT1udWxsfWVsc2UgYiE9PWEmJihhPW51bGwpO2lkPWE7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBqZChhKXtzd2l0Y2goYSl7Y2FzZSBcImNhbmNlbFwiOmNhc2UgXCJjbGlja1wiOmNhc2UgXCJjbG9zZVwiOmNhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6Y2FzZSBcImZvY3VzaW5cIjpjYXNlIFwiZm9jdXNvdXRcIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwiaW52YWxpZFwiOmNhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXByZXNzXCI6Y2FzZSBcImtleXVwXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcInBhc3RlXCI6Y2FzZSBcInBhdXNlXCI6Y2FzZSBcInBsYXlcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVydXBcIjpjYXNlIFwicmF0ZWNoYW5nZVwiOmNhc2UgXCJyZXNldFwiOmNhc2UgXCJyZXNpemVcIjpjYXNlIFwic2Vla2VkXCI6Y2FzZSBcInN1Ym1pdFwiOmNhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6Y2FzZSBcInZvbHVtZWNoYW5nZVwiOmNhc2UgXCJjaGFuZ2VcIjpjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6Y2FzZSBcInRleHRJbnB1dFwiOmNhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6Y2FzZSBcImJlZm9yZWJsdXJcIjpjYXNlIFwiYWZ0ZXJibHVyXCI6Y2FzZSBcImJlZm9yZWlucHV0XCI6Y2FzZSBcImJsdXJcIjpjYXNlIFwiZnVsbHNjcmVlbmNoYW5nZVwiOmNhc2UgXCJmb2N1c1wiOmNhc2UgXCJoYXNoY2hhbmdlXCI6Y2FzZSBcInBvcHN0YXRlXCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJzZWxlY3RzdGFydFwiOnJldHVybiAxO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInNjcm9sbFwiOmNhc2UgXCJ0b2dnbGVcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcIndoZWVsXCI6Y2FzZSBcIm1vdXNlZW50ZXJcIjpjYXNlIFwibW91c2VsZWF2ZVwiOmNhc2UgXCJwb2ludGVyZW50ZXJcIjpjYXNlIFwicG9pbnRlcmxlYXZlXCI6cmV0dXJuIDQ7XG5jYXNlIFwibWVzc2FnZVwiOnN3aXRjaChlYygpKXtjYXNlIGZjOnJldHVybiAxO2Nhc2UgZ2M6cmV0dXJuIDQ7Y2FzZSBoYzpjYXNlIGljOnJldHVybiAxNjtjYXNlIGpjOnJldHVybiA1MzY4NzA5MTI7ZGVmYXVsdDpyZXR1cm4gMTZ9ZGVmYXVsdDpyZXR1cm4gMTZ9fXZhciBrZD1udWxsLGxkPW51bGwsbWQ9bnVsbDtmdW5jdGlvbiBuZCgpe2lmKG1kKXJldHVybiBtZDt2YXIgYSxiPWxkLGM9Yi5sZW5ndGgsZCxlPVwidmFsdWVcImluIGtkP2tkLnZhbHVlOmtkLnRleHRDb250ZW50LGY9ZS5sZW5ndGg7Zm9yKGE9MDthPGMmJmJbYV09PT1lW2FdO2ErKyk7dmFyIGc9Yy1hO2ZvcihkPTE7ZDw9ZyYmYltjLWRdPT09ZVtmLWRdO2QrKyk7cmV0dXJuIG1kPWUuc2xpY2UoYSwxPGQ/MS1kOnZvaWQgMCl9XG5mdW5jdGlvbiBvZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1mdW5jdGlvbiBwZCgpe3JldHVybiEwfWZ1bmN0aW9uIHFkKCl7cmV0dXJuITF9XG5mdW5jdGlvbiByZChhKXtmdW5jdGlvbiBiKGIsZCxlLGYsZyl7dGhpcy5fcmVhY3ROYW1lPWI7dGhpcy5fdGFyZ2V0SW5zdD1lO3RoaXMudHlwZT1kO3RoaXMubmF0aXZlRXZlbnQ9Zjt0aGlzLnRhcmdldD1nO3RoaXMuY3VycmVudFRhcmdldD1udWxsO2Zvcih2YXIgYyBpbiBhKWEuaGFzT3duUHJvcGVydHkoYykmJihiPWFbY10sdGhpc1tjXT1iP2IoZik6ZltjXSk7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9KG51bGwhPWYuZGVmYXVsdFByZXZlbnRlZD9mLmRlZmF1bHRQcmV2ZW50ZWQ6ITE9PT1mLnJldHVyblZhbHVlKT9wZDpxZDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXFkO3JldHVybiB0aGlzfUEoYi5wcm90b3R5cGUse3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOlwidW5rbm93blwiIT09dHlwZW9mIGEucmV0dXJuVmFsdWUmJlxuKGEucmV0dXJuVmFsdWU9ITEpLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPXBkKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5uYXRpdmVFdmVudDthJiYoYS5zdG9wUHJvcGFnYXRpb24/YS5zdG9wUHJvcGFnYXRpb24oKTpcInVua25vd25cIiE9PXR5cGVvZiBhLmNhbmNlbEJ1YmJsZSYmKGEuY2FuY2VsQnViYmxlPSEwKSx0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXBkKX0scGVyc2lzdDpmdW5jdGlvbigpe30saXNQZXJzaXN0ZW50OnBkfSk7cmV0dXJuIGJ9XG52YXIgc2Q9e2V2ZW50UGhhc2U6MCxidWJibGVzOjAsY2FuY2VsYWJsZTowLHRpbWVTdGFtcDpmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1lU3RhbXB8fERhdGUubm93KCl9LGRlZmF1bHRQcmV2ZW50ZWQ6MCxpc1RydXN0ZWQ6MH0sdGQ9cmQoc2QpLHVkPUEoe30sc2Qse3ZpZXc6MCxkZXRhaWw6MH0pLHZkPXJkKHVkKSx3ZCx4ZCx5ZCxBZD1BKHt9LHVkLHtzY3JlZW5YOjAsc2NyZWVuWTowLGNsaWVudFg6MCxjbGllbnRZOjAscGFnZVg6MCxwYWdlWTowLGN0cmxLZXk6MCxzaGlmdEtleTowLGFsdEtleTowLG1ldGFLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkLGJ1dHRvbjowLGJ1dHRvbnM6MCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hLnJlbGF0ZWRUYXJnZXQ/YS5mcm9tRWxlbWVudD09PWEuc3JjRWxlbWVudD9hLnRvRWxlbWVudDphLmZyb21FbGVtZW50OmEucmVsYXRlZFRhcmdldH0sbW92ZW1lbnRYOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRYXCJpblxuYSlyZXR1cm4gYS5tb3ZlbWVudFg7YSE9PXlkJiYoeWQmJlwibW91c2Vtb3ZlXCI9PT1hLnR5cGU/KHdkPWEuc2NyZWVuWC15ZC5zY3JlZW5YLHhkPWEuc2NyZWVuWS15ZC5zY3JlZW5ZKTp4ZD13ZD0wLHlkPWEpO3JldHVybiB3ZH0sbW92ZW1lbnRZOmZ1bmN0aW9uKGEpe3JldHVyblwibW92ZW1lbnRZXCJpbiBhP2EubW92ZW1lbnRZOnhkfX0pLEJkPXJkKEFkKSxDZD1BKHt9LEFkLHtkYXRhVHJhbnNmZXI6MH0pLERkPXJkKENkKSxFZD1BKHt9LHVkLHtyZWxhdGVkVGFyZ2V0OjB9KSxGZD1yZChFZCksR2Q9QSh7fSxzZCx7YW5pbWF0aW9uTmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksSGQ9cmQoR2QpLElkPUEoe30sc2Qse2NsaXBib2FyZERhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuXCJjbGlwYm9hcmREYXRhXCJpbiBhP2EuY2xpcGJvYXJkRGF0YTp3aW5kb3cuY2xpcGJvYXJkRGF0YX19KSxKZD1yZChJZCksS2Q9QSh7fSxzZCx7ZGF0YTowfSksTGQ9cmQoS2QpLE1kPXtFc2M6XCJFc2NhcGVcIixcblNwYWNlYmFyOlwiIFwiLExlZnQ6XCJBcnJvd0xlZnRcIixVcDpcIkFycm93VXBcIixSaWdodDpcIkFycm93UmlnaHRcIixEb3duOlwiQXJyb3dEb3duXCIsRGVsOlwiRGVsZXRlXCIsV2luOlwiT1NcIixNZW51OlwiQ29udGV4dE1lbnVcIixBcHBzOlwiQ29udGV4dE1lbnVcIixTY3JvbGw6XCJTY3JvbGxMb2NrXCIsTW96UHJpbnRhYmxlS2V5OlwiVW5pZGVudGlmaWVkXCJ9LE5kPXs4OlwiQmFja3NwYWNlXCIsOTpcIlRhYlwiLDEyOlwiQ2xlYXJcIiwxMzpcIkVudGVyXCIsMTY6XCJTaGlmdFwiLDE3OlwiQ29udHJvbFwiLDE4OlwiQWx0XCIsMTk6XCJQYXVzZVwiLDIwOlwiQ2Fwc0xvY2tcIiwyNzpcIkVzY2FwZVwiLDMyOlwiIFwiLDMzOlwiUGFnZVVwXCIsMzQ6XCJQYWdlRG93blwiLDM1OlwiRW5kXCIsMzY6XCJIb21lXCIsMzc6XCJBcnJvd0xlZnRcIiwzODpcIkFycm93VXBcIiwzOTpcIkFycm93UmlnaHRcIiw0MDpcIkFycm93RG93blwiLDQ1OlwiSW5zZXJ0XCIsNDY6XCJEZWxldGVcIiwxMTI6XCJGMVwiLDExMzpcIkYyXCIsMTE0OlwiRjNcIiwxMTU6XCJGNFwiLDExNjpcIkY1XCIsMTE3OlwiRjZcIiwxMTg6XCJGN1wiLFxuMTE5OlwiRjhcIiwxMjA6XCJGOVwiLDEyMTpcIkYxMFwiLDEyMjpcIkYxMVwiLDEyMzpcIkYxMlwiLDE0NDpcIk51bUxvY2tcIiwxNDU6XCJTY3JvbGxMb2NrXCIsMjI0OlwiTWV0YVwifSxPZD17QWx0OlwiYWx0S2V5XCIsQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gUGQoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1PZFthXSk/ISFiW2FdOiExfWZ1bmN0aW9uIHpkKCl7cmV0dXJuIFBkfVxudmFyIFFkPUEoe30sdWQse2tleTpmdW5jdGlvbihhKXtpZihhLmtleSl7dmFyIGI9TWRbYS5rZXldfHxhLmtleTtpZihcIlVuaWRlbnRpZmllZFwiIT09YilyZXR1cm4gYn1yZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/KGE9b2QoYSksMTM9PT1hP1wiRW50ZXJcIjpTdHJpbmcuZnJvbUNoYXJDb2RlKGEpKTpcImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP05kW2Eua2V5Q29kZV18fFwiVW5pZGVudGlmaWVkXCI6XCJcIn0sY29kZTowLGxvY2F0aW9uOjAsY3RybEtleTowLHNoaWZ0S2V5OjAsYWx0S2V5OjAsbWV0YUtleTowLHJlcGVhdDowLGxvY2FsZTowLGdldE1vZGlmaWVyU3RhdGU6emQsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP29kKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/b2QoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSxSZD1yZChRZCksU2Q9QSh7fSxBZCx7cG9pbnRlcklkOjAsd2lkdGg6MCxoZWlnaHQ6MCxwcmVzc3VyZTowLHRhbmdlbnRpYWxQcmVzc3VyZTowLHRpbHRYOjAsdGlsdFk6MCx0d2lzdDowLHBvaW50ZXJUeXBlOjAsaXNQcmltYXJ5OjB9KSxUZD1yZChTZCksVWQ9QSh7fSx1ZCx7dG91Y2hlczowLHRhcmdldFRvdWNoZXM6MCxjaGFuZ2VkVG91Y2hlczowLGFsdEtleTowLG1ldGFLZXk6MCxjdHJsS2V5OjAsc2hpZnRLZXk6MCxnZXRNb2RpZmllclN0YXRlOnpkfSksVmQ9cmQoVWQpLFdkPUEoe30sc2Qse3Byb3BlcnR5TmFtZTowLGVsYXBzZWRUaW1lOjAscHNldWRvRWxlbWVudDowfSksWGQ9cmQoV2QpLFlkPUEoe30sQWQse2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpbiBhPy1hLndoZWVsRGVsdGFYOjB9LFxuZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOjAsZGVsdGFNb2RlOjB9KSxaZD1yZChZZCksJGQ9WzksMTMsMjcsMzJdLGFlPWlhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxiZT1udWxsO2lhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihiZT1kb2N1bWVudC5kb2N1bWVudE1vZGUpO3ZhciBjZT1pYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIWJlLGRlPWlhJiYoIWFlfHxiZSYmODxiZSYmMTE+PWJlKSxlZT1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSxmZT0hMTtcbmZ1bmN0aW9uIGdlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09JGQuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImZvY3Vzb3V0XCI6cmV0dXJuITA7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gaGUoYSl7YT1hLmRldGFpbDtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJlwiZGF0YVwiaW4gYT9hLmRhdGE6bnVsbH12YXIgaWU9ITE7ZnVuY3Rpb24gamUoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIGhlKGIpO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDMyIT09Yi53aGljaClyZXR1cm4gbnVsbDtmZT0hMDtyZXR1cm4gZWU7Y2FzZSBcInRleHRJbnB1dFwiOnJldHVybiBhPWIuZGF0YSxhPT09ZWUmJmZlP251bGw6YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbmZ1bmN0aW9uIGtlKGEsYil7aWYoaWUpcmV0dXJuXCJjb21wb3NpdGlvbmVuZFwiPT09YXx8IWFlJiZnZShhLGIpPyhhPW5kKCksbWQ9bGQ9a2Q9bnVsbCxpZT0hMSxhKTpudWxsO3N3aXRjaChhKXtjYXNlIFwicGFzdGVcIjpyZXR1cm4gbnVsbDtjYXNlIFwia2V5cHJlc3NcIjppZighKGIuY3RybEtleXx8Yi5hbHRLZXl8fGIubWV0YUtleSl8fGIuY3RybEtleSYmYi5hbHRLZXkpe2lmKGIuY2hhciYmMTxiLmNoYXIubGVuZ3RoKXJldHVybiBiLmNoYXI7aWYoYi53aGljaClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShiLndoaWNoKX1yZXR1cm4gbnVsbDtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gZGUmJlwia29cIiE9PWIubG9jYWxlP251bGw6Yi5kYXRhO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIGxlPXtjb2xvcjohMCxkYXRlOiEwLGRhdGV0aW1lOiEwLFwiZGF0ZXRpbWUtbG9jYWxcIjohMCxlbWFpbDohMCxtb250aDohMCxudW1iZXI6ITAscGFzc3dvcmQ6ITAscmFuZ2U6ITAsc2VhcmNoOiEwLHRlbDohMCx0ZXh0OiEwLHRpbWU6ITAsdXJsOiEwLHdlZWs6ITB9O2Z1bmN0aW9uIG1lKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iPyEhbGVbYS50eXBlXTpcInRleHRhcmVhXCI9PT1iPyEwOiExfWZ1bmN0aW9uIG5lKGEsYixjLGQpe0ViKGQpO2I9b2UoYixcIm9uQ2hhbmdlXCIpOzA8Yi5sZW5ndGgmJihjPW5ldyB0ZChcIm9uQ2hhbmdlXCIsXCJjaGFuZ2VcIixudWxsLGMsZCksYS5wdXNoKHtldmVudDpjLGxpc3RlbmVyczpifSkpfXZhciBwZT1udWxsLHFlPW51bGw7ZnVuY3Rpb24gcmUoYSl7c2UoYSwwKX1mdW5jdGlvbiB0ZShhKXt2YXIgYj11ZShhKTtpZihXYShiKSlyZXR1cm4gYX1cbmZ1bmN0aW9uIHZlKGEsYil7aWYoXCJjaGFuZ2VcIj09PWEpcmV0dXJuIGJ9dmFyIHdlPSExO2lmKGlhKXt2YXIgeGU7aWYoaWEpe3ZhciB5ZT1cIm9uaW5wdXRcImluIGRvY3VtZW50O2lmKCF5ZSl7dmFyIHplPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7emUuc2V0QXR0cmlidXRlKFwib25pbnB1dFwiLFwicmV0dXJuO1wiKTt5ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgemUub25pbnB1dH14ZT15ZX1lbHNlIHhlPSExO3dlPXhlJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpfWZ1bmN0aW9uIEFlKCl7cGUmJihwZS5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkscWU9cGU9bnVsbCl9ZnVuY3Rpb24gQmUoYSl7aWYoXCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJnRlKHFlKSl7dmFyIGI9W107bmUoYixxZSxhLHhiKGEpKTtKYihyZSxiKX19XG5mdW5jdGlvbiBDZShhLGIsYyl7XCJmb2N1c2luXCI9PT1hPyhBZSgpLHBlPWIscWU9YyxwZS5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixCZSkpOlwiZm9jdXNvdXRcIj09PWEmJkFlKCl9ZnVuY3Rpb24gRGUoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gdGUocWUpfWZ1bmN0aW9uIEVlKGEsYil7aWYoXCJjbGlja1wiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gRmUoYSxiKXtpZihcImlucHV0XCI9PT1hfHxcImNoYW5nZVwiPT09YSlyZXR1cm4gdGUoYil9ZnVuY3Rpb24gR2UoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBIZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgT2JqZWN0LmlzP09iamVjdC5pczpHZTtcbmZ1bmN0aW9uIEllKGEsYil7aWYoSGUoYSxiKSlyZXR1cm4hMDtpZihcIm9iamVjdFwiIT09dHlwZW9mIGF8fG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGJ8fG51bGw9PT1iKXJldHVybiExO3ZhciBjPU9iamVjdC5rZXlzKGEpLGQ9T2JqZWN0LmtleXMoYik7aWYoYy5sZW5ndGghPT1kLmxlbmd0aClyZXR1cm4hMTtmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdO2lmKCFqYS5jYWxsKGIsZSl8fCFIZShhW2VdLGJbZV0pKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIEplKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1cbmZ1bmN0aW9uIEtlKGEsYil7dmFyIGM9SmUoYSk7YT0wO2Zvcih2YXIgZDtjOyl7aWYoMz09PWMubm9kZVR5cGUpe2Q9YStjLnRleHRDb250ZW50Lmxlbmd0aDtpZihhPD1iJiZkPj1iKXJldHVybntub2RlOmMsb2Zmc2V0OmItYX07YT1kfWE6e2Zvcig7Yzspe2lmKGMubmV4dFNpYmxpbmcpe2M9Yy5uZXh0U2libGluZzticmVhayBhfWM9Yy5wYXJlbnROb2RlfWM9dm9pZCAwfWM9SmUoYyl9fWZ1bmN0aW9uIExlKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/TGUoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfVxuZnVuY3Rpb24gTWUoKXtmb3IodmFyIGE9d2luZG93LGI9WGEoKTtiIGluc3RhbmNlb2YgYS5IVE1MSUZyYW1lRWxlbWVudDspe3RyeXt2YXIgYz1cInN0cmluZ1wiPT09dHlwZW9mIGIuY29udGVudFdpbmRvdy5sb2NhdGlvbi5ocmVmfWNhdGNoKGQpe2M9ITF9aWYoYylhPWIuY29udGVudFdpbmRvdztlbHNlIGJyZWFrO2I9WGEoYS5kb2N1bWVudCl9cmV0dXJuIGJ9ZnVuY3Rpb24gTmUoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX1cbmZ1bmN0aW9uIE9lKGEpe3ZhciBiPU1lKCksYz1hLmZvY3VzZWRFbGVtLGQ9YS5zZWxlY3Rpb25SYW5nZTtpZihiIT09YyYmYyYmYy5vd25lckRvY3VtZW50JiZMZShjLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGMpKXtpZihudWxsIT09ZCYmTmUoYykpaWYoYj1kLnN0YXJ0LGE9ZC5lbmQsdm9pZCAwPT09YSYmKGE9YiksXCJzZWxlY3Rpb25TdGFydFwiaW4gYyljLnNlbGVjdGlvblN0YXJ0PWIsYy5zZWxlY3Rpb25FbmQ9TWF0aC5taW4oYSxjLnZhbHVlLmxlbmd0aCk7ZWxzZSBpZihhPShiPWMub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQpJiZiLmRlZmF1bHRWaWV3fHx3aW5kb3csYS5nZXRTZWxlY3Rpb24pe2E9YS5nZXRTZWxlY3Rpb24oKTt2YXIgZT1jLnRleHRDb250ZW50Lmxlbmd0aCxmPU1hdGgubWluKGQuc3RhcnQsZSk7ZD12b2lkIDA9PT1kLmVuZD9mOk1hdGgubWluKGQuZW5kLGUpOyFhLmV4dGVuZCYmZj5kJiYoZT1kLGQ9ZixmPWUpO2U9S2UoYyxmKTt2YXIgZz1LZShjLFxuZCk7ZSYmZyYmKDEhPT1hLnJhbmdlQ291bnR8fGEuYW5jaG9yTm9kZSE9PWUubm9kZXx8YS5hbmNob3JPZmZzZXQhPT1lLm9mZnNldHx8YS5mb2N1c05vZGUhPT1nLm5vZGV8fGEuZm9jdXNPZmZzZXQhPT1nLm9mZnNldCkmJihiPWIuY3JlYXRlUmFuZ2UoKSxiLnNldFN0YXJ0KGUubm9kZSxlLm9mZnNldCksYS5yZW1vdmVBbGxSYW5nZXMoKSxmPmQ/KGEuYWRkUmFuZ2UoYiksYS5leHRlbmQoZy5ub2RlLGcub2Zmc2V0KSk6KGIuc2V0RW5kKGcubm9kZSxnLm9mZnNldCksYS5hZGRSYW5nZShiKSkpfWI9W107Zm9yKGE9YzthPWEucGFyZW50Tm9kZTspMT09PWEubm9kZVR5cGUmJmIucHVzaCh7ZWxlbWVudDphLGxlZnQ6YS5zY3JvbGxMZWZ0LHRvcDphLnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmZvY3VzJiZjLmZvY3VzKCk7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKylhPWJbY10sYS5lbGVtZW50LnNjcm9sbExlZnQ9YS5sZWZ0LGEuZWxlbWVudC5zY3JvbGxUb3A9YS50b3B9fVxudmFyIFBlPWlhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJjExPj1kb2N1bWVudC5kb2N1bWVudE1vZGUsUWU9bnVsbCxSZT1udWxsLFNlPW51bGwsVGU9ITE7XG5mdW5jdGlvbiBVZShhLGIsYyl7dmFyIGQ9Yy53aW5kb3c9PT1jP2MuZG9jdW1lbnQ6OT09PWMubm9kZVR5cGU/YzpjLm93bmVyRG9jdW1lbnQ7VGV8fG51bGw9PVFlfHxRZSE9PVhhKGQpfHwoZD1RZSxcInNlbGVjdGlvblN0YXJ0XCJpbiBkJiZOZShkKT9kPXtzdGFydDpkLnNlbGVjdGlvblN0YXJ0LGVuZDpkLnNlbGVjdGlvbkVuZH06KGQ9KGQub3duZXJEb2N1bWVudCYmZC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpLGQ9e2FuY2hvck5vZGU6ZC5hbmNob3JOb2RlLGFuY2hvck9mZnNldDpkLmFuY2hvck9mZnNldCxmb2N1c05vZGU6ZC5mb2N1c05vZGUsZm9jdXNPZmZzZXQ6ZC5mb2N1c09mZnNldH0pLFNlJiZJZShTZSxkKXx8KFNlPWQsZD1vZShSZSxcIm9uU2VsZWN0XCIpLDA8ZC5sZW5ndGgmJihiPW5ldyB0ZChcIm9uU2VsZWN0XCIsXCJzZWxlY3RcIixudWxsLGIsYyksYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpkfSksYi50YXJnZXQ9UWUpKSl9XG5mdW5jdGlvbiBWZShhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBXZT17YW5pbWF0aW9uZW5kOlZlKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOlZlKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6VmUoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6VmUoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxYZT17fSxZZT17fTtcbmlhJiYoWWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgV2UuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgV2UuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgV2UuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgV2UudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBaZShhKXtpZihYZVthXSlyZXR1cm4gWGVbYV07aWYoIVdlW2FdKXJldHVybiBhO3ZhciBiPVdlW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIFllKXJldHVybiBYZVthXT1iW2NdO3JldHVybiBhfXZhciAkZT1aZShcImFuaW1hdGlvbmVuZFwiKSxhZj1aZShcImFuaW1hdGlvbml0ZXJhdGlvblwiKSxiZj1aZShcImFuaW1hdGlvbnN0YXJ0XCIpLGNmPVplKFwidHJhbnNpdGlvbmVuZFwiKSxkZj1uZXcgTWFwLGVmPVwiYWJvcnQgYXV4Q2xpY2sgY2FuY2VsIGNhblBsYXkgY2FuUGxheVRocm91Z2ggY2xpY2sgY2xvc2UgY29udGV4dE1lbnUgY29weSBjdXQgZHJhZyBkcmFnRW5kIGRyYWdFbnRlciBkcmFnRXhpdCBkcmFnTGVhdmUgZHJhZ092ZXIgZHJhZ1N0YXJ0IGRyb3AgZHVyYXRpb25DaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgZ290UG9pbnRlckNhcHR1cmUgaW5wdXQgaW52YWxpZCBrZXlEb3duIGtleVByZXNzIGtleVVwIGxvYWQgbG9hZGVkRGF0YSBsb2FkZWRNZXRhZGF0YSBsb2FkU3RhcnQgbG9zdFBvaW50ZXJDYXB0dXJlIG1vdXNlRG93biBtb3VzZU1vdmUgbW91c2VPdXQgbW91c2VPdmVyIG1vdXNlVXAgcGFzdGUgcGF1c2UgcGxheSBwbGF5aW5nIHBvaW50ZXJDYW5jZWwgcG9pbnRlckRvd24gcG9pbnRlck1vdmUgcG9pbnRlck91dCBwb2ludGVyT3ZlciBwb2ludGVyVXAgcHJvZ3Jlc3MgcmF0ZUNoYW5nZSByZXNldCByZXNpemUgc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdWJtaXQgc3VzcGVuZCB0aW1lVXBkYXRlIHRvdWNoQ2FuY2VsIHRvdWNoRW5kIHRvdWNoU3RhcnQgdm9sdW1lQ2hhbmdlIHNjcm9sbCB0b2dnbGUgdG91Y2hNb3ZlIHdhaXRpbmcgd2hlZWxcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiBmZihhLGIpe2RmLnNldChhLGIpO2ZhKGIsW2FdKX1mb3IodmFyIGdmPTA7Z2Y8ZWYubGVuZ3RoO2dmKyspe3ZhciBoZj1lZltnZl0samY9aGYudG9Mb3dlckNhc2UoKSxrZj1oZlswXS50b1VwcGVyQ2FzZSgpK2hmLnNsaWNlKDEpO2ZmKGpmLFwib25cIitrZil9ZmYoJGUsXCJvbkFuaW1hdGlvbkVuZFwiKTtmZihhZixcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIpO2ZmKGJmLFwib25BbmltYXRpb25TdGFydFwiKTtmZihcImRibGNsaWNrXCIsXCJvbkRvdWJsZUNsaWNrXCIpO2ZmKFwiZm9jdXNpblwiLFwib25Gb2N1c1wiKTtmZihcImZvY3Vzb3V0XCIsXCJvbkJsdXJcIik7ZmYoY2YsXCJvblRyYW5zaXRpb25FbmRcIik7aGEoXCJvbk1vdXNlRW50ZXJcIixbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdKTtoYShcIm9uTW91c2VMZWF2ZVwiLFtcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl0pO2hhKFwib25Qb2ludGVyRW50ZXJcIixbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXSk7XG5oYShcIm9uUG9pbnRlckxlYXZlXCIsW1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl0pO2ZhKFwib25DaGFuZ2VcIixcImNoYW5nZSBjbGljayBmb2N1c2luIGZvY3Vzb3V0IGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpKTtmYShcIm9uU2VsZWN0XCIsXCJmb2N1c291dCBjb250ZXh0bWVudSBkcmFnZW5kIGZvY3VzaW4ga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIikpO2ZhKFwib25CZWZvcmVJbnB1dFwiLFtcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXSk7ZmEoXCJvbkNvbXBvc2l0aW9uRW5kXCIsXCJjb21wb3NpdGlvbmVuZCBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7ZmEoXCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcImNvbXBvc2l0aW9uc3RhcnQgZm9jdXNvdXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIikpO1xuZmEoXCJvbkNvbXBvc2l0aW9uVXBkYXRlXCIsXCJjb21wb3NpdGlvbnVwZGF0ZSBmb2N1c291dCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSk7dmFyIGxmPVwiYWJvcnQgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuY3J5cHRlZCBlbmRlZCBlcnJvciBsb2FkZWRkYXRhIGxvYWRlZG1ldGFkYXRhIGxvYWRzdGFydCBwYXVzZSBwbGF5IHBsYXlpbmcgcHJvZ3Jlc3MgcmF0ZWNoYW5nZSByZXNpemUgc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmdcIi5zcGxpdChcIiBcIiksbWY9bmV3IFNldChcImNhbmNlbCBjbG9zZSBpbnZhbGlkIGxvYWQgc2Nyb2xsIHRvZ2dsZVwiLnNwbGl0KFwiIFwiKS5jb25jYXQobGYpKTtcbmZ1bmN0aW9uIG5mKGEsYixjKXt2YXIgZD1hLnR5cGV8fFwidW5rbm93bi1ldmVudFwiO2EuY3VycmVudFRhcmdldD1jO1ViKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9XG5mdW5jdGlvbiBzZShhLGIpe2I9MCE9PShiJjQpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLGU9ZC5ldmVudDtkPWQubGlzdGVuZXJzO2E6e3ZhciBmPXZvaWQgMDtpZihiKWZvcih2YXIgZz1kLmxlbmd0aC0xOzA8PWc7Zy0tKXt2YXIgaD1kW2ddLGs9aC5pbnN0YW5jZSxsPWguY3VycmVudFRhcmdldDtoPWgubGlzdGVuZXI7aWYoayE9PWYmJmUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlicmVhayBhO25mKGUsaCxsKTtmPWt9ZWxzZSBmb3IoZz0wO2c8ZC5sZW5ndGg7ZysrKXtoPWRbZ107az1oLmluc3RhbmNlO2w9aC5jdXJyZW50VGFyZ2V0O2g9aC5saXN0ZW5lcjtpZihrIT09ZiYmZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWJyZWFrIGE7bmYoZSxoLGwpO2Y9a319fWlmKFFiKXRocm93IGE9UmIsUWI9ITEsUmI9bnVsbCxhO31cbmZ1bmN0aW9uIEQoYSxiKXt2YXIgYz1iW29mXTt2b2lkIDA9PT1jJiYoYz1iW29mXT1uZXcgU2V0KTt2YXIgZD1hK1wiX19idWJibGVcIjtjLmhhcyhkKXx8KHBmKGIsYSwyLCExKSxjLmFkZChkKSl9ZnVuY3Rpb24gcWYoYSxiLGMpe3ZhciBkPTA7YiYmKGR8PTQpO3BmKGMsYSxkLGIpfXZhciByZj1cIl9yZWFjdExpc3RlbmluZ1wiK01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO2Z1bmN0aW9uIHNmKGEpe2lmKCFhW3JmXSl7YVtyZl09ITA7ZGEuZm9yRWFjaChmdW5jdGlvbihiKXtcInNlbGVjdGlvbmNoYW5nZVwiIT09YiYmKG1mLmhhcyhiKXx8cWYoYiwhMSxhKSxxZihiLCEwLGEpKX0pO3ZhciBiPTk9PT1hLm5vZGVUeXBlP2E6YS5vd25lckRvY3VtZW50O251bGw9PT1ifHxiW3JmXXx8KGJbcmZdPSEwLHFmKFwic2VsZWN0aW9uY2hhbmdlXCIsITEsYikpfX1cbmZ1bmN0aW9uIHBmKGEsYixjLGQpe3N3aXRjaChqZChiKSl7Y2FzZSAxOnZhciBlPWVkO2JyZWFrO2Nhc2UgNDplPWdkO2JyZWFrO2RlZmF1bHQ6ZT1mZH1jPWUuYmluZChudWxsLGIsYyxhKTtlPXZvaWQgMDshTGJ8fFwidG91Y2hzdGFydFwiIT09YiYmXCJ0b3VjaG1vdmVcIiE9PWImJlwid2hlZWxcIiE9PWJ8fChlPSEwKTtkP3ZvaWQgMCE9PWU/YS5hZGRFdmVudExpc3RlbmVyKGIsYyx7Y2FwdHVyZTohMCxwYXNzaXZlOmV9KTphLmFkZEV2ZW50TGlzdGVuZXIoYixjLCEwKTp2b2lkIDAhPT1lP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMse3Bhc3NpdmU6ZX0pOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfVxuZnVuY3Rpb24gaGQoYSxiLGMsZCxlKXt2YXIgZj1kO2lmKDA9PT0oYiYxKSYmMD09PShiJjIpJiZudWxsIT09ZClhOmZvcig7Oyl7aWYobnVsbD09PWQpcmV0dXJuO3ZhciBnPWQudGFnO2lmKDM9PT1nfHw0PT09Zyl7dmFyIGg9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztpZihoPT09ZXx8OD09PWgubm9kZVR5cGUmJmgucGFyZW50Tm9kZT09PWUpYnJlYWs7aWYoND09PWcpZm9yKGc9ZC5yZXR1cm47bnVsbCE9PWc7KXt2YXIgaz1nLnRhZztpZigzPT09a3x8ND09PWspaWYoaz1nLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLGs9PT1lfHw4PT09ay5ub2RlVHlwZSYmay5wYXJlbnROb2RlPT09ZSlyZXR1cm47Zz1nLnJldHVybn1mb3IoO251bGwhPT1oOyl7Zz1XYyhoKTtpZihudWxsPT09ZylyZXR1cm47az1nLnRhZztpZig1PT09a3x8Nj09PWspe2Q9Zj1nO2NvbnRpbnVlIGF9aD1oLnBhcmVudE5vZGV9fWQ9ZC5yZXR1cm59SmIoZnVuY3Rpb24oKXt2YXIgZD1mLGU9eGIoYyksZz1bXTtcbmE6e3ZhciBoPWRmLmdldChhKTtpZih2b2lkIDAhPT1oKXt2YXIgaz10ZCxuPWE7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1vZChjKSlicmVhayBhO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6az1SZDticmVhaztjYXNlIFwiZm9jdXNpblwiOm49XCJmb2N1c1wiO2s9RmQ7YnJlYWs7Y2FzZSBcImZvY3Vzb3V0XCI6bj1cImJsdXJcIjtrPUZkO2JyZWFrO2Nhc2UgXCJiZWZvcmVibHVyXCI6Y2FzZSBcImFmdGVyYmx1clwiOms9RmQ7YnJlYWs7Y2FzZSBcImNsaWNrXCI6aWYoMj09PWMuYnV0dG9uKWJyZWFrIGE7Y2FzZSBcImF1eGNsaWNrXCI6Y2FzZSBcImRibGNsaWNrXCI6Y2FzZSBcIm1vdXNlZG93blwiOmNhc2UgXCJtb3VzZW1vdmVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJtb3VzZW91dFwiOmNhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwiY29udGV4dG1lbnVcIjprPUJkO2JyZWFrO2Nhc2UgXCJkcmFnXCI6Y2FzZSBcImRyYWdlbmRcIjpjYXNlIFwiZHJhZ2VudGVyXCI6Y2FzZSBcImRyYWdleGl0XCI6Y2FzZSBcImRyYWdsZWF2ZVwiOmNhc2UgXCJkcmFnb3ZlclwiOmNhc2UgXCJkcmFnc3RhcnRcIjpjYXNlIFwiZHJvcFwiOms9XG5EZDticmVhaztjYXNlIFwidG91Y2hjYW5jZWxcIjpjYXNlIFwidG91Y2hlbmRcIjpjYXNlIFwidG91Y2htb3ZlXCI6Y2FzZSBcInRvdWNoc3RhcnRcIjprPVZkO2JyZWFrO2Nhc2UgJGU6Y2FzZSBhZjpjYXNlIGJmOms9SGQ7YnJlYWs7Y2FzZSBjZjprPVhkO2JyZWFrO2Nhc2UgXCJzY3JvbGxcIjprPXZkO2JyZWFrO2Nhc2UgXCJ3aGVlbFwiOms9WmQ7YnJlYWs7Y2FzZSBcImNvcHlcIjpjYXNlIFwiY3V0XCI6Y2FzZSBcInBhc3RlXCI6az1KZDticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcInBvaW50ZXJjYW5jZWxcIjpjYXNlIFwicG9pbnRlcmRvd25cIjpjYXNlIFwicG9pbnRlcm1vdmVcIjpjYXNlIFwicG9pbnRlcm91dFwiOmNhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVydXBcIjprPVRkfXZhciB0PTAhPT0oYiY0KSxKPSF0JiZcInNjcm9sbFwiPT09YSx4PXQ/bnVsbCE9PWg/aCtcIkNhcHR1cmVcIjpudWxsOmg7dD1bXTtmb3IodmFyIHc9ZCx1O251bGwhPT1cbnc7KXt1PXc7dmFyIEY9dS5zdGF0ZU5vZGU7NT09PXUudGFnJiZudWxsIT09RiYmKHU9RixudWxsIT09eCYmKEY9S2Iodyx4KSxudWxsIT1GJiZ0LnB1c2godGYodyxGLHUpKSkpO2lmKEopYnJlYWs7dz13LnJldHVybn0wPHQubGVuZ3RoJiYoaD1uZXcgayhoLG4sbnVsbCxjLGUpLGcucHVzaCh7ZXZlbnQ6aCxsaXN0ZW5lcnM6dH0pKX19aWYoMD09PShiJjcpKXthOntoPVwibW91c2VvdmVyXCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hO2s9XCJtb3VzZW91dFwiPT09YXx8XCJwb2ludGVyb3V0XCI9PT1hO2lmKGgmJmMhPT13YiYmKG49Yy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KSYmKFdjKG4pfHxuW3VmXSkpYnJlYWsgYTtpZihrfHxoKXtoPWUud2luZG93PT09ZT9lOihoPWUub3duZXJEb2N1bWVudCk/aC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3c6d2luZG93O2lmKGspe2lmKG49Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCxrPWQsbj1uP1djKG4pOm51bGwsbnVsbCE9PVxubiYmKEo9VmIobiksbiE9PUp8fDUhPT1uLnRhZyYmNiE9PW4udGFnKSluPW51bGx9ZWxzZSBrPW51bGwsbj1kO2lmKGshPT1uKXt0PUJkO0Y9XCJvbk1vdXNlTGVhdmVcIjt4PVwib25Nb3VzZUVudGVyXCI7dz1cIm1vdXNlXCI7aWYoXCJwb2ludGVyb3V0XCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hKXQ9VGQsRj1cIm9uUG9pbnRlckxlYXZlXCIseD1cIm9uUG9pbnRlckVudGVyXCIsdz1cInBvaW50ZXJcIjtKPW51bGw9PWs/aDp1ZShrKTt1PW51bGw9PW4/aDp1ZShuKTtoPW5ldyB0KEYsdytcImxlYXZlXCIsayxjLGUpO2gudGFyZ2V0PUo7aC5yZWxhdGVkVGFyZ2V0PXU7Rj1udWxsO1djKGUpPT09ZCYmKHQ9bmV3IHQoeCx3K1wiZW50ZXJcIixuLGMsZSksdC50YXJnZXQ9dSx0LnJlbGF0ZWRUYXJnZXQ9SixGPXQpO0o9RjtpZihrJiZuKWI6e3Q9azt4PW47dz0wO2Zvcih1PXQ7dTt1PXZmKHUpKXcrKzt1PTA7Zm9yKEY9eDtGO0Y9dmYoRikpdSsrO2Zvcig7MDx3LXU7KXQ9dmYodCksdy0tO2Zvcig7MDx1LXc7KXg9XG52Zih4KSx1LS07Zm9yKDt3LS07KXtpZih0PT09eHx8bnVsbCE9PXgmJnQ9PT14LmFsdGVybmF0ZSlicmVhayBiO3Q9dmYodCk7eD12Zih4KX10PW51bGx9ZWxzZSB0PW51bGw7bnVsbCE9PWsmJndmKGcsaCxrLHQsITEpO251bGwhPT1uJiZudWxsIT09SiYmd2YoZyxKLG4sdCwhMCl9fX1hOntoPWQ/dWUoZCk6d2luZG93O2s9aC5ub2RlTmFtZSYmaC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwic2VsZWN0XCI9PT1rfHxcImlucHV0XCI9PT1rJiZcImZpbGVcIj09PWgudHlwZSl2YXIgbmE9dmU7ZWxzZSBpZihtZShoKSlpZih3ZSluYT1GZTtlbHNle25hPURlO3ZhciB4YT1DZX1lbHNlKGs9aC5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWsudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWgudHlwZXx8XCJyYWRpb1wiPT09aC50eXBlKSYmKG5hPUVlKTtpZihuYSYmKG5hPW5hKGEsZCkpKXtuZShnLG5hLGMsZSk7YnJlYWsgYX14YSYmeGEoYSxoLGQpO1wiZm9jdXNvdXRcIj09PWEmJih4YT1oLl93cmFwcGVyU3RhdGUpJiZcbnhhLmNvbnRyb2xsZWQmJlwibnVtYmVyXCI9PT1oLnR5cGUmJmNiKGgsXCJudW1iZXJcIixoLnZhbHVlKX14YT1kP3VlKGQpOndpbmRvdztzd2l0Y2goYSl7Y2FzZSBcImZvY3VzaW5cIjppZihtZSh4YSl8fFwidHJ1ZVwiPT09eGEuY29udGVudEVkaXRhYmxlKVFlPXhhLFJlPWQsU2U9bnVsbDticmVhaztjYXNlIFwiZm9jdXNvdXRcIjpTZT1SZT1RZT1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZWRvd25cIjpUZT0hMDticmVhaztjYXNlIFwiY29udGV4dG1lbnVcIjpjYXNlIFwibW91c2V1cFwiOmNhc2UgXCJkcmFnZW5kXCI6VGU9ITE7VWUoZyxjLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihQZSlicmVhaztjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOlVlKGcsYyxlKX12YXIgJGE7aWYoYWUpYjp7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6dmFyIGJhPVwib25Db21wb3NpdGlvblN0YXJ0XCI7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpiYT1cIm9uQ29tcG9zaXRpb25FbmRcIjtcbmJyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6YmE9XCJvbkNvbXBvc2l0aW9uVXBkYXRlXCI7YnJlYWsgYn1iYT12b2lkIDB9ZWxzZSBpZT9nZShhLGMpJiYoYmE9XCJvbkNvbXBvc2l0aW9uRW5kXCIpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoYmE9XCJvbkNvbXBvc2l0aW9uU3RhcnRcIik7YmEmJihkZSYmXCJrb1wiIT09Yy5sb2NhbGUmJihpZXx8XCJvbkNvbXBvc2l0aW9uU3RhcnRcIiE9PWJhP1wib25Db21wb3NpdGlvbkVuZFwiPT09YmEmJmllJiYoJGE9bmQoKSk6KGtkPWUsbGQ9XCJ2YWx1ZVwiaW4ga2Q/a2QudmFsdWU6a2QudGV4dENvbnRlbnQsaWU9ITApKSx4YT1vZShkLGJhKSwwPHhhLmxlbmd0aCYmKGJhPW5ldyBMZChiYSxhLG51bGwsYyxlKSxnLnB1c2goe2V2ZW50OmJhLGxpc3RlbmVyczp4YX0pLCRhP2JhLmRhdGE9JGE6KCRhPWhlKGMpLG51bGwhPT0kYSYmKGJhLmRhdGE9JGEpKSkpO2lmKCRhPWNlP2plKGEsYyk6a2UoYSxjKSlkPW9lKGQsXCJvbkJlZm9yZUlucHV0XCIpLFxuMDxkLmxlbmd0aCYmKGU9bmV3IExkKFwib25CZWZvcmVJbnB1dFwiLFwiYmVmb3JlaW5wdXRcIixudWxsLGMsZSksZy5wdXNoKHtldmVudDplLGxpc3RlbmVyczpkfSksZS5kYXRhPSRhKX1zZShnLGIpfSl9ZnVuY3Rpb24gdGYoYSxiLGMpe3JldHVybntpbnN0YW5jZTphLGxpc3RlbmVyOmIsY3VycmVudFRhcmdldDpjfX1mdW5jdGlvbiBvZShhLGIpe2Zvcih2YXIgYz1iK1wiQ2FwdHVyZVwiLGQ9W107bnVsbCE9PWE7KXt2YXIgZT1hLGY9ZS5zdGF0ZU5vZGU7NT09PWUudGFnJiZudWxsIT09ZiYmKGU9ZixmPUtiKGEsYyksbnVsbCE9ZiYmZC51bnNoaWZ0KHRmKGEsZixlKSksZj1LYihhLGIpLG51bGwhPWYmJmQucHVzaCh0ZihhLGYsZSkpKTthPWEucmV0dXJufXJldHVybiBkfWZ1bmN0aW9uIHZmKGEpe2lmKG51bGw9PT1hKXJldHVybiBudWxsO2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9XG5mdW5jdGlvbiB3ZihhLGIsYyxkLGUpe2Zvcih2YXIgZj1iLl9yZWFjdE5hbWUsZz1bXTtudWxsIT09YyYmYyE9PWQ7KXt2YXIgaD1jLGs9aC5hbHRlcm5hdGUsbD1oLnN0YXRlTm9kZTtpZihudWxsIT09ayYmaz09PWQpYnJlYWs7NT09PWgudGFnJiZudWxsIT09bCYmKGg9bCxlPyhrPUtiKGMsZiksbnVsbCE9ayYmZy51bnNoaWZ0KHRmKGMsayxoKSkpOmV8fChrPUtiKGMsZiksbnVsbCE9ayYmZy5wdXNoKHRmKGMsayxoKSkpKTtjPWMucmV0dXJufTAhPT1nLmxlbmd0aCYmYS5wdXNoKHtldmVudDpiLGxpc3RlbmVyczpnfSl9dmFyIHhmPS9cXHJcXG4/L2cseWY9L1xcdTAwMDB8XFx1RkZGRC9nO2Z1bmN0aW9uIHpmKGEpe3JldHVybihcInN0cmluZ1wiPT09dHlwZW9mIGE/YTpcIlwiK2EpLnJlcGxhY2UoeGYsXCJcXG5cIikucmVwbGFjZSh5ZixcIlwiKX1mdW5jdGlvbiBBZihhLGIsYyl7Yj16ZihiKTtpZih6ZihhKSE9PWImJmMpdGhyb3cgRXJyb3IocCg0MjUpKTt9ZnVuY3Rpb24gQmYoKXt9XG52YXIgQ2Y9bnVsbCxEZj1udWxsO2Z1bmN0aW9uIEVmKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJub3NjcmlwdFwiPT09YXx8XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm51bWJlclwiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9PWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sfVxudmFyIEZmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLEdmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMCxIZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlOnZvaWQgMCxKZj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgcXVldWVNaWNyb3Rhc2s/cXVldWVNaWNyb3Rhc2s6XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBIZj9mdW5jdGlvbihhKXtyZXR1cm4gSGYucmVzb2x2ZShudWxsKS50aGVuKGEpLmNhdGNoKElmKX06RmY7ZnVuY3Rpb24gSWYoYSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGE7fSl9XG5mdW5jdGlvbiBLZihhLGIpe3ZhciBjPWIsZD0wO2Rve3ZhciBlPWMubmV4dFNpYmxpbmc7YS5yZW1vdmVDaGlsZChjKTtpZihlJiY4PT09ZS5ub2RlVHlwZSlpZihjPWUuZGF0YSxcIi8kXCI9PT1jKXtpZigwPT09ZCl7YS5yZW1vdmVDaGlsZChlKTtiZChiKTtyZXR1cm59ZC0tfWVsc2VcIiRcIiE9PWMmJlwiJD9cIiE9PWMmJlwiJCFcIiE9PWN8fGQrKztjPWV9d2hpbGUoYyk7YmQoYil9ZnVuY3Rpb24gTGYoYSl7Zm9yKDtudWxsIT1hO2E9YS5uZXh0U2libGluZyl7dmFyIGI9YS5ub2RlVHlwZTtpZigxPT09Ynx8Mz09PWIpYnJlYWs7aWYoOD09PWIpe2I9YS5kYXRhO2lmKFwiJFwiPT09Ynx8XCIkIVwiPT09Ynx8XCIkP1wiPT09YilicmVhaztpZihcIi8kXCI9PT1iKXJldHVybiBudWxsfX1yZXR1cm4gYX1cbmZ1bmN0aW9uIE1mKGEpe2E9YS5wcmV2aW91c1NpYmxpbmc7Zm9yKHZhciBiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoXCIkXCI9PT1jfHxcIiQhXCI9PT1jfHxcIiQ/XCI9PT1jKXtpZigwPT09YilyZXR1cm4gYTtiLS19ZWxzZVwiLyRcIj09PWMmJmIrK31hPWEucHJldmlvdXNTaWJsaW5nfXJldHVybiBudWxsfXZhciBOZj1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSxPZj1cIl9fcmVhY3RGaWJlciRcIitOZixQZj1cIl9fcmVhY3RQcm9wcyRcIitOZix1Zj1cIl9fcmVhY3RDb250YWluZXIkXCIrTmYsb2Y9XCJfX3JlYWN0RXZlbnRzJFwiK05mLFFmPVwiX19yZWFjdExpc3RlbmVycyRcIitOZixSZj1cIl9fcmVhY3RIYW5kbGVzJFwiK05mO1xuZnVuY3Rpb24gV2MoYSl7dmFyIGI9YVtPZl07aWYoYilyZXR1cm4gYjtmb3IodmFyIGM9YS5wYXJlbnROb2RlO2M7KXtpZihiPWNbdWZdfHxjW09mXSl7Yz1iLmFsdGVybmF0ZTtpZihudWxsIT09Yi5jaGlsZHx8bnVsbCE9PWMmJm51bGwhPT1jLmNoaWxkKWZvcihhPU1mKGEpO251bGwhPT1hOyl7aWYoYz1hW09mXSlyZXR1cm4gYzthPU1mKGEpfXJldHVybiBifWE9YztjPWEucGFyZW50Tm9kZX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBDYihhKXthPWFbT2ZdfHxhW3VmXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWcmJjEzIT09YS50YWcmJjMhPT1hLnRhZz9udWxsOmF9ZnVuY3Rpb24gdWUoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3Rocm93IEVycm9yKHAoMzMpKTt9ZnVuY3Rpb24gRGIoYSl7cmV0dXJuIGFbUGZdfHxudWxsfXZhciBTZj1bXSxUZj0tMTtmdW5jdGlvbiBVZihhKXtyZXR1cm57Y3VycmVudDphfX1cbmZ1bmN0aW9uIEUoYSl7MD5UZnx8KGEuY3VycmVudD1TZltUZl0sU2ZbVGZdPW51bGwsVGYtLSl9ZnVuY3Rpb24gRyhhLGIpe1RmKys7U2ZbVGZdPWEuY3VycmVudDthLmN1cnJlbnQ9Yn12YXIgVmY9e30sSD1VZihWZiksV2Y9VWYoITEpLFhmPVZmO2Z1bmN0aW9uIFlmKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gVmY7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9XG5mdW5jdGlvbiBaZihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uICRmKCl7RShXZik7RShIKX1mdW5jdGlvbiBhZyhhLGIsYyl7aWYoSC5jdXJyZW50IT09VmYpdGhyb3cgRXJyb3IocCgxNjgpKTtHKEgsYik7RyhXZixjKX1mdW5jdGlvbiBiZyhhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7Yj1iLmNoaWxkQ29udGV4dFR5cGVzO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBkLmdldENoaWxkQ29udGV4dClyZXR1cm4gYztkPWQuZ2V0Q2hpbGRDb250ZXh0KCk7Zm9yKHZhciBlIGluIGQpaWYoIShlIGluIGIpKXRocm93IEVycm9yKHAoMTA4LFJhKGEpfHxcIlVua25vd25cIixlKSk7cmV0dXJuIEEoe30sYyxkKX1cbmZ1bmN0aW9uIGNnKGEpe2E9KGE9YS5zdGF0ZU5vZGUpJiZhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxWZjtYZj1ILmN1cnJlbnQ7RyhILGEpO0coV2YsV2YuY3VycmVudCk7cmV0dXJuITB9ZnVuY3Rpb24gZGcoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2lmKCFkKXRocm93IEVycm9yKHAoMTY5KSk7Yz8oYT1iZyhhLGIsWGYpLGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ9YSxFKFdmKSxFKEgpLEcoSCxhKSk6RShXZik7RyhXZixjKX12YXIgZWc9bnVsbCxmZz0hMSxnZz0hMTtmdW5jdGlvbiBoZyhhKXtudWxsPT09ZWc/ZWc9W2FdOmVnLnB1c2goYSl9ZnVuY3Rpb24gaWcoYSl7Zmc9ITA7aGcoYSl9XG5mdW5jdGlvbiBqZygpe2lmKCFnZyYmbnVsbCE9PWVnKXtnZz0hMDt2YXIgYT0wLGI9Qzt0cnl7dmFyIGM9ZWc7Zm9yKEM9MTthPGMubGVuZ3RoO2ErKyl7dmFyIGQ9Y1thXTtkbyBkPWQoITApO3doaWxlKG51bGwhPT1kKX1lZz1udWxsO2ZnPSExfWNhdGNoKGUpe3Rocm93IG51bGwhPT1lZyYmKGVnPWVnLnNsaWNlKGErMSkpLGFjKGZjLGpnKSxlO31maW5hbGx5e0M9YixnZz0hMX19cmV0dXJuIG51bGx9dmFyIGtnPVtdLGxnPTAsbWc9bnVsbCxuZz0wLG9nPVtdLHBnPTAscWc9bnVsbCxyZz0xLHNnPVwiXCI7ZnVuY3Rpb24gdGcoYSxiKXtrZ1tsZysrXT1uZztrZ1tsZysrXT1tZzttZz1hO25nPWJ9XG5mdW5jdGlvbiB1ZyhhLGIsYyl7b2dbcGcrK109cmc7b2dbcGcrK109c2c7b2dbcGcrK109cWc7cWc9YTt2YXIgZD1yZzthPXNnO3ZhciBlPTMyLW9jKGQpLTE7ZCY9figxPDxlKTtjKz0xO3ZhciBmPTMyLW9jKGIpK2U7aWYoMzA8Zil7dmFyIGc9ZS1lJTU7Zj0oZCYoMTw8ZyktMSkudG9TdHJpbmcoMzIpO2Q+Pj1nO2UtPWc7cmc9MTw8MzItb2MoYikrZXxjPDxlfGQ7c2c9ZithfWVsc2Ugcmc9MTw8ZnxjPDxlfGQsc2c9YX1mdW5jdGlvbiB2ZyhhKXtudWxsIT09YS5yZXR1cm4mJih0ZyhhLDEpLHVnKGEsMSwwKSl9ZnVuY3Rpb24gd2coYSl7Zm9yKDthPT09bWc7KW1nPWtnWy0tbGddLGtnW2xnXT1udWxsLG5nPWtnWy0tbGddLGtnW2xnXT1udWxsO2Zvcig7YT09PXFnOylxZz1vZ1stLXBnXSxvZ1twZ109bnVsbCxzZz1vZ1stLXBnXSxvZ1twZ109bnVsbCxyZz1vZ1stLXBnXSxvZ1twZ109bnVsbH12YXIgeGc9bnVsbCx5Zz1udWxsLEk9ITEsemc9bnVsbDtcbmZ1bmN0aW9uIEFnKGEsYil7dmFyIGM9QmcoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnN0YXRlTm9kZT1iO2MucmV0dXJuPWE7Yj1hLmRlbGV0aW9ucztudWxsPT09Yj8oYS5kZWxldGlvbnM9W2NdLGEuZmxhZ3N8PTE2KTpiLnB1c2goYyl9XG5mdW5jdGlvbiBDZyhhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9Yix4Zz1hLHlnPUxmKGIuZmlyc3RDaGlsZCksITApOiExO2Nhc2UgNjpyZXR1cm4gYj1cIlwiPT09YS5wZW5kaW5nUHJvcHN8fDMhPT1iLm5vZGVUeXBlP251bGw6YixudWxsIT09Yj8oYS5zdGF0ZU5vZGU9Yix4Zz1hLHlnPW51bGwsITApOiExO2Nhc2UgMTM6cmV0dXJuIGI9OCE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhjPW51bGwhPT1xZz97aWQ6cmcsb3ZlcmZsb3c6c2d9Om51bGwsYS5tZW1vaXplZFN0YXRlPXtkZWh5ZHJhdGVkOmIsdHJlZUNvbnRleHQ6YyxyZXRyeUxhbmU6MTA3Mzc0MTgyNH0sYz1CZygxOCxudWxsLG51bGwsMCksYy5zdGF0ZU5vZGU9YixjLnJldHVybj1hLGEuY2hpbGQ9Yyx4Zz1hLHlnPVxubnVsbCwhMCk6ITE7ZGVmYXVsdDpyZXR1cm4hMX19ZnVuY3Rpb24gRGcoYSl7cmV0dXJuIDAhPT0oYS5tb2RlJjEpJiYwPT09KGEuZmxhZ3MmMTI4KX1mdW5jdGlvbiBFZyhhKXtpZihJKXt2YXIgYj15ZztpZihiKXt2YXIgYz1iO2lmKCFDZyhhLGIpKXtpZihEZyhhKSl0aHJvdyBFcnJvcihwKDQxOCkpO2I9TGYoYy5uZXh0U2libGluZyk7dmFyIGQ9eGc7YiYmQ2coYSxiKT9BZyhkLGMpOihhLmZsYWdzPWEuZmxhZ3MmLTQwOTd8MixJPSExLHhnPWEpfX1lbHNle2lmKERnKGEpKXRocm93IEVycm9yKHAoNDE4KSk7YS5mbGFncz1hLmZsYWdzJi00MDk3fDI7ST0hMTt4Zz1hfX19ZnVuY3Rpb24gRmcoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxMyE9PWEudGFnOylhPWEucmV0dXJuO3hnPWF9XG5mdW5jdGlvbiBHZyhhKXtpZihhIT09eGcpcmV0dXJuITE7aWYoIUkpcmV0dXJuIEZnKGEpLEk9ITAsITE7dmFyIGI7KGI9MyE9PWEudGFnKSYmIShiPTUhPT1hLnRhZykmJihiPWEudHlwZSxiPVwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhRWYoYS50eXBlLGEubWVtb2l6ZWRQcm9wcykpO2lmKGImJihiPXlnKSl7aWYoRGcoYSkpdGhyb3cgSGcoKSxFcnJvcihwKDQxOCkpO2Zvcig7YjspQWcoYSxiKSxiPUxmKGIubmV4dFNpYmxpbmcpfUZnKGEpO2lmKDEzPT09YS50YWcpe2E9YS5tZW1vaXplZFN0YXRlO2E9bnVsbCE9PWE/YS5kZWh5ZHJhdGVkOm51bGw7aWYoIWEpdGhyb3cgRXJyb3IocCgzMTcpKTthOnthPWEubmV4dFNpYmxpbmc7Zm9yKGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihcIi8kXCI9PT1jKXtpZigwPT09Yil7eWc9TGYoYS5uZXh0U2libGluZyk7YnJlYWsgYX1iLS19ZWxzZVwiJFwiIT09YyYmXCIkIVwiIT09YyYmXCIkP1wiIT09Y3x8YisrfWE9YS5uZXh0U2libGluZ315Zz1cbm51bGx9fWVsc2UgeWc9eGc/TGYoYS5zdGF0ZU5vZGUubmV4dFNpYmxpbmcpOm51bGw7cmV0dXJuITB9ZnVuY3Rpb24gSGcoKXtmb3IodmFyIGE9eWc7YTspYT1MZihhLm5leHRTaWJsaW5nKX1mdW5jdGlvbiBJZygpe3lnPXhnPW51bGw7ST0hMX1mdW5jdGlvbiBKZyhhKXtudWxsPT09emc/emc9W2FdOnpnLnB1c2goYSl9dmFyIEtnPXVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnO1xuZnVuY3Rpb24gTGcoYSxiLGMpe2E9Yy5yZWY7aWYobnVsbCE9PWEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZcIm9iamVjdFwiIT09dHlwZW9mIGEpe2lmKGMuX293bmVyKXtjPWMuX293bmVyO2lmKGMpe2lmKDEhPT1jLnRhZyl0aHJvdyBFcnJvcihwKDMwOSkpO3ZhciBkPWMuc3RhdGVOb2RlfWlmKCFkKXRocm93IEVycm9yKHAoMTQ3LGEpKTt2YXIgZT1kLGY9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWYpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZS5yZWZzO251bGw9PT1hP2RlbGV0ZSBiW2ZdOmJbZl09YX07Yi5fc3RyaW5nUmVmPWY7cmV0dXJuIGJ9aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBhKXRocm93IEVycm9yKHAoMjg0KSk7aWYoIWMuX293bmVyKXRocm93IEVycm9yKHAoMjkwLGEpKTt9cmV0dXJuIGF9XG5mdW5jdGlvbiBNZyhhLGIpe2E9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpO3Rocm93IEVycm9yKHAoMzEsXCJbb2JqZWN0IE9iamVjdF1cIj09PWE/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhiKS5qb2luKFwiLCBcIikrXCJ9XCI6YSkpO31mdW5jdGlvbiBOZyhhKXt2YXIgYj1hLl9pbml0O3JldHVybiBiKGEuX3BheWxvYWQpfVxuZnVuY3Rpb24gT2coYSl7ZnVuY3Rpb24gYihiLGMpe2lmKGEpe3ZhciBkPWIuZGVsZXRpb25zO251bGw9PT1kPyhiLmRlbGV0aW9ucz1bY10sYi5mbGFnc3w9MTYpOmQucHVzaChjKX19ZnVuY3Rpb24gYyhjLGQpe2lmKCFhKXJldHVybiBudWxsO2Zvcig7bnVsbCE9PWQ7KWIoYyxkKSxkPWQuc2libGluZztyZXR1cm4gbnVsbH1mdW5jdGlvbiBkKGEsYil7Zm9yKGE9bmV3IE1hcDtudWxsIT09YjspbnVsbCE9PWIua2V5P2Euc2V0KGIua2V5LGIpOmEuc2V0KGIuaW5kZXgsYiksYj1iLnNpYmxpbmc7cmV0dXJuIGF9ZnVuY3Rpb24gZShhLGIpe2E9UGcoYSxiKTthLmluZGV4PTA7YS5zaWJsaW5nPW51bGw7cmV0dXJuIGF9ZnVuY3Rpb24gZihiLGMsZCl7Yi5pbmRleD1kO2lmKCFhKXJldHVybiBiLmZsYWdzfD0xMDQ4NTc2LGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5mbGFnc3w9MixjKTpkO2IuZmxhZ3N8PTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZcbm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZmxhZ3N8PTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1RZyhjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBrKGEsYixjLGQpe3ZhciBmPWMudHlwZTtpZihmPT09eWEpcmV0dXJuIG0oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxjLmtleSk7aWYobnVsbCE9PWImJihiLmVsZW1lbnRUeXBlPT09Znx8XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi4kJHR5cGVvZj09PUhhJiZOZyhmKT09PWIudHlwZSkpcmV0dXJuIGQ9ZShiLGMucHJvcHMpLGQucmVmPUxnKGEsYixjKSxkLnJldHVybj1hLGQ7ZD1SZyhjLnR5cGUsYy5rZXksYy5wcm9wcyxudWxsLGEubW9kZSxkKTtkLnJlZj1MZyhhLGIsYyk7ZC5yZXR1cm49YTtyZXR1cm4gZH1mdW5jdGlvbiBsKGEsYixjLGQpe2lmKG51bGw9PT1ifHw0IT09Yi50YWd8fFxuYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyE9PWMuY29udGFpbmVySW5mb3x8Yi5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb24hPT1jLmltcGxlbWVudGF0aW9uKXJldHVybiBiPVNnKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLmNoaWxkcmVufHxbXSk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBtKGEsYixjLGQsZil7aWYobnVsbD09PWJ8fDchPT1iLnRhZylyZXR1cm4gYj1UZyhjLGEubW9kZSxkLGYpLGIucmV0dXJuPWEsYjtiPWUoYixjKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIHEoYSxiLGMpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYiYmXCJcIiE9PWJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1RZyhcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSB2YTpyZXR1cm4gYz1SZyhiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxcbmMucmVmPUxnKGEsbnVsbCxiKSxjLnJldHVybj1hLGM7Y2FzZSB3YTpyZXR1cm4gYj1TZyhiLGEubW9kZSxjKSxiLnJldHVybj1hLGI7Y2FzZSBIYTp2YXIgZD1iLl9pbml0O3JldHVybiBxKGEsZChiLl9wYXlsb2FkKSxjKX1pZihlYihiKXx8S2EoYikpcmV0dXJuIGI9VGcoYixhLm1vZGUsYyxudWxsKSxiLnJldHVybj1hLGI7TWcoYSxiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiByKGEsYixjLGQpe3ZhciBlPW51bGwhPT1iP2Iua2V5Om51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjJiZcIlwiIT09Y3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSB2YTpyZXR1cm4gYy5rZXk9PT1lP2soYSxiLGMsZCk6bnVsbDtjYXNlIHdhOnJldHVybiBjLmtleT09PWU/bChhLGIsYyxkKTpudWxsO2Nhc2UgSGE6cmV0dXJuIGU9Yy5faW5pdCxyKGEsXG5iLGUoYy5fcGF5bG9hZCksZCl9aWYoZWIoYyl8fEthKGMpKXJldHVybiBudWxsIT09ZT9udWxsOm0oYSxiLGMsZCxudWxsKTtNZyhhLGMpfXJldHVybiBudWxsfWZ1bmN0aW9uIHkoYSxiLGMsZCxlKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGQmJlwiXCIhPT1kfHxcIm51bWJlclwiPT09dHlwZW9mIGQpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIHZhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxrKGIsYSxkLGUpO2Nhc2Ugd2E6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGwoYixhLGQsZSk7Y2FzZSBIYTp2YXIgZj1kLl9pbml0O3JldHVybiB5KGEsYixjLGYoZC5fcGF5bG9hZCksZSl9aWYoZWIoZCl8fEthKGQpKXJldHVybiBhPWEuZ2V0KGMpfHxudWxsLG0oYixhLGQsZSxudWxsKTtNZyhiLGQpfXJldHVybiBudWxsfVxuZnVuY3Rpb24gbihlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCxtPW51bGwsdT1nLHc9Zz0wLHg9bnVsbDtudWxsIT09dSYmdzxoLmxlbmd0aDt3Kyspe3UuaW5kZXg+dz8oeD11LHU9bnVsbCk6eD11LnNpYmxpbmc7dmFyIG49cihlLHUsaFt3XSxrKTtpZihudWxsPT09bil7bnVsbD09PXUmJih1PXgpO2JyZWFrfWEmJnUmJm51bGw9PT1uLmFsdGVybmF0ZSYmYihlLHUpO2c9ZihuLGcsdyk7bnVsbD09PW0/bD1uOm0uc2libGluZz1uO209bjt1PXh9aWYodz09PWgubGVuZ3RoKXJldHVybiBjKGUsdSksSSYmdGcoZSx3KSxsO2lmKG51bGw9PT11KXtmb3IoO3c8aC5sZW5ndGg7dysrKXU9cShlLGhbd10sayksbnVsbCE9PXUmJihnPWYodSxnLHcpLG51bGw9PT1tP2w9dTptLnNpYmxpbmc9dSxtPXUpO0kmJnRnKGUsdyk7cmV0dXJuIGx9Zm9yKHU9ZChlLHUpO3c8aC5sZW5ndGg7dysrKXg9eSh1LGUsdyxoW3ddLGspLG51bGwhPT14JiYoYSYmbnVsbCE9PXguYWx0ZXJuYXRlJiZ1LmRlbGV0ZShudWxsPT09XG54LmtleT93Ongua2V5KSxnPWYoeCxnLHcpLG51bGw9PT1tP2w9eDptLnNpYmxpbmc9eCxtPXgpO2EmJnUuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7SSYmdGcoZSx3KTtyZXR1cm4gbH1mdW5jdGlvbiB0KGUsZyxoLGspe3ZhciBsPUthKGgpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBsKXRocm93IEVycm9yKHAoMTUwKSk7aD1sLmNhbGwoaCk7aWYobnVsbD09aCl0aHJvdyBFcnJvcihwKDE1MSkpO2Zvcih2YXIgdT1sPW51bGwsbT1nLHc9Zz0wLHg9bnVsbCxuPWgubmV4dCgpO251bGwhPT1tJiYhbi5kb25lO3crKyxuPWgubmV4dCgpKXttLmluZGV4Pnc/KHg9bSxtPW51bGwpOng9bS5zaWJsaW5nO3ZhciB0PXIoZSxtLG4udmFsdWUsayk7aWYobnVsbD09PXQpe251bGw9PT1tJiYobT14KTticmVha31hJiZtJiZudWxsPT09dC5hbHRlcm5hdGUmJmIoZSxtKTtnPWYodCxnLHcpO251bGw9PT11P2w9dDp1LnNpYmxpbmc9dDt1PXQ7bT14fWlmKG4uZG9uZSlyZXR1cm4gYyhlLFxubSksSSYmdGcoZSx3KSxsO2lmKG51bGw9PT1tKXtmb3IoOyFuLmRvbmU7dysrLG49aC5uZXh0KCkpbj1xKGUsbi52YWx1ZSxrKSxudWxsIT09biYmKGc9ZihuLGcsdyksbnVsbD09PXU/bD1uOnUuc2libGluZz1uLHU9bik7SSYmdGcoZSx3KTtyZXR1cm4gbH1mb3IobT1kKGUsbSk7IW4uZG9uZTt3Kyssbj1oLm5leHQoKSluPXkobSxlLHcsbi52YWx1ZSxrKSxudWxsIT09biYmKGEmJm51bGwhPT1uLmFsdGVybmF0ZSYmbS5kZWxldGUobnVsbD09PW4ua2V5P3c6bi5rZXkpLGc9ZihuLGcsdyksbnVsbD09PXU/bD1uOnUuc2libGluZz1uLHU9bik7YSYmbS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtJJiZ0ZyhlLHcpO3JldHVybiBsfWZ1bmN0aW9uIEooYSxkLGYsaCl7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZiYmZi50eXBlPT09eWEmJm51bGw9PT1mLmtleSYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zil7c3dpdGNoKGYuJCR0eXBlb2Ype2Nhc2UgdmE6YTp7Zm9yKHZhciBrPVxuZi5rZXksbD1kO251bGwhPT1sOyl7aWYobC5rZXk9PT1rKXtrPWYudHlwZTtpZihrPT09eWEpe2lmKDc9PT1sLnRhZyl7YyhhLGwuc2libGluZyk7ZD1lKGwsZi5wcm9wcy5jaGlsZHJlbik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX19ZWxzZSBpZihsLmVsZW1lbnRUeXBlPT09a3x8XCJvYmplY3RcIj09PXR5cGVvZiBrJiZudWxsIT09ayYmay4kJHR5cGVvZj09PUhhJiZOZyhrKT09PWwudHlwZSl7YyhhLGwuc2libGluZyk7ZD1lKGwsZi5wcm9wcyk7ZC5yZWY9TGcoYSxsLGYpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9YyhhLGwpO2JyZWFrfWVsc2UgYihhLGwpO2w9bC5zaWJsaW5nfWYudHlwZT09PXlhPyhkPVRnKGYucHJvcHMuY2hpbGRyZW4sYS5tb2RlLGgsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooaD1SZyhmLnR5cGUsZi5rZXksZi5wcm9wcyxudWxsLGEubW9kZSxoKSxoLnJlZj1MZyhhLGQsZiksaC5yZXR1cm49YSxhPWgpfXJldHVybiBnKGEpO2Nhc2Ugd2E6YTp7Zm9yKGw9Zi5rZXk7bnVsbCE9PVxuZDspe2lmKGQua2V5PT09bClpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10pO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1TZyhmLGEubW9kZSxoKTtkLnJldHVybj1hO2E9ZH1yZXR1cm4gZyhhKTtjYXNlIEhhOnJldHVybiBsPWYuX2luaXQsSihhLGQsbChmLl9wYXlsb2FkKSxoKX1pZihlYihmKSlyZXR1cm4gbihhLGQsZixoKTtpZihLYShmKSlyZXR1cm4gdChhLGQsZixoKTtNZyhhLGYpfXJldHVyblwic3RyaW5nXCI9PT10eXBlb2YgZiYmXCJcIiE9PWZ8fFwibnVtYmVyXCI9PT10eXBlb2YgZj8oZj1cIlwiK2YsbnVsbCE9PWQmJjY9PT1kLnRhZz8oYyhhLGQuc2libGluZyksZD1lKGQsZiksZC5yZXR1cm49YSxhPWQpOlxuKGMoYSxkKSxkPVFnKGYsYS5tb2RlLGgpLGQucmV0dXJuPWEsYT1kKSxnKGEpKTpjKGEsZCl9cmV0dXJuIEp9dmFyIFVnPU9nKCEwKSxWZz1PZyghMSksV2c9VWYobnVsbCksWGc9bnVsbCxZZz1udWxsLFpnPW51bGw7ZnVuY3Rpb24gJGcoKXtaZz1ZZz1YZz1udWxsfWZ1bmN0aW9uIGFoKGEpe3ZhciBiPVdnLmN1cnJlbnQ7RShXZyk7YS5fY3VycmVudFZhbHVlPWJ9ZnVuY3Rpb24gYmgoYSxiLGMpe2Zvcig7bnVsbCE9PWE7KXt2YXIgZD1hLmFsdGVybmF0ZTsoYS5jaGlsZExhbmVzJmIpIT09Yj8oYS5jaGlsZExhbmVzfD1iLG51bGwhPT1kJiYoZC5jaGlsZExhbmVzfD1iKSk6bnVsbCE9PWQmJihkLmNoaWxkTGFuZXMmYikhPT1iJiYoZC5jaGlsZExhbmVzfD1iKTtpZihhPT09YylicmVhazthPWEucmV0dXJufX1cbmZ1bmN0aW9uIGNoKGEsYil7WGc9YTtaZz1ZZz1udWxsO2E9YS5kZXBlbmRlbmNpZXM7bnVsbCE9PWEmJm51bGwhPT1hLmZpcnN0Q29udGV4dCYmKDAhPT0oYS5sYW5lcyZiKSYmKGRoPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1mdW5jdGlvbiBlaChhKXt2YXIgYj1hLl9jdXJyZW50VmFsdWU7aWYoWmchPT1hKWlmKGE9e2NvbnRleHQ6YSxtZW1vaXplZFZhbHVlOmIsbmV4dDpudWxsfSxudWxsPT09WWcpe2lmKG51bGw9PT1YZyl0aHJvdyBFcnJvcihwKDMwOCkpO1lnPWE7WGcuZGVwZW5kZW5jaWVzPXtsYW5lczowLGZpcnN0Q29udGV4dDphfX1lbHNlIFlnPVlnLm5leHQ9YTtyZXR1cm4gYn12YXIgZmg9bnVsbDtmdW5jdGlvbiBnaChhKXtudWxsPT09Zmg/Zmg9W2FdOmZoLnB1c2goYSl9XG5mdW5jdGlvbiBoaChhLGIsYyxkKXt2YXIgZT1iLmludGVybGVhdmVkO251bGw9PT1lPyhjLm5leHQ9YyxnaChiKSk6KGMubmV4dD1lLm5leHQsZS5uZXh0PWMpO2IuaW50ZXJsZWF2ZWQ9YztyZXR1cm4gaWgoYSxkKX1mdW5jdGlvbiBpaChhLGIpe2EubGFuZXN8PWI7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJihjLmxhbmVzfD1iKTtjPWE7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWE7KWEuY2hpbGRMYW5lc3w9YixjPWEuYWx0ZXJuYXRlLG51bGwhPT1jJiYoYy5jaGlsZExhbmVzfD1iKSxjPWEsYT1hLnJldHVybjtyZXR1cm4gMz09PWMudGFnP2Muc3RhdGVOb2RlOm51bGx9dmFyIGpoPSExO2Z1bmN0aW9uIGtoKGEpe2EudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLm1lbW9pemVkU3RhdGUsZmlyc3RCYXNlVXBkYXRlOm51bGwsbGFzdEJhc2VVcGRhdGU6bnVsbCxzaGFyZWQ6e3BlbmRpbmc6bnVsbCxpbnRlcmxlYXZlZDpudWxsLGxhbmVzOjB9LGVmZmVjdHM6bnVsbH19XG5mdW5jdGlvbiBsaChhLGIpe2E9YS51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPT09YSYmKGIudXBkYXRlUXVldWU9e2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdEJhc2VVcGRhdGU6YS5maXJzdEJhc2VVcGRhdGUsbGFzdEJhc2VVcGRhdGU6YS5sYXN0QmFzZVVwZGF0ZSxzaGFyZWQ6YS5zaGFyZWQsZWZmZWN0czphLmVmZmVjdHN9KX1mdW5jdGlvbiBtaChhLGIpe3JldHVybntldmVudFRpbWU6YSxsYW5lOmIsdGFnOjAscGF5bG9hZDpudWxsLGNhbGxiYWNrOm51bGwsbmV4dDpudWxsfX1cbmZ1bmN0aW9uIG5oKGEsYixjKXt2YXIgZD1hLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1kKXJldHVybiBudWxsO2Q9ZC5zaGFyZWQ7aWYoMCE9PShLJjIpKXt2YXIgZT1kLnBlbmRpbmc7bnVsbD09PWU/Yi5uZXh0PWI6KGIubmV4dD1lLm5leHQsZS5uZXh0PWIpO2QucGVuZGluZz1iO3JldHVybiBpaChhLGMpfWU9ZC5pbnRlcmxlYXZlZDtudWxsPT09ZT8oYi5uZXh0PWIsZ2goZCkpOihiLm5leHQ9ZS5uZXh0LGUubmV4dD1iKTtkLmludGVybGVhdmVkPWI7cmV0dXJuIGloKGEsYyl9ZnVuY3Rpb24gb2goYSxiLGMpe2I9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09YiYmKGI9Yi5zaGFyZWQsMCE9PShjJjQxOTQyNDApKSl7dmFyIGQ9Yi5sYW5lcztkJj1hLnBlbmRpbmdMYW5lcztjfD1kO2IubGFuZXM9YztDYyhhLGMpfX1cbmZ1bmN0aW9uIHBoKGEsYil7dmFyIGM9YS51cGRhdGVRdWV1ZSxkPWEuYWx0ZXJuYXRlO2lmKG51bGwhPT1kJiYoZD1kLnVwZGF0ZVF1ZXVlLGM9PT1kKSl7dmFyIGU9bnVsbCxmPW51bGw7Yz1jLmZpcnN0QmFzZVVwZGF0ZTtpZihudWxsIT09Yyl7ZG97dmFyIGc9e2V2ZW50VGltZTpjLmV2ZW50VGltZSxsYW5lOmMubGFuZSx0YWc6Yy50YWcscGF5bG9hZDpjLnBheWxvYWQsY2FsbGJhY2s6Yy5jYWxsYmFjayxuZXh0Om51bGx9O251bGw9PT1mP2U9Zj1nOmY9Zi5uZXh0PWc7Yz1jLm5leHR9d2hpbGUobnVsbCE9PWMpO251bGw9PT1mP2U9Zj1iOmY9Zi5uZXh0PWJ9ZWxzZSBlPWY9YjtjPXtiYXNlU3RhdGU6ZC5iYXNlU3RhdGUsZmlyc3RCYXNlVXBkYXRlOmUsbGFzdEJhc2VVcGRhdGU6ZixzaGFyZWQ6ZC5zaGFyZWQsZWZmZWN0czpkLmVmZmVjdHN9O2EudXBkYXRlUXVldWU9YztyZXR1cm59YT1jLmxhc3RCYXNlVXBkYXRlO251bGw9PT1hP2MuZmlyc3RCYXNlVXBkYXRlPWI6YS5uZXh0PVxuYjtjLmxhc3RCYXNlVXBkYXRlPWJ9XG5mdW5jdGlvbiBxaChhLGIsYyxkKXt2YXIgZT1hLnVwZGF0ZVF1ZXVlO2poPSExO3ZhciBmPWUuZmlyc3RCYXNlVXBkYXRlLGc9ZS5sYXN0QmFzZVVwZGF0ZSxoPWUuc2hhcmVkLnBlbmRpbmc7aWYobnVsbCE9PWgpe2Uuc2hhcmVkLnBlbmRpbmc9bnVsbDt2YXIgaz1oLGw9ay5uZXh0O2submV4dD1udWxsO251bGw9PT1nP2Y9bDpnLm5leHQ9bDtnPWs7dmFyIG09YS5hbHRlcm5hdGU7bnVsbCE9PW0mJihtPW0udXBkYXRlUXVldWUsaD1tLmxhc3RCYXNlVXBkYXRlLGghPT1nJiYobnVsbD09PWg/bS5maXJzdEJhc2VVcGRhdGU9bDpoLm5leHQ9bCxtLmxhc3RCYXNlVXBkYXRlPWspKX1pZihudWxsIT09Zil7dmFyIHE9ZS5iYXNlU3RhdGU7Zz0wO209bD1rPW51bGw7aD1mO2Rve3ZhciByPWgubGFuZSx5PWguZXZlbnRUaW1lO2lmKChkJnIpPT09cil7bnVsbCE9PW0mJihtPW0ubmV4dD17ZXZlbnRUaW1lOnksbGFuZTowLHRhZzpoLnRhZyxwYXlsb2FkOmgucGF5bG9hZCxjYWxsYmFjazpoLmNhbGxiYWNrLFxubmV4dDpudWxsfSk7YTp7dmFyIG49YSx0PWg7cj1iO3k9Yztzd2l0Y2godC50YWcpe2Nhc2UgMTpuPXQucGF5bG9hZDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygbil7cT1uLmNhbGwoeSxxLHIpO2JyZWFrIGF9cT1uO2JyZWFrIGE7Y2FzZSAzOm4uZmxhZ3M9bi5mbGFncyYtNjU1Mzd8MTI4O2Nhc2UgMDpuPXQucGF5bG9hZDtyPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBuP24uY2FsbCh5LHEscik6bjtpZihudWxsPT09cnx8dm9pZCAwPT09cilicmVhayBhO3E9QSh7fSxxLHIpO2JyZWFrIGE7Y2FzZSAyOmpoPSEwfX1udWxsIT09aC5jYWxsYmFjayYmMCE9PWgubGFuZSYmKGEuZmxhZ3N8PTY0LHI9ZS5lZmZlY3RzLG51bGw9PT1yP2UuZWZmZWN0cz1baF06ci5wdXNoKGgpKX1lbHNlIHk9e2V2ZW50VGltZTp5LGxhbmU6cix0YWc6aC50YWcscGF5bG9hZDpoLnBheWxvYWQsY2FsbGJhY2s6aC5jYWxsYmFjayxuZXh0Om51bGx9LG51bGw9PT1tPyhsPW09eSxrPXEpOm09bS5uZXh0PXksZ3w9cjtcbmg9aC5uZXh0O2lmKG51bGw9PT1oKWlmKGg9ZS5zaGFyZWQucGVuZGluZyxudWxsPT09aClicmVhaztlbHNlIHI9aCxoPXIubmV4dCxyLm5leHQ9bnVsbCxlLmxhc3RCYXNlVXBkYXRlPXIsZS5zaGFyZWQucGVuZGluZz1udWxsfXdoaWxlKDEpO251bGw9PT1tJiYoaz1xKTtlLmJhc2VTdGF0ZT1rO2UuZmlyc3RCYXNlVXBkYXRlPWw7ZS5sYXN0QmFzZVVwZGF0ZT1tO2I9ZS5zaGFyZWQuaW50ZXJsZWF2ZWQ7aWYobnVsbCE9PWIpe2U9YjtkbyBnfD1lLmxhbmUsZT1lLm5leHQ7d2hpbGUoZSE9PWIpfWVsc2UgbnVsbD09PWYmJihlLnNoYXJlZC5sYW5lcz0wKTtyaHw9ZzthLmxhbmVzPWc7YS5tZW1vaXplZFN0YXRlPXF9fVxuZnVuY3Rpb24gc2goYSxiLGMpe2E9Yi5lZmZlY3RzO2IuZWZmZWN0cz1udWxsO2lmKG51bGwhPT1hKWZvcihiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBkPWFbYl0sZT1kLmNhbGxiYWNrO2lmKG51bGwhPT1lKXtkLmNhbGxiYWNrPW51bGw7ZD1jO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlKXRocm93IEVycm9yKHAoMTkxLGUpKTtlLmNhbGwoZCl9fX12YXIgdGg9e30sdWg9VWYodGgpLHZoPVVmKHRoKSx3aD1VZih0aCk7ZnVuY3Rpb24geGgoYSl7aWYoYT09PXRoKXRocm93IEVycm9yKHAoMTc0KSk7cmV0dXJuIGF9XG5mdW5jdGlvbiB5aChhLGIpe0cod2gsYik7Ryh2aCxhKTtHKHVoLHRoKTthPWIubm9kZVR5cGU7c3dpdGNoKGEpe2Nhc2UgOTpjYXNlIDExOmI9KGI9Yi5kb2N1bWVudEVsZW1lbnQpP2IubmFtZXNwYWNlVVJJOmxiKG51bGwsXCJcIik7YnJlYWs7ZGVmYXVsdDphPTg9PT1hP2IucGFyZW50Tm9kZTpiLGI9YS5uYW1lc3BhY2VVUkl8fG51bGwsYT1hLnRhZ05hbWUsYj1sYihiLGEpfUUodWgpO0codWgsYil9ZnVuY3Rpb24gemgoKXtFKHVoKTtFKHZoKTtFKHdoKX1mdW5jdGlvbiBBaChhKXt4aCh3aC5jdXJyZW50KTt2YXIgYj14aCh1aC5jdXJyZW50KTt2YXIgYz1sYihiLGEudHlwZSk7YiE9PWMmJihHKHZoLGEpLEcodWgsYykpfWZ1bmN0aW9uIEJoKGEpe3ZoLmN1cnJlbnQ9PT1hJiYoRSh1aCksRSh2aCkpfXZhciBMPVVmKDApO1xuZnVuY3Rpb24gQ2goYSl7Zm9yKHZhciBiPWE7bnVsbCE9PWI7KXtpZigxMz09PWIudGFnKXt2YXIgYz1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWMmJihjPWMuZGVoeWRyYXRlZCxudWxsPT09Y3x8XCIkP1wiPT09Yy5kYXRhfHxcIiQhXCI9PT1jLmRhdGEpKXJldHVybiBifWVsc2UgaWYoMTk9PT1iLnRhZyYmdm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLnJldmVhbE9yZGVyKXtpZigwIT09KGIuZmxhZ3MmMTI4KSlyZXR1cm4gYn1lbHNlIGlmKG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9cmV0dXJuIG51bGx9dmFyIERoPVtdO1xuZnVuY3Rpb24gRWgoKXtmb3IodmFyIGE9MDthPERoLmxlbmd0aDthKyspRGhbYV0uX3dvcmtJblByb2dyZXNzVmVyc2lvblByaW1hcnk9bnVsbDtEaC5sZW5ndGg9MH12YXIgRmg9dWEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixHaD11YS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxIaD0wLE09bnVsbCxOPW51bGwsTz1udWxsLEloPSExLEpoPSExLEtoPTAsTGg9MDtmdW5jdGlvbiBQKCl7dGhyb3cgRXJyb3IocCgzMjEpKTt9ZnVuY3Rpb24gTWgoYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighSGUoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIE5oKGEsYixjLGQsZSxmKXtIaD1mO009YjtiLm1lbW9pemVkU3RhdGU9bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7Yi5sYW5lcz0wO0ZoLmN1cnJlbnQ9bnVsbD09PWF8fG51bGw9PT1hLm1lbW9pemVkU3RhdGU/T2g6UGg7YT1jKGQsZSk7aWYoSmgpe2Y9MDtkb3tKaD0hMTtLaD0wO2lmKDI1PD1mKXRocm93IEVycm9yKHAoMzAxKSk7Zis9MTtPPU49bnVsbDtiLnVwZGF0ZVF1ZXVlPW51bGw7RmguY3VycmVudD1RaDthPWMoZCxlKX13aGlsZShKaCl9RmguY3VycmVudD1SaDtiPW51bGwhPT1OJiZudWxsIT09Ti5uZXh0O0hoPTA7Tz1OPU09bnVsbDtJaD0hMTtpZihiKXRocm93IEVycm9yKHAoMzAwKSk7cmV0dXJuIGF9ZnVuY3Rpb24gU2goKXt2YXIgYT0wIT09S2g7S2g9MDtyZXR1cm4gYX1cbmZ1bmN0aW9uIFRoKCl7dmFyIGE9e21lbW9pemVkU3RhdGU6bnVsbCxiYXNlU3RhdGU6bnVsbCxiYXNlUXVldWU6bnVsbCxxdWV1ZTpudWxsLG5leHQ6bnVsbH07bnVsbD09PU8/TS5tZW1vaXplZFN0YXRlPU89YTpPPU8ubmV4dD1hO3JldHVybiBPfWZ1bmN0aW9uIFVoKCl7aWYobnVsbD09PU4pe3ZhciBhPU0uYWx0ZXJuYXRlO2E9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGx9ZWxzZSBhPU4ubmV4dDt2YXIgYj1udWxsPT09Tz9NLm1lbW9pemVkU3RhdGU6Ty5uZXh0O2lmKG51bGwhPT1iKU89YixOPWE7ZWxzZXtpZihudWxsPT09YSl0aHJvdyBFcnJvcihwKDMxMCkpO049YTthPXttZW1vaXplZFN0YXRlOk4ubWVtb2l6ZWRTdGF0ZSxiYXNlU3RhdGU6Ti5iYXNlU3RhdGUsYmFzZVF1ZXVlOk4uYmFzZVF1ZXVlLHF1ZXVlOk4ucXVldWUsbmV4dDpudWxsfTtudWxsPT09Tz9NLm1lbW9pemVkU3RhdGU9Tz1hOk89Ty5uZXh0PWF9cmV0dXJuIE99XG5mdW5jdGlvbiBWaChhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yn1cbmZ1bmN0aW9uIFdoKGEpe3ZhciBiPVVoKCksYz1iLnF1ZXVlO2lmKG51bGw9PT1jKXRocm93IEVycm9yKHAoMzExKSk7Yy5sYXN0UmVuZGVyZWRSZWR1Y2VyPWE7dmFyIGQ9TixlPWQuYmFzZVF1ZXVlLGY9Yy5wZW5kaW5nO2lmKG51bGwhPT1mKXtpZihudWxsIT09ZSl7dmFyIGc9ZS5uZXh0O2UubmV4dD1mLm5leHQ7Zi5uZXh0PWd9ZC5iYXNlUXVldWU9ZT1mO2MucGVuZGluZz1udWxsfWlmKG51bGwhPT1lKXtmPWUubmV4dDtkPWQuYmFzZVN0YXRlO3ZhciBoPWc9bnVsbCxrPW51bGwsbD1mO2Rve3ZhciBtPWwubGFuZTtpZigoSGgmbSk9PT1tKW51bGwhPT1rJiYoaz1rLm5leHQ9e2xhbmU6MCxhY3Rpb246bC5hY3Rpb24saGFzRWFnZXJTdGF0ZTpsLmhhc0VhZ2VyU3RhdGUsZWFnZXJTdGF0ZTpsLmVhZ2VyU3RhdGUsbmV4dDpudWxsfSksZD1sLmhhc0VhZ2VyU3RhdGU/bC5lYWdlclN0YXRlOmEoZCxsLmFjdGlvbik7ZWxzZXt2YXIgcT17bGFuZTptLGFjdGlvbjpsLmFjdGlvbixoYXNFYWdlclN0YXRlOmwuaGFzRWFnZXJTdGF0ZSxcbmVhZ2VyU3RhdGU6bC5lYWdlclN0YXRlLG5leHQ6bnVsbH07bnVsbD09PWs/KGg9az1xLGc9ZCk6az1rLm5leHQ9cTtNLmxhbmVzfD1tO3JofD1tfWw9bC5uZXh0fXdoaWxlKG51bGwhPT1sJiZsIT09Zik7bnVsbD09PWs/Zz1kOmsubmV4dD1oO0hlKGQsYi5tZW1vaXplZFN0YXRlKXx8KGRoPSEwKTtiLm1lbW9pemVkU3RhdGU9ZDtiLmJhc2VTdGF0ZT1nO2IuYmFzZVF1ZXVlPWs7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1kfWE9Yy5pbnRlcmxlYXZlZDtpZihudWxsIT09YSl7ZT1hO2RvIGY9ZS5sYW5lLE0ubGFuZXN8PWYscmh8PWYsZT1lLm5leHQ7d2hpbGUoZSE9PWEpfWVsc2UgbnVsbD09PWUmJihjLmxhbmVzPTApO3JldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiBYaChhKXt2YXIgYj1VaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcihwKDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO3ZhciBkPWMuZGlzcGF0Y2gsZT1jLnBlbmRpbmcsZj1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWUpe2MucGVuZGluZz1udWxsO3ZhciBnPWU9ZS5uZXh0O2RvIGY9YShmLGcuYWN0aW9uKSxnPWcubmV4dDt3aGlsZShnIT09ZSk7SGUoZixiLm1lbW9pemVkU3RhdGUpfHwoZGg9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO251bGw9PT1iLmJhc2VRdWV1ZSYmKGIuYmFzZVN0YXRlPWYpO2MubGFzdFJlbmRlcmVkU3RhdGU9Zn1yZXR1cm5bZixkXX1mdW5jdGlvbiBZaCgpe31cbmZ1bmN0aW9uIFpoKGEsYil7dmFyIGM9TSxkPVVoKCksZT1iKCksZj0hSGUoZC5tZW1vaXplZFN0YXRlLGUpO2YmJihkLm1lbW9pemVkU3RhdGU9ZSxkaD0hMCk7ZD1kLnF1ZXVlOyRoKGFpLmJpbmQobnVsbCxjLGQsYSksW2FdKTtpZihkLmdldFNuYXBzaG90IT09Ynx8Znx8bnVsbCE9PU8mJk8ubWVtb2l6ZWRTdGF0ZS50YWcmMSl7Yy5mbGFnc3w9MjA0ODtiaSg5LGNpLmJpbmQobnVsbCxjLGQsZSxiKSx2b2lkIDAsbnVsbCk7aWYobnVsbD09PVEpdGhyb3cgRXJyb3IocCgzNDkpKTswIT09KEhoJjMwKXx8ZGkoYyxiLGUpfXJldHVybiBlfWZ1bmN0aW9uIGRpKGEsYixjKXthLmZsYWdzfD0xNjM4NDthPXtnZXRTbmFwc2hvdDpiLHZhbHVlOmN9O2I9TS51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsLHN0b3JlczpudWxsfSxNLnVwZGF0ZVF1ZXVlPWIsYi5zdG9yZXM9W2FdKTooYz1iLnN0b3JlcyxudWxsPT09Yz9iLnN0b3Jlcz1bYV06Yy5wdXNoKGEpKX1cbmZ1bmN0aW9uIGNpKGEsYixjLGQpe2IudmFsdWU9YztiLmdldFNuYXBzaG90PWQ7ZWkoYikmJmZpKGEpfWZ1bmN0aW9uIGFpKGEsYixjKXtyZXR1cm4gYyhmdW5jdGlvbigpe2VpKGIpJiZmaShhKX0pfWZ1bmN0aW9uIGVpKGEpe3ZhciBiPWEuZ2V0U25hcHNob3Q7YT1hLnZhbHVlO3RyeXt2YXIgYz1iKCk7cmV0dXJuIUhlKGEsYyl9Y2F0Y2goZCl7cmV0dXJuITB9fWZ1bmN0aW9uIGZpKGEpe3ZhciBiPWloKGEsMSk7bnVsbCE9PWImJmdpKGIsYSwxLC0xKX1cbmZ1bmN0aW9uIGhpKGEpe3ZhciBiPVRoKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT17cGVuZGluZzpudWxsLGludGVybGVhdmVkOm51bGwsbGFuZXM6MCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6VmgsbGFzdFJlbmRlcmVkU3RhdGU6YX07Yi5xdWV1ZT1hO2E9YS5kaXNwYXRjaD1paS5iaW5kKG51bGwsTSxhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfVxuZnVuY3Rpb24gYmkoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O2I9TS51cGRhdGVRdWV1ZTtudWxsPT09Yj8oYj17bGFzdEVmZmVjdDpudWxsLHN0b3JlczpudWxsfSxNLnVwZGF0ZVF1ZXVlPWIsYi5sYXN0RWZmZWN0PWEubmV4dD1hKTooYz1iLmxhc3RFZmZlY3QsbnVsbD09PWM/Yi5sYXN0RWZmZWN0PWEubmV4dD1hOihkPWMubmV4dCxjLm5leHQ9YSxhLm5leHQ9ZCxiLmxhc3RFZmZlY3Q9YSkpO3JldHVybiBhfWZ1bmN0aW9uIGppKCl7cmV0dXJuIFVoKCkubWVtb2l6ZWRTdGF0ZX1mdW5jdGlvbiBraShhLGIsYyxkKXt2YXIgZT1UaCgpO00uZmxhZ3N8PWE7ZS5tZW1vaXplZFN0YXRlPWJpKDF8YixjLHZvaWQgMCx2b2lkIDA9PT1kP251bGw6ZCl9XG5mdW5jdGlvbiBsaShhLGIsYyxkKXt2YXIgZT1VaCgpO2Q9dm9pZCAwPT09ZD9udWxsOmQ7dmFyIGY9dm9pZCAwO2lmKG51bGwhPT1OKXt2YXIgZz1OLm1lbW9pemVkU3RhdGU7Zj1nLmRlc3Ryb3k7aWYobnVsbCE9PWQmJk1oKGQsZy5kZXBzKSl7ZS5tZW1vaXplZFN0YXRlPWJpKGIsYyxmLGQpO3JldHVybn19TS5mbGFnc3w9YTtlLm1lbW9pemVkU3RhdGU9YmkoMXxiLGMsZixkKX1mdW5jdGlvbiBtaShhLGIpe3JldHVybiBraSg4MzkwNjU2LDgsYSxiKX1mdW5jdGlvbiAkaChhLGIpe3JldHVybiBsaSgyMDQ4LDgsYSxiKX1mdW5jdGlvbiBuaShhLGIpe3JldHVybiBsaSg0LDIsYSxiKX1mdW5jdGlvbiBvaShhLGIpe3JldHVybiBsaSg0LDQsYSxiKX1cbmZ1bmN0aW9uIHBpKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19ZnVuY3Rpb24gcWkoYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBsaSg0LDQscGkuYmluZChudWxsLGIsYSksYyl9ZnVuY3Rpb24gcmkoKXt9ZnVuY3Rpb24gc2koYSxiKXt2YXIgYz1VaCgpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmTWgoYixkWzFdKSlyZXR1cm4gZFswXTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9XG5mdW5jdGlvbiB0aShhLGIpe3ZhciBjPVVoKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZNaChiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX1mdW5jdGlvbiB1aShhLGIsYyl7aWYoMD09PShIaCYyMSkpcmV0dXJuIGEuYmFzZVN0YXRlJiYoYS5iYXNlU3RhdGU9ITEsZGg9ITApLGEubWVtb2l6ZWRTdGF0ZT1jO0hlKGMsYil8fChjPXljKCksTS5sYW5lc3w9YyxyaHw9YyxhLmJhc2VTdGF0ZT0hMCk7cmV0dXJuIGJ9ZnVuY3Rpb24gdmkoYSxiKXt2YXIgYz1DO0M9MCE9PWMmJjQ+Yz9jOjQ7YSghMCk7dmFyIGQ9R2gudHJhbnNpdGlvbjtHaC50cmFuc2l0aW9uPXt9O3RyeXthKCExKSxiKCl9ZmluYWxseXtDPWMsR2gudHJhbnNpdGlvbj1kfX1mdW5jdGlvbiB3aSgpe3JldHVybiBVaCgpLm1lbW9pemVkU3RhdGV9XG5mdW5jdGlvbiB4aShhLGIsYyl7dmFyIGQ9eWkoYSk7Yz17bGFuZTpkLGFjdGlvbjpjLGhhc0VhZ2VyU3RhdGU6ITEsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH07aWYoemkoYSkpQWkoYixjKTtlbHNlIGlmKGM9aGgoYSxiLGMsZCksbnVsbCE9PWMpe3ZhciBlPVIoKTtnaShjLGEsZCxlKTtCaShjLGIsZCl9fVxuZnVuY3Rpb24gaWkoYSxiLGMpe3ZhciBkPXlpKGEpLGU9e2xhbmU6ZCxhY3Rpb246YyxoYXNFYWdlclN0YXRlOiExLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9O2lmKHppKGEpKUFpKGIsZSk7ZWxzZXt2YXIgZj1hLmFsdGVybmF0ZTtpZigwPT09YS5sYW5lcyYmKG51bGw9PT1mfHwwPT09Zi5sYW5lcykmJihmPWIubGFzdFJlbmRlcmVkUmVkdWNlcixudWxsIT09ZikpdHJ5e3ZhciBnPWIubGFzdFJlbmRlcmVkU3RhdGUsaD1mKGcsYyk7ZS5oYXNFYWdlclN0YXRlPSEwO2UuZWFnZXJTdGF0ZT1oO2lmKEhlKGgsZykpe3ZhciBrPWIuaW50ZXJsZWF2ZWQ7bnVsbD09PWs/KGUubmV4dD1lLGdoKGIpKTooZS5uZXh0PWsubmV4dCxrLm5leHQ9ZSk7Yi5pbnRlcmxlYXZlZD1lO3JldHVybn19Y2F0Y2gobCl7fWZpbmFsbHl7fWM9aGgoYSxiLGUsZCk7bnVsbCE9PWMmJihlPVIoKSxnaShjLGEsZCxlKSxCaShjLGIsZCkpfX1cbmZ1bmN0aW9uIHppKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO3JldHVybiBhPT09TXx8bnVsbCE9PWImJmI9PT1NfWZ1bmN0aW9uIEFpKGEsYil7Smg9SWg9ITA7dmFyIGM9YS5wZW5kaW5nO251bGw9PT1jP2IubmV4dD1iOihiLm5leHQ9Yy5uZXh0LGMubmV4dD1iKTthLnBlbmRpbmc9Yn1mdW5jdGlvbiBCaShhLGIsYyl7aWYoMCE9PShjJjQxOTQyNDApKXt2YXIgZD1iLmxhbmVzO2QmPWEucGVuZGluZ0xhbmVzO2N8PWQ7Yi5sYW5lcz1jO0NjKGEsYyl9fVxudmFyIFJoPXtyZWFkQ29udGV4dDplaCx1c2VDYWxsYmFjazpQLHVzZUNvbnRleHQ6UCx1c2VFZmZlY3Q6UCx1c2VJbXBlcmF0aXZlSGFuZGxlOlAsdXNlSW5zZXJ0aW9uRWZmZWN0OlAsdXNlTGF5b3V0RWZmZWN0OlAsdXNlTWVtbzpQLHVzZVJlZHVjZXI6UCx1c2VSZWY6UCx1c2VTdGF0ZTpQLHVzZURlYnVnVmFsdWU6UCx1c2VEZWZlcnJlZFZhbHVlOlAsdXNlVHJhbnNpdGlvbjpQLHVzZU11dGFibGVTb3VyY2U6UCx1c2VTeW5jRXh0ZXJuYWxTdG9yZTpQLHVzZUlkOlAsdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxPaD17cmVhZENvbnRleHQ6ZWgsdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXtUaCgpLm1lbW9pemVkU3RhdGU9W2Esdm9pZCAwPT09Yj9udWxsOmJdO3JldHVybiBhfSx1c2VDb250ZXh0OmVoLHVzZUVmZmVjdDptaSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4ga2koNDE5NDMwOCxcbjQscGkuYmluZChudWxsLGIsYSksYyl9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBraSg0MTk0MzA4LDQsYSxiKX0sdXNlSW5zZXJ0aW9uRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGtpKDQsMixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9VGgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9VGgoKTtiPXZvaWQgMCE9PWM/YyhiKTpiO2QubWVtb2l6ZWRTdGF0ZT1kLmJhc2VTdGF0ZT1iO2E9e3BlbmRpbmc6bnVsbCxpbnRlcmxlYXZlZDpudWxsLGxhbmVzOjAsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07ZC5xdWV1ZT1hO2E9YS5kaXNwYXRjaD14aS5iaW5kKG51bGwsTSxhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6ZnVuY3Rpb24oYSl7dmFyIGI9XG5UaCgpO2E9e2N1cnJlbnQ6YX07cmV0dXJuIGIubWVtb2l6ZWRTdGF0ZT1hfSx1c2VTdGF0ZTpoaSx1c2VEZWJ1Z1ZhbHVlOnJpLHVzZURlZmVycmVkVmFsdWU6ZnVuY3Rpb24oYSl7cmV0dXJuIFRoKCkubWVtb2l6ZWRTdGF0ZT1hfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9aGkoITEpLGI9YVswXTthPXZpLmJpbmQobnVsbCxhWzFdKTtUaCgpLm1lbW9pemVkU3RhdGU9YTtyZXR1cm5bYixhXX0sdXNlTXV0YWJsZVNvdXJjZTpmdW5jdGlvbigpe30sdXNlU3luY0V4dGVybmFsU3RvcmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPU0sZT1UaCgpO2lmKEkpe2lmKHZvaWQgMD09PWMpdGhyb3cgRXJyb3IocCg0MDcpKTtjPWMoKX1lbHNle2M9YigpO2lmKG51bGw9PT1RKXRocm93IEVycm9yKHAoMzQ5KSk7MCE9PShIaCYzMCl8fGRpKGQsYixjKX1lLm1lbW9pemVkU3RhdGU9Yzt2YXIgZj17dmFsdWU6YyxnZXRTbmFwc2hvdDpifTtlLnF1ZXVlPWY7bWkoYWkuYmluZChudWxsLGQsXG5mLGEpLFthXSk7ZC5mbGFnc3w9MjA0ODtiaSg5LGNpLmJpbmQobnVsbCxkLGYsYyxiKSx2b2lkIDAsbnVsbCk7cmV0dXJuIGN9LHVzZUlkOmZ1bmN0aW9uKCl7dmFyIGE9VGgoKSxiPVEuaWRlbnRpZmllclByZWZpeDtpZihJKXt2YXIgYz1zZzt2YXIgZD1yZztjPShkJn4oMTw8MzItb2MoZCktMSkpLnRvU3RyaW5nKDMyKStjO2I9XCI6XCIrYitcIlJcIitjO2M9S2grKzswPGMmJihiKz1cIkhcIitjLnRvU3RyaW5nKDMyKSk7Yis9XCI6XCJ9ZWxzZSBjPUxoKyssYj1cIjpcIitiK1wiclwiK2MudG9TdHJpbmcoMzIpK1wiOlwiO3JldHVybiBhLm1lbW9pemVkU3RhdGU9Yn0sdW5zdGFibGVfaXNOZXdSZWNvbmNpbGVyOiExfSxQaD17cmVhZENvbnRleHQ6ZWgsdXNlQ2FsbGJhY2s6c2ksdXNlQ29udGV4dDplaCx1c2VFZmZlY3Q6JGgsdXNlSW1wZXJhdGl2ZUhhbmRsZTpxaSx1c2VJbnNlcnRpb25FZmZlY3Q6bmksdXNlTGF5b3V0RWZmZWN0Om9pLHVzZU1lbW86dGksdXNlUmVkdWNlcjpXaCx1c2VSZWY6amksdXNlU3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gV2goVmgpfSxcbnVzZURlYnVnVmFsdWU6cmksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1VaCgpO3JldHVybiB1aShiLE4ubWVtb2l6ZWRTdGF0ZSxhKX0sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbigpe3ZhciBhPVdoKFZoKVswXSxiPVVoKCkubWVtb2l6ZWRTdGF0ZTtyZXR1cm5bYSxiXX0sdXNlTXV0YWJsZVNvdXJjZTpZaCx1c2VTeW5jRXh0ZXJuYWxTdG9yZTpaaCx1c2VJZDp3aSx1bnN0YWJsZV9pc05ld1JlY29uY2lsZXI6ITF9LFFoPXtyZWFkQ29udGV4dDplaCx1c2VDYWxsYmFjazpzaSx1c2VDb250ZXh0OmVoLHVzZUVmZmVjdDokaCx1c2VJbXBlcmF0aXZlSGFuZGxlOnFpLHVzZUluc2VydGlvbkVmZmVjdDpuaSx1c2VMYXlvdXRFZmZlY3Q6b2ksdXNlTWVtbzp0aSx1c2VSZWR1Y2VyOlhoLHVzZVJlZjpqaSx1c2VTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBYaChWaCl9LHVzZURlYnVnVmFsdWU6cmksdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhKXt2YXIgYj1VaCgpO3JldHVybiBudWxsPT09XG5OP2IubWVtb2l6ZWRTdGF0ZT1hOnVpKGIsTi5tZW1vaXplZFN0YXRlLGEpfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9WGgoVmgpWzBdLGI9VWgoKS5tZW1vaXplZFN0YXRlO3JldHVyblthLGJdfSx1c2VNdXRhYmxlU291cmNlOlloLHVzZVN5bmNFeHRlcm5hbFN0b3JlOlpoLHVzZUlkOndpLHVuc3RhYmxlX2lzTmV3UmVjb25jaWxlcjohMX07ZnVuY3Rpb24gQ2koYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1BKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSk7cmV0dXJuIGJ9cmV0dXJuIGJ9ZnVuY3Rpb24gRGkoYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOkEoe30sYixjKTthLm1lbW9pemVkU3RhdGU9YzswPT09YS5sYW5lcyYmKGEudXBkYXRlUXVldWUuYmFzZVN0YXRlPWMpfVxudmFyIEVpPXtpc01vdW50ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5fcmVhY3RJbnRlcm5hbHMpP1ZiKGEpPT09YTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPVIoKSxlPXlpKGEpLGY9bWgoZCxlKTtmLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGYuY2FsbGJhY2s9Yyk7Yj1uaChhLGYsZSk7bnVsbCE9PWImJihnaShiLGEsZSxkKSxvaChiLGEsZSkpfSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxzO3ZhciBkPVIoKSxlPXlpKGEpLGY9bWgoZCxlKTtmLnRhZz0xO2YucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZi5jYWxsYmFjaz1jKTtiPW5oKGEsZixlKTtudWxsIT09YiYmKGdpKGIsYSxlLGQpLG9oKGIsYSxlKSl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbHM7dmFyIGM9UigpLGQ9XG55aShhKSxlPW1oKGMsZCk7ZS50YWc9Mjt2b2lkIDAhPT1iJiZudWxsIT09YiYmKGUuY2FsbGJhY2s9Yik7Yj1uaChhLGUsZCk7bnVsbCE9PWImJihnaShiLGEsZCxjKSxvaChiLGEsZCkpfX07ZnVuY3Rpb24gRmkoYSxiLGMsZCxlLGYsZyl7YT1hLnN0YXRlTm9kZTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYS5zaG91bGRDb21wb25lbnRVcGRhdGU/YS5zaG91bGRDb21wb25lbnRVcGRhdGUoZCxmLGcpOmIucHJvdG90eXBlJiZiLnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudD8hSWUoYyxkKXx8IUllKGUsZik6ITB9XG5mdW5jdGlvbiBHaShhLGIsYyl7dmFyIGQ9ITEsZT1WZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/Zj1laChmKTooZT1aZihiKT9YZjpILmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9ZZihhLGUpOlZmKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9RWk7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFscz1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBIaShhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmRWkuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiBJaShhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPXt9O2toKGEpO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9ZWgoZik6KGY9WmYoYik/WGY6SC5jdXJyZW50LGUuY29udGV4dD1ZZihhLGYpKTtlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtmPWIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYoRGkoYSxiLGYsYyksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc3x8XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8KGI9ZS5zdGF0ZSxcblwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudCYmZS5jb21wb25lbnRXaWxsTW91bnQoKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSxiIT09ZS5zdGF0ZSYmRWkuZW5xdWV1ZVJlcGxhY2VTdGF0ZShlLGUuc3RhdGUsbnVsbCkscWgoYSxjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmNvbXBvbmVudERpZE1vdW50JiYoYS5mbGFnc3w9NDE5NDMwOCl9ZnVuY3Rpb24gSmkoYSxiKXt0cnl7dmFyIGM9XCJcIixkPWI7ZG8gYys9UGEoZCksZD1kLnJldHVybjt3aGlsZShkKTt2YXIgZT1jfWNhdGNoKGYpe2U9XCJcXG5FcnJvciBnZW5lcmF0aW5nIHN0YWNrOiBcIitmLm1lc3NhZ2UrXCJcXG5cIitmLnN0YWNrfXJldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOmUsZGlnZXN0Om51bGx9fVxuZnVuY3Rpb24gS2koYSxiLGMpe3JldHVybnt2YWx1ZTphLHNvdXJjZTpudWxsLHN0YWNrOm51bGwhPWM/YzpudWxsLGRpZ2VzdDpudWxsIT1iP2I6bnVsbH19ZnVuY3Rpb24gTGkoYSxiKXt0cnl7Y29uc29sZS5lcnJvcihiLnZhbHVlKX1jYXRjaChjKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYzt9KX19dmFyIE1pPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwO2Z1bmN0aW9uIE5pKGEsYixjKXtjPW1oKC0xLGMpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe09pfHwoT2k9ITAsUGk9ZCk7TGkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBRaShhLGIsYyl7Yz1taCgtMSxjKTtjLnRhZz0zO3ZhciBkPWEudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBlPWIudmFsdWU7Yy5wYXlsb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIGQoZSl9O2MuY2FsbGJhY2s9ZnVuY3Rpb24oKXtMaShhLGIpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7TGkoYSxiKTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgZCYmKG51bGw9PT1SaT9SaT1uZXcgU2V0KFt0aGlzXSk6UmkuYWRkKHRoaXMpKTt2YXIgYz1iLnN0YWNrO3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goYi52YWx1ZSx7Y29tcG9uZW50U3RhY2s6bnVsbCE9PWM/YzpcIlwifSl9KTtyZXR1cm4gY31cbmZ1bmN0aW9uIFNpKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtpZihudWxsPT09ZCl7ZD1hLnBpbmdDYWNoZT1uZXcgTWk7dmFyIGU9bmV3IFNldDtkLnNldChiLGUpfWVsc2UgZT1kLmdldChiKSx2b2lkIDA9PT1lJiYoZT1uZXcgU2V0LGQuc2V0KGIsZSkpO2UuaGFzKGMpfHwoZS5hZGQoYyksYT1UaS5iaW5kKG51bGwsYSxiLGMpLGIudGhlbihhLGEpKX1mdW5jdGlvbiBVaShhKXtkb3t2YXIgYjtpZihiPTEzPT09YS50YWcpYj1hLm1lbW9pemVkU3RhdGUsYj1udWxsIT09Yj9udWxsIT09Yi5kZWh5ZHJhdGVkPyEwOiExOiEwO2lmKGIpcmV0dXJuIGE7YT1hLnJldHVybn13aGlsZShudWxsIT09YSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBWaShhLGIsYyxkLGUpe2lmKDA9PT0oYS5tb2RlJjEpKXJldHVybiBhPT09Yj9hLmZsYWdzfD02NTUzNjooYS5mbGFnc3w9MTI4LGMuZmxhZ3N8PTEzMTA3MixjLmZsYWdzJj0tNTI4MDUsMT09PWMudGFnJiYobnVsbD09PWMuYWx0ZXJuYXRlP2MudGFnPTE3OihiPW1oKC0xLDEpLGIudGFnPTIsbmgoYyxiLDEpKSksYy5sYW5lc3w9MSksYTthLmZsYWdzfD02NTUzNjthLmxhbmVzPWU7cmV0dXJuIGF9dmFyIFdpPXVhLlJlYWN0Q3VycmVudE93bmVyLGRoPSExO2Z1bmN0aW9uIFhpKGEsYixjLGQpe2IuY2hpbGQ9bnVsbD09PWE/VmcoYixudWxsLGMsZCk6VWcoYixhLmNoaWxkLGMsZCl9XG5mdW5jdGlvbiBZaShhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7Y2goYixlKTtkPU5oKGEsYixjLGQsZixlKTtjPVNoKCk7aWYobnVsbCE9PWEmJiFkaClyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZmxhZ3MmPS0yMDUzLGEubGFuZXMmPX5lLFppKGEsYixlKTtJJiZjJiZ2ZyhiKTtiLmZsYWdzfD0xO1hpKGEsYixkLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gJGkoYSxiLGMsZCxlKXtpZihudWxsPT09YSl7dmFyIGY9Yy50eXBlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmJiYhYWooZikmJnZvaWQgMD09PWYuZGVmYXVsdFByb3BzJiZudWxsPT09Yy5jb21wYXJlJiZ2b2lkIDA9PT1jLmRlZmF1bHRQcm9wcylyZXR1cm4gYi50YWc9MTUsYi50eXBlPWYsYmooYSxiLGYsZCxlKTthPVJnKGMudHlwZSxudWxsLGQsYixiLm1vZGUsZSk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfWY9YS5jaGlsZDtpZigwPT09KGEubGFuZXMmZSkpe3ZhciBnPWYubWVtb2l6ZWRQcm9wcztjPWMuY29tcGFyZTtjPW51bGwhPT1jP2M6SWU7aWYoYyhnLGQpJiZhLnJlZj09PWIucmVmKXJldHVybiBaaShhLGIsZSl9Yi5mbGFnc3w9MTthPVBnKGYsZCk7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfVxuZnVuY3Rpb24gYmooYSxiLGMsZCxlKXtpZihudWxsIT09YSl7dmFyIGY9YS5tZW1vaXplZFByb3BzO2lmKEllKGYsZCkmJmEucmVmPT09Yi5yZWYpaWYoZGg9ITEsYi5wZW5kaW5nUHJvcHM9ZD1mLDAhPT0oYS5sYW5lcyZlKSkwIT09KGEuZmxhZ3MmMTMxMDcyKSYmKGRoPSEwKTtlbHNlIHJldHVybiBiLmxhbmVzPWEubGFuZXMsWmkoYSxiLGUpfXJldHVybiBjaihhLGIsYyxkLGUpfVxuZnVuY3Rpb24gZGooYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5jaGlsZHJlbixmPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsO2lmKFwiaGlkZGVuXCI9PT1kLm1vZGUpaWYoMD09PShiLm1vZGUmMSkpYi5tZW1vaXplZFN0YXRlPXtiYXNlTGFuZXM6MCxjYWNoZVBvb2w6bnVsbCx0cmFuc2l0aW9uczpudWxsfSxHKGVqLGZqKSxmanw9YztlbHNle2lmKDA9PT0oYyYxMDczNzQxODI0KSlyZXR1cm4gYT1udWxsIT09Zj9mLmJhc2VMYW5lc3xjOmMsYi5sYW5lcz1iLmNoaWxkTGFuZXM9MTA3Mzc0MTgyNCxiLm1lbW9pemVkU3RhdGU9e2Jhc2VMYW5lczphLGNhY2hlUG9vbDpudWxsLHRyYW5zaXRpb25zOm51bGx9LGIudXBkYXRlUXVldWU9bnVsbCxHKGVqLGZqKSxmanw9YSxudWxsO2IubWVtb2l6ZWRTdGF0ZT17YmFzZUxhbmVzOjAsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6bnVsbH07ZD1udWxsIT09Zj9mLmJhc2VMYW5lczpjO0coZWosZmopO2ZqfD1kfWVsc2UgbnVsbCE9PVxuZj8oZD1mLmJhc2VMYW5lc3xjLGIubWVtb2l6ZWRTdGF0ZT1udWxsKTpkPWMsRyhlaixmaiksZmp8PWQ7WGkoYSxiLGUsYyk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gZ2ooYSxiKXt2YXIgYz1iLnJlZjtpZihudWxsPT09YSYmbnVsbCE9PWN8fG51bGwhPT1hJiZhLnJlZiE9PWMpYi5mbGFnc3w9NTEyLGIuZmxhZ3N8PTIwOTcxNTJ9ZnVuY3Rpb24gY2ooYSxiLGMsZCxlKXt2YXIgZj1aZihjKT9YZjpILmN1cnJlbnQ7Zj1ZZihiLGYpO2NoKGIsZSk7Yz1OaChhLGIsYyxkLGYsZSk7ZD1TaCgpO2lmKG51bGwhPT1hJiYhZGgpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmZsYWdzJj0tMjA1MyxhLmxhbmVzJj1+ZSxaaShhLGIsZSk7SSYmZCYmdmcoYik7Yi5mbGFnc3w9MTtYaShhLGIsYyxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIGhqKGEsYixjLGQsZSl7aWYoWmYoYykpe3ZhciBmPSEwO2NnKGIpfWVsc2UgZj0hMTtjaChiLGUpO2lmKG51bGw9PT1iLnN0YXRlTm9kZSlpaihhLGIpLEdpKGIsYyxkKSxJaShiLGMsZCxlKSxkPSEwO2Vsc2UgaWYobnVsbD09PWEpe3ZhciBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzO2cucHJvcHM9aDt2YXIgaz1nLmNvbnRleHQsbD1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgbCYmbnVsbCE9PWw/bD1laChsKToobD1aZihjKT9YZjpILmN1cnJlbnQsbD1ZZihiLGwpKTt2YXIgbT1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyxxPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBtfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZTtxfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8XG4oaCE9PWR8fGshPT1sKSYmSGkoYixnLGQsbCk7amg9ITE7dmFyIHI9Yi5tZW1vaXplZFN0YXRlO2cuc3RhdGU9cjtxaChiLGQsZyxlKTtrPWIubWVtb2l6ZWRTdGF0ZTtoIT09ZHx8ciE9PWt8fFdmLmN1cnJlbnR8fGpoPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbSYmKERpKGIsYyxtLGQpLGs9Yi5tZW1vaXplZFN0YXRlKSwoaD1qaHx8RmkoYixjLGgsZCxyLGssbCkpPyhxfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnR8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnQmJmcuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NDE5NDMwOCkpOlxuKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5mbGFnc3w9NDE5NDMwOCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWspLGcucHJvcHM9ZCxnLnN0YXRlPWssZy5jb250ZXh0PWwsZD1oKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmZsYWdzfD00MTk0MzA4KSxkPSExKX1lbHNle2c9Yi5zdGF0ZU5vZGU7bGgoYSxiKTtoPWIubWVtb2l6ZWRQcm9wcztsPWIudHlwZT09PWIuZWxlbWVudFR5cGU/aDpDaShiLnR5cGUsaCk7Zy5wcm9wcz1sO3E9Yi5wZW5kaW5nUHJvcHM7cj1nLmNvbnRleHQ7az1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWs/az1laChrKTooaz1aZihjKT9YZjpILmN1cnJlbnQsaz1ZZihiLGspKTt2YXIgeT1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczsobT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgeXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PXF8fHIhPT1rKSYmSGkoYixnLGQsayk7amg9ITE7cj1iLm1lbW9pemVkU3RhdGU7Zy5zdGF0ZT1yO3FoKGIsZCxnLGUpO3ZhciBuPWIubWVtb2l6ZWRTdGF0ZTtoIT09cXx8ciE9PW58fFdmLmN1cnJlbnR8fGpoPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgeSYmKERpKGIsYyx5LGQpLG49Yi5tZW1vaXplZFN0YXRlKSwobD1qaHx8RmkoYixjLGwsZCxyLG4sayl8fCExKT8obXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGV8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsVXBkYXRlJiZnLmNvbXBvbmVudFdpbGxVcGRhdGUoZCxuLGspLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJiZcbmcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUoZCxuLGspKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGUmJihiLmZsYWdzfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZmxhZ3N8PTEwMjQpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZyPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnI9PT1hLm1lbW9pemVkU3RhdGV8fChiLmZsYWdzfD0xMDI0KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9biksZy5wcm9wcz1kLGcuc3RhdGU9bixnLmNvbnRleHQ9ayxkPWwpOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJnI9PT1cbmEubWVtb2l6ZWRTdGF0ZXx8KGIuZmxhZ3N8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZyPT09YS5tZW1vaXplZFN0YXRlfHwoYi5mbGFnc3w9MTAyNCksZD0hMSl9cmV0dXJuIGpqKGEsYixjLGQsZixlKX1cbmZ1bmN0aW9uIGpqKGEsYixjLGQsZSxmKXtnaihhLGIpO3ZhciBnPTAhPT0oYi5mbGFncyYxMjgpO2lmKCFkJiYhZylyZXR1cm4gZSYmZGcoYixjLCExKSxaaShhLGIsZik7ZD1iLnN0YXRlTm9kZTtXaS5jdXJyZW50PWI7dmFyIGg9ZyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yP251bGw6ZC5yZW5kZXIoKTtiLmZsYWdzfD0xO251bGwhPT1hJiZnPyhiLmNoaWxkPVVnKGIsYS5jaGlsZCxudWxsLGYpLGIuY2hpbGQ9VWcoYixudWxsLGgsZikpOlhpKGEsYixoLGYpO2IubWVtb2l6ZWRTdGF0ZT1kLnN0YXRlO2UmJmRnKGIsYywhMCk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24ga2ooYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yi5wZW5kaW5nQ29udGV4dD9hZyhhLGIucGVuZGluZ0NvbnRleHQsYi5wZW5kaW5nQ29udGV4dCE9PWIuY29udGV4dCk6Yi5jb250ZXh0JiZhZyhhLGIuY29udGV4dCwhMSk7eWgoYSxiLmNvbnRhaW5lckluZm8pfVxuZnVuY3Rpb24gbGooYSxiLGMsZCxlKXtJZygpO0pnKGUpO2IuZmxhZ3N8PTI1NjtYaShhLGIsYyxkKTtyZXR1cm4gYi5jaGlsZH12YXIgbWo9e2RlaHlkcmF0ZWQ6bnVsbCx0cmVlQ29udGV4dDpudWxsLHJldHJ5TGFuZTowfTtmdW5jdGlvbiBuaihhKXtyZXR1cm57YmFzZUxhbmVzOmEsY2FjaGVQb29sOm51bGwsdHJhbnNpdGlvbnM6bnVsbH19XG5mdW5jdGlvbiBvaihhLGIsYyl7dmFyIGQ9Yi5wZW5kaW5nUHJvcHMsZT1MLmN1cnJlbnQsZj0hMSxnPTAhPT0oYi5mbGFncyYxMjgpLGg7KGg9Zyl8fChoPW51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlPyExOjAhPT0oZSYyKSk7aWYoaClmPSEwLGIuZmxhZ3MmPS0xMjk7ZWxzZSBpZihudWxsPT09YXx8bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSllfD0xO0coTCxlJjEpO2lmKG51bGw9PT1hKXtFZyhiKTthPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YSYmKGE9YS5kZWh5ZHJhdGVkLG51bGwhPT1hKSlyZXR1cm4gMD09PShiLm1vZGUmMSk/Yi5sYW5lcz0xOlwiJCFcIj09PWEuZGF0YT9iLmxhbmVzPTg6Yi5sYW5lcz0xMDczNzQxODI0LG51bGw7Zz1kLmNoaWxkcmVuO2E9ZC5mYWxsYmFjaztyZXR1cm4gZj8oZD1iLm1vZGUsZj1iLmNoaWxkLGc9e21vZGU6XCJoaWRkZW5cIixjaGlsZHJlbjpnfSwwPT09KGQmMSkmJm51bGwhPT1mPyhmLmNoaWxkTGFuZXM9MCxmLnBlbmRpbmdQcm9wcz1cbmcpOmY9cGooZyxkLDAsbnVsbCksYT1UZyhhLGQsYyxudWxsKSxmLnJldHVybj1iLGEucmV0dXJuPWIsZi5zaWJsaW5nPWEsYi5jaGlsZD1mLGIuY2hpbGQubWVtb2l6ZWRTdGF0ZT1uaihjKSxiLm1lbW9pemVkU3RhdGU9bWosYSk6cWooYixnKX1lPWEubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZSYmKGg9ZS5kZWh5ZHJhdGVkLG51bGwhPT1oKSlyZXR1cm4gcmooYSxiLGcsZCxoLGUsYyk7aWYoZil7Zj1kLmZhbGxiYWNrO2c9Yi5tb2RlO2U9YS5jaGlsZDtoPWUuc2libGluZzt2YXIgaz17bW9kZTpcImhpZGRlblwiLGNoaWxkcmVuOmQuY2hpbGRyZW59OzA9PT0oZyYxKSYmYi5jaGlsZCE9PWU/KGQ9Yi5jaGlsZCxkLmNoaWxkTGFuZXM9MCxkLnBlbmRpbmdQcm9wcz1rLGIuZGVsZXRpb25zPW51bGwpOihkPVBnKGUsayksZC5zdWJ0cmVlRmxhZ3M9ZS5zdWJ0cmVlRmxhZ3MmMTQ2ODAwNjQpO251bGwhPT1oP2Y9UGcoaCxmKTooZj1UZyhmLGcsYyxudWxsKSxmLmZsYWdzfD0yKTtmLnJldHVybj1cbmI7ZC5yZXR1cm49YjtkLnNpYmxpbmc9ZjtiLmNoaWxkPWQ7ZD1mO2Y9Yi5jaGlsZDtnPWEuY2hpbGQubWVtb2l6ZWRTdGF0ZTtnPW51bGw9PT1nP25qKGMpOntiYXNlTGFuZXM6Zy5iYXNlTGFuZXN8YyxjYWNoZVBvb2w6bnVsbCx0cmFuc2l0aW9uczpnLnRyYW5zaXRpb25zfTtmLm1lbW9pemVkU3RhdGU9ZztmLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzJn5jO2IubWVtb2l6ZWRTdGF0ZT1tajtyZXR1cm4gZH1mPWEuY2hpbGQ7YT1mLnNpYmxpbmc7ZD1QZyhmLHttb2RlOlwidmlzaWJsZVwiLGNoaWxkcmVuOmQuY2hpbGRyZW59KTswPT09KGIubW9kZSYxKSYmKGQubGFuZXM9Yyk7ZC5yZXR1cm49YjtkLnNpYmxpbmc9bnVsbDtudWxsIT09YSYmKGM9Yi5kZWxldGlvbnMsbnVsbD09PWM/KGIuZGVsZXRpb25zPVthXSxiLmZsYWdzfD0xNik6Yy5wdXNoKGEpKTtiLmNoaWxkPWQ7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGR9XG5mdW5jdGlvbiBxaihhLGIpe2I9cGooe21vZGU6XCJ2aXNpYmxlXCIsY2hpbGRyZW46Yn0sYS5tb2RlLDAsbnVsbCk7Yi5yZXR1cm49YTtyZXR1cm4gYS5jaGlsZD1ifWZ1bmN0aW9uIHNqKGEsYixjLGQpe251bGwhPT1kJiZKZyhkKTtVZyhiLGEuY2hpbGQsbnVsbCxjKTthPXFqKGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4pO2EuZmxhZ3N8PTI7Yi5tZW1vaXplZFN0YXRlPW51bGw7cmV0dXJuIGF9XG5mdW5jdGlvbiByaihhLGIsYyxkLGUsZixnKXtpZihjKXtpZihiLmZsYWdzJjI1NilyZXR1cm4gYi5mbGFncyY9LTI1NyxkPUtpKEVycm9yKHAoNDIyKSkpLHNqKGEsYixnLGQpO2lmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpcmV0dXJuIGIuY2hpbGQ9YS5jaGlsZCxiLmZsYWdzfD0xMjgsbnVsbDtmPWQuZmFsbGJhY2s7ZT1iLm1vZGU7ZD1waih7bW9kZTpcInZpc2libGVcIixjaGlsZHJlbjpkLmNoaWxkcmVufSxlLDAsbnVsbCk7Zj1UZyhmLGUsZyxudWxsKTtmLmZsYWdzfD0yO2QucmV0dXJuPWI7Zi5yZXR1cm49YjtkLnNpYmxpbmc9ZjtiLmNoaWxkPWQ7MCE9PShiLm1vZGUmMSkmJlVnKGIsYS5jaGlsZCxudWxsLGcpO2IuY2hpbGQubWVtb2l6ZWRTdGF0ZT1uaihnKTtiLm1lbW9pemVkU3RhdGU9bWo7cmV0dXJuIGZ9aWYoMD09PShiLm1vZGUmMSkpcmV0dXJuIHNqKGEsYixnLG51bGwpO2lmKFwiJCFcIj09PWUuZGF0YSl7ZD1lLm5leHRTaWJsaW5nJiZlLm5leHRTaWJsaW5nLmRhdGFzZXQ7XG5pZihkKXZhciBoPWQuZGdzdDtkPWg7Zj1FcnJvcihwKDQxOSkpO2Q9S2koZixkLHZvaWQgMCk7cmV0dXJuIHNqKGEsYixnLGQpfWg9MCE9PShnJmEuY2hpbGRMYW5lcyk7aWYoZGh8fGgpe2Q9UTtpZihudWxsIT09ZCl7c3dpdGNoKGcmLWcpe2Nhc2UgNDplPTI7YnJlYWs7Y2FzZSAxNjplPTg7YnJlYWs7Y2FzZSA2NDpjYXNlIDEyODpjYXNlIDI1NjpjYXNlIDUxMjpjYXNlIDEwMjQ6Y2FzZSAyMDQ4OmNhc2UgNDA5NjpjYXNlIDgxOTI6Y2FzZSAxNjM4NDpjYXNlIDMyNzY4OmNhc2UgNjU1MzY6Y2FzZSAxMzEwNzI6Y2FzZSAyNjIxNDQ6Y2FzZSA1MjQyODg6Y2FzZSAxMDQ4NTc2OmNhc2UgMjA5NzE1MjpjYXNlIDQxOTQzMDQ6Y2FzZSA4Mzg4NjA4OmNhc2UgMTY3NzcyMTY6Y2FzZSAzMzU1NDQzMjpjYXNlIDY3MTA4ODY0OmU9MzI7YnJlYWs7Y2FzZSA1MzY4NzA5MTI6ZT0yNjg0MzU0NTY7YnJlYWs7ZGVmYXVsdDplPTB9ZT0wIT09KGUmKGQuc3VzcGVuZGVkTGFuZXN8ZykpPzA6ZTtcbjAhPT1lJiZlIT09Zi5yZXRyeUxhbmUmJihmLnJldHJ5TGFuZT1lLGloKGEsZSksZ2koZCxhLGUsLTEpKX10aigpO2Q9S2koRXJyb3IocCg0MjEpKSk7cmV0dXJuIHNqKGEsYixnLGQpfWlmKFwiJD9cIj09PWUuZGF0YSlyZXR1cm4gYi5mbGFnc3w9MTI4LGIuY2hpbGQ9YS5jaGlsZCxiPXVqLmJpbmQobnVsbCxhKSxlLl9yZWFjdFJldHJ5PWIsbnVsbDthPWYudHJlZUNvbnRleHQ7eWc9TGYoZS5uZXh0U2libGluZyk7eGc9YjtJPSEwO3pnPW51bGw7bnVsbCE9PWEmJihvZ1twZysrXT1yZyxvZ1twZysrXT1zZyxvZ1twZysrXT1xZyxyZz1hLmlkLHNnPWEub3ZlcmZsb3cscWc9Yik7Yj1xaihiLGQuY2hpbGRyZW4pO2IuZmxhZ3N8PTQwOTY7cmV0dXJuIGJ9ZnVuY3Rpb24gdmooYSxiLGMpe2EubGFuZXN8PWI7dmFyIGQ9YS5hbHRlcm5hdGU7bnVsbCE9PWQmJihkLmxhbmVzfD1iKTtiaChhLnJldHVybixiLGMpfVxuZnVuY3Rpb24gd2ooYSxiLGMsZCxlKXt2YXIgZj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWY/YS5tZW1vaXplZFN0YXRlPXtpc0JhY2t3YXJkczpiLHJlbmRlcmluZzpudWxsLHJlbmRlcmluZ1N0YXJ0VGltZTowLGxhc3Q6ZCx0YWlsOmMsdGFpbE1vZGU6ZX06KGYuaXNCYWNrd2FyZHM9YixmLnJlbmRlcmluZz1udWxsLGYucmVuZGVyaW5nU3RhcnRUaW1lPTAsZi5sYXN0PWQsZi50YWlsPWMsZi50YWlsTW9kZT1lKX1cbmZ1bmN0aW9uIHhqKGEsYixjKXt2YXIgZD1iLnBlbmRpbmdQcm9wcyxlPWQucmV2ZWFsT3JkZXIsZj1kLnRhaWw7WGkoYSxiLGQuY2hpbGRyZW4sYyk7ZD1MLmN1cnJlbnQ7aWYoMCE9PShkJjIpKWQ9ZCYxfDIsYi5mbGFnc3w9MTI4O2Vsc2V7aWYobnVsbCE9PWEmJjAhPT0oYS5mbGFncyYxMjgpKWE6Zm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2lmKDEzPT09YS50YWcpbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSYmdmooYSxjLGIpO2Vsc2UgaWYoMTk9PT1hLnRhZyl2aihhLGMsYik7ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09YilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj0xfUcoTCxkKTtpZigwPT09KGIubW9kZSYxKSliLm1lbW9pemVkU3RhdGU9XG5udWxsO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJmb3J3YXJkc1wiOmM9Yi5jaGlsZDtmb3IoZT1udWxsO251bGwhPT1jOylhPWMuYWx0ZXJuYXRlLG51bGwhPT1hJiZudWxsPT09Q2goYSkmJihlPWMpLGM9Yy5zaWJsaW5nO2M9ZTtudWxsPT09Yz8oZT1iLmNoaWxkLGIuY2hpbGQ9bnVsbCk6KGU9Yy5zaWJsaW5nLGMuc2libGluZz1udWxsKTt3aihiLCExLGUsYyxmKTticmVhaztjYXNlIFwiYmFja3dhcmRzXCI6Yz1udWxsO2U9Yi5jaGlsZDtmb3IoYi5jaGlsZD1udWxsO251bGwhPT1lOyl7YT1lLmFsdGVybmF0ZTtpZihudWxsIT09YSYmbnVsbD09PUNoKGEpKXtiLmNoaWxkPWU7YnJlYWt9YT1lLnNpYmxpbmc7ZS5zaWJsaW5nPWM7Yz1lO2U9YX13aihiLCEwLGMsbnVsbCxmKTticmVhaztjYXNlIFwidG9nZXRoZXJcIjp3aihiLCExLG51bGwsbnVsbCx2b2lkIDApO2JyZWFrO2RlZmF1bHQ6Yi5tZW1vaXplZFN0YXRlPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBpaihhLGIpezA9PT0oYi5tb2RlJjEpJiZudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmZsYWdzfD0yKX1mdW5jdGlvbiBaaShhLGIsYyl7bnVsbCE9PWEmJihiLmRlcGVuZGVuY2llcz1hLmRlcGVuZGVuY2llcyk7cmh8PWIubGFuZXM7aWYoMD09PShjJmIuY2hpbGRMYW5lcykpcmV0dXJuIG51bGw7aWYobnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkKXRocm93IEVycm9yKHAoMTUzKSk7aWYobnVsbCE9PWIuY2hpbGQpe2E9Yi5jaGlsZDtjPVBnKGEsYS5wZW5kaW5nUHJvcHMpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1QZyhhLGEucGVuZGluZ1Byb3BzKSxjLnJldHVybj1iO2Muc2libGluZz1udWxsfXJldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24geWooYSxiLGMpe3N3aXRjaChiLnRhZyl7Y2FzZSAzOmtqKGIpO0lnKCk7YnJlYWs7Y2FzZSA1OkFoKGIpO2JyZWFrO2Nhc2UgMTpaZihiLnR5cGUpJiZjZyhiKTticmVhaztjYXNlIDQ6eWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOnZhciBkPWIudHlwZS5fY29udGV4dCxlPWIubWVtb2l6ZWRQcm9wcy52YWx1ZTtHKFdnLGQuX2N1cnJlbnRWYWx1ZSk7ZC5fY3VycmVudFZhbHVlPWU7YnJlYWs7Y2FzZSAxMzpkPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCl7aWYobnVsbCE9PWQuZGVoeWRyYXRlZClyZXR1cm4gRyhMLEwuY3VycmVudCYxKSxiLmZsYWdzfD0xMjgsbnVsbDtpZigwIT09KGMmYi5jaGlsZC5jaGlsZExhbmVzKSlyZXR1cm4gb2ooYSxiLGMpO0coTCxMLmN1cnJlbnQmMSk7YT1aaShhLGIsYyk7cmV0dXJuIG51bGwhPT1hP2Euc2libGluZzpudWxsfUcoTCxMLmN1cnJlbnQmMSk7YnJlYWs7Y2FzZSAxOTpkPTAhPT0oYyZcbmIuY2hpbGRMYW5lcyk7aWYoMCE9PShhLmZsYWdzJjEyOCkpe2lmKGQpcmV0dXJuIHhqKGEsYixjKTtiLmZsYWdzfD0xMjh9ZT1iLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihlLnJlbmRlcmluZz1udWxsLGUudGFpbD1udWxsLGUubGFzdEVmZmVjdD1udWxsKTtHKEwsTC5jdXJyZW50KTtpZihkKWJyZWFrO2Vsc2UgcmV0dXJuIG51bGw7Y2FzZSAyMjpjYXNlIDIzOnJldHVybiBiLmxhbmVzPTAsZGooYSxiLGMpfXJldHVybiBaaShhLGIsYyl9dmFyIHpqLEFqLEJqLENqO1xuemo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yi5jaGlsZDtudWxsIT09Yzspe2lmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWEuYXBwZW5kQ2hpbGQoYy5zdGF0ZU5vZGUpO2Vsc2UgaWYoNCE9PWMudGFnJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319O0FqPWZ1bmN0aW9uKCl7fTtcbkJqPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWEubWVtb2l6ZWRQcm9wcztpZihlIT09ZCl7YT1iLnN0YXRlTm9kZTt4aCh1aC5jdXJyZW50KTt2YXIgZj1udWxsO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjplPVlhKGEsZSk7ZD1ZYShhLGQpO2Y9W107YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmU9QSh7fSxlLHt2YWx1ZTp2b2lkIDB9KTtkPUEoe30sZCx7dmFsdWU6dm9pZCAwfSk7Zj1bXTticmVhaztjYXNlIFwidGV4dGFyZWFcIjplPWdiKGEsZSk7ZD1nYihhLGQpO2Y9W107YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5vbkNsaWNrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoYS5vbmNsaWNrPUJmKX11YihjLGQpO3ZhciBnO2M9bnVsbDtmb3IobCBpbiBlKWlmKCFkLmhhc093blByb3BlcnR5KGwpJiZlLmhhc093blByb3BlcnR5KGwpJiZudWxsIT1lW2xdKWlmKFwic3R5bGVcIj09PWwpe3ZhciBoPWVbbF07Zm9yKGcgaW4gaCloLmhhc093blByb3BlcnR5KGcpJiZcbihjfHwoYz17fSksY1tnXT1cIlwiKX1lbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmXCJjaGlsZHJlblwiIT09bCYmXCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiZcImF1dG9Gb2N1c1wiIT09bCYmKGVhLmhhc093blByb3BlcnR5KGwpP2Z8fChmPVtdKTooZj1mfHxbXSkucHVzaChsLG51bGwpKTtmb3IobCBpbiBkKXt2YXIgaz1kW2xdO2g9bnVsbCE9ZT9lW2xdOnZvaWQgMDtpZihkLmhhc093blByb3BlcnR5KGwpJiZrIT09aCYmKG51bGwhPWt8fG51bGwhPWgpKWlmKFwic3R5bGVcIj09PWwpaWYoaCl7Zm9yKGcgaW4gaCkhaC5oYXNPd25Qcm9wZXJ0eShnKXx8ayYmay5oYXNPd25Qcm9wZXJ0eShnKXx8KGN8fChjPXt9KSxjW2ddPVwiXCIpO2ZvcihnIGluIGspay5oYXNPd25Qcm9wZXJ0eShnKSYmaFtnXSE9PWtbZ10mJihjfHwoYz17fSksY1tnXT1rW2ddKX1lbHNlIGN8fChmfHwoZj1bXSksZi5wdXNoKGwsXG5jKSksYz1rO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1sPyhrPWs/ay5fX2h0bWw6dm9pZCAwLGg9aD9oLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmaCE9PWsmJihmPWZ8fFtdKS5wdXNoKGwsaykpOlwiY2hpbGRyZW5cIj09PWw/XCJzdHJpbmdcIiE9PXR5cGVvZiBrJiZcIm51bWJlclwiIT09dHlwZW9mIGt8fChmPWZ8fFtdKS5wdXNoKGwsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09bCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWwmJihlYS5oYXNPd25Qcm9wZXJ0eShsKT8obnVsbCE9ayYmXCJvblNjcm9sbFwiPT09bCYmRChcInNjcm9sbFwiLGEpLGZ8fGg9PT1rfHwoZj1bXSkpOihmPWZ8fFtdKS5wdXNoKGwsaykpfWMmJihmPWZ8fFtdKS5wdXNoKFwic3R5bGVcIixjKTt2YXIgbD1mO2lmKGIudXBkYXRlUXVldWU9bCliLmZsYWdzfD00fX07Q2o9ZnVuY3Rpb24oYSxiLGMsZCl7YyE9PWQmJihiLmZsYWdzfD00KX07XG5mdW5jdGlvbiBEaihhLGIpe2lmKCFJKXN3aXRjaChhLnRhaWxNb2RlKXtjYXNlIFwiaGlkZGVuXCI6Yj1hLnRhaWw7Zm9yKHZhciBjPW51bGw7bnVsbCE9PWI7KW51bGwhPT1iLmFsdGVybmF0ZSYmKGM9YiksYj1iLnNpYmxpbmc7bnVsbD09PWM/YS50YWlsPW51bGw6Yy5zaWJsaW5nPW51bGw7YnJlYWs7Y2FzZSBcImNvbGxhcHNlZFwiOmM9YS50YWlsO2Zvcih2YXIgZD1udWxsO251bGwhPT1jOyludWxsIT09Yy5hbHRlcm5hdGUmJihkPWMpLGM9Yy5zaWJsaW5nO251bGw9PT1kP2J8fG51bGw9PT1hLnRhaWw/YS50YWlsPW51bGw6YS50YWlsLnNpYmxpbmc9bnVsbDpkLnNpYmxpbmc9bnVsbH19XG5mdW5jdGlvbiBTKGEpe3ZhciBiPW51bGwhPT1hLmFsdGVybmF0ZSYmYS5hbHRlcm5hdGUuY2hpbGQ9PT1hLmNoaWxkLGM9MCxkPTA7aWYoYilmb3IodmFyIGU9YS5jaGlsZDtudWxsIT09ZTspY3w9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZHw9ZS5zdWJ0cmVlRmxhZ3MmMTQ2ODAwNjQsZHw9ZS5mbGFncyYxNDY4MDA2NCxlLnJldHVybj1hLGU9ZS5zaWJsaW5nO2Vsc2UgZm9yKGU9YS5jaGlsZDtudWxsIT09ZTspY3w9ZS5sYW5lc3xlLmNoaWxkTGFuZXMsZHw9ZS5zdWJ0cmVlRmxhZ3MsZHw9ZS5mbGFncyxlLnJldHVybj1hLGU9ZS5zaWJsaW5nO2Euc3VidHJlZUZsYWdzfD1kO2EuY2hpbGRMYW5lcz1jO3JldHVybiBifVxuZnVuY3Rpb24gRWooYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzO3dnKGIpO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmNhc2UgMTY6Y2FzZSAxNTpjYXNlIDA6Y2FzZSAxMTpjYXNlIDc6Y2FzZSA4OmNhc2UgMTI6Y2FzZSA5OmNhc2UgMTQ6cmV0dXJuIFMoYiksbnVsbDtjYXNlIDE6cmV0dXJuIFpmKGIudHlwZSkmJiRmKCksUyhiKSxudWxsO2Nhc2UgMzpkPWIuc3RhdGVOb2RlO3poKCk7RShXZik7RShIKTtFaCgpO2QucGVuZGluZ0NvbnRleHQmJihkLmNvbnRleHQ9ZC5wZW5kaW5nQ29udGV4dCxkLnBlbmRpbmdDb250ZXh0PW51bGwpO2lmKG51bGw9PT1hfHxudWxsPT09YS5jaGlsZClHZyhiKT9iLmZsYWdzfD00Om51bGw9PT1hfHxhLm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkJiYwPT09KGIuZmxhZ3MmMjU2KXx8KGIuZmxhZ3N8PTEwMjQsbnVsbCE9PXpnJiYoRmooemcpLHpnPW51bGwpKTtBaihhLGIpO1MoYik7cmV0dXJuIG51bGw7Y2FzZSA1OkJoKGIpO3ZhciBlPXhoKHdoLmN1cnJlbnQpO1xuYz1iLnR5cGU7aWYobnVsbCE9PWEmJm51bGwhPWIuc3RhdGVOb2RlKUJqKGEsYixjLGQsZSksYS5yZWYhPT1iLnJlZiYmKGIuZmxhZ3N8PTUxMixiLmZsYWdzfD0yMDk3MTUyKTtlbHNle2lmKCFkKXtpZihudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IocCgxNjYpKTtTKGIpO3JldHVybiBudWxsfWE9eGgodWguY3VycmVudCk7aWYoR2coYikpe2Q9Yi5zdGF0ZU5vZGU7Yz1iLnR5cGU7dmFyIGY9Yi5tZW1vaXplZFByb3BzO2RbT2ZdPWI7ZFtQZl09ZjthPTAhPT0oYi5tb2RlJjEpO3N3aXRjaChjKXtjYXNlIFwiZGlhbG9nXCI6RChcImNhbmNlbFwiLGQpO0QoXCJjbG9zZVwiLGQpO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RChcImxvYWRcIixkKTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoZT0wO2U8bGYubGVuZ3RoO2UrKylEKGxmW2VdLGQpO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpEKFwiZXJyb3JcIixkKTticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpEKFwiZXJyb3JcIixcbmQpO0QoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpEKFwidG9nZ2xlXCIsZCk7YnJlYWs7Y2FzZSBcImlucHV0XCI6WmEoZCxmKTtEKFwiaW52YWxpZFwiLGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpkLl93cmFwcGVyU3RhdGU9e3dhc011bHRpcGxlOiEhZi5tdWx0aXBsZX07RChcImludmFsaWRcIixkKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihkLGYpLEQoXCJpbnZhbGlkXCIsZCl9dWIoYyxmKTtlPW51bGw7Zm9yKHZhciBnIGluIGYpaWYoZi5oYXNPd25Qcm9wZXJ0eShnKSl7dmFyIGg9ZltnXTtcImNoaWxkcmVuXCI9PT1nP1wic3RyaW5nXCI9PT10eXBlb2YgaD9kLnRleHRDb250ZW50IT09aCYmKCEwIT09Zi5zdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcmJkFmKGQudGV4dENvbnRlbnQsaCxhKSxlPVtcImNoaWxkcmVuXCIsaF0pOlwibnVtYmVyXCI9PT10eXBlb2YgaCYmZC50ZXh0Q29udGVudCE9PVwiXCIraCYmKCEwIT09Zi5zdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcmJkFmKGQudGV4dENvbnRlbnQsXG5oLGEpLGU9W1wiY2hpbGRyZW5cIixcIlwiK2hdKTplYS5oYXNPd25Qcm9wZXJ0eShnKSYmbnVsbCE9aCYmXCJvblNjcm9sbFwiPT09ZyYmRChcInNjcm9sbFwiLGQpfXN3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpWYShkKTtkYihkLGYsITApO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlZhKGQpO2piKGQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpjYXNlIFwib3B0aW9uXCI6YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5vbkNsaWNrJiYoZC5vbmNsaWNrPUJmKX1kPWU7Yi51cGRhdGVRdWV1ZT1kO251bGwhPT1kJiYoYi5mbGFnc3w9NCl9ZWxzZXtnPTk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50O1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YSYmKGE9a2IoYykpO1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9cInNjcmlwdFwiPT09Yz8oYT1nLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYS5pbm5lckhUTUw9XCI8c2NyaXB0PlxceDNjL3NjcmlwdD5cIixhPWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKSk6XG5cInN0cmluZ1wiPT09dHlwZW9mIGQuaXM/YT1nLmNyZWF0ZUVsZW1lbnQoYyx7aXM6ZC5pc30pOihhPWcuY3JlYXRlRWxlbWVudChjKSxcInNlbGVjdFwiPT09YyYmKGc9YSxkLm11bHRpcGxlP2cubXVsdGlwbGU9ITA6ZC5zaXplJiYoZy5zaXplPWQuc2l6ZSkpKTphPWcuY3JlYXRlRWxlbWVudE5TKGEsYyk7YVtPZl09YjthW1BmXT1kO3pqKGEsYiwhMSwhMSk7Yi5zdGF0ZU5vZGU9YTthOntnPXZiKGMsZCk7c3dpdGNoKGMpe2Nhc2UgXCJkaWFsb2dcIjpEKFwiY2FuY2VsXCIsYSk7RChcImNsb3NlXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RChcImxvYWRcIixhKTtlPWQ7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGU9MDtlPGxmLmxlbmd0aDtlKyspRChsZltlXSxhKTtlPWQ7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkQoXCJlcnJvclwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW1nXCI6Y2FzZSBcImltYWdlXCI6Y2FzZSBcImxpbmtcIjpEKFwiZXJyb3JcIixcbmEpO0QoXCJsb2FkXCIsYSk7ZT1kO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RChcInRvZ2dsZVwiLGEpO2U9ZDticmVhaztjYXNlIFwiaW5wdXRcIjpaYShhLGQpO2U9WWEoYSxkKTtEKFwiaW52YWxpZFwiLGEpO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjplPWQ7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmEuX3dyYXBwZXJTdGF0ZT17d2FzTXVsdGlwbGU6ISFkLm11bHRpcGxlfTtlPUEoe30sZCx7dmFsdWU6dm9pZCAwfSk7RChcImludmFsaWRcIixhKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpoYihhLGQpO2U9Z2IoYSxkKTtEKFwiaW52YWxpZFwiLGEpO2JyZWFrO2RlZmF1bHQ6ZT1kfXViKGMsZSk7aD1lO2ZvcihmIGluIGgpaWYoaC5oYXNPd25Qcm9wZXJ0eShmKSl7dmFyIGs9aFtmXTtcInN0eWxlXCI9PT1mP3NiKGEsayk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zj8oaz1rP2suX19odG1sOnZvaWQgMCxudWxsIT1rJiZuYihhLGspKTpcImNoaWxkcmVuXCI9PT1mP1wic3RyaW5nXCI9PT10eXBlb2Ygaz8oXCJ0ZXh0YXJlYVwiIT09XG5jfHxcIlwiIT09aykmJm9iKGEsayk6XCJudW1iZXJcIj09PXR5cGVvZiBrJiZvYihhLFwiXCIrayk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWYmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1mJiZcImF1dG9Gb2N1c1wiIT09ZiYmKGVhLmhhc093blByb3BlcnR5KGYpP251bGwhPWsmJlwib25TY3JvbGxcIj09PWYmJkQoXCJzY3JvbGxcIixhKTpudWxsIT1rJiZ0YShhLGYsayxnKSl9c3dpdGNoKGMpe2Nhc2UgXCJpbnB1dFwiOlZhKGEpO2RiKGEsZCwhMSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6VmEoYSk7amIoYSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPWQudmFsdWUmJmEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK1NhKGQudmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6YS5tdWx0aXBsZT0hIWQubXVsdGlwbGU7Zj1kLnZhbHVlO251bGwhPWY/ZmIoYSwhIWQubXVsdGlwbGUsZiwhMSk6bnVsbCE9ZC5kZWZhdWx0VmFsdWUmJmZiKGEsISFkLm11bHRpcGxlLGQuZGVmYXVsdFZhbHVlLFxuITApO2JyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIGUub25DbGljayYmKGEub25jbGljaz1CZil9c3dpdGNoKGMpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6ZD0hIWQuYXV0b0ZvY3VzO2JyZWFrIGE7Y2FzZSBcImltZ1wiOmQ9ITA7YnJlYWsgYTtkZWZhdWx0OmQ9ITF9fWQmJihiLmZsYWdzfD00KX1udWxsIT09Yi5yZWYmJihiLmZsYWdzfD01MTIsYi5mbGFnc3w9MjA5NzE1Mil9UyhiKTtyZXR1cm4gbnVsbDtjYXNlIDY6aWYoYSYmbnVsbCE9Yi5zdGF0ZU5vZGUpQ2ooYSxiLGEubWVtb2l6ZWRQcm9wcyxkKTtlbHNle2lmKFwic3RyaW5nXCIhPT10eXBlb2YgZCYmbnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHAoMTY2KSk7Yz14aCh3aC5jdXJyZW50KTt4aCh1aC5jdXJyZW50KTtpZihHZyhiKSl7ZD1iLnN0YXRlTm9kZTtjPWIubWVtb2l6ZWRQcm9wcztkW09mXT1iO2lmKGY9ZC5ub2RlVmFsdWUhPT1jKWlmKGE9XG54ZyxudWxsIT09YSlzd2l0Y2goYS50YWcpe2Nhc2UgMzpBZihkLm5vZGVWYWx1ZSxjLDAhPT0oYS5tb2RlJjEpKTticmVhaztjYXNlIDU6ITAhPT1hLm1lbW9pemVkUHJvcHMuc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJiZBZihkLm5vZGVWYWx1ZSxjLDAhPT0oYS5tb2RlJjEpKX1mJiYoYi5mbGFnc3w9NCl9ZWxzZSBkPSg5PT09Yy5ub2RlVHlwZT9jOmMub3duZXJEb2N1bWVudCkuY3JlYXRlVGV4dE5vZGUoZCksZFtPZl09YixiLnN0YXRlTm9kZT1kfVMoYik7cmV0dXJuIG51bGw7Y2FzZSAxMzpFKEwpO2Q9Yi5tZW1vaXplZFN0YXRlO2lmKG51bGw9PT1hfHxudWxsIT09YS5tZW1vaXplZFN0YXRlJiZudWxsIT09YS5tZW1vaXplZFN0YXRlLmRlaHlkcmF0ZWQpe2lmKEkmJm51bGwhPT15ZyYmMCE9PShiLm1vZGUmMSkmJjA9PT0oYi5mbGFncyYxMjgpKUhnKCksSWcoKSxiLmZsYWdzfD05ODU2MCxmPSExO2Vsc2UgaWYoZj1HZyhiKSxudWxsIT09ZCYmbnVsbCE9PWQuZGVoeWRyYXRlZCl7aWYobnVsbD09PVxuYSl7aWYoIWYpdGhyb3cgRXJyb3IocCgzMTgpKTtmPWIubWVtb2l6ZWRTdGF0ZTtmPW51bGwhPT1mP2YuZGVoeWRyYXRlZDpudWxsO2lmKCFmKXRocm93IEVycm9yKHAoMzE3KSk7ZltPZl09Yn1lbHNlIElnKCksMD09PShiLmZsYWdzJjEyOCkmJihiLm1lbW9pemVkU3RhdGU9bnVsbCksYi5mbGFnc3w9NDtTKGIpO2Y9ITF9ZWxzZSBudWxsIT09emcmJihGaih6Zyksemc9bnVsbCksZj0hMDtpZighZilyZXR1cm4gYi5mbGFncyY2NTUzNj9iOm51bGx9aWYoMCE9PShiLmZsYWdzJjEyOCkpcmV0dXJuIGIubGFuZXM9YyxiO2Q9bnVsbCE9PWQ7ZCE9PShudWxsIT09YSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSkmJmQmJihiLmNoaWxkLmZsYWdzfD04MTkyLDAhPT0oYi5tb2RlJjEpJiYobnVsbD09PWF8fDAhPT0oTC5jdXJyZW50JjEpPzA9PT1UJiYoVD0zKTp0aigpKSk7bnVsbCE9PWIudXBkYXRlUXVldWUmJihiLmZsYWdzfD00KTtTKGIpO3JldHVybiBudWxsO2Nhc2UgNDpyZXR1cm4gemgoKSxcbkFqKGEsYiksbnVsbD09PWEmJnNmKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLFMoYiksbnVsbDtjYXNlIDEwOnJldHVybiBhaChiLnR5cGUuX2NvbnRleHQpLFMoYiksbnVsbDtjYXNlIDE3OnJldHVybiBaZihiLnR5cGUpJiYkZigpLFMoYiksbnVsbDtjYXNlIDE5OkUoTCk7Zj1iLm1lbW9pemVkU3RhdGU7aWYobnVsbD09PWYpcmV0dXJuIFMoYiksbnVsbDtkPTAhPT0oYi5mbGFncyYxMjgpO2c9Zi5yZW5kZXJpbmc7aWYobnVsbD09PWcpaWYoZClEaihmLCExKTtlbHNle2lmKDAhPT1UfHxudWxsIT09YSYmMCE9PShhLmZsYWdzJjEyOCkpZm9yKGE9Yi5jaGlsZDtudWxsIT09YTspe2c9Q2goYSk7aWYobnVsbCE9PWcpe2IuZmxhZ3N8PTEyODtEaihmLCExKTtkPWcudXBkYXRlUXVldWU7bnVsbCE9PWQmJihiLnVwZGF0ZVF1ZXVlPWQsYi5mbGFnc3w9NCk7Yi5zdWJ0cmVlRmxhZ3M9MDtkPWM7Zm9yKGM9Yi5jaGlsZDtudWxsIT09YzspZj1jLGE9ZCxmLmZsYWdzJj0xNDY4MDA2Nixcbmc9Zi5hbHRlcm5hdGUsbnVsbD09PWc/KGYuY2hpbGRMYW5lcz0wLGYubGFuZXM9YSxmLmNoaWxkPW51bGwsZi5zdWJ0cmVlRmxhZ3M9MCxmLm1lbW9pemVkUHJvcHM9bnVsbCxmLm1lbW9pemVkU3RhdGU9bnVsbCxmLnVwZGF0ZVF1ZXVlPW51bGwsZi5kZXBlbmRlbmNpZXM9bnVsbCxmLnN0YXRlTm9kZT1udWxsKTooZi5jaGlsZExhbmVzPWcuY2hpbGRMYW5lcyxmLmxhbmVzPWcubGFuZXMsZi5jaGlsZD1nLmNoaWxkLGYuc3VidHJlZUZsYWdzPTAsZi5kZWxldGlvbnM9bnVsbCxmLm1lbW9pemVkUHJvcHM9Zy5tZW1vaXplZFByb3BzLGYubWVtb2l6ZWRTdGF0ZT1nLm1lbW9pemVkU3RhdGUsZi51cGRhdGVRdWV1ZT1nLnVwZGF0ZVF1ZXVlLGYudHlwZT1nLnR5cGUsYT1nLmRlcGVuZGVuY2llcyxmLmRlcGVuZGVuY2llcz1udWxsPT09YT9udWxsOntsYW5lczphLmxhbmVzLGZpcnN0Q29udGV4dDphLmZpcnN0Q29udGV4dH0pLGM9Yy5zaWJsaW5nO0coTCxMLmN1cnJlbnQmMXwyKTtyZXR1cm4gYi5jaGlsZH1hPVxuYS5zaWJsaW5nfW51bGwhPT1mLnRhaWwmJkIoKT5HaiYmKGIuZmxhZ3N8PTEyOCxkPSEwLERqKGYsITEpLGIubGFuZXM9NDE5NDMwNCl9ZWxzZXtpZighZClpZihhPUNoKGcpLG51bGwhPT1hKXtpZihiLmZsYWdzfD0xMjgsZD0hMCxjPWEudXBkYXRlUXVldWUsbnVsbCE9PWMmJihiLnVwZGF0ZVF1ZXVlPWMsYi5mbGFnc3w9NCksRGooZiwhMCksbnVsbD09PWYudGFpbCYmXCJoaWRkZW5cIj09PWYudGFpbE1vZGUmJiFnLmFsdGVybmF0ZSYmIUkpcmV0dXJuIFMoYiksbnVsbH1lbHNlIDIqQigpLWYucmVuZGVyaW5nU3RhcnRUaW1lPkdqJiYxMDczNzQxODI0IT09YyYmKGIuZmxhZ3N8PTEyOCxkPSEwLERqKGYsITEpLGIubGFuZXM9NDE5NDMwNCk7Zi5pc0JhY2t3YXJkcz8oZy5zaWJsaW5nPWIuY2hpbGQsYi5jaGlsZD1nKTooYz1mLmxhc3QsbnVsbCE9PWM/Yy5zaWJsaW5nPWc6Yi5jaGlsZD1nLGYubGFzdD1nKX1pZihudWxsIT09Zi50YWlsKXJldHVybiBiPWYudGFpbCxmLnJlbmRlcmluZz1cbmIsZi50YWlsPWIuc2libGluZyxmLnJlbmRlcmluZ1N0YXJ0VGltZT1CKCksYi5zaWJsaW5nPW51bGwsYz1MLmN1cnJlbnQsRyhMLGQ/YyYxfDI6YyYxKSxiO1MoYik7cmV0dXJuIG51bGw7Y2FzZSAyMjpjYXNlIDIzOnJldHVybiBIaigpLGQ9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSxudWxsIT09YSYmbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZSE9PWQmJihiLmZsYWdzfD04MTkyKSxkJiYwIT09KGIubW9kZSYxKT8wIT09KGZqJjEwNzM3NDE4MjQpJiYoUyhiKSxiLnN1YnRyZWVGbGFncyY2JiYoYi5mbGFnc3w9ODE5MikpOlMoYiksbnVsbDtjYXNlIDI0OnJldHVybiBudWxsO2Nhc2UgMjU6cmV0dXJuIG51bGx9dGhyb3cgRXJyb3IocCgxNTYsYi50YWcpKTt9XG5mdW5jdGlvbiBJaihhLGIpe3dnKGIpO3N3aXRjaChiLnRhZyl7Y2FzZSAxOnJldHVybiBaZihiLnR5cGUpJiYkZigpLGE9Yi5mbGFncyxhJjY1NTM2PyhiLmZsYWdzPWEmLTY1NTM3fDEyOCxiKTpudWxsO2Nhc2UgMzpyZXR1cm4gemgoKSxFKFdmKSxFKEgpLEVoKCksYT1iLmZsYWdzLDAhPT0oYSY2NTUzNikmJjA9PT0oYSYxMjgpPyhiLmZsYWdzPWEmLTY1NTM3fDEyOCxiKTpudWxsO2Nhc2UgNTpyZXR1cm4gQmgoYiksbnVsbDtjYXNlIDEzOkUoTCk7YT1iLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWEmJm51bGwhPT1hLmRlaHlkcmF0ZWQpe2lmKG51bGw9PT1iLmFsdGVybmF0ZSl0aHJvdyBFcnJvcihwKDM0MCkpO0lnKCl9YT1iLmZsYWdzO3JldHVybiBhJjY1NTM2PyhiLmZsYWdzPWEmLTY1NTM3fDEyOCxiKTpudWxsO2Nhc2UgMTk6cmV0dXJuIEUoTCksbnVsbDtjYXNlIDQ6cmV0dXJuIHpoKCksbnVsbDtjYXNlIDEwOnJldHVybiBhaChiLnR5cGUuX2NvbnRleHQpLG51bGw7Y2FzZSAyMjpjYXNlIDIzOnJldHVybiBIaigpLFxubnVsbDtjYXNlIDI0OnJldHVybiBudWxsO2RlZmF1bHQ6cmV0dXJuIG51bGx9fXZhciBKaj0hMSxVPSExLEtqPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrU2V0P1dlYWtTZXQ6U2V0LFY9bnVsbDtmdW5jdGlvbiBMaihhLGIpe3ZhciBjPWEucmVmO2lmKG51bGwhPT1jKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjKXRyeXtjKG51bGwpfWNhdGNoKGQpe1coYSxiLGQpfWVsc2UgYy5jdXJyZW50PW51bGx9ZnVuY3Rpb24gTWooYSxiLGMpe3RyeXtjKCl9Y2F0Y2goZCl7VyhhLGIsZCl9fXZhciBOaj0hMTtcbmZ1bmN0aW9uIE9qKGEsYil7Q2Y9ZGQ7YT1NZSgpO2lmKE5lKGEpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBhKXZhciBjPXtzdGFydDphLnNlbGVjdGlvblN0YXJ0LGVuZDphLnNlbGVjdGlvbkVuZH07ZWxzZSBhOntjPShjPWEub3duZXJEb2N1bWVudCkmJmMuZGVmYXVsdFZpZXd8fHdpbmRvdzt2YXIgZD1jLmdldFNlbGVjdGlvbiYmYy5nZXRTZWxlY3Rpb24oKTtpZihkJiYwIT09ZC5yYW5nZUNvdW50KXtjPWQuYW5jaG9yTm9kZTt2YXIgZT1kLmFuY2hvck9mZnNldCxmPWQuZm9jdXNOb2RlO2Q9ZC5mb2N1c09mZnNldDt0cnl7Yy5ub2RlVHlwZSxmLm5vZGVUeXBlfWNhdGNoKEYpe2M9bnVsbDticmVhayBhfXZhciBnPTAsaD0tMSxrPS0xLGw9MCxtPTAscT1hLHI9bnVsbDtiOmZvcig7Oyl7Zm9yKHZhciB5Ozspe3EhPT1jfHwwIT09ZSYmMyE9PXEubm9kZVR5cGV8fChoPWcrZSk7cSE9PWZ8fDAhPT1kJiYzIT09cS5ub2RlVHlwZXx8KGs9ZytkKTszPT09cS5ub2RlVHlwZSYmKGcrPVxucS5ub2RlVmFsdWUubGVuZ3RoKTtpZihudWxsPT09KHk9cS5maXJzdENoaWxkKSlicmVhaztyPXE7cT15fWZvcig7Oyl7aWYocT09PWEpYnJlYWsgYjtyPT09YyYmKytsPT09ZSYmKGg9Zyk7cj09PWYmJisrbT09PWQmJihrPWcpO2lmKG51bGwhPT0oeT1xLm5leHRTaWJsaW5nKSlicmVhaztxPXI7cj1xLnBhcmVudE5vZGV9cT15fWM9LTE9PT1ofHwtMT09PWs/bnVsbDp7c3RhcnQ6aCxlbmQ6a319ZWxzZSBjPW51bGx9Yz1jfHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBjPW51bGw7RGY9e2ZvY3VzZWRFbGVtOmEsc2VsZWN0aW9uUmFuZ2U6Y307ZGQ9ITE7Zm9yKFY9YjtudWxsIT09VjspaWYoYj1WLGE9Yi5jaGlsZCwwIT09KGIuc3VidHJlZUZsYWdzJjEwMjgpJiZudWxsIT09YSlhLnJldHVybj1iLFY9YTtlbHNlIGZvcig7bnVsbCE9PVY7KXtiPVY7dHJ5e3ZhciBuPWIuYWx0ZXJuYXRlO2lmKDAhPT0oYi5mbGFncyYxMDI0KSlzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6YnJlYWs7XG5jYXNlIDE6aWYobnVsbCE9PW4pe3ZhciB0PW4ubWVtb2l6ZWRQcm9wcyxKPW4ubWVtb2l6ZWRTdGF0ZSx4PWIuc3RhdGVOb2RlLHc9eC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP3Q6Q2koYi50eXBlLHQpLEopO3guX19yZWFjdEludGVybmFsU25hcHNob3RCZWZvcmVVcGRhdGU9d31icmVhaztjYXNlIDM6dmFyIHU9Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbzsxPT09dS5ub2RlVHlwZT91LnRleHRDb250ZW50PVwiXCI6OT09PXUubm9kZVR5cGUmJnUuZG9jdW1lbnRFbGVtZW50JiZ1LnJlbW92ZUNoaWxkKHUuZG9jdW1lbnRFbGVtZW50KTticmVhaztjYXNlIDU6Y2FzZSA2OmNhc2UgNDpjYXNlIDE3OmJyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IocCgxNjMpKTt9fWNhdGNoKEYpe1coYixiLnJldHVybixGKX1hPWIuc2libGluZztpZihudWxsIT09YSl7YS5yZXR1cm49Yi5yZXR1cm47Vj1hO2JyZWFrfVY9Yi5yZXR1cm59bj1OajtOaj0hMTtyZXR1cm4gbn1cbmZ1bmN0aW9uIFBqKGEsYixjKXt2YXIgZD1iLnVwZGF0ZVF1ZXVlO2Q9bnVsbCE9PWQ/ZC5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWQpe3ZhciBlPWQ9ZC5uZXh0O2Rve2lmKChlLnRhZyZhKT09PWEpe3ZhciBmPWUuZGVzdHJveTtlLmRlc3Ryb3k9dm9pZCAwO3ZvaWQgMCE9PWYmJk1qKGIsYyxmKX1lPWUubmV4dH13aGlsZShlIT09ZCl9fWZ1bmN0aW9uIFFqKGEsYil7Yj1iLnVwZGF0ZVF1ZXVlO2I9bnVsbCE9PWI/Yi5sYXN0RWZmZWN0Om51bGw7aWYobnVsbCE9PWIpe3ZhciBjPWI9Yi5uZXh0O2Rve2lmKChjLnRhZyZhKT09PWEpe3ZhciBkPWMuY3JlYXRlO2MuZGVzdHJveT1kKCl9Yz1jLm5leHR9d2hpbGUoYyE9PWIpfX1mdW5jdGlvbiBSaihhKXt2YXIgYj1hLnJlZjtpZihudWxsIT09Yil7dmFyIGM9YS5zdGF0ZU5vZGU7c3dpdGNoKGEudGFnKXtjYXNlIDU6YT1jO2JyZWFrO2RlZmF1bHQ6YT1jfVwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yi5jdXJyZW50PWF9fVxuZnVuY3Rpb24gU2ooYSl7dmFyIGI9YS5hbHRlcm5hdGU7bnVsbCE9PWImJihhLmFsdGVybmF0ZT1udWxsLFNqKGIpKTthLmNoaWxkPW51bGw7YS5kZWxldGlvbnM9bnVsbDthLnNpYmxpbmc9bnVsbDs1PT09YS50YWcmJihiPWEuc3RhdGVOb2RlLG51bGwhPT1iJiYoZGVsZXRlIGJbT2ZdLGRlbGV0ZSBiW1BmXSxkZWxldGUgYltvZl0sZGVsZXRlIGJbUWZdLGRlbGV0ZSBiW1JmXSkpO2Euc3RhdGVOb2RlPW51bGw7YS5yZXR1cm49bnVsbDthLmRlcGVuZGVuY2llcz1udWxsO2EubWVtb2l6ZWRQcm9wcz1udWxsO2EubWVtb2l6ZWRTdGF0ZT1udWxsO2EucGVuZGluZ1Byb3BzPW51bGw7YS5zdGF0ZU5vZGU9bnVsbDthLnVwZGF0ZVF1ZXVlPW51bGx9ZnVuY3Rpb24gVGooYSl7cmV0dXJuIDU9PT1hLnRhZ3x8Mz09PWEudGFnfHw0PT09YS50YWd9XG5mdW5jdGlvbiBVaihhKXthOmZvcig7Oyl7Zm9yKDtudWxsPT09YS5zaWJsaW5nOyl7aWYobnVsbD09PWEucmV0dXJufHxUaihhLnJldHVybikpcmV0dXJuIG51bGw7YT1hLnJldHVybn1hLnNpYmxpbmcucmV0dXJuPWEucmV0dXJuO2ZvcihhPWEuc2libGluZzs1IT09YS50YWcmJjYhPT1hLnRhZyYmMTghPT1hLnRhZzspe2lmKGEuZmxhZ3MmMiljb250aW51ZSBhO2lmKG51bGw9PT1hLmNoaWxkfHw0PT09YS50YWcpY29udGludWUgYTtlbHNlIGEuY2hpbGQucmV0dXJuPWEsYT1hLmNoaWxkfWlmKCEoYS5mbGFncyYyKSlyZXR1cm4gYS5zdGF0ZU5vZGV9fVxuZnVuY3Rpb24gVmooYSxiLGMpe3ZhciBkPWEudGFnO2lmKDU9PT1kfHw2PT09ZClhPWEuc3RhdGVOb2RlLGI/OD09PWMubm9kZVR5cGU/Yy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLGIpOmMuaW5zZXJ0QmVmb3JlKGEsYik6KDg9PT1jLm5vZGVUeXBlPyhiPWMucGFyZW50Tm9kZSxiLmluc2VydEJlZm9yZShhLGMpKTooYj1jLGIuYXBwZW5kQ2hpbGQoYSkpLGM9Yy5fcmVhY3RSb290Q29udGFpbmVyLG51bGwhPT1jJiZ2b2lkIDAhPT1jfHxudWxsIT09Yi5vbmNsaWNrfHwoYi5vbmNsaWNrPUJmKSk7ZWxzZSBpZig0IT09ZCYmKGE9YS5jaGlsZCxudWxsIT09YSkpZm9yKFZqKGEsYixjKSxhPWEuc2libGluZztudWxsIT09YTspVmooYSxiLGMpLGE9YS5zaWJsaW5nfVxuZnVuY3Rpb24gV2ooYSxiLGMpe3ZhciBkPWEudGFnO2lmKDU9PT1kfHw2PT09ZClhPWEuc3RhdGVOb2RlLGI/Yy5pbnNlcnRCZWZvcmUoYSxiKTpjLmFwcGVuZENoaWxkKGEpO2Vsc2UgaWYoNCE9PWQmJihhPWEuY2hpbGQsbnVsbCE9PWEpKWZvcihXaihhLGIsYyksYT1hLnNpYmxpbmc7bnVsbCE9PWE7KVdqKGEsYixjKSxhPWEuc2libGluZ312YXIgWD1udWxsLFhqPSExO2Z1bmN0aW9uIFlqKGEsYixjKXtmb3IoYz1jLmNoaWxkO251bGwhPT1jOylaaihhLGIsYyksYz1jLnNpYmxpbmd9XG5mdW5jdGlvbiBaaihhLGIsYyl7aWYobGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBsYy5vbkNvbW1pdEZpYmVyVW5tb3VudCl0cnl7bGMub25Db21taXRGaWJlclVubW91bnQoa2MsYyl9Y2F0Y2goaCl7fXN3aXRjaChjLnRhZyl7Y2FzZSA1OlV8fExqKGMsYik7Y2FzZSA2OnZhciBkPVgsZT1YajtYPW51bGw7WWooYSxiLGMpO1g9ZDtYaj1lO251bGwhPT1YJiYoWGo/KGE9WCxjPWMuc3RhdGVOb2RlLDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKTphLnJlbW92ZUNoaWxkKGMpKTpYLnJlbW92ZUNoaWxkKGMuc3RhdGVOb2RlKSk7YnJlYWs7Y2FzZSAxODpudWxsIT09WCYmKFhqPyhhPVgsYz1jLnN0YXRlTm9kZSw4PT09YS5ub2RlVHlwZT9LZihhLnBhcmVudE5vZGUsYyk6MT09PWEubm9kZVR5cGUmJktmKGEsYyksYmQoYSkpOktmKFgsYy5zdGF0ZU5vZGUpKTticmVhaztjYXNlIDQ6ZD1YO2U9WGo7WD1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO1hqPSEwO1xuWWooYSxiLGMpO1g9ZDtYaj1lO2JyZWFrO2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTppZighVSYmKGQ9Yy51cGRhdGVRdWV1ZSxudWxsIT09ZCYmKGQ9ZC5sYXN0RWZmZWN0LG51bGwhPT1kKSkpe2U9ZD1kLm5leHQ7ZG97dmFyIGY9ZSxnPWYuZGVzdHJveTtmPWYudGFnO3ZvaWQgMCE9PWcmJigwIT09KGYmMik/TWooYyxiLGcpOjAhPT0oZiY0KSYmTWooYyxiLGcpKTtlPWUubmV4dH13aGlsZShlIT09ZCl9WWooYSxiLGMpO2JyZWFrO2Nhc2UgMTppZighVSYmKExqKGMsYiksZD1jLnN0YXRlTm9kZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnRXaWxsVW5tb3VudCkpdHJ5e2QucHJvcHM9Yy5tZW1vaXplZFByb3BzLGQuc3RhdGU9Yy5tZW1vaXplZFN0YXRlLGQuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChoKXtXKGMsYixoKX1ZaihhLGIsYyk7YnJlYWs7Y2FzZSAyMTpZaihhLGIsYyk7YnJlYWs7Y2FzZSAyMjpjLm1vZGUmMT8oVT0oZD1VKXx8bnVsbCE9PVxuYy5tZW1vaXplZFN0YXRlLFlqKGEsYixjKSxVPWQpOllqKGEsYixjKTticmVhaztkZWZhdWx0OllqKGEsYixjKX19ZnVuY3Rpb24gYWsoYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgS2opO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1iay5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX1cbmZ1bmN0aW9uIGNrKGEsYil7dmFyIGM9Yi5kZWxldGlvbnM7aWYobnVsbCE9PWMpZm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF07dHJ5e3ZhciBmPWEsZz1iLGg9ZzthOmZvcig7bnVsbCE9PWg7KXtzd2l0Y2goaC50YWcpe2Nhc2UgNTpYPWguc3RhdGVOb2RlO1hqPSExO2JyZWFrIGE7Y2FzZSAzOlg9aC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztYaj0hMDticmVhayBhO2Nhc2UgNDpYPWguc3RhdGVOb2RlLmNvbnRhaW5lckluZm87WGo9ITA7YnJlYWsgYX1oPWgucmV0dXJufWlmKG51bGw9PT1YKXRocm93IEVycm9yKHAoMTYwKSk7WmooZixnLGUpO1g9bnVsbDtYaj0hMTt2YXIgaz1lLmFsdGVybmF0ZTtudWxsIT09ayYmKGsucmV0dXJuPW51bGwpO2UucmV0dXJuPW51bGx9Y2F0Y2gobCl7VyhlLGIsbCl9fWlmKGIuc3VidHJlZUZsYWdzJjEyODU0KWZvcihiPWIuY2hpbGQ7bnVsbCE9PWI7KWRrKGIsYSksYj1iLnNpYmxpbmd9XG5mdW5jdGlvbiBkayhhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlLGQ9YS5mbGFncztzd2l0Y2goYS50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTpjayhiLGEpO2VrKGEpO2lmKGQmNCl7dHJ5e1BqKDMsYSxhLnJldHVybiksUWooMyxhKX1jYXRjaCh0KXtXKGEsYS5yZXR1cm4sdCl9dHJ5e1BqKDUsYSxhLnJldHVybil9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1icmVhaztjYXNlIDE6Y2soYixhKTtlayhhKTtkJjUxMiYmbnVsbCE9PWMmJkxqKGMsYy5yZXR1cm4pO2JyZWFrO2Nhc2UgNTpjayhiLGEpO2VrKGEpO2QmNTEyJiZudWxsIT09YyYmTGooYyxjLnJldHVybik7aWYoYS5mbGFncyYzMil7dmFyIGU9YS5zdGF0ZU5vZGU7dHJ5e29iKGUsXCJcIil9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1pZihkJjQmJihlPWEuc3RhdGVOb2RlLG51bGwhPWUpKXt2YXIgZj1hLm1lbW9pemVkUHJvcHMsZz1udWxsIT09Yz9jLm1lbW9pemVkUHJvcHM6ZixoPWEudHlwZSxrPWEudXBkYXRlUXVldWU7XG5hLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWspdHJ5e1wiaW5wdXRcIj09PWgmJlwicmFkaW9cIj09PWYudHlwZSYmbnVsbCE9Zi5uYW1lJiZhYihlLGYpO3ZiKGgsZyk7dmFyIGw9dmIoaCxmKTtmb3IoZz0wO2c8ay5sZW5ndGg7Zys9Mil7dmFyIG09a1tnXSxxPWtbZysxXTtcInN0eWxlXCI9PT1tP3NiKGUscSk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bT9uYihlLHEpOlwiY2hpbGRyZW5cIj09PW0/b2IoZSxxKTp0YShlLG0scSxsKX1zd2l0Y2goaCl7Y2FzZSBcImlucHV0XCI6YmIoZSxmKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjppYihlLGYpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjp2YXIgcj1lLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU7ZS5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlPSEhZi5tdWx0aXBsZTt2YXIgeT1mLnZhbHVlO251bGwhPXk/ZmIoZSwhIWYubXVsdGlwbGUseSwhMSk6ciE9PSEhZi5tdWx0aXBsZSYmKG51bGwhPWYuZGVmYXVsdFZhbHVlP2ZiKGUsISFmLm11bHRpcGxlLFxuZi5kZWZhdWx0VmFsdWUsITApOmZiKGUsISFmLm11bHRpcGxlLGYubXVsdGlwbGU/W106XCJcIiwhMSkpfWVbUGZdPWZ9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1icmVhaztjYXNlIDY6Y2soYixhKTtlayhhKTtpZihkJjQpe2lmKG51bGw9PT1hLnN0YXRlTm9kZSl0aHJvdyBFcnJvcihwKDE2MikpO2U9YS5zdGF0ZU5vZGU7Zj1hLm1lbW9pemVkUHJvcHM7dHJ5e2Uubm9kZVZhbHVlPWZ9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1icmVhaztjYXNlIDM6Y2soYixhKTtlayhhKTtpZihkJjQmJm51bGwhPT1jJiZjLm1lbW9pemVkU3RhdGUuaXNEZWh5ZHJhdGVkKXRyeXtiZChiLmNvbnRhaW5lckluZm8pfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX1icmVhaztjYXNlIDQ6Y2soYixhKTtlayhhKTticmVhaztjYXNlIDEzOmNrKGIsYSk7ZWsoYSk7ZT1hLmNoaWxkO2UuZmxhZ3MmODE5MiYmKGY9bnVsbCE9PWUubWVtb2l6ZWRTdGF0ZSxlLnN0YXRlTm9kZS5pc0hpZGRlbj1mLCFmfHxcbm51bGwhPT1lLmFsdGVybmF0ZSYmbnVsbCE9PWUuYWx0ZXJuYXRlLm1lbW9pemVkU3RhdGV8fChmaz1CKCkpKTtkJjQmJmFrKGEpO2JyZWFrO2Nhc2UgMjI6bT1udWxsIT09YyYmbnVsbCE9PWMubWVtb2l6ZWRTdGF0ZTthLm1vZGUmMT8oVT0obD1VKXx8bSxjayhiLGEpLFU9bCk6Y2soYixhKTtlayhhKTtpZihkJjgxOTIpe2w9bnVsbCE9PWEubWVtb2l6ZWRTdGF0ZTtpZigoYS5zdGF0ZU5vZGUuaXNIaWRkZW49bCkmJiFtJiYwIT09KGEubW9kZSYxKSlmb3IoVj1hLG09YS5jaGlsZDtudWxsIT09bTspe2ZvcihxPVY9bTtudWxsIT09Vjspe3I9Vjt5PXIuY2hpbGQ7c3dpdGNoKHIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6UGooNCxyLHIucmV0dXJuKTticmVhaztjYXNlIDE6TGoocixyLnJldHVybik7dmFyIG49ci5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIG4uY29tcG9uZW50V2lsbFVubW91bnQpe2Q9cjtjPXIucmV0dXJuO3RyeXtiPWQsbi5wcm9wcz1cbmIubWVtb2l6ZWRQcm9wcyxuLnN0YXRlPWIubWVtb2l6ZWRTdGF0ZSxuLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2godCl7VyhkLGMsdCl9fWJyZWFrO2Nhc2UgNTpMaihyLHIucmV0dXJuKTticmVhaztjYXNlIDIyOmlmKG51bGwhPT1yLm1lbW9pemVkU3RhdGUpe2drKHEpO2NvbnRpbnVlfX1udWxsIT09eT8oeS5yZXR1cm49cixWPXkpOmdrKHEpfW09bS5zaWJsaW5nfWE6Zm9yKG09bnVsbCxxPWE7Oyl7aWYoNT09PXEudGFnKXtpZihudWxsPT09bSl7bT1xO3RyeXtlPXEuc3RhdGVOb2RlLGw/KGY9ZS5zdHlsZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5zZXRQcm9wZXJ0eT9mLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwibm9uZVwiLFwiaW1wb3J0YW50XCIpOmYuZGlzcGxheT1cIm5vbmVcIik6KGg9cS5zdGF0ZU5vZGUsaz1xLm1lbW9pemVkUHJvcHMuc3R5bGUsZz12b2lkIDAhPT1rJiZudWxsIT09ayYmay5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ay5kaXNwbGF5Om51bGwsaC5zdHlsZS5kaXNwbGF5PVxucmIoXCJkaXNwbGF5XCIsZykpfWNhdGNoKHQpe1coYSxhLnJldHVybix0KX19fWVsc2UgaWYoNj09PXEudGFnKXtpZihudWxsPT09bSl0cnl7cS5zdGF0ZU5vZGUubm9kZVZhbHVlPWw/XCJcIjpxLm1lbW9pemVkUHJvcHN9Y2F0Y2godCl7VyhhLGEucmV0dXJuLHQpfX1lbHNlIGlmKCgyMiE9PXEudGFnJiYyMyE9PXEudGFnfHxudWxsPT09cS5tZW1vaXplZFN0YXRlfHxxPT09YSkmJm51bGwhPT1xLmNoaWxkKXtxLmNoaWxkLnJldHVybj1xO3E9cS5jaGlsZDtjb250aW51ZX1pZihxPT09YSlicmVhayBhO2Zvcig7bnVsbD09PXEuc2libGluZzspe2lmKG51bGw9PT1xLnJldHVybnx8cS5yZXR1cm49PT1hKWJyZWFrIGE7bT09PXEmJihtPW51bGwpO3E9cS5yZXR1cm59bT09PXEmJihtPW51bGwpO3Euc2libGluZy5yZXR1cm49cS5yZXR1cm47cT1xLnNpYmxpbmd9fWJyZWFrO2Nhc2UgMTk6Y2soYixhKTtlayhhKTtkJjQmJmFrKGEpO2JyZWFrO2Nhc2UgMjE6YnJlYWs7ZGVmYXVsdDpjayhiLFxuYSksZWsoYSl9fWZ1bmN0aW9uIGVrKGEpe3ZhciBiPWEuZmxhZ3M7aWYoYiYyKXt0cnl7YTp7Zm9yKHZhciBjPWEucmV0dXJuO251bGwhPT1jOyl7aWYoVGooYykpe3ZhciBkPWM7YnJlYWsgYX1jPWMucmV0dXJufXRocm93IEVycm9yKHAoMTYwKSk7fXN3aXRjaChkLnRhZyl7Y2FzZSA1OnZhciBlPWQuc3RhdGVOb2RlO2QuZmxhZ3MmMzImJihvYihlLFwiXCIpLGQuZmxhZ3MmPS0zMyk7dmFyIGY9VWooYSk7V2ooYSxmLGUpO2JyZWFrO2Nhc2UgMzpjYXNlIDQ6dmFyIGc9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyxoPVVqKGEpO1ZqKGEsaCxnKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHAoMTYxKSk7fX1jYXRjaChrKXtXKGEsYS5yZXR1cm4sayl9YS5mbGFncyY9LTN9YiY0MDk2JiYoYS5mbGFncyY9LTQwOTcpfWZ1bmN0aW9uIGhrKGEsYixjKXtWPWE7aWsoYSxiLGMpfVxuZnVuY3Rpb24gaWsoYSxiLGMpe2Zvcih2YXIgZD0wIT09KGEubW9kZSYxKTtudWxsIT09Vjspe3ZhciBlPVYsZj1lLmNoaWxkO2lmKDIyPT09ZS50YWcmJmQpe3ZhciBnPW51bGwhPT1lLm1lbW9pemVkU3RhdGV8fEpqO2lmKCFnKXt2YXIgaD1lLmFsdGVybmF0ZSxrPW51bGwhPT1oJiZudWxsIT09aC5tZW1vaXplZFN0YXRlfHxVO2g9Smo7dmFyIGw9VTtKaj1nO2lmKChVPWspJiYhbClmb3IoVj1lO251bGwhPT1WOylnPVYsaz1nLmNoaWxkLDIyPT09Zy50YWcmJm51bGwhPT1nLm1lbW9pemVkU3RhdGU/amsoZSk6bnVsbCE9PWs/KGsucmV0dXJuPWcsVj1rKTpqayhlKTtmb3IoO251bGwhPT1mOylWPWYsaWsoZixiLGMpLGY9Zi5zaWJsaW5nO1Y9ZTtKaj1oO1U9bH1rayhhLGIsYyl9ZWxzZSAwIT09KGUuc3VidHJlZUZsYWdzJjg3NzIpJiZudWxsIT09Zj8oZi5yZXR1cm49ZSxWPWYpOmtrKGEsYixjKX19XG5mdW5jdGlvbiBrayhhKXtmb3IoO251bGwhPT1WOyl7dmFyIGI9VjtpZigwIT09KGIuZmxhZ3MmODc3Mikpe3ZhciBjPWIuYWx0ZXJuYXRlO3RyeXtpZigwIT09KGIuZmxhZ3MmODc3Mikpc3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlV8fFFqKDUsYik7YnJlYWs7Y2FzZSAxOnZhciBkPWIuc3RhdGVOb2RlO2lmKGIuZmxhZ3MmNCYmIVUpaWYobnVsbD09PWMpZC5jb21wb25lbnREaWRNb3VudCgpO2Vsc2V7dmFyIGU9Yi5lbGVtZW50VHlwZT09PWIudHlwZT9jLm1lbW9pemVkUHJvcHM6Q2koYi50eXBlLGMubWVtb2l6ZWRQcm9wcyk7ZC5jb21wb25lbnREaWRVcGRhdGUoZSxjLm1lbW9pemVkU3RhdGUsZC5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSl9dmFyIGY9Yi51cGRhdGVRdWV1ZTtudWxsIT09ZiYmc2goYixmLGQpO2JyZWFrO2Nhc2UgMzp2YXIgZz1iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1nKXtjPW51bGw7aWYobnVsbCE9PWIuY2hpbGQpc3dpdGNoKGIuY2hpbGQudGFnKXtjYXNlIDU6Yz1cbmIuY2hpbGQuc3RhdGVOb2RlO2JyZWFrO2Nhc2UgMTpjPWIuY2hpbGQuc3RhdGVOb2RlfXNoKGIsZyxjKX1icmVhaztjYXNlIDU6dmFyIGg9Yi5zdGF0ZU5vZGU7aWYobnVsbD09PWMmJmIuZmxhZ3MmNCl7Yz1oO3ZhciBrPWIubWVtb2l6ZWRQcm9wcztzd2l0Y2goYi50eXBlKXtjYXNlIFwiYnV0dG9uXCI6Y2FzZSBcImlucHV0XCI6Y2FzZSBcInNlbGVjdFwiOmNhc2UgXCJ0ZXh0YXJlYVwiOmsuYXV0b0ZvY3VzJiZjLmZvY3VzKCk7YnJlYWs7Y2FzZSBcImltZ1wiOmsuc3JjJiYoYy5zcmM9ay5zcmMpfX1icmVhaztjYXNlIDY6YnJlYWs7Y2FzZSA0OmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSAxMzppZihudWxsPT09Yi5tZW1vaXplZFN0YXRlKXt2YXIgbD1iLmFsdGVybmF0ZTtpZihudWxsIT09bCl7dmFyIG09bC5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1tKXt2YXIgcT1tLmRlaHlkcmF0ZWQ7bnVsbCE9PXEmJmJkKHEpfX19YnJlYWs7Y2FzZSAxOTpjYXNlIDE3OmNhc2UgMjE6Y2FzZSAyMjpjYXNlIDIzOmNhc2UgMjU6YnJlYWs7XG5kZWZhdWx0OnRocm93IEVycm9yKHAoMTYzKSk7fVV8fGIuZmxhZ3MmNTEyJiZSaihiKX1jYXRjaChyKXtXKGIsYi5yZXR1cm4scil9fWlmKGI9PT1hKXtWPW51bGw7YnJlYWt9Yz1iLnNpYmxpbmc7aWYobnVsbCE9PWMpe2MucmV0dXJuPWIucmV0dXJuO1Y9YzticmVha31WPWIucmV0dXJufX1mdW5jdGlvbiBnayhhKXtmb3IoO251bGwhPT1WOyl7dmFyIGI9VjtpZihiPT09YSl7Vj1udWxsO2JyZWFrfXZhciBjPWIuc2libGluZztpZihudWxsIT09Yyl7Yy5yZXR1cm49Yi5yZXR1cm47Vj1jO2JyZWFrfVY9Yi5yZXR1cm59fVxuZnVuY3Rpb24gamsoYSl7Zm9yKDtudWxsIT09Vjspe3ZhciBiPVY7dHJ5e3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNTp2YXIgYz1iLnJldHVybjt0cnl7UWooNCxiKX1jYXRjaChrKXtXKGIsYyxrKX1icmVhaztjYXNlIDE6dmFyIGQ9Yi5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkTW91bnQpe3ZhciBlPWIucmV0dXJuO3RyeXtkLmNvbXBvbmVudERpZE1vdW50KCl9Y2F0Y2goayl7VyhiLGUsayl9fXZhciBmPWIucmV0dXJuO3RyeXtSaihiKX1jYXRjaChrKXtXKGIsZixrKX1icmVhaztjYXNlIDU6dmFyIGc9Yi5yZXR1cm47dHJ5e1JqKGIpfWNhdGNoKGspe1coYixnLGspfX19Y2F0Y2goayl7VyhiLGIucmV0dXJuLGspfWlmKGI9PT1hKXtWPW51bGw7YnJlYWt9dmFyIGg9Yi5zaWJsaW5nO2lmKG51bGwhPT1oKXtoLnJldHVybj1iLnJldHVybjtWPWg7YnJlYWt9Vj1iLnJldHVybn19XG52YXIgbGs9TWF0aC5jZWlsLG1rPXVhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsbms9dWEuUmVhY3RDdXJyZW50T3duZXIsb2s9dWEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWcsSz0wLFE9bnVsbCxZPW51bGwsWj0wLGZqPTAsZWo9VWYoMCksVD0wLHBrPW51bGwscmg9MCxxaz0wLHJrPTAsc2s9bnVsbCx0az1udWxsLGZrPTAsR2o9SW5maW5pdHksdWs9bnVsbCxPaT0hMSxQaT1udWxsLFJpPW51bGwsdms9ITEsd2s9bnVsbCx4az0wLHlrPTAsems9bnVsbCxBaz0tMSxCaz0wO2Z1bmN0aW9uIFIoKXtyZXR1cm4gMCE9PShLJjYpP0IoKTotMSE9PUFrP0FrOkFrPUIoKX1cbmZ1bmN0aW9uIHlpKGEpe2lmKDA9PT0oYS5tb2RlJjEpKXJldHVybiAxO2lmKDAhPT0oSyYyKSYmMCE9PVopcmV0dXJuIFomLVo7aWYobnVsbCE9PUtnLnRyYW5zaXRpb24pcmV0dXJuIDA9PT1CayYmKEJrPXljKCkpLEJrO2E9QztpZigwIT09YSlyZXR1cm4gYTthPXdpbmRvdy5ldmVudDthPXZvaWQgMD09PWE/MTY6amQoYS50eXBlKTtyZXR1cm4gYX1mdW5jdGlvbiBnaShhLGIsYyxkKXtpZig1MDx5ayl0aHJvdyB5az0wLHprPW51bGwsRXJyb3IocCgxODUpKTtBYyhhLGMsZCk7aWYoMD09PShLJjIpfHxhIT09USlhPT09USYmKDA9PT0oSyYyKSYmKHFrfD1jKSw0PT09VCYmQ2soYSxaKSksRGsoYSxkKSwxPT09YyYmMD09PUsmJjA9PT0oYi5tb2RlJjEpJiYoR2o9QigpKzUwMCxmZyYmamcoKSl9XG5mdW5jdGlvbiBEayhhLGIpe3ZhciBjPWEuY2FsbGJhY2tOb2RlO3djKGEsYik7dmFyIGQ9dWMoYSxhPT09UT9aOjApO2lmKDA9PT1kKW51bGwhPT1jJiZiYyhjKSxhLmNhbGxiYWNrTm9kZT1udWxsLGEuY2FsbGJhY2tQcmlvcml0eT0wO2Vsc2UgaWYoYj1kJi1kLGEuY2FsbGJhY2tQcmlvcml0eSE9PWIpe251bGwhPWMmJmJjKGMpO2lmKDE9PT1iKTA9PT1hLnRhZz9pZyhFay5iaW5kKG51bGwsYSkpOmhnKEVrLmJpbmQobnVsbCxhKSksSmYoZnVuY3Rpb24oKXswPT09KEsmNikmJmpnKCl9KSxjPW51bGw7ZWxzZXtzd2l0Y2goRGMoZCkpe2Nhc2UgMTpjPWZjO2JyZWFrO2Nhc2UgNDpjPWdjO2JyZWFrO2Nhc2UgMTY6Yz1oYzticmVhaztjYXNlIDUzNjg3MDkxMjpjPWpjO2JyZWFrO2RlZmF1bHQ6Yz1oY31jPUZrKGMsR2suYmluZChudWxsLGEpKX1hLmNhbGxiYWNrUHJpb3JpdHk9YjthLmNhbGxiYWNrTm9kZT1jfX1cbmZ1bmN0aW9uIEdrKGEsYil7QWs9LTE7Qms9MDtpZigwIT09KEsmNikpdGhyb3cgRXJyb3IocCgzMjcpKTt2YXIgYz1hLmNhbGxiYWNrTm9kZTtpZihIaygpJiZhLmNhbGxiYWNrTm9kZSE9PWMpcmV0dXJuIG51bGw7dmFyIGQ9dWMoYSxhPT09UT9aOjApO2lmKDA9PT1kKXJldHVybiBudWxsO2lmKDAhPT0oZCYzMCl8fDAhPT0oZCZhLmV4cGlyZWRMYW5lcyl8fGIpYj1JayhhLGQpO2Vsc2V7Yj1kO3ZhciBlPUs7S3w9Mjt2YXIgZj1KaygpO2lmKFEhPT1hfHxaIT09Yil1az1udWxsLEdqPUIoKSs1MDAsS2soYSxiKTtkbyB0cnl7TGsoKTticmVha31jYXRjaChoKXtNayhhLGgpfXdoaWxlKDEpOyRnKCk7bWsuY3VycmVudD1mO0s9ZTtudWxsIT09WT9iPTA6KFE9bnVsbCxaPTAsYj1UKX1pZigwIT09Yil7Mj09PWImJihlPXhjKGEpLDAhPT1lJiYoZD1lLGI9TmsoYSxlKSkpO2lmKDE9PT1iKXRocm93IGM9cGssS2soYSwwKSxDayhhLGQpLERrKGEsQigpKSxjO2lmKDY9PT1iKUNrKGEsZCk7XG5lbHNle2U9YS5jdXJyZW50LmFsdGVybmF0ZTtpZigwPT09KGQmMzApJiYhT2soZSkmJihiPUlrKGEsZCksMj09PWImJihmPXhjKGEpLDAhPT1mJiYoZD1mLGI9TmsoYSxmKSkpLDE9PT1iKSl0aHJvdyBjPXBrLEtrKGEsMCksQ2soYSxkKSxEayhhLEIoKSksYzthLmZpbmlzaGVkV29yaz1lO2EuZmluaXNoZWRMYW5lcz1kO3N3aXRjaChiKXtjYXNlIDA6Y2FzZSAxOnRocm93IEVycm9yKHAoMzQ1KSk7Y2FzZSAyOlBrKGEsdGssdWspO2JyZWFrO2Nhc2UgMzpDayhhLGQpO2lmKChkJjEzMDAyMzQyNCk9PT1kJiYoYj1mays1MDAtQigpLDEwPGIpKXtpZigwIT09dWMoYSwwKSlicmVhaztlPWEuc3VzcGVuZGVkTGFuZXM7aWYoKGUmZCkhPT1kKXtSKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZlO2JyZWFrfWEudGltZW91dEhhbmRsZT1GZihQay5iaW5kKG51bGwsYSx0ayx1ayksYik7YnJlYWt9UGsoYSx0ayx1ayk7YnJlYWs7Y2FzZSA0OkNrKGEsZCk7aWYoKGQmNDE5NDI0MCk9PT1cbmQpYnJlYWs7Yj1hLmV2ZW50VGltZXM7Zm9yKGU9LTE7MDxkOyl7dmFyIGc9MzEtb2MoZCk7Zj0xPDxnO2c9YltnXTtnPmUmJihlPWcpO2QmPX5mfWQ9ZTtkPUIoKS1kO2Q9KDEyMD5kPzEyMDo0ODA+ZD80ODA6MTA4MD5kPzEwODA6MTkyMD5kPzE5MjA6M0UzPmQ/M0UzOjQzMjA+ZD80MzIwOjE5NjAqbGsoZC8xOTYwKSktZDtpZigxMDxkKXthLnRpbWVvdXRIYW5kbGU9RmYoUGsuYmluZChudWxsLGEsdGssdWspLGQpO2JyZWFrfVBrKGEsdGssdWspO2JyZWFrO2Nhc2UgNTpQayhhLHRrLHVrKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHAoMzI5KSk7fX19RGsoYSxCKCkpO3JldHVybiBhLmNhbGxiYWNrTm9kZT09PWM/R2suYmluZChudWxsLGEpOm51bGx9XG5mdW5jdGlvbiBOayhhLGIpe3ZhciBjPXNrO2EuY3VycmVudC5tZW1vaXplZFN0YXRlLmlzRGVoeWRyYXRlZCYmKEtrKGEsYikuZmxhZ3N8PTI1Nik7YT1JayhhLGIpOzIhPT1hJiYoYj10ayx0az1jLG51bGwhPT1iJiZGaihiKSk7cmV0dXJuIGF9ZnVuY3Rpb24gRmooYSl7bnVsbD09PXRrP3RrPWE6dGsucHVzaC5hcHBseSh0ayxhKX1cbmZ1bmN0aW9uIE9rKGEpe2Zvcih2YXIgYj1hOzspe2lmKGIuZmxhZ3MmMTYzODQpe3ZhciBjPWIudXBkYXRlUXVldWU7aWYobnVsbCE9PWMmJihjPWMuc3RvcmVzLG51bGwhPT1jKSlmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxmPWUuZ2V0U25hcHNob3Q7ZT1lLnZhbHVlO3RyeXtpZighSGUoZigpLGUpKXJldHVybiExfWNhdGNoKGcpe3JldHVybiExfX19Yz1iLmNoaWxkO2lmKGIuc3VidHJlZUZsYWdzJjE2Mzg0JiZudWxsIT09YyljLnJldHVybj1iLGI9YztlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiEwO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuITB9XG5mdW5jdGlvbiBDayhhLGIpe2ImPX5yaztiJj1+cWs7YS5zdXNwZW5kZWRMYW5lc3w9YjthLnBpbmdlZExhbmVzJj1+Yjtmb3IoYT1hLmV4cGlyYXRpb25UaW1lczswPGI7KXt2YXIgYz0zMS1vYyhiKSxkPTE8PGM7YVtjXT0tMTtiJj1+ZH19ZnVuY3Rpb24gRWsoYSl7aWYoMCE9PShLJjYpKXRocm93IEVycm9yKHAoMzI3KSk7SGsoKTt2YXIgYj11YyhhLDApO2lmKDA9PT0oYiYxKSlyZXR1cm4gRGsoYSxCKCkpLG51bGw7dmFyIGM9SWsoYSxiKTtpZigwIT09YS50YWcmJjI9PT1jKXt2YXIgZD14YyhhKTswIT09ZCYmKGI9ZCxjPU5rKGEsZCkpfWlmKDE9PT1jKXRocm93IGM9cGssS2soYSwwKSxDayhhLGIpLERrKGEsQigpKSxjO2lmKDY9PT1jKXRocm93IEVycm9yKHAoMzQ1KSk7YS5maW5pc2hlZFdvcms9YS5jdXJyZW50LmFsdGVybmF0ZTthLmZpbmlzaGVkTGFuZXM9YjtQayhhLHRrLHVrKTtEayhhLEIoKSk7cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBRayhhLGIpe3ZhciBjPUs7S3w9MTt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtLPWMsMD09PUsmJihHaj1CKCkrNTAwLGZnJiZqZygpKX19ZnVuY3Rpb24gUmsoYSl7bnVsbCE9PXdrJiYwPT09d2sudGFnJiYwPT09KEsmNikmJkhrKCk7dmFyIGI9SztLfD0xO3ZhciBjPW9rLnRyYW5zaXRpb24sZD1DO3RyeXtpZihvay50cmFuc2l0aW9uPW51bGwsQz0xLGEpcmV0dXJuIGEoKX1maW5hbGx5e0M9ZCxvay50cmFuc2l0aW9uPWMsSz1iLDA9PT0oSyY2KSYmamcoKX19ZnVuY3Rpb24gSGooKXtmaj1lai5jdXJyZW50O0UoZWopfVxuZnVuY3Rpb24gS2soYSxiKXthLmZpbmlzaGVkV29yaz1udWxsO2EuZmluaXNoZWRMYW5lcz0wO3ZhciBjPWEudGltZW91dEhhbmRsZTstMSE9PWMmJihhLnRpbWVvdXRIYW5kbGU9LTEsR2YoYykpO2lmKG51bGwhPT1ZKWZvcihjPVkucmV0dXJuO251bGwhPT1jOyl7dmFyIGQ9Yzt3ZyhkKTtzd2l0Y2goZC50YWcpe2Nhc2UgMTpkPWQudHlwZS5jaGlsZENvbnRleHRUeXBlcztudWxsIT09ZCYmdm9pZCAwIT09ZCYmJGYoKTticmVhaztjYXNlIDM6emgoKTtFKFdmKTtFKEgpO0VoKCk7YnJlYWs7Y2FzZSA1OkJoKGQpO2JyZWFrO2Nhc2UgNDp6aCgpO2JyZWFrO2Nhc2UgMTM6RShMKTticmVhaztjYXNlIDE5OkUoTCk7YnJlYWs7Y2FzZSAxMDphaChkLnR5cGUuX2NvbnRleHQpO2JyZWFrO2Nhc2UgMjI6Y2FzZSAyMzpIaigpfWM9Yy5yZXR1cm59UT1hO1k9YT1QZyhhLmN1cnJlbnQsbnVsbCk7Wj1maj1iO1Q9MDtwaz1udWxsO3JrPXFrPXJoPTA7dGs9c2s9bnVsbDtpZihudWxsIT09Zmgpe2ZvcihiPVxuMDtiPGZoLmxlbmd0aDtiKyspaWYoYz1maFtiXSxkPWMuaW50ZXJsZWF2ZWQsbnVsbCE9PWQpe2MuaW50ZXJsZWF2ZWQ9bnVsbDt2YXIgZT1kLm5leHQsZj1jLnBlbmRpbmc7aWYobnVsbCE9PWYpe3ZhciBnPWYubmV4dDtmLm5leHQ9ZTtkLm5leHQ9Z31jLnBlbmRpbmc9ZH1maD1udWxsfXJldHVybiBhfVxuZnVuY3Rpb24gTWsoYSxiKXtkb3t2YXIgYz1ZO3RyeXskZygpO0ZoLmN1cnJlbnQ9Umg7aWYoSWgpe2Zvcih2YXIgZD1NLm1lbW9pemVkU3RhdGU7bnVsbCE9PWQ7KXt2YXIgZT1kLnF1ZXVlO251bGwhPT1lJiYoZS5wZW5kaW5nPW51bGwpO2Q9ZC5uZXh0fUloPSExfUhoPTA7Tz1OPU09bnVsbDtKaD0hMTtLaD0wO25rLmN1cnJlbnQ9bnVsbDtpZihudWxsPT09Y3x8bnVsbD09PWMucmV0dXJuKXtUPTE7cGs9YjtZPW51bGw7YnJlYWt9YTp7dmFyIGY9YSxnPWMucmV0dXJuLGg9YyxrPWI7Yj1aO2guZmxhZ3N8PTMyNzY4O2lmKG51bGwhPT1rJiZcIm9iamVjdFwiPT09dHlwZW9mIGsmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBrLnRoZW4pe3ZhciBsPWssbT1oLHE9bS50YWc7aWYoMD09PShtLm1vZGUmMSkmJigwPT09cXx8MTE9PT1xfHwxNT09PXEpKXt2YXIgcj1tLmFsdGVybmF0ZTtyPyhtLnVwZGF0ZVF1ZXVlPXIudXBkYXRlUXVldWUsbS5tZW1vaXplZFN0YXRlPXIubWVtb2l6ZWRTdGF0ZSxcbm0ubGFuZXM9ci5sYW5lcyk6KG0udXBkYXRlUXVldWU9bnVsbCxtLm1lbW9pemVkU3RhdGU9bnVsbCl9dmFyIHk9VWkoZyk7aWYobnVsbCE9PXkpe3kuZmxhZ3MmPS0yNTc7VmkoeSxnLGgsZixiKTt5Lm1vZGUmMSYmU2koZixsLGIpO2I9eTtrPWw7dmFyIG49Yi51cGRhdGVRdWV1ZTtpZihudWxsPT09bil7dmFyIHQ9bmV3IFNldDt0LmFkZChrKTtiLnVwZGF0ZVF1ZXVlPXR9ZWxzZSBuLmFkZChrKTticmVhayBhfWVsc2V7aWYoMD09PShiJjEpKXtTaShmLGwsYik7dGooKTticmVhayBhfWs9RXJyb3IocCg0MjYpKX19ZWxzZSBpZihJJiZoLm1vZGUmMSl7dmFyIEo9VWkoZyk7aWYobnVsbCE9PUopezA9PT0oSi5mbGFncyY2NTUzNikmJihKLmZsYWdzfD0yNTYpO1ZpKEosZyxoLGYsYik7SmcoSmkoayxoKSk7YnJlYWsgYX19Zj1rPUppKGssaCk7NCE9PVQmJihUPTIpO251bGw9PT1zaz9zaz1bZl06c2sucHVzaChmKTtmPWc7ZG97c3dpdGNoKGYudGFnKXtjYXNlIDM6Zi5mbGFnc3w9NjU1MzY7XG5iJj0tYjtmLmxhbmVzfD1iO3ZhciB4PU5pKGYsayxiKTtwaChmLHgpO2JyZWFrIGE7Y2FzZSAxOmg9azt2YXIgdz1mLnR5cGUsdT1mLnN0YXRlTm9kZTtpZigwPT09KGYuZmxhZ3MmMTI4KSYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiB3LmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8bnVsbCE9PXUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiB1LmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVJpfHwhUmkuaGFzKHUpKSkpe2YuZmxhZ3N8PTY1NTM2O2ImPS1iO2YubGFuZXN8PWI7dmFyIEY9UWkoZixoLGIpO3BoKGYsRik7YnJlYWsgYX19Zj1mLnJldHVybn13aGlsZShudWxsIT09Zil9U2soYyl9Y2F0Y2gobmEpe2I9bmE7WT09PWMmJm51bGwhPT1jJiYoWT1jPWMucmV0dXJuKTtjb250aW51ZX1icmVha313aGlsZSgxKX1mdW5jdGlvbiBKaygpe3ZhciBhPW1rLmN1cnJlbnQ7bWsuY3VycmVudD1SaDtyZXR1cm4gbnVsbD09PWE/Umg6YX1cbmZ1bmN0aW9uIHRqKCl7aWYoMD09PVR8fDM9PT1UfHwyPT09VClUPTQ7bnVsbD09PVF8fDA9PT0ocmgmMjY4NDM1NDU1KSYmMD09PShxayYyNjg0MzU0NTUpfHxDayhRLFopfWZ1bmN0aW9uIElrKGEsYil7dmFyIGM9SztLfD0yO3ZhciBkPUprKCk7aWYoUSE9PWF8fFohPT1iKXVrPW51bGwsS2soYSxiKTtkbyB0cnl7VGsoKTticmVha31jYXRjaChlKXtNayhhLGUpfXdoaWxlKDEpOyRnKCk7Sz1jO21rLmN1cnJlbnQ9ZDtpZihudWxsIT09WSl0aHJvdyBFcnJvcihwKDI2MSkpO1E9bnVsbDtaPTA7cmV0dXJuIFR9ZnVuY3Rpb24gVGsoKXtmb3IoO251bGwhPT1ZOylVayhZKX1mdW5jdGlvbiBMaygpe2Zvcig7bnVsbCE9PVkmJiFjYygpOylVayhZKX1mdW5jdGlvbiBVayhhKXt2YXIgYj1WayhhLmFsdGVybmF0ZSxhLGZqKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWI/U2soYSk6WT1iO25rLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIFNrKGEpe3ZhciBiPWE7ZG97dmFyIGM9Yi5hbHRlcm5hdGU7YT1iLnJldHVybjtpZigwPT09KGIuZmxhZ3MmMzI3NjgpKXtpZihjPUVqKGMsYixmaiksbnVsbCE9PWMpe1k9YztyZXR1cm59fWVsc2V7Yz1JaihjLGIpO2lmKG51bGwhPT1jKXtjLmZsYWdzJj0zMjc2NztZPWM7cmV0dXJufWlmKG51bGwhPT1hKWEuZmxhZ3N8PTMyNzY4LGEuc3VidHJlZUZsYWdzPTAsYS5kZWxldGlvbnM9bnVsbDtlbHNle1Q9NjtZPW51bGw7cmV0dXJufX1iPWIuc2libGluZztpZihudWxsIT09Yil7WT1iO3JldHVybn1ZPWI9YX13aGlsZShudWxsIT09Yik7MD09PVQmJihUPTUpfWZ1bmN0aW9uIFBrKGEsYixjKXt2YXIgZD1DLGU9b2sudHJhbnNpdGlvbjt0cnl7b2sudHJhbnNpdGlvbj1udWxsLEM9MSxXayhhLGIsYyxkKX1maW5hbGx5e29rLnRyYW5zaXRpb249ZSxDPWR9cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBXayhhLGIsYyxkKXtkbyBIaygpO3doaWxlKG51bGwhPT13ayk7aWYoMCE9PShLJjYpKXRocm93IEVycm9yKHAoMzI3KSk7Yz1hLmZpbmlzaGVkV29yazt2YXIgZT1hLmZpbmlzaGVkTGFuZXM7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkTGFuZXM9MDtpZihjPT09YS5jdXJyZW50KXRocm93IEVycm9yKHAoMTc3KSk7YS5jYWxsYmFja05vZGU9bnVsbDthLmNhbGxiYWNrUHJpb3JpdHk9MDt2YXIgZj1jLmxhbmVzfGMuY2hpbGRMYW5lcztCYyhhLGYpO2E9PT1RJiYoWT1RPW51bGwsWj0wKTswPT09KGMuc3VidHJlZUZsYWdzJjIwNjQpJiYwPT09KGMuZmxhZ3MmMjA2NCl8fHZrfHwodms9ITAsRmsoaGMsZnVuY3Rpb24oKXtIaygpO3JldHVybiBudWxsfSkpO2Y9MCE9PShjLmZsYWdzJjE1OTkwKTtpZigwIT09KGMuc3VidHJlZUZsYWdzJjE1OTkwKXx8Zil7Zj1vay50cmFuc2l0aW9uO29rLnRyYW5zaXRpb249bnVsbDtcbnZhciBnPUM7Qz0xO3ZhciBoPUs7S3w9NDtuay5jdXJyZW50PW51bGw7T2ooYSxjKTtkayhjLGEpO09lKERmKTtkZD0hIUNmO0RmPUNmPW51bGw7YS5jdXJyZW50PWM7aGsoYyxhLGUpO2RjKCk7Sz1oO0M9Zztvay50cmFuc2l0aW9uPWZ9ZWxzZSBhLmN1cnJlbnQ9Yzt2ayYmKHZrPSExLHdrPWEseGs9ZSk7Zj1hLnBlbmRpbmdMYW5lczswPT09ZiYmKFJpPW51bGwpO21jKGMuc3RhdGVOb2RlLGQpO0RrKGEsQigpKTtpZihudWxsIT09Yilmb3IoZD1hLm9uUmVjb3ZlcmFibGVFcnJvcixjPTA7YzxiLmxlbmd0aDtjKyspZT1iW2NdLGQoZS52YWx1ZSx7Y29tcG9uZW50U3RhY2s6ZS5zdGFjayxkaWdlc3Q6ZS5kaWdlc3R9KTtpZihPaSl0aHJvdyBPaT0hMSxhPVBpLFBpPW51bGwsYTswIT09KHhrJjEpJiYwIT09YS50YWcmJkhrKCk7Zj1hLnBlbmRpbmdMYW5lczswIT09KGYmMSk/YT09PXprP3lrKys6KHlrPTAsems9YSk6eWs9MDtqZygpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gSGsoKXtpZihudWxsIT09d2spe3ZhciBhPURjKHhrKSxiPW9rLnRyYW5zaXRpb24sYz1DO3RyeXtvay50cmFuc2l0aW9uPW51bGw7Qz0xNj5hPzE2OmE7aWYobnVsbD09PXdrKXZhciBkPSExO2Vsc2V7YT13azt3az1udWxsO3hrPTA7aWYoMCE9PShLJjYpKXRocm93IEVycm9yKHAoMzMxKSk7dmFyIGU9SztLfD00O2ZvcihWPWEuY3VycmVudDtudWxsIT09Vjspe3ZhciBmPVYsZz1mLmNoaWxkO2lmKDAhPT0oVi5mbGFncyYxNikpe3ZhciBoPWYuZGVsZXRpb25zO2lmKG51bGwhPT1oKXtmb3IodmFyIGs9MDtrPGgubGVuZ3RoO2srKyl7dmFyIGw9aFtrXTtmb3IoVj1sO251bGwhPT1WOyl7dmFyIG09Vjtzd2l0Y2gobS50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6UGooOCxtLGYpfXZhciBxPW0uY2hpbGQ7aWYobnVsbCE9PXEpcS5yZXR1cm49bSxWPXE7ZWxzZSBmb3IoO251bGwhPT1WOyl7bT1WO3ZhciByPW0uc2libGluZyx5PW0ucmV0dXJuO1NqKG0pO2lmKG09PT1cbmwpe1Y9bnVsbDticmVha31pZihudWxsIT09cil7ci5yZXR1cm49eTtWPXI7YnJlYWt9Vj15fX19dmFyIG49Zi5hbHRlcm5hdGU7aWYobnVsbCE9PW4pe3ZhciB0PW4uY2hpbGQ7aWYobnVsbCE9PXQpe24uY2hpbGQ9bnVsbDtkb3t2YXIgSj10LnNpYmxpbmc7dC5zaWJsaW5nPW51bGw7dD1KfXdoaWxlKG51bGwhPT10KX19Vj1mfX1pZigwIT09KGYuc3VidHJlZUZsYWdzJjIwNjQpJiZudWxsIT09ZylnLnJldHVybj1mLFY9ZztlbHNlIGI6Zm9yKDtudWxsIT09Vjspe2Y9VjtpZigwIT09KGYuZmxhZ3MmMjA0OCkpc3dpdGNoKGYudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlBqKDksZixmLnJldHVybil9dmFyIHg9Zi5zaWJsaW5nO2lmKG51bGwhPT14KXt4LnJldHVybj1mLnJldHVybjtWPXg7YnJlYWsgYn1WPWYucmV0dXJufX12YXIgdz1hLmN1cnJlbnQ7Zm9yKFY9dztudWxsIT09Vjspe2c9Vjt2YXIgdT1nLmNoaWxkO2lmKDAhPT0oZy5zdWJ0cmVlRmxhZ3MmMjA2NCkmJm51bGwhPT1cbnUpdS5yZXR1cm49ZyxWPXU7ZWxzZSBiOmZvcihnPXc7bnVsbCE9PVY7KXtoPVY7aWYoMCE9PShoLmZsYWdzJjIwNDgpKXRyeXtzd2l0Y2goaC50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6UWooOSxoKX19Y2F0Y2gobmEpe1coaCxoLnJldHVybixuYSl9aWYoaD09PWcpe1Y9bnVsbDticmVhayBifXZhciBGPWguc2libGluZztpZihudWxsIT09Ril7Ri5yZXR1cm49aC5yZXR1cm47Vj1GO2JyZWFrIGJ9Vj1oLnJldHVybn19Sz1lO2pnKCk7aWYobGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBsYy5vblBvc3RDb21taXRGaWJlclJvb3QpdHJ5e2xjLm9uUG9zdENvbW1pdEZpYmVyUm9vdChrYyxhKX1jYXRjaChuYSl7fWQ9ITB9cmV0dXJuIGR9ZmluYWxseXtDPWMsb2sudHJhbnNpdGlvbj1ifX1yZXR1cm4hMX1mdW5jdGlvbiBYayhhLGIsYyl7Yj1KaShjLGIpO2I9TmkoYSxiLDEpO2E9bmgoYSxiLDEpO2I9UigpO251bGwhPT1hJiYoQWMoYSwxLGIpLERrKGEsYikpfVxuZnVuY3Rpb24gVyhhLGIsYyl7aWYoMz09PWEudGFnKVhrKGEsYSxjKTtlbHNlIGZvcig7bnVsbCE9PWI7KXtpZigzPT09Yi50YWcpe1hrKGIsYSxjKTticmVha31lbHNlIGlmKDE9PT1iLnRhZyl7dmFyIGQ9Yi5zdGF0ZU5vZGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PVJpfHwhUmkuaGFzKGQpKSl7YT1KaShjLGEpO2E9UWkoYixhLDEpO2I9bmgoYixhLDEpO2E9UigpO251bGwhPT1iJiYoQWMoYiwxLGEpLERrKGIsYSkpO2JyZWFrfX1iPWIucmV0dXJufX1cbmZ1bmN0aW9uIFRpKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7Yj1SKCk7YS5waW5nZWRMYW5lc3w9YS5zdXNwZW5kZWRMYW5lcyZjO1E9PT1hJiYoWiZjKT09PWMmJig0PT09VHx8Mz09PVQmJihaJjEzMDAyMzQyNCk9PT1aJiY1MDA+QigpLWZrP0trKGEsMCk6cmt8PWMpO0RrKGEsYil9ZnVuY3Rpb24gWWsoYSxiKXswPT09YiYmKDA9PT0oYS5tb2RlJjEpP2I9MTooYj1zYyxzYzw8PTEsMD09PShzYyYxMzAwMjM0MjQpJiYoc2M9NDE5NDMwNCkpKTt2YXIgYz1SKCk7YT1paChhLGIpO251bGwhPT1hJiYoQWMoYSxiLGMpLERrKGEsYykpfWZ1bmN0aW9uIHVqKGEpe3ZhciBiPWEubWVtb2l6ZWRTdGF0ZSxjPTA7bnVsbCE9PWImJihjPWIucmV0cnlMYW5lKTtZayhhLGMpfVxuZnVuY3Rpb24gYmsoYSxiKXt2YXIgYz0wO3N3aXRjaChhLnRhZyl7Y2FzZSAxMzp2YXIgZD1hLnN0YXRlTm9kZTt2YXIgZT1hLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJihjPWUucmV0cnlMYW5lKTticmVhaztjYXNlIDE5OmQ9YS5zdGF0ZU5vZGU7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihwKDMxNCkpO31udWxsIT09ZCYmZC5kZWxldGUoYik7WWsoYSxjKX12YXIgVms7XG5Waz1mdW5jdGlvbihhLGIsYyl7aWYobnVsbCE9PWEpaWYoYS5tZW1vaXplZFByb3BzIT09Yi5wZW5kaW5nUHJvcHN8fFdmLmN1cnJlbnQpZGg9ITA7ZWxzZXtpZigwPT09KGEubGFuZXMmYykmJjA9PT0oYi5mbGFncyYxMjgpKXJldHVybiBkaD0hMSx5aihhLGIsYyk7ZGg9MCE9PShhLmZsYWdzJjEzMTA3Mik/ITA6ITF9ZWxzZSBkaD0hMSxJJiYwIT09KGIuZmxhZ3MmMTA0ODU3NikmJnVnKGIsbmcsYi5pbmRleCk7Yi5sYW5lcz0wO3N3aXRjaChiLnRhZyl7Y2FzZSAyOnZhciBkPWIudHlwZTtpaihhLGIpO2E9Yi5wZW5kaW5nUHJvcHM7dmFyIGU9WWYoYixILmN1cnJlbnQpO2NoKGIsYyk7ZT1OaChudWxsLGIsZCxhLGUsYyk7dmFyIGY9U2goKTtiLmZsYWdzfD0xO1wib2JqZWN0XCI9PT10eXBlb2YgZSYmbnVsbCE9PWUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLnJlbmRlciYmdm9pZCAwPT09ZS4kJHR5cGVvZj8oYi50YWc9MSxiLm1lbW9pemVkU3RhdGU9bnVsbCxiLnVwZGF0ZVF1ZXVlPVxubnVsbCxaZihkKT8oZj0hMCxjZyhiKSk6Zj0hMSxiLm1lbW9pemVkU3RhdGU9bnVsbCE9PWUuc3RhdGUmJnZvaWQgMCE9PWUuc3RhdGU/ZS5zdGF0ZTpudWxsLGtoKGIpLGUudXBkYXRlcj1FaSxiLnN0YXRlTm9kZT1lLGUuX3JlYWN0SW50ZXJuYWxzPWIsSWkoYixkLGEsYyksYj1qaihudWxsLGIsZCwhMCxmLGMpKTooYi50YWc9MCxJJiZmJiZ2ZyhiKSxYaShudWxsLGIsZSxjKSxiPWIuY2hpbGQpO3JldHVybiBiO2Nhc2UgMTY6ZD1iLmVsZW1lbnRUeXBlO2E6e2lqKGEsYik7YT1iLnBlbmRpbmdQcm9wcztlPWQuX2luaXQ7ZD1lKGQuX3BheWxvYWQpO2IudHlwZT1kO2U9Yi50YWc9WmsoZCk7YT1DaShkLGEpO3N3aXRjaChlKXtjYXNlIDA6Yj1jaihudWxsLGIsZCxhLGMpO2JyZWFrIGE7Y2FzZSAxOmI9aGoobnVsbCxiLGQsYSxjKTticmVhayBhO2Nhc2UgMTE6Yj1ZaShudWxsLGIsZCxhLGMpO2JyZWFrIGE7Y2FzZSAxNDpiPSRpKG51bGwsYixkLENpKGQudHlwZSxhKSxjKTticmVhayBhfXRocm93IEVycm9yKHAoMzA2LFxuZCxcIlwiKSk7fXJldHVybiBiO2Nhc2UgMDpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6Q2koZCxlKSxjaihhLGIsZCxlLGMpO2Nhc2UgMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6Q2koZCxlKSxoaihhLGIsZCxlLGMpO2Nhc2UgMzphOntraihiKTtpZihudWxsPT09YSl0aHJvdyBFcnJvcihwKDM4NykpO2Q9Yi5wZW5kaW5nUHJvcHM7Zj1iLm1lbW9pemVkU3RhdGU7ZT1mLmVsZW1lbnQ7bGgoYSxiKTtxaChiLGQsbnVsbCxjKTt2YXIgZz1iLm1lbW9pemVkU3RhdGU7ZD1nLmVsZW1lbnQ7aWYoZi5pc0RlaHlkcmF0ZWQpaWYoZj17ZWxlbWVudDpkLGlzRGVoeWRyYXRlZDohMSxjYWNoZTpnLmNhY2hlLHBlbmRpbmdTdXNwZW5zZUJvdW5kYXJpZXM6Zy5wZW5kaW5nU3VzcGVuc2VCb3VuZGFyaWVzLHRyYW5zaXRpb25zOmcudHJhbnNpdGlvbnN9LGIudXBkYXRlUXVldWUuYmFzZVN0YXRlPVxuZixiLm1lbW9pemVkU3RhdGU9ZixiLmZsYWdzJjI1Nil7ZT1KaShFcnJvcihwKDQyMykpLGIpO2I9bGooYSxiLGQsYyxlKTticmVhayBhfWVsc2UgaWYoZCE9PWUpe2U9SmkoRXJyb3IocCg0MjQpKSxiKTtiPWxqKGEsYixkLGMsZSk7YnJlYWsgYX1lbHNlIGZvcih5Zz1MZihiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLHhnPWIsST0hMCx6Zz1udWxsLGM9VmcoYixudWxsLGQsYyksYi5jaGlsZD1jO2M7KWMuZmxhZ3M9Yy5mbGFncyYtM3w0MDk2LGM9Yy5zaWJsaW5nO2Vsc2V7SWcoKTtpZihkPT09ZSl7Yj1aaShhLGIsYyk7YnJlYWsgYX1YaShhLGIsZCxjKX1iPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA1OnJldHVybiBBaChiKSxudWxsPT09YSYmRWcoYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLGc9ZS5jaGlsZHJlbixFZihkLGUpP2c9bnVsbDpudWxsIT09ZiYmRWYoZCxmKSYmKGIuZmxhZ3N8PTMyKSxcbmdqKGEsYiksWGkoYSxiLGcsYyksYi5jaGlsZDtjYXNlIDY6cmV0dXJuIG51bGw9PT1hJiZFZyhiKSxudWxsO2Nhc2UgMTM6cmV0dXJuIG9qKGEsYixjKTtjYXNlIDQ6cmV0dXJuIHloKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksZD1iLnBlbmRpbmdQcm9wcyxudWxsPT09YT9iLmNoaWxkPVVnKGIsbnVsbCxkLGMpOlhpKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6Q2koZCxlKSxZaShhLGIsZCxlLGMpO2Nhc2UgNzpyZXR1cm4gWGkoYSxiLGIucGVuZGluZ1Byb3BzLGMpLGIuY2hpbGQ7Y2FzZSA4OnJldHVybiBYaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBYaShhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7Zj1iLm1lbW9pemVkUHJvcHM7XG5nPWUudmFsdWU7RyhXZyxkLl9jdXJyZW50VmFsdWUpO2QuX2N1cnJlbnRWYWx1ZT1nO2lmKG51bGwhPT1mKWlmKEhlKGYudmFsdWUsZykpe2lmKGYuY2hpbGRyZW49PT1lLmNoaWxkcmVuJiYhV2YuY3VycmVudCl7Yj1aaShhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoZj1iLmNoaWxkLG51bGwhPT1mJiYoZi5yZXR1cm49Yik7bnVsbCE9PWY7KXt2YXIgaD1mLmRlcGVuZGVuY2llcztpZihudWxsIT09aCl7Zz1mLmNoaWxkO2Zvcih2YXIgaz1oLmZpcnN0Q29udGV4dDtudWxsIT09azspe2lmKGsuY29udGV4dD09PWQpe2lmKDE9PT1mLnRhZyl7az1taCgtMSxjJi1jKTtrLnRhZz0yO3ZhciBsPWYudXBkYXRlUXVldWU7aWYobnVsbCE9PWwpe2w9bC5zaGFyZWQ7dmFyIG09bC5wZW5kaW5nO251bGw9PT1tP2submV4dD1rOihrLm5leHQ9bS5uZXh0LG0ubmV4dD1rKTtsLnBlbmRpbmc9a319Zi5sYW5lc3w9YztrPWYuYWx0ZXJuYXRlO251bGwhPT1rJiYoay5sYW5lc3w9Yyk7YmgoZi5yZXR1cm4sXG5jLGIpO2gubGFuZXN8PWM7YnJlYWt9az1rLm5leHR9fWVsc2UgaWYoMTA9PT1mLnRhZylnPWYudHlwZT09PWIudHlwZT9udWxsOmYuY2hpbGQ7ZWxzZSBpZigxOD09PWYudGFnKXtnPWYucmV0dXJuO2lmKG51bGw9PT1nKXRocm93IEVycm9yKHAoMzQxKSk7Zy5sYW5lc3w9YztoPWcuYWx0ZXJuYXRlO251bGwhPT1oJiYoaC5sYW5lc3w9Yyk7YmgoZyxjLGIpO2c9Zi5zaWJsaW5nfWVsc2UgZz1mLmNoaWxkO2lmKG51bGwhPT1nKWcucmV0dXJuPWY7ZWxzZSBmb3IoZz1mO251bGwhPT1nOyl7aWYoZz09PWIpe2c9bnVsbDticmVha31mPWcuc2libGluZztpZihudWxsIT09Zil7Zi5yZXR1cm49Zy5yZXR1cm47Zz1mO2JyZWFrfWc9Zy5yZXR1cm59Zj1nfVhpKGEsYixlLmNoaWxkcmVuLGMpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDk6cmV0dXJuIGU9Yi50eXBlLGQ9Yi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sY2goYixjKSxlPWVoKGUpLGQ9ZChlKSxiLmZsYWdzfD0xLFhpKGEsYixkLGMpLFxuYi5jaGlsZDtjYXNlIDE0OnJldHVybiBkPWIudHlwZSxlPUNpKGQsYi5wZW5kaW5nUHJvcHMpLGU9Q2koZC50eXBlLGUpLCRpKGEsYixkLGUsYyk7Y2FzZSAxNTpyZXR1cm4gYmooYSxiLGIudHlwZSxiLnBlbmRpbmdQcm9wcyxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpDaShkLGUpLGlqKGEsYiksYi50YWc9MSxaZihkKT8oYT0hMCxjZyhiKSk6YT0hMSxjaChiLGMpLEdpKGIsZCxlKSxJaShiLGQsZSxjKSxqaihudWxsLGIsZCwhMCxhLGMpO2Nhc2UgMTk6cmV0dXJuIHhqKGEsYixjKTtjYXNlIDIyOnJldHVybiBkaihhLGIsYyl9dGhyb3cgRXJyb3IocCgxNTYsYi50YWcpKTt9O2Z1bmN0aW9uIEZrKGEsYil7cmV0dXJuIGFjKGEsYil9XG5mdW5jdGlvbiAkayhhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPXRoaXMuZWxlbWVudFR5cGU9bnVsbDt0aGlzLmluZGV4PTA7dGhpcy5yZWY9bnVsbDt0aGlzLnBlbmRpbmdQcm9wcz1iO3RoaXMuZGVwZW5kZW5jaWVzPXRoaXMubWVtb2l6ZWRTdGF0ZT10aGlzLnVwZGF0ZVF1ZXVlPXRoaXMubWVtb2l6ZWRQcm9wcz1udWxsO3RoaXMubW9kZT1kO3RoaXMuc3VidHJlZUZsYWdzPXRoaXMuZmxhZ3M9MDt0aGlzLmRlbGV0aW9ucz1udWxsO3RoaXMuY2hpbGRMYW5lcz10aGlzLmxhbmVzPTA7dGhpcy5hbHRlcm5hdGU9bnVsbH1mdW5jdGlvbiBCZyhhLGIsYyxkKXtyZXR1cm4gbmV3ICRrKGEsYixjLGQpfWZ1bmN0aW9uIGFqKGEpe2E9YS5wcm90b3R5cGU7cmV0dXJuISghYXx8IWEuaXNSZWFjdENvbXBvbmVudCl9XG5mdW5jdGlvbiBaayhhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYWooYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PURhKXJldHVybiAxMTtpZihhPT09R2EpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gUGcoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz1CZyhhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLnR5cGU9YS50eXBlLGMuZmxhZ3M9MCxjLnN1YnRyZWVGbGFncz0wLGMuZGVsZXRpb25zPW51bGwpO2MuZmxhZ3M9YS5mbGFncyYxNDY4MDA2NDtjLmNoaWxkTGFuZXM9YS5jaGlsZExhbmVzO2MubGFuZXM9YS5sYW5lcztjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtiPWEuZGVwZW5kZW5jaWVzO2MuZGVwZW5kZW5jaWVzPW51bGw9PT1iP251bGw6e2xhbmVzOmIubGFuZXMsZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0fTtcbmMuc2libGluZz1hLnNpYmxpbmc7Yy5pbmRleD1hLmluZGV4O2MucmVmPWEucmVmO3JldHVybiBjfVxuZnVuY3Rpb24gUmcoYSxiLGMsZCxlLGYpe3ZhciBnPTI7ZD1hO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKWFqKGEpJiYoZz0xKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlnPTU7ZWxzZSBhOnN3aXRjaChhKXtjYXNlIHlhOnJldHVybiBUZyhjLmNoaWxkcmVuLGUsZixiKTtjYXNlIHphOmc9ODtlfD04O2JyZWFrO2Nhc2UgQWE6cmV0dXJuIGE9QmcoMTIsYyxiLGV8MiksYS5lbGVtZW50VHlwZT1BYSxhLmxhbmVzPWYsYTtjYXNlIEVhOnJldHVybiBhPUJnKDEzLGMsYixlKSxhLmVsZW1lbnRUeXBlPUVhLGEubGFuZXM9ZixhO2Nhc2UgRmE6cmV0dXJuIGE9QmcoMTksYyxiLGUpLGEuZWxlbWVudFR5cGU9RmEsYS5sYW5lcz1mLGE7Y2FzZSBJYTpyZXR1cm4gcGooYyxlLGYsYik7ZGVmYXVsdDppZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIEJhOmc9MTA7YnJlYWsgYTtjYXNlIENhOmc9OTticmVhayBhO2Nhc2UgRGE6Zz0xMTtcbmJyZWFrIGE7Y2FzZSBHYTpnPTE0O2JyZWFrIGE7Y2FzZSBIYTpnPTE2O2Q9bnVsbDticmVhayBhfXRocm93IEVycm9yKHAoMTMwLG51bGw9PWE/YTp0eXBlb2YgYSxcIlwiKSk7fWI9QmcoZyxjLGIsZSk7Yi5lbGVtZW50VHlwZT1hO2IudHlwZT1kO2IubGFuZXM9ZjtyZXR1cm4gYn1mdW5jdGlvbiBUZyhhLGIsYyxkKXthPUJnKDcsYSxkLGIpO2EubGFuZXM9YztyZXR1cm4gYX1mdW5jdGlvbiBwaihhLGIsYyxkKXthPUJnKDIyLGEsZCxiKTthLmVsZW1lbnRUeXBlPUlhO2EubGFuZXM9YzthLnN0YXRlTm9kZT17aXNIaWRkZW46ITF9O3JldHVybiBhfWZ1bmN0aW9uIFFnKGEsYixjKXthPUJnKDYsYSxudWxsLGIpO2EubGFuZXM9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIFNnKGEsYixjKXtiPUJnKDQsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmxhbmVzPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifVxuZnVuY3Rpb24gYWwoYSxiLGMsZCxlKXt0aGlzLnRhZz1iO3RoaXMuY29udGFpbmVySW5mbz1hO3RoaXMuZmluaXNoZWRXb3JrPXRoaXMucGluZ0NhY2hlPXRoaXMuY3VycmVudD10aGlzLnBlbmRpbmdDaGlsZHJlbj1udWxsO3RoaXMudGltZW91dEhhbmRsZT0tMTt0aGlzLmNhbGxiYWNrTm9kZT10aGlzLnBlbmRpbmdDb250ZXh0PXRoaXMuY29udGV4dD1udWxsO3RoaXMuY2FsbGJhY2tQcmlvcml0eT0wO3RoaXMuZXZlbnRUaW1lcz16YygwKTt0aGlzLmV4cGlyYXRpb25UaW1lcz16YygtMSk7dGhpcy5lbnRhbmdsZWRMYW5lcz10aGlzLmZpbmlzaGVkTGFuZXM9dGhpcy5tdXRhYmxlUmVhZExhbmVzPXRoaXMuZXhwaXJlZExhbmVzPXRoaXMucGluZ2VkTGFuZXM9dGhpcy5zdXNwZW5kZWRMYW5lcz10aGlzLnBlbmRpbmdMYW5lcz0wO3RoaXMuZW50YW5nbGVtZW50cz16YygwKTt0aGlzLmlkZW50aWZpZXJQcmVmaXg9ZDt0aGlzLm9uUmVjb3ZlcmFibGVFcnJvcj1lO3RoaXMubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1cbm51bGx9ZnVuY3Rpb24gYmwoYSxiLGMsZCxlLGYsZyxoLGspe2E9bmV3IGFsKGEsYixjLGgsayk7MT09PWI/KGI9MSwhMD09PWYmJihifD04KSk6Yj0wO2Y9QmcoMyxudWxsLG51bGwsYik7YS5jdXJyZW50PWY7Zi5zdGF0ZU5vZGU9YTtmLm1lbW9pemVkU3RhdGU9e2VsZW1lbnQ6ZCxpc0RlaHlkcmF0ZWQ6YyxjYWNoZTpudWxsLHRyYW5zaXRpb25zOm51bGwscGVuZGluZ1N1c3BlbnNlQm91bmRhcmllczpudWxsfTtraChmKTtyZXR1cm4gYX1mdW5jdGlvbiBjbChhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOndhLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuZnVuY3Rpb24gZGwoYSl7aWYoIWEpcmV0dXJuIFZmO2E9YS5fcmVhY3RJbnRlcm5hbHM7YTp7aWYoVmIoYSkhPT1hfHwxIT09YS50YWcpdGhyb3cgRXJyb3IocCgxNzApKTt2YXIgYj1hO2Rve3N3aXRjaChiLnRhZyl7Y2FzZSAzOmI9Yi5zdGF0ZU5vZGUuY29udGV4dDticmVhayBhO2Nhc2UgMTppZihaZihiLnR5cGUpKXtiPWIuc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGF9fWI9Yi5yZXR1cm59d2hpbGUobnVsbCE9PWIpO3Rocm93IEVycm9yKHAoMTcxKSk7fWlmKDE9PT1hLnRhZyl7dmFyIGM9YS50eXBlO2lmKFpmKGMpKXJldHVybiBiZyhhLGMsYil9cmV0dXJuIGJ9XG5mdW5jdGlvbiBlbChhLGIsYyxkLGUsZixnLGgsayl7YT1ibChjLGQsITAsYSxlLGYsZyxoLGspO2EuY29udGV4dD1kbChudWxsKTtjPWEuY3VycmVudDtkPVIoKTtlPXlpKGMpO2Y9bWgoZCxlKTtmLmNhbGxiYWNrPXZvaWQgMCE9PWImJm51bGwhPT1iP2I6bnVsbDtuaChjLGYsZSk7YS5jdXJyZW50LmxhbmVzPWU7QWMoYSxlLGQpO0RrKGEsZCk7cmV0dXJuIGF9ZnVuY3Rpb24gZmwoYSxiLGMsZCl7dmFyIGU9Yi5jdXJyZW50LGY9UigpLGc9eWkoZSk7Yz1kbChjKTtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPW1oKGYsZyk7Yi5wYXlsb2FkPXtlbGVtZW50OmF9O2Q9dm9pZCAwPT09ZD9udWxsOmQ7bnVsbCE9PWQmJihiLmNhbGxiYWNrPWQpO2E9bmgoZSxiLGcpO251bGwhPT1hJiYoZ2koYSxlLGcsZiksb2goYSxlLGcpKTtyZXR1cm4gZ31cbmZ1bmN0aW9uIGdsKGEpe2E9YS5jdXJyZW50O2lmKCFhLmNoaWxkKXJldHVybiBudWxsO3N3aXRjaChhLmNoaWxkLnRhZyl7Y2FzZSA1OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZTtkZWZhdWx0OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZX19ZnVuY3Rpb24gaGwoYSxiKXthPWEubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YSYmbnVsbCE9PWEuZGVoeWRyYXRlZCl7dmFyIGM9YS5yZXRyeUxhbmU7YS5yZXRyeUxhbmU9MCE9PWMmJmM8Yj9jOmJ9fWZ1bmN0aW9uIGlsKGEsYil7aGwoYSxiKTsoYT1hLmFsdGVybmF0ZSkmJmhsKGEsYil9ZnVuY3Rpb24gamwoKXtyZXR1cm4gbnVsbH12YXIga2w9XCJmdW5jdGlvblwiPT09dHlwZW9mIHJlcG9ydEVycm9yP3JlcG9ydEVycm9yOmZ1bmN0aW9uKGEpe2NvbnNvbGUuZXJyb3IoYSl9O2Z1bmN0aW9uIGxsKGEpe3RoaXMuX2ludGVybmFsUm9vdD1hfVxubWwucHJvdG90eXBlLnJlbmRlcj1sbC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX2ludGVybmFsUm9vdDtpZihudWxsPT09Yil0aHJvdyBFcnJvcihwKDQwOSkpO2ZsKGEsYixudWxsLG51bGwpfTttbC5wcm90b3R5cGUudW5tb3VudD1sbC5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuX2ludGVybmFsUm9vdDtpZihudWxsIT09YSl7dGhpcy5faW50ZXJuYWxSb290PW51bGw7dmFyIGI9YS5jb250YWluZXJJbmZvO1JrKGZ1bmN0aW9uKCl7ZmwobnVsbCxhLG51bGwsbnVsbCl9KTtiW3VmXT1udWxsfX07ZnVuY3Rpb24gbWwoYSl7dGhpcy5faW50ZXJuYWxSb290PWF9XG5tbC5wcm90b3R5cGUudW5zdGFibGVfc2NoZWR1bGVIeWRyYXRpb249ZnVuY3Rpb24oYSl7aWYoYSl7dmFyIGI9SGMoKTthPXtibG9ja2VkT246bnVsbCx0YXJnZXQ6YSxwcmlvcml0eTpifTtmb3IodmFyIGM9MDtjPFFjLmxlbmd0aCYmMCE9PWImJmI8UWNbY10ucHJpb3JpdHk7YysrKTtRYy5zcGxpY2UoYywwLGEpOzA9PT1jJiZWYyhhKX19O2Z1bmN0aW9uIG5sKGEpe3JldHVybiEoIWF8fDEhPT1hLm5vZGVUeXBlJiY5IT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlKX1mdW5jdGlvbiBvbChhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSYmKDghPT1hLm5vZGVUeXBlfHxcIiByZWFjdC1tb3VudC1wb2ludC11bnN0YWJsZSBcIiE9PWEubm9kZVZhbHVlKSl9ZnVuY3Rpb24gcGwoKXt9XG5mdW5jdGlvbiBxbChhLGIsYyxkLGUpe2lmKGUpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZj1kO2Q9ZnVuY3Rpb24oKXt2YXIgYT1nbChnKTtmLmNhbGwoYSl9fXZhciBnPWVsKGIsZCxhLDAsbnVsbCwhMSwhMSxcIlwiLHBsKTthLl9yZWFjdFJvb3RDb250YWluZXI9ZzthW3VmXT1nLmN1cnJlbnQ7c2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO1JrKCk7cmV0dXJuIGd9Zm9yKDtlPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGUpO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgaD1kO2Q9ZnVuY3Rpb24oKXt2YXIgYT1nbChrKTtoLmNhbGwoYSl9fXZhciBrPWJsKGEsMCwhMSxudWxsLG51bGwsITEsITEsXCJcIixwbCk7YS5fcmVhY3RSb290Q29udGFpbmVyPWs7YVt1Zl09ay5jdXJyZW50O3NmKDg9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphKTtSayhmdW5jdGlvbigpe2ZsKGIsayxjLGQpfSk7cmV0dXJuIGt9XG5mdW5jdGlvbiBybChhLGIsYyxkLGUpe3ZhciBmPWMuX3JlYWN0Um9vdENvbnRhaW5lcjtpZihmKXt2YXIgZz1mO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgaD1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1nbChnKTtoLmNhbGwoYSl9fWZsKGIsZyxhLGUpfWVsc2UgZz1xbChjLGIsYSxlLGQpO3JldHVybiBnbChnKX1FYz1mdW5jdGlvbihhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMzp2YXIgYj1hLnN0YXRlTm9kZTtpZihiLmN1cnJlbnQubWVtb2l6ZWRTdGF0ZS5pc0RlaHlkcmF0ZWQpe3ZhciBjPXRjKGIucGVuZGluZ0xhbmVzKTswIT09YyYmKENjKGIsY3wxKSxEayhiLEIoKSksMD09PShLJjYpJiYoR2o9QigpKzUwMCxqZygpKSl9YnJlYWs7Y2FzZSAxMzpSayhmdW5jdGlvbigpe3ZhciBiPWloKGEsMSk7aWYobnVsbCE9PWIpe3ZhciBjPVIoKTtnaShiLGEsMSxjKX19KSxpbChhLDEpfX07XG5GYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXt2YXIgYj1paChhLDEzNDIxNzcyOCk7aWYobnVsbCE9PWIpe3ZhciBjPVIoKTtnaShiLGEsMTM0MjE3NzI4LGMpfWlsKGEsMTM0MjE3NzI4KX19O0djPWZ1bmN0aW9uKGEpe2lmKDEzPT09YS50YWcpe3ZhciBiPXlpKGEpLGM9aWgoYSxiKTtpZihudWxsIT09Yyl7dmFyIGQ9UigpO2dpKGMsYSxiLGQpfWlsKGEsYil9fTtIYz1mdW5jdGlvbigpe3JldHVybiBDfTtJYz1mdW5jdGlvbihhLGIpe3ZhciBjPUM7dHJ5e3JldHVybiBDPWEsYigpfWZpbmFsbHl7Qz1jfX07XG55Yj1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGIpe2Nhc2UgXCJpbnB1dFwiOmJiKGEsYyk7Yj1jLm5hbWU7aWYoXCJyYWRpb1wiPT09Yy50eXBlJiZudWxsIT1iKXtmb3IoYz1hO2MucGFyZW50Tm9kZTspYz1jLnBhcmVudE5vZGU7Yz1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiK0pTT04uc3RyaW5naWZ5KFwiXCIrYikrJ11bdHlwZT1cInJhZGlvXCJdJyk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTtpZihkIT09YSYmZC5mb3JtPT09YS5mb3JtKXt2YXIgZT1EYihkKTtpZighZSl0aHJvdyBFcnJvcihwKDkwKSk7V2EoZCk7YmIoZCxlKX19fWJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmliKGEsYyk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9Yy52YWx1ZSxudWxsIT1iJiZmYihhLCEhYy5tdWx0aXBsZSxiLCExKX19O0diPVFrO0hiPVJrO1xudmFyIHNsPXt1c2luZ0NsaWVudEVudHJ5UG9pbnQ6ITEsRXZlbnRzOltDYix1ZSxEYixFYixGYixRa119LHRsPXtmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTpXYyxidW5kbGVUeXBlOjAsdmVyc2lvbjpcIjE4LjMuMVwiLHJlbmRlcmVyUGFja2FnZU5hbWU6XCJyZWFjdC1kb21cIn07XG52YXIgdWw9e2J1bmRsZVR5cGU6dGwuYnVuZGxlVHlwZSx2ZXJzaW9uOnRsLnZlcnNpb24scmVuZGVyZXJQYWNrYWdlTmFtZTp0bC5yZW5kZXJlclBhY2thZ2VOYW1lLHJlbmRlcmVyQ29uZmlnOnRsLnJlbmRlcmVyQ29uZmlnLG92ZXJyaWRlSG9va1N0YXRlOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVIb29rU3RhdGVSZW5hbWVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wczpudWxsLG92ZXJyaWRlUHJvcHNEZWxldGVQYXRoOm51bGwsb3ZlcnJpZGVQcm9wc1JlbmFtZVBhdGg6bnVsbCxzZXRFcnJvckhhbmRsZXI6bnVsbCxzZXRTdXNwZW5zZUhhbmRsZXI6bnVsbCxzY2hlZHVsZVVwZGF0ZTpudWxsLGN1cnJlbnREaXNwYXRjaGVyUmVmOnVhLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsZmluZEhvc3RJbnN0YW5jZUJ5RmliZXI6ZnVuY3Rpb24oYSl7YT1aYihhKTtyZXR1cm4gbnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZX0sZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6dGwuZmluZEZpYmVyQnlIb3N0SW5zdGFuY2V8fFxuamwsZmluZEhvc3RJbnN0YW5jZXNGb3JSZWZyZXNoOm51bGwsc2NoZWR1bGVSZWZyZXNoOm51bGwsc2NoZWR1bGVSb290Om51bGwsc2V0UmVmcmVzaEhhbmRsZXI6bnVsbCxnZXRDdXJyZW50RmliZXI6bnVsbCxyZWNvbmNpbGVyVmVyc2lvbjpcIjE4LjMuMS1uZXh0LWYxMzM4ZjgwODAtMjAyNDA0MjZcIn07aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pe3ZhciB2bD1fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX187aWYoIXZsLmlzRGlzYWJsZWQmJnZsLnN1cHBvcnRzRmliZXIpdHJ5e2tjPXZsLmluamVjdCh1bCksbGM9dmx9Y2F0Y2goYSl7fX1leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPXNsO1xuZXhwb3J0cy5jcmVhdGVQb3J0YWw9ZnVuY3Rpb24oYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtpZighbmwoYikpdGhyb3cgRXJyb3IocCgyMDApKTtyZXR1cm4gY2woYSxiLG51bGwsYyl9O2V4cG9ydHMuY3JlYXRlUm9vdD1mdW5jdGlvbihhLGIpe2lmKCFubChhKSl0aHJvdyBFcnJvcihwKDI5OSkpO3ZhciBjPSExLGQ9XCJcIixlPWtsO251bGwhPT1iJiZ2b2lkIDAhPT1iJiYoITA9PT1iLnVuc3RhYmxlX3N0cmljdE1vZGUmJihjPSEwKSx2b2lkIDAhPT1iLmlkZW50aWZpZXJQcmVmaXgmJihkPWIuaWRlbnRpZmllclByZWZpeCksdm9pZCAwIT09Yi5vblJlY292ZXJhYmxlRXJyb3ImJihlPWIub25SZWNvdmVyYWJsZUVycm9yKSk7Yj1ibChhLDEsITEsbnVsbCxudWxsLGMsITEsZCxlKTthW3VmXT1iLmN1cnJlbnQ7c2YoOD09PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO3JldHVybiBuZXcgbGwoYil9O1xuZXhwb3J0cy5maW5kRE9NTm9kZT1mdW5jdGlvbihhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBhO3ZhciBiPWEuX3JlYWN0SW50ZXJuYWxzO2lmKHZvaWQgMD09PWIpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcil0aHJvdyBFcnJvcihwKDE4OCkpO2E9T2JqZWN0LmtleXMoYSkuam9pbihcIixcIik7dGhyb3cgRXJyb3IocCgyNjgsYSkpO31hPVpiKGIpO2E9bnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZTtyZXR1cm4gYX07ZXhwb3J0cy5mbHVzaFN5bmM9ZnVuY3Rpb24oYSl7cmV0dXJuIFJrKGEpfTtleHBvcnRzLmh5ZHJhdGU9ZnVuY3Rpb24oYSxiLGMpe2lmKCFvbChiKSl0aHJvdyBFcnJvcihwKDIwMCkpO3JldHVybiBybChudWxsLGEsYiwhMCxjKX07XG5leHBvcnRzLmh5ZHJhdGVSb290PWZ1bmN0aW9uKGEsYixjKXtpZighbmwoYSkpdGhyb3cgRXJyb3IocCg0MDUpKTt2YXIgZD1udWxsIT1jJiZjLmh5ZHJhdGVkU291cmNlc3x8bnVsbCxlPSExLGY9XCJcIixnPWtsO251bGwhPT1jJiZ2b2lkIDAhPT1jJiYoITA9PT1jLnVuc3RhYmxlX3N0cmljdE1vZGUmJihlPSEwKSx2b2lkIDAhPT1jLmlkZW50aWZpZXJQcmVmaXgmJihmPWMuaWRlbnRpZmllclByZWZpeCksdm9pZCAwIT09Yy5vblJlY292ZXJhYmxlRXJyb3ImJihnPWMub25SZWNvdmVyYWJsZUVycm9yKSk7Yj1lbChiLG51bGwsYSwxLG51bGwhPWM/YzpudWxsLGUsITEsZixnKTthW3VmXT1iLmN1cnJlbnQ7c2YoYSk7aWYoZClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKWM9ZFthXSxlPWMuX2dldFZlcnNpb24sZT1lKGMuX3NvdXJjZSksbnVsbD09Yi5tdXRhYmxlU291cmNlRWFnZXJIeWRyYXRpb25EYXRhP2IubXV0YWJsZVNvdXJjZUVhZ2VySHlkcmF0aW9uRGF0YT1bYyxlXTpiLm11dGFibGVTb3VyY2VFYWdlckh5ZHJhdGlvbkRhdGEucHVzaChjLFxuZSk7cmV0dXJuIG5ldyBtbChiKX07ZXhwb3J0cy5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe2lmKCFvbChiKSl0aHJvdyBFcnJvcihwKDIwMCkpO3JldHVybiBybChudWxsLGEsYiwhMSxjKX07ZXhwb3J0cy51bm1vdW50Q29tcG9uZW50QXROb2RlPWZ1bmN0aW9uKGEpe2lmKCFvbChhKSl0aHJvdyBFcnJvcihwKDQwKSk7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oUmsoZnVuY3Rpb24oKXtybChudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsO2FbdWZdPW51bGx9KX0pLCEwKTohMX07ZXhwb3J0cy51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcz1RaztcbmV4cG9ydHMudW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXI9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoIW9sKGMpKXRocm93IEVycm9yKHAoMjAwKSk7aWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbHMpdGhyb3cgRXJyb3IocCgzOCkpO3JldHVybiBybChhLGIsYywhMSxkKX07ZXhwb3J0cy52ZXJzaW9uPVwiMTguMy4xLW5leHQtZjEzMzhmODA4MC0yMDI0MDQyNlwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZXhwb3J0cy5jcmVhdGVSb290ID0gbS5jcmVhdGVSb290O1xuICBleHBvcnRzLmh5ZHJhdGVSb290ID0gbS5oeWRyYXRlUm9vdDtcbn0gZWxzZSB7XG4gIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcbiAgZXhwb3J0cy5jcmVhdGVSb290ID0gZnVuY3Rpb24oYywgbykge1xuICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG0uY3JlYXRlUm9vdChjLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBmdW5jdGlvbihjLCBoLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5oeWRyYXRlUm9vdChjLCBoLCBvKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1xuU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIik6NjAxMjAscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LHQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNix2PWI/U3ltYm9sLmZvcihcInJlYWN0LmJsb2NrXCIpOjYwMTIxLHc9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIik6NjAxMTcseD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIik6NjAxMTgseT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTo2MDExOTtcbmZ1bmN0aW9uIHooYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIHQ6Y2FzZSByOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiBBKGEpe3JldHVybiB6KGEpPT09bX1leHBvcnRzLkFzeW5jTW9kZT1sO2V4cG9ydHMuQ29uY3VycmVudE1vZGU9bTtleHBvcnRzLkNvbnRleHRDb25zdW1lcj1rO2V4cG9ydHMuQ29udGV4dFByb3ZpZGVyPWg7ZXhwb3J0cy5FbGVtZW50PWM7ZXhwb3J0cy5Gb3J3YXJkUmVmPW47ZXhwb3J0cy5GcmFnbWVudD1lO2V4cG9ydHMuTGF6eT10O2V4cG9ydHMuTWVtbz1yO2V4cG9ydHMuUG9ydGFsPWQ7XG5leHBvcnRzLlByb2ZpbGVyPWc7ZXhwb3J0cy5TdHJpY3RNb2RlPWY7ZXhwb3J0cy5TdXNwZW5zZT1wO2V4cG9ydHMuaXNBc3luY01vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIEEoYSl8fHooYSk9PT1sfTtleHBvcnRzLmlzQ29uY3VycmVudE1vZGU9QTtleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09a307ZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWh9O2V4cG9ydHMuaXNFbGVtZW50PWZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1jfTtleHBvcnRzLmlzRm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PW59O2V4cG9ydHMuaXNGcmFnbWVudD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWV9O2V4cG9ydHMuaXNMYXp5PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09dH07XG5leHBvcnRzLmlzTWVtbz1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXJ9O2V4cG9ydHMuaXNQb3J0YWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1kfTtleHBvcnRzLmlzUHJvZmlsZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1nfTtleHBvcnRzLmlzU3RyaWN0TW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWZ9O2V4cG9ydHMuaXNTdXNwZW5zZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXB9O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxhPT09cXx8XCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmKGEuJCR0eXBlb2Y9PT10fHxhLiQkdHlwZW9mPT09cnx8YS4kJHR5cGVvZj09PWh8fGEuJCR0eXBlb2Y9PT1rfHxhLiQkdHlwZW9mPT09bnx8YS4kJHR5cGVvZj09PXd8fGEuJCR0eXBlb2Y9PT14fHxhLiQkdHlwZW9mPT09eXx8YS4kJHR5cGVvZj09PXYpfTtleHBvcnRzLnR5cGVPZj16O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiByZWFjdC1qc3gtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7dmFyIGY9cmVxdWlyZShcInJlYWN0XCIpLGs9U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIiksbD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIiksbT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LG49Zi5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRC5SZWFjdEN1cnJlbnRPd25lcixwPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBxKGMsYSxnKXt2YXIgYixkPXt9LGU9bnVsbCxoPW51bGw7dm9pZCAwIT09ZyYmKGU9XCJcIitnKTt2b2lkIDAhPT1hLmtleSYmKGU9XCJcIithLmtleSk7dm9pZCAwIT09YS5yZWYmJihoPWEucmVmKTtmb3IoYiBpbiBhKW0uY2FsbChhLGIpJiYhcC5oYXNPd25Qcm9wZXJ0eShiKSYmKGRbYl09YVtiXSk7aWYoYyYmYy5kZWZhdWx0UHJvcHMpZm9yKGIgaW4gYT1jLmRlZmF1bHRQcm9wcyxhKXZvaWQgMD09PWRbYl0mJihkW2JdPWFbYl0pO3JldHVybnskJHR5cGVvZjprLHR5cGU6YyxrZXk6ZSxyZWY6aCxwcm9wczpkLF9vd25lcjpuLmN1cnJlbnR9fWV4cG9ydHMuRnJhZ21lbnQ9bDtleHBvcnRzLmpzeD1xO2V4cG9ydHMuanN4cz1xO1xuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPVN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpLG49U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSxwPVN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSxxPVN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxyPVN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSx0PVN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKSx1PVN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpLHY9U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLHc9U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpLHg9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikseT1TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSx6PVN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBBKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT16JiZhW3pdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9XG52YXIgQj17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQz1PYmplY3QuYXNzaWduLEQ9e307ZnVuY3Rpb24gRShhLGIsZSl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1lfHxCfUUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307XG5FLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3IoXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIik7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtFLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtmdW5jdGlvbiBGKCl7fUYucHJvdG90eXBlPUUucHJvdG90eXBlO2Z1bmN0aW9uIEcoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn12YXIgSD1HLnByb3RvdHlwZT1uZXcgRjtcbkguY29uc3RydWN0b3I9RztDKEgsRS5wcm90b3R5cGUpO0guaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEk9QXJyYXkuaXNBcnJheSxKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksSz17Y3VycmVudDpudWxsfSxMPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBNKGEsYixlKXt2YXIgZCxjPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZCBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUouY2FsbChiLGQpJiYhTC5oYXNPd25Qcm9wZXJ0eShkKSYmKGNbZF09YltkXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWMuY2hpbGRyZW49ZTtlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07Yy5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihkIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1jW2RdJiYoY1tkXT1nW2RdKTtyZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6Yyxfb3duZXI6Sy5jdXJyZW50fX1cbmZ1bmN0aW9uIE4oYSxiKXtyZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIE8oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWx9ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBQPS9cXC8rL2c7ZnVuY3Rpb24gUShhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIFIoYSxiLGUsZCxjKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbDpjYXNlIG46aD0hMH19aWYoaClyZXR1cm4gaD1hLGM9YyhoKSxhPVwiXCI9PT1kP1wiLlwiK1EoaCwwKTpkLEkoYyk/KGU9XCJcIixudWxsIT1hJiYoZT1hLnJlcGxhY2UoUCxcIiQmL1wiKStcIi9cIiksUihjLGIsZSxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWMmJihPKGMpJiYoYz1OKGMsZSsoIWMua2V5fHxoJiZoLmtleT09PWMua2V5P1wiXCI6KFwiXCIrYy5rZXkpLnJlcGxhY2UoUCxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChjKSksMTtoPTA7ZD1cIlwiPT09ZD9cIi5cIjpkK1wiOlwiO2lmKEkoYSkpZm9yKHZhciBnPTA7ZzxhLmxlbmd0aDtnKyspe2s9XG5hW2ddO3ZhciBmPWQrUShrLGcpO2grPVIoayxiLGUsZixjKX1lbHNlIGlmKGY9QShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZCtRKGssZysrKSxoKz1SKGssYixlLGYsYyk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVN0cmluZyhhKSxFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIrKFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpK1wiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiKTtyZXR1cm4gaH1cbmZ1bmN0aW9uIFMoYSxiLGUpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGQ9W10sYz0wO1IoYSxkLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGUsYSxjKyspfSk7cmV0dXJuIGR9ZnVuY3Rpb24gVChhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2IudGhlbihmdW5jdGlvbihiKXtpZigwPT09YS5fc3RhdHVzfHwtMT09PWEuX3N0YXR1cylhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yn0sZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWJ9KTstMT09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0wLGEuX3Jlc3VsdD1iKX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQuZGVmYXVsdDt0aHJvdyBhLl9yZXN1bHQ7fVxudmFyIFU9e2N1cnJlbnQ6bnVsbH0sVj17dHJhbnNpdGlvbjpudWxsfSxXPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlUsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6VixSZWFjdEN1cnJlbnRPd25lcjpLfTtmdW5jdGlvbiBYKCl7dGhyb3cgRXJyb3IoXCJhY3QoLi4uKSBpcyBub3Qgc3VwcG9ydGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzIG9mIFJlYWN0LlwiKTt9XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6Uyxmb3JFYWNoOmZ1bmN0aW9uKGEsYixlKXtTKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZSl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UyhhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFMoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTyhhKSl0aHJvdyBFcnJvcihcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUU7ZXhwb3J0cy5GcmFnbWVudD1wO2V4cG9ydHMuUHJvZmlsZXI9cjtleHBvcnRzLlB1cmVDb21wb25lbnQ9RztleHBvcnRzLlN0cmljdE1vZGU9cTtleHBvcnRzLlN1c3BlbnNlPXc7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVc7ZXhwb3J0cy5hY3Q9WDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixlKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiK2ErXCIuXCIpO3ZhciBkPUMoe30sYS5wcm9wcyksYz1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Sy5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGM9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilKLmNhbGwoYixmKSYmIUwuaGFzT3duUHJvcGVydHkoZikmJihkW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZC5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO1xuZm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEudHlwZSxrZXk6YyxyZWY6ayxwcm9wczpkLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEpe2E9eyQkdHlwZW9mOnUsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsLF9kZWZhdWx0VmFsdWU6bnVsbCxfZ2xvYmFsTmFtZTpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp0LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1NO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1NLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07XG5leHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PU87ZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp5LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6VH19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp4LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy5zdGFydFRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dmFyIGI9Vi50cmFuc2l0aW9uO1YudHJhbnNpdGlvbj17fTt0cnl7YSgpfWZpbmFsbHl7Vi50cmFuc2l0aW9uPWJ9fTtleHBvcnRzLnVuc3RhYmxlX2FjdD1YO2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhKXtyZXR1cm4gVS5jdXJyZW50LnVzZUNvbnRleHQoYSl9O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZURlZmVycmVkVmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VEZWZlcnJlZFZhbHVlKGEpfTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZUlkKCl9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixlKX07ZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUluc2VydGlvbkVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlTGF5b3V0RWZmZWN0KGEsYil9O1xuZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWR1Y2VyKGEsYixlKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VTdGF0ZShhKX07ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VTeW5jRXh0ZXJuYWxTdG9yZShhLGIsZSl9O2V4cG9ydHMudXNlVHJhbnNpdGlvbj1mdW5jdGlvbigpe3JldHVybiBVLmN1cnJlbnQudXNlVHJhbnNpdGlvbigpfTtleHBvcnRzLnZlcnNpb249XCIxOC4zLjFcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlIFJlYWN0XG4gKiBzY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO2Z1bmN0aW9uIGYoYSxiKXt2YXIgYz1hLmxlbmd0aDthLnB1c2goYik7YTpmb3IoOzA8Yzspe3ZhciBkPWMtMT4+PjEsZT1hW2RdO2lmKDA8ZyhlLGIpKWFbZF09YixhW2NdPWUsYz1kO2Vsc2UgYnJlYWsgYX19ZnVuY3Rpb24gaChhKXtyZXR1cm4gMD09PWEubGVuZ3RoP251bGw6YVswXX1mdW5jdGlvbiBrKGEpe2lmKDA9PT1hLmxlbmd0aClyZXR1cm4gbnVsbDt2YXIgYj1hWzBdLGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aCx3PWU+Pj4xO2Q8dzspe3ZhciBtPTIqKGQrMSktMSxDPWFbbV0sbj1tKzEseD1hW25dO2lmKDA+ZyhDLGMpKW48ZSYmMD5nKHgsQyk/KGFbZF09eCxhW25dPWMsZD1uKTooYVtkXT1DLGFbbV09YyxkPW0pO2Vsc2UgaWYobjxlJiYwPmcoeCxjKSlhW2RdPXgsYVtuXT1jLGQ9bjtlbHNlIGJyZWFrIGF9fXJldHVybiBifVxuZnVuY3Rpb24gZyhhLGIpe3ZhciBjPWEuc29ydEluZGV4LWIuc29ydEluZGV4O3JldHVybiAwIT09Yz9jOmEuaWQtYi5pZH1pZihcIm9iamVjdFwiPT09dHlwZW9mIHBlcmZvcm1hbmNlJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgcGVyZm9ybWFuY2Uubm93KXt2YXIgbD1wZXJmb3JtYW5jZTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBsLm5vdygpfX1lbHNle3ZhciBwPURhdGUscT1wLm5vdygpO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHAubm93KCktcX19dmFyIHI9W10sdD1bXSx1PTEsdj1udWxsLHk9Myx6PSExLEE9ITEsQj0hMSxEPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6bnVsbCxFPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0Om51bGwsRj1cInVuZGVmaW5lZFwiIT09dHlwZW9mIHNldEltbWVkaWF0ZT9zZXRJbW1lZGlhdGU6bnVsbDtcblwidW5kZWZpbmVkXCIhPT10eXBlb2YgbmF2aWdhdG9yJiZ2b2lkIDAhPT1uYXZpZ2F0b3Iuc2NoZWR1bGluZyYmdm9pZCAwIT09bmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcmJm5hdmlnYXRvci5zY2hlZHVsaW5nLmlzSW5wdXRQZW5kaW5nLmJpbmQobmF2aWdhdG9yLnNjaGVkdWxpbmcpO2Z1bmN0aW9uIEcoYSl7Zm9yKHZhciBiPWgodCk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylrKHQpO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpayh0KSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLGYocixiKTtlbHNlIGJyZWFrO2I9aCh0KX19ZnVuY3Rpb24gSChhKXtCPSExO0coYSk7aWYoIUEpaWYobnVsbCE9PWgocikpQT0hMCxJKEopO2Vsc2V7dmFyIGI9aCh0KTtudWxsIT09YiYmSyhILGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIEooYSxiKXtBPSExO0ImJihCPSExLEUoTCksTD0tMSk7ej0hMDt2YXIgYz15O3RyeXtHKGIpO2Zvcih2PWgocik7bnVsbCE9PXYmJighKHYuZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFNKCkpOyl7dmFyIGQ9di5jYWxsYmFjaztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7di5jYWxsYmFjaz1udWxsO3k9di5wcmlvcml0eUxldmVsO3ZhciBlPWQodi5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP3YuY2FsbGJhY2s9ZTp2PT09aChyKSYmayhyKTtHKGIpfWVsc2UgayhyKTt2PWgocil9aWYobnVsbCE9PXYpdmFyIHc9ITA7ZWxzZXt2YXIgbT1oKHQpO251bGwhPT1tJiZLKEgsbS5zdGFydFRpbWUtYik7dz0hMX1yZXR1cm4gd31maW5hbGx5e3Y9bnVsbCx5PWMsej0hMX19dmFyIE49ITEsTz1udWxsLEw9LTEsUD01LFE9LTE7XG5mdW5jdGlvbiBNKCl7cmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCktUTxQPyExOiEwfWZ1bmN0aW9uIFIoKXtpZihudWxsIT09Tyl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtRPWE7dmFyIGI9ITA7dHJ5e2I9TyghMCxhKX1maW5hbGx5e2I/UygpOihOPSExLE89bnVsbCl9fWVsc2UgTj0hMX12YXIgUztpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgRilTPWZ1bmN0aW9uKCl7RihSKX07ZWxzZSBpZihcInVuZGVmaW5lZFwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgVD1uZXcgTWVzc2FnZUNoYW5uZWwsVT1ULnBvcnQyO1QucG9ydDEub25tZXNzYWdlPVI7Uz1mdW5jdGlvbigpe1UucG9zdE1lc3NhZ2UobnVsbCl9fWVsc2UgUz1mdW5jdGlvbigpe0QoUiwwKX07ZnVuY3Rpb24gSShhKXtPPWE7Tnx8KE49ITAsUygpKX1mdW5jdGlvbiBLKGEsYil7TD1EKGZ1bmN0aW9uKCl7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sYil9XG5leHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O2V4cG9ydHMudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk9MTtleHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5PTQ7ZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eT0zO2V4cG9ydHMudW5zdGFibGVfUHJvZmlsaW5nPW51bGw7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7YS5jYWxsYmFjaz1udWxsfTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7QXx8enx8KEE9ITAsSShKKSl9O1xuZXhwb3J0cy51bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZT1mdW5jdGlvbihhKXswPmF8fDEyNTxhP2NvbnNvbGUuZXJyb3IoXCJmb3JjZUZyYW1lUmF0ZSB0YWtlcyBhIHBvc2l0aXZlIGludCBiZXR3ZWVuIDAgYW5kIDEyNSwgZm9yY2luZyBmcmFtZSByYXRlcyBoaWdoZXIgdGhhbiAxMjUgZnBzIGlzIG5vdCBzdXBwb3J0ZWRcIik6UD0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiB5fTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGgocil9O2V4cG9ydHMudW5zdGFibGVfbmV4dD1mdW5jdGlvbihhKXtzd2l0Y2goeSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6dmFyIGI9MzticmVhaztkZWZhdWx0OmI9eX12YXIgYz15O3k9Yjt0cnl7cmV0dXJuIGEoKX1maW5hbGx5e3k9Y319O2V4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O1xuZXhwb3J0cy51bnN0YWJsZV9yZXF1ZXN0UGFpbnQ9ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5PWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6YnJlYWs7ZGVmYXVsdDphPTN9dmFyIGM9eTt5PWE7dHJ5e3JldHVybiBiKCl9ZmluYWxseXt5PWN9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jPyhjPWMuZGVsYXksYz1cIm51bWJlclwiPT09dHlwZW9mIGMmJjA8Yz9kK2M6ZCk6Yz1kO3N3aXRjaChhKXtjYXNlIDE6dmFyIGU9LTE7YnJlYWs7Y2FzZSAyOmU9MjUwO2JyZWFrO2Nhc2UgNTplPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSA0OmU9MUU0O2JyZWFrO2RlZmF1bHQ6ZT01RTN9ZT1jK2U7YT17aWQ6dSsrLGNhbGxiYWNrOmIscHJpb3JpdHlMZXZlbDphLHN0YXJ0VGltZTpjLGV4cGlyYXRpb25UaW1lOmUsc29ydEluZGV4Oi0xfTtjPmQ/KGEuc29ydEluZGV4PWMsZih0LGEpLG51bGw9PT1oKHIpJiZhPT09aCh0KSYmKEI/KEUoTCksTD0tMSk6Qj0hMCxLKEgsYy1kKSkpOihhLnNvcnRJbmRleD1lLGYocixhKSxBfHx6fHwoQT0hMCxJKEopKSk7cmV0dXJuIGF9O1xuZXhwb3J0cy51bnN0YWJsZV9zaG91bGRZaWVsZD1NO2V4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPXk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9eTt5PWI7dHJ5e3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1maW5hbGx5e3k9Y319fTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibmFtZXMiOlsiX19tYWtlVGVtcGxhdGVPYmplY3QiLCJjb29rZWQiLCJyYXciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwianN4IiwiX2pzeCIsImNzcyIsIkhvbWVQYWdlIiwidGVtcGxhdGVPYmplY3RfMSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNoaWxkcmVuIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJqc3hzIiwiX2pzeHMiLCJHbG9iYWwiLCJlbW90aW9uTm9ybWFsaXplIiwiQXBwIiwic3R5bGVzIiwiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJTdHJpY3RNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==