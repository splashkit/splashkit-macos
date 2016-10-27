#!/bin/bash
GIT_WINDOWS_REPO=https://github.com/splashkit/splashkit-macos

HOME_PATH=~
INSTALL_PATH="${HOME_PATH}/.splashkit"

# command -v clang >/dev/null 2>&1 || { echo "SplashKit will install, but we can not find a clang compiler. Please run Xcode developer command."}
if which clang++ >/dev/null; then
  CLANG_EXISTS=true
else
  echo "Developer tools not installed, please run: \"xcode-select --install\" in the terminal and then rerun this script."
fi

# Clone the repos if git is found.
if which git >/dev/null; then
    git clone --depth 1 $GIT_MACOS_REPO "${INSTALL_PATH}"
  else
    echo 'Git not found, can''t install splashkit. Please run xcode developer command.'
fi

# Unzip the SKM app.
echo "unzipping"
unzip "$INSTALL_PATH/skm/skm.zip" -d "$INSTALL_PATH/skm" > "$INSTALL_PATH/skm/install.log"
rm "$INSTALL_PATH/skm/skm.zip"

# Add SKM app to path without needing sudo
echo "export PATH=\""$INSTALL_PATH/skm/skm.app/Contents/MacOs:\$PATH\""" >> ~/.bash_profile

if [ -f ~/.zshrc ]; then
    echo "export PATH=\""$INSTALL_PATH/.splashkit/skm/skm.app/Contents/MacOs:\$PATH\""" >> ~/.zshrc
fi
export PATH=\""$HOME/.splashkit/skm/skm.app/Contents/MacOS:\$PATH\""

echo "SplashKit Successfully installed! Please restart your terminal..."
