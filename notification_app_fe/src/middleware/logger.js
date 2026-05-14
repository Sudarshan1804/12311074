import axios from "axios";
const LOG_API = "http://4.224.186.213/evaluation-service/logs";
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const validStacks = ["frontend", "backend"];
const validLevels = [
  "debug",
  "info",
  "warn",
  "error",
  "fatal"
];
const validFrontendPackages = [
  "api",
  "component",
  "hook",
  "page",
  "state",
  "style",
  "middleware",
  "utils"
];

export async function Log(stack,level,packageName,message) {
  try {
    if (!validStacks.includes(stack)) {
      throw new Error("Invalid stack");
    }
    if (!validLevels.includes(level)) {
      throw new Error("Invalid level");
    }
    if (!validFrontendPackages.includes(packageName)) {
      throw new Error("Invalid package");
    }
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data;
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}