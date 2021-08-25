import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../keys';
import Response from '../Response';

function Search({ results }) {

  const router = useRouter();

  // console.log(results)
  return (
    <div>
      <Head>
        <title>{router.query.term}-Google Search</title>      
      </Head>

      {/* Header */}
      <Header />
      {/* Search resut */}
      <SearchResults results={results}/>

    </div>
      )
}

export default Search;

export async function getServerSideProps (context){

  const startIndex = context.query.start || "0";

  const  useDummyData = false;
  const data= useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then((response) => response.json());

    // pass the results to the client after server rendering
    return {props:{
        results: data
      }
    }
}
