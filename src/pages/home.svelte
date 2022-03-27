<Page name="home">
  <Block strong>
    <div class="xstrings-tuner">
      <a href="https://gitarrenakkorde.org" target="_blank"><img src="static/gitarrenakkorde.png" alt="gitarrenakkorde.org"></a>
      <GuitarTuner></GuitarTuner>
      <a class="linkme" href="https://github.com/ivosdc/guitar-tuner" target="_blank">&lt;guitar-tuner/&gt;</a>
    </div>
  </Block>
</Page>
<script>
  import {Page, Block} from 'framework7-svelte';
  import GuitarTuner from 'guitar-tuner/src/GuitarTuner.svelte';
  import 'framework7-icons';

  function exit() {
    navigator.app.exitApp();
    window.close();
  }

</script>
<style>
  .linkme {
      color: #6e6e6e;
      font-size: x-small;
  }

  .xstrings-tuner {
    background-color: #1A1A1A;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>