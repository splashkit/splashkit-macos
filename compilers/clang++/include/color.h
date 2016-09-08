/*
 * SplashKit Color
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __color_h
#define __color_h
#include "types.h"
#include <string>
using std::string;

unsigned char alpha_of(color c);
string color_to_string(color c);
color rgba_color(float red, float green, float blue, float alpha);
color string_to_color(string str);

#endif /* __color_h */
