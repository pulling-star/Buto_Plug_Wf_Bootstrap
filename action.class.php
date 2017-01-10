<?php
/**
<p>
Javascript to extend Bootstrap.
</p>
#code-javascript#
//Modal example:
PluginWfBootstrapjs.modal({id: 'modal_001', size: 'sm'});
PluginWfBootstrapjs.modal({id: 'modal_002', url: '/editor/plugin', lable: 'Plugin'});
#code#
#code-javascript#
//Panel example:
PluginWfBootstrapjs.panel({lable: 'Headline', content: 'Some content', parent: document.body});
#code#
 */
class PluginWfBootstrapjs{
  /**
  <p>
  Including js in html/head section.
  </p>
  */
  public static function widget_include(){
    $element = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wf/bootstrapjs/include.js?t='.wfFilesystem::getFiletime(wfArray::get($GLOBALS, 'sys/web_dir').'/plugin/wf/bootstrapjs/include.js')));
    wfDocument::renderElement(array($element));
  }
}