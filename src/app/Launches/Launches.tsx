import * as React from 'react';
import { useState, Suspense } from 'react';
import debounce from 'lodash/debounce';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import LaunchesList from './LaunchesList';
import {
  WithStyles,
  InputBase,
  createStyles,
  Theme,
  withStyles
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ReactPaginate from 'react-paginate';

export interface Props extends WithStyles<typeof styles> {}

const limit = 5;
function Launches({ classes, match }: Props & RouteComponentProps) {
  const [name, setName] = useState('');
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const setNameDebounced = debounce(name => setName(name), 300);

  return (
    <Container>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          onChange={event => {
            setOffset(0);
            setNameDebounced(event.target.value);
          }}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
      <ContainerLaunches>
        <Suspense fallback={null}>
          <LaunchesList
            name={name}
            limit={limit}
            offset={offset}
            match={match}
            setTotalCount={setTotalCount}
          />
        </Suspense>
      </ContainerLaunches>
      {!!totalCount && (
        <div>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            pageCount={Math.ceil(totalCount / limit)}
            onPageChange={({ selected }) => setOffset(selected * limit)}
            activeClassName={'active'}
          />
          <span>Total count: {totalCount}</span>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
const ContainerLaunches = styled.div`
  height: 180px;
`;

const styles = (theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      marginTop: '20px',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%',
      marginBottom: '40px',
      [theme.breakpoints.up('sm')]: {
        width: '50%',
        left: '25%'
      }
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      width: '50%'
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200
        }
      }
    }
  });

export default withStyles(styles)(Launches);
