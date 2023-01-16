function test(arg: unknown) {
    if (arg instanceof HTMLInputElement) {
        arg.value = (3).toString();
    }
}
