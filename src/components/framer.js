export const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: custom,
      },
    }),
  };

export const slideInRight = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: custom,
      },
    }),
  };

 export const cardVariant = {
    hidden: { 
      opacity: 0 ,
      y: 100,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      after: { opacity: 1, y: 0 },
      transition: {
        duration: 1,
        delay: custom * 0.2,
        ease: 'easeIn'
      },
    }),
  };

  export const formVar = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  export const boostVar = {
    hidden: {
      opacity: 0.5,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };