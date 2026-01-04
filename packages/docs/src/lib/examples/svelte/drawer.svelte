<script lang="ts">
  import Drawer from '@lanrenbang/basecoat-ultra-svelte/components/Drawer.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';

  let open = $state(false);
  let goal = $state(350);
</script>

<div>
  <Button variant="outline" onclick={() => open = true}>Open Drawer</Button>

  <Drawer bind:open title="Move Goal" description="Set your daily activity goal.">
    <div class="p-4 pb-0">
      <div class="flex items-center justify-center space-x-2">
        <Button variant="outline" icon class="rounded-full" onclick={() => goal = Math.max(0, goal - 10)} aria-label="Decrease">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
        </Button>
        <div class="flex-1 text-center">
          <div class="text-7xl font-bold tracking-tighter">{goal}</div>
          <div class="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
        </div>
        <Button variant="outline" icon class="rounded-full" onclick={() => goal += 10} aria-label="Increase">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </Button>
      </div>
    </div>
    <div class="mt-auto flex flex-col gap-2 p-4">
      <Button variant="primary" onclick={() => open = false}>Submit</Button>
      <Button variant="outline" onclick={() => open = false}>Cancel</Button>
    </div>
  </Drawer>
</div>
