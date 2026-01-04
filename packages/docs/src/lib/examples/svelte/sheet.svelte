<script lang="ts">
  import Sheet from '@lanrenbang/basecoat-ultra-svelte/components/Sheet.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';

  let leftOpen = $state(false);
  let rightOpen = $state(false);
  let topOpen = $state(false);
  let bottomOpen = $state(false);
</script>

<div class="flex flex-wrap gap-4">
  <Button variant="outline" onclick={() => leftOpen = true}>Left</Button>
  <Button variant="outline" onclick={() => rightOpen = true}>Right</Button>
  <Button variant="outline" onclick={() => topOpen = true}>Top</Button>
  <Button variant="outline" onclick={() => bottomOpen = true}>Bottom</Button>

  <Sheet bind:open={leftOpen} side="left" title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name" class="text-right text-sm">Name</label>
        <Input id="name" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username" class="text-right text-sm">Username</label>
        <Input id="username" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button onclick={() => leftOpen = false}>Save changes</Button>
    </div>
  </Sheet>
  <Sheet bind:open={rightOpen} side="right" title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name2" class="text-right text-sm">Name</label>
        <Input id="name2" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username2" class="text-right text-sm">Username</label>
        <Input id="username2" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button onclick={() => rightOpen = false}>Save changes</Button>
    </div>
  </Sheet>
  <Sheet bind:open={topOpen} side="top" title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name3" class="text-right text-sm">Name</label>
        <Input id="name3" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username3" class="text-right text-sm">Username</label>
        <Input id="username3" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button onclick={() => topOpen = false}>Save changes</Button>
    </div>
  </Sheet>
  <Sheet bind:open={bottomOpen} side="bottom" title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name4" class="text-right text-sm">Name</label>
        <Input id="name4" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username4" class="text-right text-sm">Username</label>
        <Input id="username4" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <div class="flex justify-end">
      <Button onclick={() => bottomOpen = false}>Save changes</Button>
    </div>
  </Sheet>
</div>