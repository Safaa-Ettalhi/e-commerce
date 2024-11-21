/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // a ncreew container dyalna dkchi 3lach dart had ster dyal 'blocklist'
  blocklist: ["container"],
  theme: {
    extend: {
      colors: {
        // loun ra2issi mor lbyed w lk7el
        lightGray: "#f3f4f6",
        // loun nhtajouh fchi haja bhal l hover, focus...
        mediumGray: "#e5e7eb",
        // n9edou manhtajouhch ga3, lmohim kayn hh
        darkGray: "#d1d5db",
      },
      
      fontFamily: {
        // font d site kaml
        FunnelDisplay: ["funnel display", "sans"],
        // font li ghaykon f l3anawin lkbar
        GaMaamli: ["ga maamli", "sans"],
      }
    },
  },
  plugins: [],
}