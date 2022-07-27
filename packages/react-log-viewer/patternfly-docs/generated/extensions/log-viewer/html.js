import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import '../../../content/extensions/log-viewer/html/./LogViewer.css';
const pageData = {
  "id": "Log viewer",
  "section": "extensions",
  "source": "html",
  "slug": "/extensions/log-viewer/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/packages/react-log-viewer/patternfly-docs/content/extensions/log-viewer/html/LogViewer.md",
  "beta": true,
  "cssPrefix": [
    "pf-c-log-viewer"
  ]
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"basic","size":"h3","className":"ws-title ws-h3"}}>
      {`Basic`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-basic-example\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px\"'}}\n  {{> __log-viewer-toolbar menu--IsHidden=\"true\"}}\n  {{> __log-viewer-main}}\n{{/log-viewer}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"with-line-numbers","size":"h3","className":"ws-title ws-h3"}}>
      {`With line numbers`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-line-number-example\" log-viewer--HasLineNumbers=\"true\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px\"'}}\n  {{> __log-viewer-toolbar menu--IsHidden=\"true\"}}\n  {{> __log-viewer-main}}\n{{/log-viewer}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"with-text-wrapping","size":"h3","className":"ws-title ws-h3"}}>
      {`With text wrapping`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-text-wrap-example\" log-viewer--HasLineNumbers=\"true\" log-viewer--TextWraps=\"true\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px\"'}}\n  {{> __log-viewer-toolbar menu--IsHidden=\"true\"}}\n  {{> __log-viewer-main}}\n{{/log-viewer}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"without-text-wrapping","size":"h3","className":"ws-title ws-h3"}}>
      {`Without text wrapping`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-text-nowrap-example\" log-viewer--HasLineNumbers=\"true\" log-viewer--NoWrap=\"true\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px\"'}}\n  {{> __log-viewer-toolbar menu--IsHidden=\"true\"}}\n  {{> __log-viewer-main}}\n{{/log-viewer}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"with-search-results","size":"h3","className":"ws-title ws-h3"}}>
      {`With search results`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-search-results-example\" log-viewer--HasLineNumbers=\"true\" log-viewer--IsMatch=\"true\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px;\"'}}\n  {{> __log-viewer-toolbar menu--IsHidden=\"true\"}}\n  {{> __log-viewer-main}}\n{{/log-viewer}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"with-max-height","size":"h3","className":"ws-title ws-h3"}}>
      {`With max height`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-max-height-example\" log-viewer--HasLineNumbers=\"true\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px; --pf-c-log-viewer--MaxHeight: 300px;\"'}}\n  {{> __log-viewer-toolbar menu--IsHidden=\"true\"}}\n  {{> __log-viewer-main}}\n{{/log-viewer}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"with-dropdown-drilldown-search-expanded","size":"h3","className":"ws-title ws-h3"}}>
      {`With dropdown, drilldown, search expanded`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-dropdowns-expanded-example\" log-viewer--HasLineNumbers=\"true\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px\"'}}\n  {{> __log-viewer-toolbar dropdown--IsExpanded=\"true\"}}\n  {{> __log-viewer-main}}\n{{/log-viewer}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"with-popover-open","size":"h3","className":"ws-title ws-h3"}}>
      {`With popover open`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-popover-expanded-example\" log-viewer--HasLineNumbers=\"true\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px\"'}}\n  {{> __log-viewer-toolbar menu--IsHidden=\"true\"}}\n  {{> __log-viewer-main}}\n{{/log-viewer}}\n{{#> popover popover--modifier=\"pf-m-bottom\" popover--attribute='aria-labelledby=\"popover-bottom-header\" aria-describedby=\"popover-bottom-body\"'}}\n  {{#> popover-content}}\n      {{#> button button--modifier=\"pf-m-plain\" button--attribute='aria-label=\"Close\"'}}\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      {{/button}}\n      {{#> title titleType=\"h1\" title--modifier=\"pf-m-md\" title--attribute='id=\"popover-bottom-header\"'}}\n        Clear this log?\n      {{/title}}\n    {{#> popover-body popover-body--attribute='id=\"popover-bottom-body\"'}}\n      Any current log data will be lost.\n    {{/popover-body}}\n    {{#> popover-footer}}\n      {{#> button button--modifier=\"pf-m-link\"}}\n        Clear\n      {{/button}}\n      {{#> button button--modifier=\"pf-m-link\"}}\n        Cancel\n      {{/button}}\n    {{/popover-footer}}\n  {{/popover-content}}\n{{/popover}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"dark","size":"h3","className":"ws-title ws-h3"}}>
      {`Dark`}
    </AutoLinkHeader>
    <Example {...{"code":"{{#> log-viewer log-viewer--id=\"log-viewer-line-number-example\" log-viewer--IsMatch=\"true\" log-viewer--modifier=\"pf-m-dark\" log-viewer--HasLineNumbers=\"true\" log-viewer--attribute='style=\"--pf-c-log-viewer__index--Width: 75px\"'}}\n  {{> __log-viewer-toolbar menu--IsHidden=\"true\"}}\n  {{> __log-viewer-main}}\n  {{#> button button--modifier=\"pf-m-primary\"}}Jump to the bottom{{/button}}\n{{/log-viewer}}","lang":"hbs"}}>
    </Example>
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"accessibility","size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Attribute`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-label="Log viewer"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Provides an accessible label for the log viewer.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`role="log"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__main`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Identifies an element that creates a live region where new information is added in a meaningful order and old information may disappear. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-live="polite"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Allows assistive technologies to automatically read new content within the aria-live region on the place where the text is displayed.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-atomic="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Allows assistive technologies to notify a user when log messages are added.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`tabindex="0"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Inserts the element into the tab order of the page so that it is focusable. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Attribute"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`aria-hidden="true"`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__index`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Hides an index from assistive technologies.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Class`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a log viewer. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__header`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the header container for a log viewer. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__main`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the main container for a log viewer. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__scroll-container`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the scroll container for a log viewer. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__list`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<ul>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates the log viewer list. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__list-item`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<li>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a log viewer list item. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__index`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a log viewer index element. `}
              <strong>
                {`Required for numbered list`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a log viewer text element. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__string`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a log viewer string element.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__timestamp`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<div>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a log viewer text element. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-wrap-text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the log viewer text to wrap.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-nowrap`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the log viewer text to not wrap.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-line-numbers`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the log viewer to display line numbers.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-dark`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the log viewer content for dark theme.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-match`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__string`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a string is a search result.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-current`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer__string`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Indicates a string is the current search result.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`--pf-c-log-viewer--MaxHeight{-on-[breakpoint]}: {height}`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-log-viewer`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the height value of a log viewer at optional `}
              <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables#breakpoint-variables-and-class-suffixes"}}>
                {`breakpoint`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ExtensionsLogViewerHtmlDocs';
Component.pageData = pageData;

export default Component;
