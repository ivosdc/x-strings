<script>
    import {Page, Block, Toolbar, Link} from 'framework7-svelte';
    import GuitarTuner from 'guitar-tuner/src/GuitarTuner.svelte';
    import Chords from './chords/Chords.svelte';
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
</script>

<Page name="home">
    <Block strong>
        <div class="xstrings-block">
            <GuitarTuner {mute} {chamber_pitch}/>
            <br/>
            <Chords/>
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
    .xstrings-chord {
    }

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