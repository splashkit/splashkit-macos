/*
 * SplashKit Keyboard Input
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __keyboard_input_h
#define __keyboard_input_h

#include <string>
using std::string;


typedef enum {
    UNKNOWN_KEY,
    BACKSPACE_KEY,
    TAB_KEY,
    CLEAR_KEY,
    RETURN_KEY,
    PAUSE_KEY,
    ESCAPE_KEY,
    SPACE_KEY,
    EXCLAIM_KEY,
    DOUBLE_QUOTE_KEY,
    HASH_KEY,
    DOLLAR_KEY,
    AMPERSAND_KEY,
    QUOTE_KEY,
    LEFT_PAREN_KEY,
    RIGHT_PAREN_KEY,
    ASTERISK_KEY,
    PLUS_KEY,
    COMMA_KEY,
    MINUS_KEY,
    PERIOD_KEY,
    SLASH_KEY,
    NUM_0_KEY,
    NUM_1_KEY,
    NUM_2_KEY,
    NUM_3_KEY,
    NUM_4_KEY,
    NUM_5_KEY,
    NUM_6_KEY,
    NUM_7_KEY,
    NUM_8_KEY,
    NUM_9_KEY,
    COLON_KEY,
    SEMI_COLON_KEY,
    LESS_KEY,
    EQUALS_KEY,
    GREATER_KEY,
    QUESTION_KEY,
    AT_KEY,
    LEFT_BRACKET_KEY,
    BACKSLASH_KEY,
    RIGHT_BRACKET_KEY,
    CARET_KEY,
    UNDERSCORE_KEY,
    BACKQUOTE_KEY,
    A_KEY,
    B_KEY,
    C_KEY,
    D_KEY,
    E_KEY,
    F_KEY,
    G_KEY,
    H_KEY,
    I_KEY,
    J_KEY,
    K_KEY,
    L_KEY,
    M_KEY,
    N_KEY,
    O_KEY,
    P_KEY,
    Q_KEY,
    R_KEY,
    S_KEY,
    T_KEY,
    U_KEY,
    V_KEY,
    W_KEY,
    X_KEY,
    Y_KEY,
    Z_KEY,
    DELETE_KEY,
    KEYPAD_0,
    KEYPAD_1,
    KEYPAD_2,
    KEYPAD_3,
    KEYPAD_4,
    KEYPAD_5,
    KEYPAD_6,
    KEYPAD_7,
    KEYPAD_8,
    KEYPAD_9,
    KEYPAD_PERIOD,
    KEYPAD_DIVIDE,
    KEYPAD_MULTIPLY,
    KEYPAD_MINUS,
    KEYPAD_PLUS,
    KEYPAD_ENTER,
    KEYPAD_EQUALS,
    UP_KEY,
    DOWN_KEY,
    RIGHT_KEY,
    LEFT_KEY,
    INSERT_KEY,
    HOME_KEY,
    END_KEY,
    PAGE_UP_KEY,
    PAGE_DOWN_KEY,
    F1_KEY,
    F2_KEY,
    F3_KEY,
    F4_KEY,
    F5_KEY,
    F6_KEY,
    F7_KEY,
    F8_KEY,
    F9_KEY,
    F10_KEY,
    F11_KEY,
    F12_KEY,
    F13_KEY,
    F14_KEY,
    F15_KEY,
    NUM_LOCK_KEY,
    CAPS_LOCK_KEY,
    SCROLL_LOCK_KEY,
    RIGHT_SHIFT_KEY,
    LEFT_SHIFT_KEY,
    RIGHT_CTRL_KEY,
    LEFT_CTRL_KEY,
    RIGHT_ALT_KEY,
    LEFT_ALT_KEY,
    RIGHT_OPTION_KEY,
    LEFT_OPTION_KEY,
    LEFT_SUPER_KEY,
    RIGHT_SUPER_KEY,
    LEFT_WINDOWS_KEY,
    RIGHT_WINDOWS_KEY,
    LEFT_COMMAND_KEY,
    RIGHT_COMMAND_KEY,
    MODE_KEY,
    HELP_KEY,
    SYS_REQ_KEY,
    MENU_KEY,
    POWER_KEY
} key_code;
typedef void (key_callback)(key_code code);
bool any_key_pressed();
void deregister_callback_on_key_down(key_callback *callback);
void deregister_callback_on_key_typed(key_callback *callback);
void deregister_callback_on_key_up(key_callback *callback);
bool key_down(key_code key);
string key_name(key_code key);
bool key_released(key_code key);
bool key_typed(key_code key);
bool key_up(key_code key);
void register_callback_on_key_down(key_callback *callback);
void register_callback_on_key_typed(key_callback *callback);
void register_callback_on_key_up(key_callback *callback);

#endif /* __keyboard_input_h */
