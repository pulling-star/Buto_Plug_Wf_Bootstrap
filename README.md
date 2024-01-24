# Buto-Plugin-WfBootstrapjs

<ul>
<li>Create modals with Javascript. Works for Bootstrap 4 and 5.</li>
<li>Create alert.</li>
<li>Create confirm.</li>
</ul>

<a name="key_0"></a>

## Widgets



<a name="key_0_0"></a>

### include

<ul>
<li>Include javascript.</li>
<li>Run i18n.</li>
<li>Add style (IE fix).</li>
</ul>
<p>Include in head.</p>
<pre><code>type: widget
data:
  plugin: wf/bootstrapjs
  method: include</code></pre>

<a name="key_1"></a>

## Methods



<a name="key_1_0"></a>

### get_i18n

<p>Translations.</p>

<a name="key_2"></a>

## Usage



<a name="key_2_0"></a>

### Modal

<p>Open modal.</p>
<pre><code>PluginWfBootstrapjs.modal({});</code></pre>
<p>id.</p>
<pre><code>id: 'my_modal'</code></pre>
<p>Label.</p>
<pre><code>label: 'My modal'</code></pre>
<p>Size
Size (sm, lg, xl).</p>
<pre><code>size: 'sm'</code></pre>
<p>Url.
Url (add content to body).</p>
<pre><code>url: '/_some_/_url_'</code></pre>
<p>Reload.
Reload button.</p>
<pre><code>btn_reload: true</code></pre>
<p>Content.
Text.
Content form text.</p>
<pre><code>content: 'Some content...'</code></pre>
<p>Body.
Add content to body element.</p>
<pre><code>document.getElementById('my_modal_body').innerHTML='Add some content!';</code></pre>
<p>Dom.
Add content to body using PluginWfDom.</p>
<pre><code>PluginWfDom.render([{type: 'div', innerHTML: [{type: 'strong', innerHTML: 'Date'}, {type: 'div', innerHTML: '2001-01-01'}]}], 'my_modal_body');</code></pre>
<p>Backdrop.
Set backdrop to false (default true) to be able to close modal when click besides.</p>
<pre><code>backdrop: true</code></pre>
<p>Body background.
Set body background using Bootstrap bg-(name) (optional).</p>
<pre><code>body_bg: 'light'</code></pre>
<p>Jquery.
Hide all modals.</p>
<pre><code>$('.modal').modal('hide');</code></pre>
<p>Hide by id.</p>
<pre><code>$('#element_id').modal('hide');</code></pre>

<a name="key_2_1"></a>

### Alert

<pre><code>PluginWfBootstrapjs.alert('My alert text...');</code></pre>

<a name="key_2_2"></a>

### Confirm

<pre><code>function delete(any_data){
  PluginWfBootstrapjs.confirm({content: 'My confirm text...', method: function(){delete_confirmed();}, data: any_data });
}
function delete_confirmed(any_data){
  if(PluginWfBootstrapjs.confirm_data.ok){
    console.log('do something...');
  }
}</code></pre>

