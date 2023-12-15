import React, { useState, Fragment } from "react";
import Select from "react-select";
import CustomGroup from "./CustomGroup";
import Disabling from "./Disabling";
import CustomClearIndicator from "./MultiSelect";
import PageTitle from "../../../layouts/PageTitle";

const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry" },
   { value: "vanilla", label: "Vanilla" },
];

const Select2 = () => {
   const [selectedOption, setSelectedOption] = useState(null);

   return (
      <Fragment>
         <PageTitle activeMenu="Select2" motherMenu="Components" />

         <div className="row">
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Single select boxes</h4>
                        <p>
                           Select2 can take a regular select box like this...
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Multi-select boxes</h4>
                        <p>
                           Select2 also supports multi-value select boxes. The
                           select below is declared with the multiple
                           <mark className="text-primary">attribute</mark>.
                        </p>
                     </div>

                     <CustomClearIndicator></CustomClearIndicator>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Dropdown option groups</h4>
                        <p>
                           In HTML, <code> &lt;option&gt;</code> elements can be
                           grouped by wrapping them with in <br /> a
                           <code>&lt;optgroup&gt;</code>
                           element:
                        </p>
                     </div>

                     <CustomGroup></CustomGroup>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Disabling options</h4>
                        <p>
                           Select2 will correctly handle disabled options when
                           <code>disabled</code> attribute is set) and from
                           remote srouces where the object has
                           <code>disabled: true</code> set.
                        </p>
                     </div>

                     <Disabling></Disabling>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Disabling a Select2 control
                        </h4>
                        <p>
                           Select2 will respond to the <code>disabled</code>
                           attribute on
                           <code>&lt;select&gt;</code> elements. You can also
                           initialize Select2 with
                           <code>disabled: true</code> to get the same effect.
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                     <br />
                     <CustomClearIndicator></CustomClearIndicator>
                     <br />
                     <button
                        className="btn btn-primary mr-2"
                        id="js-programmatic-enable"
                     >
                        Enable
                     </button>
                     <button
                        className="btn btn-primary"
                        id="js-programmatic-disable"
                     >
                        Disable
                     </button>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Select2 With Labels</h4>
                        <p>
                           You can, and should, use a <code>&lt;label&gt;</code>
                           with Select2, just like any other
                           <code>&lt;select&gt;</code> element.
                        </p>
                     </div>

                     <label
                        className="mb-4 select2-label"
                        htmlFor="id_label_single"
                     >
                        Click this to highlight the single select element <br />
                        <Select
                           defaultValue={selectedOption}
                           onChange={setSelectedOption}
                           options={options}
                           style={{
                              lineHeight: "40px",
                              color: "#7e7e7e",
                              paddingLeft: " 15px",
                           }}
                        />
                     </label>

                     <label
                        className="select2-label"
                        htmlFor="id_label_multiple"
                     >
                        Click this to highlight the multiple select element
                        <br />
                        <CustomClearIndicator></CustomClearIndicator>
                        <br />
                     </label>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Container Width</h4>
                        <p>
                           The two Select2 boxes below are styled to
                           <code>50%</code> and <code>75%</code> width
                           respectively to support responsive design:
                        </p>
                     </div>

                     <div className="mb-3">
                        <Select
                           defaultValue={selectedOption}
                           onChange={setSelectedOption}
                           options={options}
                           style={{
                              lineHeight: "40px",
                              color: "#7e7e7e",
                              paddingLeft: " 15px",
                           }}
                        />
                     </div>
                     <div className="mb-3">
                        <CustomClearIndicator></CustomClearIndicator>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Themes</h4>
                        <p>
                           Select2 supports custom themes using the
                           <code>theme</code> option so you can style Select2 to
                           match the rest of your application.
                        </p>
                     </div>

                     <div className="mb-4">
                        <Select
                           defaultValue={selectedOption}
                           onChange={setSelectedOption}
                           options={options}
                           style={{
                              lineHeight: "40px",
                              color: "#7e7e7e",
                              paddingLeft: " 15px",
                           }}
                        />
                     </div>

                     <div className="">
                        <CustomClearIndicator></CustomClearIndicator>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Ajax (remote data)</h4>
                        <p>
                           Select2 comes with AJAX support built in, using
                           jQuery's AJAX methods. In this example, we can search
                           for repositories using GitHub's API:
                        </p>
                     </div>

                     <Select
                        isClearable
                        // components={{ NoOptionsMessage }}
                        // styles={{ NoOptionsMessage: base => ({ ...base, ...msgStyles }) }}
                        isSearchable
                        name="color"
                        options={[]}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Loading array data</h4>
                        <p>
                           You may use the <code>data</code> configuration
                           option to load dropdown options from a local array.
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Automatic Selection</h4>
                        <p>
                           Select2 can be configured to automatically select the
                           currently highlighted result when the dropdown is
                           closed by using the <code>selectOnClose</code>
                           option:
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Remain open after selection
                        </h4>
                        <p>
                           Select2 will automatically close the dropdown when an
                           element is selected, similar to what is done with a
                           normal select box. You may use the
                           <code>closeOnSelect</code> option to prevent the
                           dropdown from closing when a result is selected:
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Dropdown placement</h4>
                        <p>
                           The <code>dropdownParent</code> option allows you to
                           pick an alternative element for the dropdown to be
                           appended to:
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                     <div id="select2-modal"></div>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Limiting the number of selections
                        </h4>
                        <p>
                           Select2 multi-value select boxes can set restrictions
                           regarding the maximum number of options that can be
                           selected. The select below is declared with the
                           <code>multiple</code> attribute with
                           <code>maximumSelectionLength</code> in the select2
                           options.
                        </p>
                     </div>

                     <CustomClearIndicator></CustomClearIndicator>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Dynamic option creation</h4>
                        <p>
                           In addition to a prepopulated menu of options,
                           Select2 can dynamically create new options from text
                           input by the user in the search box. This feature is
                           called "tagging". To enable tagging, set the
                           <code>tags</code> option to
                           <code>true</code>:
                        </p>
                     </div>
                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Tagging with multi-value select boxes
                        </h4>
                        <p>
                           Tagging can also be used in multi-value select boxes.
                           In the example below, we set the
                           <code>multiple="multiple"</code> attribute on a
                           Select2 control that also has <code>tags: true</code>
                           enabled:
                        </p>
                     </div>

                     <CustomClearIndicator></CustomClearIndicator>
                  </div>
               </div>
            </div>

            <div className="col-xl-4">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Single select placeholders
                        </h4>
                        <p>
                           Select2 supports displaying a placeholder value using
                           the
                           <code>placeholder</code> configuration option. The
                           placeholder value will be displayed until a selection
                           is made.
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-4">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Multi-select placeholders
                        </h4>
                        <p>
                           For multi-selects, you must <strong>not</strong> have
                           an empty
                           <code>&lt;option&gt;</code>element:
                        </p>
                     </div>

                     <CustomClearIndicator></CustomClearIndicator>
                  </div>
               </div>
            </div>

            <div className="col-xl-4">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Default selection placeholders
                        </h4>
                        <p>
                           Alternatively, the value of the
                           <code>placeholder</code> option can be a data object
                           representing a default selection (
                           <code>&lt;option&gt;</code>). In this case the
                           <code>id</code> of the data object should match the
                           <code>value</code> of the corresponding default
                           selection.
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Customizing how results are matched
                        </h4>
                        <p>
                           When users filter down the results by entering search
                           terms into the search box, Select2 uses an internal
                           "matcher" to match search terms to results. You may
                           customize the way that Select2 matches search terms
                           by specifying a callback for the <code>matcher</code>
                           configuration option.
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Matching grouped options</h4>
                        <p>
                           Only first-level objects will be passed in to the
                           <code>matcher</code> callback. If you are working
                           with nested data, you must iterate through the
                           <code>children</code> array and match them
                           individually. This allows for more advanced matching
                           when working with nested objects, allowing you to
                           handle them however you want.
                        </p>
                     </div>

                     <CustomGroup></CustomGroup>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Minumum search term length
                        </h4>
                        <p>
                           You may set a minimum search term length by using the
                           <code>minimumInputLength</code> option:
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Maximum search term length
                        </h4>
                        <p>
                           You may limit the maximum length of search terms by
                           using the
                           <code>maximumInputLength</code> option:
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Programmatically add new options
                        </h4>
                        <p>
                           New options can be added to a Select2 control
                           programmatically by creating a new Javascript
                           <code>Option</code> object and appending it to the
                           control:
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Create if not exists</h4>
                        <p>
                           You can use <code>.find</code> to select the option
                           if it already exists, and create it otherwise:
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Using jQuery selector</h4>
                        <p>
                           Selected items can also be accessed via the
                           <code>:selected</code> jQuery selector:
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">RTL support</h4>
                        <p>
                           Select2 will work on RTL websites if the
                           <code>dir</code> attribute is set on the
                           <code>&lt;select&gt;</code>
                           <span
                              className="copy-to-clipboard"
                              title="Copy to clipboard"
                           ></span>
                           or any parents of it. You can also initialize Select2
                           with the <code>dir: "rtl"</code>
                           <span
                              className="copy-to-clipboard"
                              title="Copy to clipboard"
                           ></span>
                           configuration option.
                        </p>
                     </div>

                     <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        style={{
                           lineHeight: "40px",
                           color: "#7e7e7e",
                           paddingLeft: " 15px",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="col-xl-4">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Destroying the Select2 control
                        </h4>
                        <p>
                           The <code>destroy</code> method will remove the
                           Select2 widget from the target element. It will
                           revert back to a standard <code>select</code>
                           control:
                        </p>
                     </div>

                     <div className="mb-4">
                        <Select
                           defaultValue={selectedOption}
                           onChange={setSelectedOption}
                           options={options}
                           style={{
                              lineHeight: "40px",
                              color: "#7e7e7e",
                              paddingLeft: " 15px",
                           }}
                        />
                     </div>
                     <button
                        id="destroy-selector-trigger"
                        className="btn btn-primary"
                     >
                        Destroy Select2
                     </button>
                  </div>
               </div>
            </div>

            <div className="col-xl-4">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Opening the dropdown</h4>
                        <p>
                           Select2 will trigger a few different events when
                           different actions are taken using the component,
                           allowing you to add custom hooks and perform actions.
                        </p>
                     </div>

                     <div className="mb-4">
                        <Select
                           defaultValue={selectedOption}
                           onChange={setSelectedOption}
                           options={options}
                           style={{
                              lineHeight: "40px",
                              color: "#7e7e7e",
                              paddingLeft: " 15px",
                           }}
                        />
                     </div>
                     <button
                        id="dropdown-trigger-open"
                        className="btn btn-primary"
                     >
                        Open Dropdown
                     </button>
                  </div>
               </div>
            </div>

            <div className="col-xl-4">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">
                           Opening/Closing the dropdown
                        </h4>
                        <p>
                           Select2 will trigger a few different events when
                           different actions are taken using the component,
                           allowing you to add custom hooks and perform actions.
                        </p>
                     </div>
                     <button
                        onClick={() => (
                           <Select
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              style={{
                                 lineHeight: "40px",
                                 color: "#7e7e7e",
                                 paddingLeft: " 15px",
                              }}
                           />
                        )}
                        id="opening-dropdown-trigger"
                        className="btn btn-primary mr-2 mb-2"
                     >
                        Open Dropdown
                     </button>
                     <button
                        id="closing-dropdown-trigger"
                        className="btn btn-primary mb-2"
                     >
                        Close Dropdown
                     </button>
                     <div className="mt-4">
                        <Select
                           defaultValue={selectedOption}
                           onChange={setSelectedOption}
                           options={options}
                           style={{
                              lineHeight: "40px",
                              color: "#7e7e7e",
                              paddingLeft: " 15px",
                           }}
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Select2 methods</h4>
                        <p>
                           Select2 has several built-in methods that allow
                           programmatic control of the component.
                        </p>
                     </div>
                     <label className="select2-label">Single select</label>
                     <br />
                     <button
                        className="js-programmatic-set-val btn btn-primary mb-2 mr-1"
                        aria-label="Set Select2 option"
                     >
                        Set "California"
                     </button>
                     <button className="js-programmatic-open btn btn-primary mb-2 mr-1">
                        Open
                     </button>
                     <button className="js-programmatic-close btn btn-primary mb-2 mr-1">
                        Close
                     </button>
                     <button className="js-programmatic-destroy btn btn-primary mb-2 mr-1">
                        Destroy
                     </button>
                     <button className="js-programmatic-init btn btn-primary mb-2 mr-1">
                        Re-initialize
                     </button>
                     <div className="mt-4">
                        <Select
                           defaultValue={selectedOption}
                           onChange={setSelectedOption}
                           options={options}
                           style={{
                              lineHeight: "40px",
                              color: "#7e7e7e",
                              paddingLeft: " 15px",
                           }}
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-body">
                     <div className="mb-4">
                        <h4 className="card-title">Select2 methods</h4>
                        <p>
                           Select2 has several built-in methods that allow
                           programmatic control of the component.
                        </p>
                     </div>
                     <label className="select2-label">Multiple select</label>
                     <br />
                     <button
                        className="js-programmatic-multi-set-val btn btn-primary mb-2 mr-1"
                        aria-label="Set Select2 option"
                     >
                        Set to Hawaii and California
                     </button>
                     <button className="js-programmatic-multi-clear btn btn-primary mb-2 mr-1">
                        Clear
                     </button>
                     <div className="mt-4">
                        <CustomClearIndicator></CustomClearIndicator>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Select2;
