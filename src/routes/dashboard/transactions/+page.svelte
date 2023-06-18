<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
  
    let searchTerm = '';
    let items = [
    { type: 'Debit Card', description: 'Online Purchase', date: '2023-06-15', amount: 100, status: 'success' },
    { type: 'Bank Transfer', description: 'Education Loan', date: '2023-06-16', amount: 50, status: 'pending' },
    { type: 'Wire', description: 'Utility Bill', date: '2023-06-17', amount: 75, status: 'failed' },
    { type: 'Debit Card', description: 'Grocery Shopping', date: '2023-06-18', amount: 200, status: 'success' },
    { type: 'Bank Transfer', description: 'Rent Payment', date: '2023-06-19', amount: 150, status: 'success' },
    { type: 'Wire', description: 'Travel Booking', date: '2023-06-20', amount: 80, status: 'pending' },
    { type: 'Debit Card', description: 'Online Subscription', date: '2023-06-21', amount: 300, status: 'failed' }
  ];
  
    $: filteredItems = items.filter(
      (item) => item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  
    const getStatusColor = (status: string) => {
      if (status === 'success') {
        return 'green';
      } else if (status === 'failed') {
        return 'red';
      } else if (status === 'pending') {
        return 'orange';
      }
      return '';
    };
  </script>
  <div class="h-screen w-full">
  <TableSearch placeholder="Search by description" hoverable={true} bind:inputValue={searchTerm}>
    <TableHead>
      <TableHeadCell>Date</TableHeadCell>
      <TableHeadCell>Type</TableHeadCell>
      <TableHeadCell>Description</TableHeadCell>
      <TableHeadCell>Amount</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
    </TableHead>
    <TableBody>
      {#each filteredItems as item}
        <TableBodyRow>
          <TableBodyCell>{item.date}</TableBodyCell>
          <TableBodyCell>{item.type}</TableBodyCell>
          <TableBodyCell>{item.description}</TableBodyCell>
          <TableBodyCell>{item.amount}</TableBodyCell>
          <TableBodyCell>
            <button class="px-2 rounded first-letter:uppercase" style="color: white; background-color: {getStatusColor(item.status)};">
              {item.status}
            </button>
          </TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </TableSearch>
</div>