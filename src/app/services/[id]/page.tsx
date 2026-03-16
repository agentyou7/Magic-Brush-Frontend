
import ServiceDetail from '@/components/ServiceDetail';
import { SERVICES } from '@/constants';

export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        id: service.id,
    }));
}

export default function ServiceDetailPage() {
    return <ServiceDetail />;
}
