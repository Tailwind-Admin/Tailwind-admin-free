export type ConfigProps = {
  Sidebar_drawer: any;
  Customizer_drawer: boolean;
  mini_sidebar: boolean;
  setHorizontalLayout: boolean;
  setRTLLayout: boolean;
  actTheme: string;
  themeMode: string;
  boxed: boolean;
  setBorderCard: boolean;
  borderRadius: number;
};

const config: ConfigProps = {
  Sidebar_drawer: null,
  Customizer_drawer: false,
  mini_sidebar: false,
  setHorizontalLayout: false, // Horizontal layout
  setRTLLayout: false, // RTL layout
  actTheme: "BLUE_THEME",
  themeMode: "light", // light / dark
  boxed: true,
  setBorderCard: false,
  borderRadius: 8,
};

export default config;
