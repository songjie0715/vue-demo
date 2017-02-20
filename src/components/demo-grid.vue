<template>
    <table>
        <thead>
            <tr>
                <th v-for="col in columns"
                    @click="sortBy(col)"
                    :class="{'active': sortKey == col}">
                    {{ col }}
                    <span class="arrow" :class="sortList[col] > 0 ? 'asc' : 'dsc'"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in filteredData">
                <td v-for="i in item">{{ i }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
  export default {
      name: 'demo-grid',
      props: {
          filterData: Array,
          columns: Array,
          filterKey: String
      },
      data () {
          let sortList = {};
          this.columns.forEach(function (ele) {
              sortList[ele] = 1;
          });
          return {
              sortKey: '',
              sortList: sortList
          };
      },
      computed: {
          filteredData () {
              let sortKey = this.sortKey;
              let filterKey = this.filterKey;
              let order = this.sortList[sortKey] || 1;
              let filterData = this.filterData;

              if (filterKey) {
                  filterData = filterData.filter(function (item) {
                      return Object.keys(item).some(function (key) {
                          return String(item[key]).toLowerCase().indexOf(filterKey) > -1;
                      });
                  });
              };
              if (sortKey) {
                  filterData = filterData.slice().sort(function (a, b) {
                      a = a[sortKey];
                      b = b[sortKey];
                      return (a === b ? 0 : a > b ? 1 : -1) * order;
                  });
              };
              return filterData;
          }
      },
      methods: {
          sortBy (col) {
              this.sortKey = col;
              this.sortList[col] = this.sortList[col] * -1;
          }
      }
  };
</script>

<style>
    body {
      font-family: Helvetica Neue, Arial, sans-serif;
      font-size: 14px;
      color: #444;
    }

    table {
      border: 2px solid #42b983;
      border-radius: 3px;
      background-color: #fff;
    }

    th {
      background-color: #42b983;
      color: rgba(255,255,255,0.66);
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    td {
      background-color: #f9f9f9;
    }

    th, td {
      min-width: 120px;
      padding: 10px 20px;
    }

    th.active {
      color: #fff;
    }

    th.active .arrow {
      opacity: 1;
    }

    .arrow {
      display: inline-block;
      vertical-align: middle;
      width: 0;
      height: 0;
      margin-left: 5px;
      opacity: 0.66;
    }

    .arrow.asc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #fff;
    }
</style>


