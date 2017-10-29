var AgileKeyConstants = {

	/* Modifiers */
	'KEY_CODE_SHIFT':           16,
	'KEY_CODE_CTRL':            17,
	'KEY_CODE_ALT':             18,
	'KEY_CODE_CAPS_LOCK':       20,
	'KEY_CODE_CMD':             224,

	/* Arrows */
	'KEY_CODE_ARROW_LEFT':      37,
	'KEY_CODE_ARROW_UP':        38,
	'KEY_CODE_ARROW_RIGHT':     39,
	'KEY_CODE_ARROW_DOWN':      40,

	/* Chars - Alpha */
	'KEY_CODE_CHAR_A':          65,
	'KEY_CODE_CHAR_B':          66,
	'KEY_CODE_CHAR_C':          67,
	'KEY_CODE_CHAR_D':          68,
	'KEY_CODE_CHAR_E':          69,
	'KEY_CODE_CHAR_F':          70,
	'KEY_CODE_CHAR_G':          71,
	'KEY_CODE_CHAR_H':          72,
	'KEY_CODE_CHAR_I':          73,
	'KEY_CODE_CHAR_J':          74,
	'KEY_CODE_CHAR_K':          75,
	'KEY_CODE_CHAR_L':          76,
	'KEY_CODE_CHAR_M':          77,
	'KEY_CODE_CHAR_N':          78,
	'KEY_CODE_CHAR_O':          79,
	'KEY_CODE_CHAR_P':          80,
	'KEY_CODE_CHAR_Q':          81,
	'KEY_CODE_CHAR_R':          82,
	'KEY_CODE_CHAR_S':          83,
	'KEY_CODE_CHAR_T':          84,
	'KEY_CODE_CHAR_U':          85,
	'KEY_CODE_CHAR_V':          86,
	'KEY_CODE_CHAR_W':          87,
	'KEY_CODE_CHAR_X':          88,
	'KEY_CODE_CHAR_Y':          89,
	'KEY_CODE_CHAR_Z':          90,

	/* Chars - Numeric */
	'KEY_CODE_CHAR_0':          48,
	'KEY_CODE_CHAR_1':          49,
	'KEY_CODE_CHAR_2':          50,
	'KEY_CODE_CHAR_3':          51,
	'KEY_CODE_CHAR_4':          52,
	'KEY_CODE_CHAR_5':          53,
	'KEY_CODE_CHAR_6':          54,
	'KEY_CODE_CHAR_7':          55,
	'KEY_CODE_CHAR_8':          56,
	'KEY_CODE_CHAR_9':          57,

	/* Num Pad */
	'KEY_CODE_NUMPAD_0':        96,
	'KEY_CODE_NUMPAD_1':        97,
	'KEY_CODE_NUMPAD_2':        98,
	'KEY_CODE_NUMPAD_3':        99,
	'KEY_CODE_NUMPAD_4':        100,
	'KEY_CODE_NUMPAD_5':        101,
	'KEY_CODE_NUMPAD_6':        102,
	'KEY_CODE_NUMPAD_7':        103,
	'KEY_CODE_NUMPAD_8':        104,
	'KEY_CODE_NUMPAD_9':        105,
	'KEY_CODE_NUMPAD_MULTIPLY': 106,
	'KEY_CODE_NUMPAD_ADD':      107,
	'KEY_CODE_NUMPAD_SUBTRACT': 109,
	'KEY_CODE_NUMPAD_DECIMAL':  110,
	'KEY_CODE_NUMPAD_DIVIDE':   111,
	'KEY_CODE_NUMPAD_ENTER':    13,

	/* Everything Else */
	'KEY_CODE_BACKSPACE':       8,
	'KEY_CODE_TAB':             9,
	'KEY_CODE_ENTER':           13,
	'KEY_CODE_ESCAPE':          27,
	'KEY_CODE_SPACEBAR':        32,
	'KEY_CODE_PAGE_UP':         33,  // May not report
	'KEY_CODE_PAGE_DOWN':       34,  // May not report
	'KEY_CODE_END':             35,  // May not report
	'KEY_CODE_HOME':            36,  // May not report
	'KEY_CODE_INSERT':          45,  // May not report
	'KEY_CODE_DELETE':          46,  // May report 127
	'KEY_CODE_SEMICOLON':       59,
	'KEY_CODE_COLON':           59,  // May not report
	'KEY_CODE_EQUAL':           61,
	'KEY_CODE_PLUS':            61,  // May not report
	'KEY_CODE_MINUS':           0,
	'KEY_CODE_UNDERBAR':        0,
	'KEY_CODE_SLASH':           191,
	'KEY_CODE_QUESTION_MARK':   191,  // May not report
	'KEY_CODE_BACKTICK':        192,
	'KEY_CODE_TILDE':           192,  // May not report
	'KEY_CODE_LEFT_BRACKET':    219,
	'KEY_CODE_LEFT_BRACE':      219,  // May not report
	'KEY_CODE_RIGHT_BRACKET':   221,
	'KEY_CODE_RIGHT_BRACE':     221,  // May not report
	'KEY_CODE_BACKSLASH':       220,
	'KEY_CODE_PIPE':            220,  // May not report
	'KEY_CODE_SINGLE_QUOTE':    222,
	'KEY_CODE_DOUBLE_QUOTE':    222,  // May not report
	'KEY_CODE_COMMA':           188,
	'KEY_CODE_LEFT_ANGLE':      188,  // May not report
	'KEY_CODE_PERIOD':          190,
	'KEY_CODE_RIGHT_ANGLE':     190  // May not report
};

