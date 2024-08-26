import { useThemeStore } from "@/store/useThemeStore";
import { Switch } from "@mui/material";

export function ButtonTheme() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleTheme}
      inputProps={{ "aria-label": "toggle theme" }}
    />
  );
}
