# Preloading

`PreloadAllModules` could be very CPU and bandwidth intensive for large apps, and thus considered a bad practice. This is an automatically generated app which demonstrates this.

## Comparison

As you can see from the comparison below, using `PreloadAllModules` is ~15x more CPU expensive compared to not using it.

**Keep in mind that this example does not represent the average Angular app because it contains 500 generated routes.** For an app with a few dozens of lazy routes the impact will be significantly lower.

### Without `PreloadAllModules`

<a href="https://raw.githubusercontent.com/mgechev/preload-all-stress-test/master/assets/no-preload-all.png.png" target="_blank"><img src="https://raw.githubusercontent.com/mgechev/preload-all-stress-test/master/assets/no-preload-all.png.png" alt="Without PreloadAllModules"></a>

### Using `PreloadAllModules`

<a href="https://raw.githubusercontent.com/mgechev/preload-all-stress-test/master/assets/preload-all.png.png" target="_blank"><img src="https://raw.githubusercontent.com/mgechev/preload-all-stress-test/master/assets/preload-all.png.png" alt="Using PreloadAllModules"></a>

## License

MIT
