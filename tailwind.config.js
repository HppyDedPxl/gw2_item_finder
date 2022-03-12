module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'xs':'360px',
      },
      colors: {
        primary:"#232530",
        primaryHL: "#3d3f4d",
        secondary:"#3c4b4a",
        secondaryHL:"#495f5e",
        tertiary:"#aaf46e",
        quaternary:"#211b27",
        link:"#9e9e9e",

        topnavbutton:"#232530",
        topnavhover:"#3c4b4a",
        topnavactive:"#aaf46e",

        positive:"#aaf46e",
        negative:"#ff4040ff",
        info:"#2b97fd"
      },
      boxShadow: {
        'sp' : '4px 4px 4px rgba(0,0,0,0.7)',
        'nav' : '0px 4px 4px rgba(0,0,0,0.7)',
        'footer' : '0px -4px 4px rgba(0,0,0,0.7)',
        'r' : '4px 0px 4px rgba(0,0,0,0.7)',

      }
    }
  },
  plugins: [],
} 