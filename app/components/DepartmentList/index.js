/**
*
* DepartmentList
*
*/

import React, { PropTypes } from 'react';
import './style.scss';

class DepartmentList extends React.Component {
  static propTypes = {
    department: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };
  // constructor(props) {
  //   super(props);
  // }

  state = {};

  filterSections = (event, department) => {
    let updatedSections = department.sections;
    updatedSections = updatedSections.filter((section) => {
      const item = section.brand ? section.brand.name : section.type;
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ sections: updatedSections });
    // updatedSections ? this.setState({ epmtySections: false }) : this.setState({ epmtySections: true });
  }

  renderEmptySection = () => (
    <div className="col-sm-12 p-3">
      <h4 className="t-uppercase">
        No result
      </h4>
    </div>
  );

  renderSection = (department) => {
    const sections = this.state.sections ? this.state.sections : department.sections;
    return sections.map((section) => (
      <div key={section.id} className="col-sm-3 p-3">
        <div className="t-underline--fancy-hover pointer">
          {section.brand ? section.brand.name : section.type}
        </div>
      </div>
    ));
  }

  renderDepartment = (department) =>
    department.map((d) => (
      <div key={d.name}>
        <div className="my-3 row">
          <div className="col-sm-6 py-2">
            <h2 className="t-left t-uppercase headings-1">{d.name}</h2>
            <h3 className="t-left t-uppercase headings-1">{d.store.name}</h3>
          </div>
          <div className="col-sm-6 py-2">
            <form className="form-group col-xs-6">
              <input
                type="text"
                className="form-control mr-2 mb-2"
                onChange={(event) => this.filterSections(event, d)}
                placeholder="Search for brand"
              />
            </form>
          </div>
        </div>
        <div className="my-3 row justify-content-center">
          { this.renderSection(d) }
          {/* {this.state.epmtySections ? this.renderEmptySection() : this.renderSection(d)} */}
        </div>
      </div>
    )
  );

  render() {
    const { department } = this.props;

    return (
      <div className="m-3 p-3">
        {this.renderDepartment(department)}
      </div>
    );
  }
}


export default DepartmentList;
