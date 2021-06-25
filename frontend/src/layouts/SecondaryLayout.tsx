import React, { Fragment } from 'react';

interface ISecondaryLayout {
    children?: React.ReactNode;
}

const SecondaryLayout: React.FC<{}> = ({children}: ISecondaryLayout) => {
  return (
    <Fragment>
        <div>Test layout</div>
        <div>
            {children}
        </div>
    </Fragment>
  )
}

export default SecondaryLayout;