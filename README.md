# n

A super simple Linux desktop app for [Notion](https://www.notion.so/). No extra trackers, analytics, or bloat. Just Notion. This app creates a new Electron instance and loads the URL `https://www.notion.so`.

![](/_github-assets/n-screenshot.png)

It's compatible with any system that can run a `.deb` file. If you're running Debian GNU/Linux, Ubuntu, Linux Mint, Pop_OS, or some other flavor of Ubuntu, you're set.

## How to Install
First, head to the releases page [here](https://github.com/cyb/n/releases). Then, find the latest release and download the `.deb` file under the "Assets" dropdown. Your machine may know how to open `.deb` files automatically, but if not, you can consult [this guide](https://askubuntu.com/questions/40779/how-do-i-install-a-deb-file-via-the-command-line/40781#40781). If you're stuck, feel free to open an issue [here](https://github.com/cyb/n/issues).

This should create an app named `notion`.

## Building
You can also build the app from source. 
1. Open your favorite terminal and enter:
   ```shell
   git clone https://github.com/cyb/n.git
   ```

2. Enter the directory with this command:
   ```shell
   cd n
   ```

3. Install the needed dependencies with npm.
   ```shell
   npm install
   ```
   Don't have npm? No problem. It's free [here](https://www.npmjs.com/get-npm).

4. Build the app with this command:
   ```shell
   npm run package-linux
   ```

5. Package the app into an installable `.deb` file with this command:
   ```shell
   npm run create-debian-installer
   ```

6. This should have made two nested folders named `dist/installers/`. Enter that folder using your file explorer and open the latest file to begin the installation. If your computer does not automatically install `.deb` files, you can manually do so by following [this guide](https://askubuntu.com/questions/40779/how-do-i-install-a-deb-file-via-the-command-line/40781#40781).

---

⚠️ If you run into any issues at all, feel free to open an issue [here](https://github.com/cyb/n/issues). I'm here to help. There are no stupid questions, and we were all beginners once. (\* \^ ω \^)