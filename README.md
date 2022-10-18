# Buto-Plugin-WfBootstrapjs
Create modals with Javascript. Works for Bootstrap 3 and 4.
- Modals has to be closed with a button click.
- Multiple modals are supported.

## Widget
Include in head.
```
type: widget
data:
  plugin: wf/bootstrapjs
  method: include
```
## Open modal
```
PluginWfBootstrapjs.modal({});
```
id.
```
{id: 'my_modal'}
```
Label.
```
{label: 'My modal'}
```
Size (sm, lg, xl).
```
{size: 'sm'}
```
Url (add content to body).
```
{url: '/_some_/_url_'}
```
Reload button.
```
{btn_reload: true}
```
Content.
```
{content: 'Some content...'}
```
Body.
Add content to body.
```
document.getElementById('my_modal_body').innerHTML='Add some content!';
```
Add content to body using PluginWfDom.
```
PluginWfDom.render([{type: 'div', innerHTML: [{type: 'strong', innerHTML: 'Date'}, {type: 'div', innerHTML: '2001-01-01'}]}], 'my_modal_body');
```
## Jquery
Hide all modals.
```
$('.modal').modal('hide');
```
Hide by id.
```
$('#element_id').modal('hide');
```
