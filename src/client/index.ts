let state = false;

/** Bind the F2 key to toggle the cursor */
mp.keys.bind(0x71, false, () => {
    state = !state;
    mp.gui.cursor.show(state, state);
});
