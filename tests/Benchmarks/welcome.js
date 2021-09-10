import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const response = http.get('http://localhost');
    check(response, {
        'is status 200': (r) => r.status === 200,
    });
}
