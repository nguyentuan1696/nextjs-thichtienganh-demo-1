module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-each': {},
    'postcss-for': {},
    'postcss-nested-ancestors': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'color-mod-function': { unresolved: 'ignore' },
        'custom-properties': false,
      },
    },
    'postcss-mixins': {
      mixins: {
        transition: (mixin, properties, duration, timing) => {
          duration = duration || 'var(--transition-fast)'
          timing = timing || 'var(--transition-timing-default)'

          if (properties.includes(' ')) {
            return {
              'transition-property': properties.replace(/\s/g, ', '),
              'transition-duration': duration,
              'transition-timing-function': timing,
            }
          } else {
            return {
              transition: [properties, duration, timing].join(' '),
            }
          }
        },
      },
    },
    'postcss-nested': {},
    'postcss-sort-media-queries': {},
    'postcss-combine-duplicated-selectors': {},
  },
}