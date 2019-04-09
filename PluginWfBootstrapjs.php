<?php
class PluginWfBootstrapjs{
  public static function widget_include(){
    $element = wfDocument::createHtmlElement('script', null, array('src' => '/plugin/wf/bootstrapjs/include.js?t='.wfFilesystem::getFiletime(wfArray::get($GLOBALS, 'sys/web_dir').'/plugin/wf/bootstrapjs/include.js')));
    wfDocument::renderElement(array($element));
  }
}
