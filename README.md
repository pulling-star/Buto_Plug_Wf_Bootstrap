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


## Javascript
```
PluginWfBootstrapjs.modal({id: 'modal_001', size: 'sm'});
PluginWfBootstrapjs.modal({id: 'modal_002', url: '/editor/plugin', label: 'Plugin'});
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
