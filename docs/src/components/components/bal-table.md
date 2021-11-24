---
sidebarDepth: 0
---

# Table




<ClientOnly><docs-component-tabs></docs-component-tabs></ClientOnly>


## Examples

### Basic

The basic table is only css and html provided by the bulma framework.

[Go to the Bulma documentation](https://bulma.io/documentation/elements/table/)

<ClientOnly><docs-demo-bal-table-104></docs-demo-bal-table-104></ClientOnly>


### Advanced with AG-Grid

<Content slot-key="bal-table-ag-grid" ></Content>
<ClientOnly><docs-demo-bal-table-105></docs-demo-bal-table-105></ClientOnly>



## Code

<!-- START: human documentation code -->

To use the AG-Grid install the following packages:

```bash
npm install --save @baloise/design-system-components-table ag-grid-community
```

Next we need to link the stylesheet into our global scss file.

```scss
@import 'node_modules/@baloise/design-system-components-table/scss';
```

The package has three render functions.

#### BalTableButtonRenderer

Renders a button into the grid.

```typescript
import { BalTableButtonRenderer } from '@baloise/design-system-components-table'

...
{
  field: 'button',
  sortable: true,
  filter: true,
  cellRenderer: BalTableButtonRenderer({
    expanded: true,
    icon: 'github',
  }),
},
...
```

The `BalTableButtonRenderer` takes the option object `BalTableButtonRendererOptions` as a parameter.

```typescript
interface BalTableButtonRendererOptions {
  color?: (params: ICellRendererParams) => ColorTypes
  loading?: (params: ICellRendererParams) => boolean
  href?: (params: ICellRendererParams) => string
  icon?: string
  iconRight?: boolean
  square?: boolean
  expanded?: boolean
  outlined?: boolean
  link?: boolean
  target?: '_blank' | ' _parent' | '_self' | '_top'
}
```

#### BalTableTagRenderer

Renders a tag element into the grid.

```typescript
import { BalTableTagRenderer } from '@baloise/design-system-components-table'

...
{
  field: 'tag',
  sortable: true,
  filter: true,
  cellRenderer: BalTableTagRenderer({
    color: params => (params.value === 'Invalid' ? 'danger' : 'success'),
  }),
},
...
```

The `BalTableTagRenderer` takes the option object `BalTableTagRendererOptions` as a parameter.

```typescript
interface BalTableTagRendererOptions {
  color?: (params: ICellRendererParams) => ColorTypes
}
```

#### BalTableTextRenderer

Renders a text into the grid.

```typescript
import { BalTableTextRenderer } from '@baloise/design-system-components-table'

...
{
  field: 'textWithIcon',
  sortable: true,
  filter: true,
  cellRenderer: BalTableTextRenderer({
    icon: params => 'github',
    iconColor: params => 'primary',
  }),
},
...
```

The `BalTableTextRenderer` takes the option object `BalTableTextRendererOptions` as a parameter.

```typescript
interface BalTableTextRendererOptions {
  color?: (params: ICellRendererParams) => ColorTypes
  icon?: (params: ICellRendererParams) => string
  iconColor?: (params: ICellRendererParams) => ColorTypes
  iconRight?: (params: ICellRendererParams) => boolean
}
```

#### Further integrations

::: danger <img src="https://angular.io/assets/images/logos/angular/angular.svg" data-origin="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" style="width: 32px">Angular

To use AG-Grid with angular install the package `ag-grid-angular`

```bash
npm install --save ag-grid-angular
npm install # in certain circumstances npm will perform an "auto prune". This step ensures all expected dependencies are | present
```

After installing the AG-Grid add the component in our html component file.

```html
<ag-grid-angular
  class="ag-theme-alpine"
  style="width: 100%; height: 400px"
  [rowData]="rowData"
  [columnDefs]="columnDefs"
  (gridReady)="onGridReady($event)"
>
</ag-grid-angular>
```

Define the `columnDefs` and `rowData` as described in the AG-Grid documentation. Moreover, if your table has 100% of width it is helpful to use the `gridApi.sizeColumnsToFit()` function to resize the table.

```typescript
import { GridApi, ColumnApi } from 'ag-grid-community'

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
})
export class TablePageComponent {
  private gridApi!: GridApi
  private gridColumnApi!: ColumnApi

  columnDefs = [...]
  rowData = [...]

  constructor(private router: Router) {}

  // every time the window gets resized the chart width gets adjusted if 100%.
  onGridReady(params: { api: GridApi }) {
    this.gridApi = params.api
    this.gridApi.sizeColumnsToFit()
    window.addEventListener('resize', () => {
      setTimeout(() => this.gridApi.sizeColumnsToFit())
    })
  }
}
```

**Links**

- [More documentation to AG-Grid with Angular](https://www.ag-grid.com/angular-grid/getting-started/)
- [Example implementation](https://github.com/baloise/design-system/tree/master/examples/angular)

:::

<!-- END: human documentation code -->

### Properties


| Attribute    | Description                          | Type                 | Default            |
| :----------- | :----------------------------------- | :------------------- | :----------------- |
| **expanded** | If `true` the table has a full width | <code>boolean</code> | <code>false</code> |

## Testing

The Baloise Design System provides a collection of custom cypress commands for our components. Moreover, some basic cypress commands like `should` or `click` have been overriden to work with our components.

- [More information about the installation and usage](/components/tooling/testing.html)



## Edit this page on Github

* [Documentation on Github](https://github.com/baloise/design-system/blob/master/docs/src/components/components/bal-table.md)
* [Implementation on Github](https://github.com/baloise/design-system/blob/master/packages/components/src/components/bal-table)

## Feedback

Help us improve this component by providing feedback, asking questions, and leaving any other comments on [GitHub](https://github.com/baloise/design-system/issues/new).


<ClientOnly>
  <docs-component-script tag="balTable"></docs-component-script>
</ClientOnly>

<!-- START: human documentation slots -->

:::: slot bal-table-ag-grid

::::

<!-- END: human documentation slots -->