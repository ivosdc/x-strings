<script>
    import {Page, Block, Toolbar, Link} from 'framework7-svelte';
    import GuitarTuner from 'guitar-tuner/src/GuitarTuner.svelte';
    import GuitarChords from 'guitar-chords-viewer/src/GuitarChords.svelte';
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
</script>

<Page name="home">
    <Block strong>
        <div class="xstrings-block">
            <div>
                <img src="static/x-strings-guitar.png" height="50" alt="X-Strings">
                <img src="static/x-strings-font.png" height="50" alt="X-Strings">
            </div>
            <p class="text">Guitar-Tuner</p>
            <GuitarTuner {mute} {chamber_pitch} {drawCanvas}/>
            <p class="text">Chord-Overview</p>
            <GuitarChords/>
        </div>
    </Block>
    <Toolbar bottom>
        <Link>
            <Link on:click={pitchDown}><i class="f7-icons">arrowtriangle_down</i></Link>
            {chamber_pitch} Hz
            <Link on:click={pitchUp}><i class="f7-icons">arrowtriangle_up</i></Link>
        </Link>
        <Link on:click={toggleMicrophone}><i class="f7-icons">{mute ? 'mic_slash' : 'mic'}</i></Link>
    </Toolbar>
</Page>

<style>
    .xstrings-block {
        background-color: #1A1A1A;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>