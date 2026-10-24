// The start-up terminal. Edit freely: the verbs are picked at random on each visit.

export const BIRTH_YEAR = 1992;

export const boot = {
  prompt: 'simon@rome:~$',
  build: {
    command: 'make simon',
    note: 'no prebuilt binaries found, building from source',
    done: (years: number) => `built from source in ${years} years. Self-taught, no template.`,
  },
  serve: {
    command: './simon --serve madebysimon.dev',
    done: 'instance of Simon running in Rome, IT',
  },
  verbs: [
    'Soldering',
    'Googling the error',
    'Reading the manual',
    'Rubber-ducking',
    'Unbricking a router',
    'Printing a bracket',
    'Sidechaining the kick',
    'Desoldering the mistake',
    'Turning it off and on again',
    'Calibrating the bed',
    'Asking a forum thread from 2009',
    'Reflashing the firmware',
    'Defragmenting',
    'Reticulating splines',
  ],
};
