import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import PageHeader from '@/components/PageHeader'

export default function NotFound() {
  return (
    <PageHeader title="Page not found." note="That page does not exist or has moved.">
      <div className="mt-8 flex gap-3">
        <Button asChild><Link to="/">Go home</Link></Button>
        <Button asChild variant="outline"><Link to="/projects">View projects</Link></Button>
      </div>
    </PageHeader>
  )
}
