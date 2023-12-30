"use client";
import React, { useState } from "react";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

const SettingsPage = () => {
  const [siteName, setSiteName] = useState("");
  const [siteURL, setSiteURL] = useState("");
  const [themeColor, setThemeColor] = useState("#000000");
  const [fontSize, setFontSize] = useState("medium");
  const [displayLogo, setDisplayLogo] = useState(true);
  const [allowNotifications, setAllowNotifications] = useState(false);

  const handleSaveSettings = () => {
    // Handle saving settings logic here
    console.log("Settings saved:", {
      siteName,
      siteURL,
      themeColor,
      fontSize,
      displayLogo,
      allowNotifications,
    });
    // database logic here
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 py-8">
      <div className="w-4/5 md:max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

        <div className="bg-white shadow-md rounded-md p-6">
          {/* General Settings Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">General Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="siteName" className="block mb-1 font-medium">
                  Website Name
                </label>
                <input
                  type="text"
                  id="siteName"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  placeholder="Enter website name"
                  className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="siteURL" className="block mb-1 font-medium">
                  Website URL
                </label>
                <input
                  type="text"
                  id="siteURL"
                  value={siteURL}
                  onChange={(e) => setSiteURL(e.target.value)}
                  placeholder="Enter website URL"
                  className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Display Settings Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Display Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="themeColor" className="block mb-1 font-medium">
                  Theme Color
                </label>
                <input
                  type="color"
                  id="themeColor"
                  value={themeColor}
                  onChange={(e) => setThemeColor(e.target.value)}
                  className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="fontSize" className="block mb-1 font-medium">
                  Font Size
                </label>
                <select
                  id="fontSize"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Settings Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Additional Settings</h2>
            <div className="flex items-center justify-between mb-4">
              <label
                htmlFor="displayLogo"
                className="flex items-center font-medium"
              >
                Display Logo
                {displayLogo ? (
                  <AiFillCheckCircle className="ml-2 text-green-500" />
                ) : (
                  <AiOutlineCheckCircle className="ml-2 text-gray-400" />
                )}
                <input
                  type="checkbox"
                  id="displayLogo"
                  checked={displayLogo}
                  onChange={() => setDisplayLogo(!displayLogo)}
                  className="hidden"
                />
              </label>
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="allowNotifications"
                className="flex items-center font-medium"
              >
                Allow Notifications
                {allowNotifications ? (
                  <AiFillCheckCircle className="ml-2 text-green-500" />
                ) : (
                  <AiOutlineCheckCircle className="ml-2 text-gray-400" />
                )}
                <input
                  type="checkbox"
                  id="allowNotifications"
                  checked={allowNotifications}
                  onChange={() => setAllowNotifications(!allowNotifications)}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Button to Save Settings */}
          <div>
            <button
              type="button"
              onClick={handleSaveSettings}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
