/**
*
* DepartmentList
*
*/

import React, { PropTypes } from 'react';
import './style.scss';

class DepartmentList extends React.Component {
  static propTypes = {
    department: PropTypes.shape({}).isRequired,
    selectSection: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  // state = {};

  componentWillReceiveProps() {
    // this.state.sections = nextProps.department[0].sections;
  }

  filterSections = (event, department) => {
    let updatedSections = department.sections;
    updatedSections = updatedSections.filter((section) =>
      section.content.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1
    );
    this.setState({ sections: updatedSections });
    updatedSections.length > 0 ? this.setState({ epmtySections: false }) : this.setState({ epmtySections: true });
  }

  renderEmptySection = () => (
    <div className="col-sm-12 p-3">
      <h2 className="t-uppercase t-center p-3">
        No result found
      </h2>
    </div>
  );

  renderSection = (department) => {
    const sections = this.state.sections || department.sections;
    if (sections.length === 0) {
      return (
        <div> empty</div>
      );
    }
    return sections.map((section) => {
      const onClickFn = () => {
        this.props.selectSection(department.slug, section.id, department.floor.slug);
      };
      return (<div key={section.id} className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
        <button
          className="t-underline--fancy-hover section"
          onClick={onClickFn}
        >
          <h4>{section.content.name}</h4>
        </button>
      </div>);
    });
  }

  renderDepartment = (department) => (
    <div key={department.name}>
      <div className="my-3 row">
        <div className="col-sm-6 py-2">
          <h2 className="t-left t-uppercase headings-1">{department.name}</h2>
          <h3 className="t-left t-uppercase headings-1">{department.store.name}</h3>
        </div>
        <div className="col-sm-6 py-2">
          <form className="form-group col-xs-6">
            <input
              type="text"
              className="form-control mr-2 mb-2"
              onChange={(event) => this.filterSections(event, department)}
              placeholder="Search for brand"
            />
          </form>
        </div>
      </div>
      <div className="my-3 row">
        {this.state.epmtySections ? this.renderEmptySection() : this.renderSection(department)}
      </div>
    </div>
  );

  render() {
    const { department } = this.props;
    return (
      <div className="depaetment-list-container ">
        {department.name ? this.renderDepartment(department) : ''}
      </div>
    );
  }
}


export default DepartmentList;
