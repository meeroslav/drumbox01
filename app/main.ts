import './sass/base.scss';

import Machine from './Machine';

/**
 * Entry point for the drum machine
 */

declare const webkitAudioContext: {
    new (): AudioContext;
};

let audioContext;

if ('webkitAudioContext' in window) {
    audioContext = new webkitAudioContext();
} else {
    audioContext = new AudioContext();
}

const tempo: number = 80;
const machine = new Machine(audioContext, tempo);

machine.addChannel('kick', {
  frequency: 105,
  oscAmpAttack: 0,
  oscAmpDecay: 0.630,
  oscPitchAttack: 0,
  oscPitchDecay: 0.380,
  noiseLevel: 0,
  oscLevel: 1.0,
  level: 0.8,
}, '1001001101000100');

machine.addChannel('snare', {
  frequency: 800,
  noiseLevel: 0.35,
  noiseAttack: 0,
  noiseDecay: 0.37,
  oscLevel: 0,
  level: 0.8,
}, '0000100000001000');

machine.addChannel('hat', {
  frequency: 1500,
  noiseLevel: 0.3,
  oscLevel: 0,
  noiseAttack: 0,
  noiseDecay: 0.15,
  channelFilterFreq: 15000,
  channelFilterGain: 10,
}, '0010001000100010');

machine.addChannel('tom', {
  frequency: 100,
  noiseLevel: 0.0,
  oscLevel: 0.3,
  wave: 'triangle',
  oscPitchAttack: 0,
  oscPitchDecay: 4,
  oscAmpAttack: 0,
  oscAmpDecay: 4,
}, '1001001101000100');

machine.init();