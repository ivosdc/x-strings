<script>
    import {Page, Block} from 'framework7-svelte';
    import GuitarTuner from 'guitar-tuner/src/GuitarTuner.svelte';
    import Chords from './chords/Chords.svelte';
    import 'framework7-icons';

</script>

<Page name="home">
    <Block strong>
        <div class="xstrings-block">
            <GuitarTuner/>
            <br />
            <div class="xstrings-chord">
                <Chords/>
            </div>
        </div>
    </Block>
</Page>

<style>

    .xstrings-block {
        width: 50px;
        height: 60px;
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