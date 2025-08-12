import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content:['./app/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
       //red: '#FF0'
      }
    }
  }
}
