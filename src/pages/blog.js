import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {/* <p>My cool posts will be here</p> */}
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`;

export default BlogPage;