<script lang="ts">
  import Table from '@lanrenbang/basecoat-ultra-svelte/components/Table.svelte';
</script>

<Table>
  {#snippet header()}
    <tr>
      <th>User</th>
      <th>Status</th>
      <th>Role</th>
    </tr>
  {/snippet}
  {#snippet children()}
    <tr><td>Alice</td><td>Active</td><td>Admin</td></tr>
    <tr><td>Bob</td><td>Inactive</td><td>User</td></tr>
    <tr><td>Charlie</td><td>Active</td><td>Member</td></tr>
  {/snippet}
</Table>
