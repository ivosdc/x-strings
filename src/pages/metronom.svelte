<script>
    import {Page, BlockTitle, Toolbar} from 'framework7-svelte';
    import Metronom from 'metronom-bpm/src/Metronom.svelte';
    import 'framework7-icons';


</script>

<Page name="metronom">
    <BlockTitle>Metronom</BlockTitle>
    <Toolbar top>
    </Toolbar>
    <div class="xstrings-block">
        <Metronom/>
    </div>
</Page>

<style>
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