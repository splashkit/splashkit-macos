/*
 * SplashKit Window Manager
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __window_manager_h
#define __window_manager_h
#include <string>
using std::string;

struct _window_data;
typedef struct _window_data *window;
void close_all_windows();
int window_height(const string &name);
int window_height(window wind);
int window_width(const string &name);
int window_width(window wind);

#endif /* __window_manager_h */
