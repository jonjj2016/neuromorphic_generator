import chroma from 'chroma-js';
const detectDirection = (current, list) => {

    if (current === list[0]) return ['+', '+', '-', '-'];
    if (current === list[1]) return ['-', '+', '+', '-'];
    if (current === list[2]) return ['+', '-', '-', '+'];
    if (current === list[3]) return ['-', '-', '+', '+'];
}

export default detectDirection

export const defineShades = (color, intensity) => {
    let dark = chroma.rgb(...chroma(color).darken(intensity)._rgb).hex();
    let light = chroma.rgb(chroma(color).brighten(intensity)._rgb).hex();
    return [light, dark]
}
export const isDark = (color) => {
    const isDark = chroma(color).luminance() < .15;
    if (isDark) return `#eee`
    return "#555"
}

export const compose_shadow = (state) => {
    const dir_sign = detectDirection(state.current_direction, state.directions);
    const shades = chroma.scale(['#ffffff', state.color, '#222222']).colors(12);
    const shades2 = chroma.scale([state.color]).colors(2);

    let a = (chroma(state.color).darken(state.intensity)._rgb);
    let b = (chroma(state.color).brighten(state.intensity)._rgb);

    let colors = [chroma.rgb(...b).hex(), chroma.rgb(...a).hex()];

    let box_shadow

    if (state.shape == 1) {

        box_shadow = `${dir_sign[0] + state.distance}px ${dir_sign[1] + state.distance}px ${state.blure}px ${colors[1]},${dir_sign[2] + state.distance}px ${dir_sign[3] + state.distance}px ${state.blure}px ${colors[0]}`;
    } else if (state.shape == 2) {
        box_shadow = `${dir_sign[0] + state.distance}px ${dir_sign[1] + state.distance}px ${state.blure}px ${colors[1]},${dir_sign[2] + state.distance}px ${dir_sign[3] + state.distance}px ${state.blure}px ${colors[0]},inset ${dir_sign[0] + state.distance-5}px ${dir_sign[1] + state.distance-5}px ${state.blure}px ${colors[1]}, inset ${dir_sign[2] + state.distance-5}px ${dir_sign[3] + state.distance-5}px ${state.blure}px ${colors[0]}`;
    } else if (state.shape == 3) {
        box_shadow = `${dir_sign[0] + state.distance}px ${dir_sign[1] + state.distance}px ${state.blure}px ${colors[1]},${dir_sign[2] + state.distance}px ${dir_sign[3] + state.distance}px ${state.blure}px ${colors[0]}`;
    } else if (state.shape == 4) {
        box_shadow = `inset ${dir_sign[0] + state.distance}px ${dir_sign[1] + state.distance}px ${state.blure}px ${colors[1]}, inset ${dir_sign[2] + state.distance}px ${dir_sign[3] + state.distance}px ${state.blure}px ${colors[0]}`;

    }
    return box_shadow

}