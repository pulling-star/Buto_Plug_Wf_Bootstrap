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


## Usage
### Create one
```
PluginWfBootstrapjs.modal({id: 'my_modal'});
```
### Label
```
PluginWfBootstrapjs.modal({id: 'my_modal', label: 'My modal'});
```
### Size
```
PluginWfBootstrapjs.modal({id: 'my_modal', size: 'sm'});
```
### Url
```
PluginWfBootstrapjs.modal({id: 'my_modal', url: '/_some_/_url_'});
```
Reload button.
```
PluginWfBootstrapjs.modal({id: 'my_modal', url: '/_some_/_url_', btn_reload: true});
```
### Content
```
PluginWfBootstrapjs.modal({id: 'my_modal', content: 'Some content...'});
```
Add content.
```
document.getElementById('my_modal_body').innerHTML='Add some content!';
```
Add content with PluginWfDom.
```
PluginWfDom.render([{type: 'div', innerHTML: [{type: 'strong', innerHTML: 'Date'}, {type: 'div', innerHTML: '2001-01-01'}]}], 'my_modal_body');
```


### Jquery
Hide all modals.
```
$('.modal').modal('hide');
```
Hide by id.
```
$('#element_id').modal('hide');
```