if (window.BROWSER && window.BROWSER.isSafari) {
	var AgileKeyConstantsSafari = {
		'KEY_CODE_SHIFT_TAB':      25,
		'KEY_CODE_ARROW_LEFT':     63234,
		'KEY_CODE_ARROW_UP':       63232,
		'KEY_CODE_ARROW_RIGHT':    63235,
		'KEY_CODE_ARROW_DOWN':     63233
	};
} 


var AgileBrowserEventConstants = {
	/* Key Events */
	'KEY_DOWN':                 "keydown",
	'KEY_UP':                   "keyup",
	'KEY_PRESS':                "keypress",
	
	/* Mouse Events */
	'MOUSE_DOWN':               "mousedown",
	'MOUSE_UP':                 "mouseup",
	'MOUSE_MOVE':               "mousemove",
	'MOUSE_CLICK':              "click",
	'MOUSE_DOUBLE_CLICK':       "dblclick"
};




var AgileEventConstants = {
	/* "Standard" Event Constants */
	'EVENT_SELECT_ALL':            1,
	'EVENT_TAB_FORWARD':           2,
	'EVENT_TAB_BACKWARD':          3,
	'EVENT_LAUNCH_PALETTE':        4,
	'EVENT_MOVE_UP':               5,
	'EVENT_MOVE_DOWN':             6,
	'EVENT_MOVE_LEFT':             7,
	'EVENT_MOVE_RIGHT':            8,
	'EVENT_MOVE_TOP':              9,    // Returns two handlers
	'EVENT_MOVE_BOTTOM':           10,   // Returns two handlers
	'EVENT_RANGE_SELECT_UP':       11,
	'EVENT_RANGE_SELECT_DOWN':     12,
	'EVENT_RANGE_SELECT_LEFT':     13,
	'EVENT_RANGE_SELECT_RIGHT':    14,
	'EVENT_RANGE_SELECT_TOP':      15,   // Returns two handlers
	'EVENT_RANGE_SELECT_BOTTOM':   16,   // Returns two handlers
	'EVENT_RANGE_SELECT_MOUSE':    17,
	'EVENT_ADDITIVE_SELECT_MOUSE': 18,
	'EVENT_EXPAND_ALL':            19,
	'EVENT_COLLAPSE_ALL':          20,
	'EVENT_COPY':                  21,
	'EVENT_PASTE':                 22,		
	'EVENT_PRINT':                 23,
	'EVENT_SEARCH':                24,
	'EVENT_ESCAPE':                25,
	'EVENT_ENTER':                 26,
	'EVENT_DELETE':                27,
	'EVENT_PAGE_UP':               28,
	'EVENT_PAGE_DOWN':             29,
	'EVENT_ACCESS_SEARCH':         30,
	'EVENT_NAVIGATE_HOME':         31,
	'EVENT_ACCESS_CREATE_MENU':    33,
	'EVENT_NAVIGATE_PARAM_SEARCH': 34
};
