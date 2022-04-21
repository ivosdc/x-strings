<script>
  import {Page, BlockTitle, Toolbar, Button, Link} from 'framework7-svelte';
  import GuitarTuner from 'guitar-tuner/src/GuitarTuner.svelte';
  import 'framework7-icons';

  let mute = false;

  function toggleMicrophone() {
    mute = !mute;
  }

  let chamber_pitch = 440;

  function pitchUp() {
    chamber_pitch++;
  }

  function pitchDown() {
    chamber_pitch--;
  }

  function drawCanvas(ctx, pitch, note, detune) {
    ctx.fillStyle = "rgb(166, 166, 166)";
    ctx.font = "12px Arial";
    ctx.fillText(chamber_pitch + ' Hz', 3, 14);
    ctx.fillText(pitch, 3, 26);
    ctx.font = "28px Arial";
    ctx.fillText(note, (width / 2) - 10, 30);
    let color = Math.abs(detune) * 10 > 255 ? 255 : Math.abs(detune) * 10;
    ctx.strokeStyle = "rgb(" + color + ", 0, 0)";
    ctx.beginPath();
    ctx.moveTo((width / 2), height - 5);
    let scale = Math.abs(detune) > 5 ? 2 : 1;
    ctx.lineTo((width / 2) + detune * scale, height - 5);
    ctx.lineTo((width / 2) + detune * scale, height - 15);
    ctx.lineTo((width / 2), height - 15);
    ctx.lineTo((width / 2), height - 5);
    ctx.stroke();
    ctx.closePath();
    ctx.fillStyle = "rgb(" + color + ", 0, 0)";
    ctx.fill();
  }

  let min_signal = 0.01;
  let threshold = 0.00625;
  function setMinSignal() {
  }
  function setThreshold() {
  }

</script>

<Page name="tuner">
  <BlockTitle>Guitar Tuner</BlockTitle>
  <Toolbar top>
    <Link>
      <Link on:click={pitchDown}><i class="f7-icons">arrowtriangle_down</i></Link>
      {chamber_pitch} Hz
      <Link on:click={pitchUp}><i class="f7-icons">arrowtriangle_up</i></Link>
    </Link>
    <Link on:click={toggleMicrophone}><i class="f7-icons">{mute ? 'mic_slash' : 'mic'}</i></Link>
  </Toolbar>
  <div class="xstrings-block">
    <div class="tuner-logo">
      <div class="guitar-logo">
      </div>
      <div class="guitar-tuner">
        <GuitarTuner {mute} {chamber_pitch} {threshold} {min_signal} {drawCanvas}/>
      </div>
      <div class="xstrings-logo">
      </div>
    </div>
    <p id="min-signal" class="min-signal">Min.Signal:<input bind:value={min_signal} type="range" min="0.001" max="0.1" step="0.001" class="slider" id="min-signal-slider"><span id="min-signal-value">{min_signal}</span></p>
    <p id="threshold" class="threshold">Threshold:<input bind:value={threshold} type="range" min="0.00005" max="0.025" step="0.00005" class="slider" id="threshold-slider"><span id="threshold-value">{threshold}</span></p>
  </div>


</Page>

<style>

  .guitar-logo {
    width: 110px;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 0.5em;
  }

  .xstrings-logo {
    width: 110px;
    display: flex;
    flex-direction: row;
  }

  .tuner-logo {
    display: flex;
    padding-top: 0.5em;
    align-items: center;
  }

  .xstrings-block {
    background-color: #1A1A1A;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
</style>