require('./heal_recipes'); // ou './path/to/heal'
require('dotenv').config({ path: '.env' });

const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: '',
      show: false,
      windowSize: '1200x900',
      browser: 'chromium',
      waitForNavigation: 'domcontentloaded'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/!(skip_*.feature)',
    steps: './step_definitions/*_steps.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    heal: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  ai: {
    request: async (messages) => {
      const completion = await groq.chat.completions.create({
        model: "mixtral-8x7b-32768",
        messages,
      });
      return completion?.choices[0]?.message?.content || "";
    }
  },
}